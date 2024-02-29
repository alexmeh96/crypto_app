package main

import (
	"encoding/json"
	"errors"
	"github.com/spruceid/siwe-go"
	"net/http"
	"sync"
)

type signInParams struct {
	Message   string `json:"message"`
	Signature string `json:"signature"`
}

type Wallet struct {
	Address string `json:"address"`
	Paid    bool   `json:"paid"`
}

type Auth struct {
	mu sync.RWMutex
}

func (a *Auth) signIn(w http.ResponseWriter, r *http.Request) error {
	var data signInParams
	if err := json.NewDecoder(r.Body).Decode(&data); err != nil {
		return err
	}

	siweMessage, err := siwe.ParseMessage(data.Message)
	if err != nil {
		return err
	}

	session, _ := sessionStore.Get(r, "sessionId")
	nonce := session.Values["nonce"]

	if siweMessage.GetNonce() != nonce {
		return errors.New("message nonce doesn't match")
	}

	if _, err := siweMessage.VerifyEIP191(data.Signature); err != nil {
		return err
	}

	a.mu.Lock()
	walletInfo, err := store.getWallet(siweMessage.GetAddress().String())
	if err != nil {
		a.mu.Unlock()
		return err
	}
	if walletInfo == nil {
		if err = store.saveWallet(siweMessage.GetAddress().String()); err != nil {
			a.mu.Unlock()
			return err
		}

		walletInfo = &Wallet{
			Address: siweMessage.GetAddress().String(),
			Paid:    false,
		}
	}
	a.mu.Unlock()

	session.Values["address"] = siweMessage.GetAddress().String()
	session.Values["authenticated"] = true

	if err := session.Save(r, w); err != nil {
		return err
	}

	return WriteJSON(w, http.StatusOK, walletInfo)
}

func (a *Auth) signOut(w http.ResponseWriter, r *http.Request) error {
	session, _ := sessionStore.Get(r, "sessionId")
	session.Values["authenticated"] = false
	delete(session.Values, "address")

	if err := session.Save(r, w); err != nil {
		return err
	}
	return WriteJSON(w, http.StatusOK, nil)
}

func (a *Auth) updatePaid(w http.ResponseWriter, r *http.Request) error {
	session, _ := sessionStore.Get(r, "sessionId")
	address := session.Values["address"].(string)

	a.mu.Lock()
	if err := store.updateWallet(address, true); err != nil {
		a.mu.Unlock()
		return err
	}
	a.mu.Unlock()

	return WriteText(w, http.StatusOK, "")
}

func (a *Auth) getInfo(w http.ResponseWriter, r *http.Request) error {
	session, _ := sessionStore.Get(r, "sessionId")
	address := session.Values["address"].(string)

	a.mu.RLock()
	walletInfo, err := store.getWallet(address)
	a.mu.RUnlock()
	if err != nil {
		return err
	}

	return WriteJSON(w, http.StatusOK, walletInfo)
}

func (a *Auth) getNonce(w http.ResponseWriter, r *http.Request) error {
	nonce := siwe.GenerateNonce()

	session, _ := sessionStore.Get(r, "sessionId")
	session.Values["nonce"] = nonce

	if err := session.Save(r, w); err != nil {
		return err
	}

	return WriteText(w, http.StatusOK, nonce)
}
