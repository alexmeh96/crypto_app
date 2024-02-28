package main

import (
	"encoding/json"
	"errors"
	"github.com/spruceid/siwe-go"
	"net/http"
	"strconv"
)

type signInParams struct {
	Message   string `json:"message"`
	Signature string `json:"signature"`
}

func signIn(w http.ResponseWriter, r *http.Request) error {
	var data signInParams
	if err := json.NewDecoder(r.Body).Decode(&data); err != nil {
		return err
	}

	siweMessage, err := siwe.ParseMessage(data.Message)
	if err != nil {
		return err
	}

	session, _ := store.Get(r, "sessionId")
	nonce := session.Values["nonce"]

	if siweMessage.GetNonce() != nonce {
		return errors.New("message nonce doesn't match")
	}

	if _, err := siweMessage.VerifyEIP191(data.Signature); err != nil {
		return err
	}

	err = saveWallet(siweMessage.GetAddress().String())
	if err != nil {
		return err
	}

	session.Values["address"] = siweMessage.GetAddress().String()
	session.Values["authenticated"] = true

	if err := session.Save(r, w); err != nil {
		return err
	}

	return WriteJSON(w, http.StatusOK, nil)
}

func signOut(w http.ResponseWriter, r *http.Request) error {
	session, _ := store.Get(r, "sessionId")
	session.Values["authenticated"] = false
	delete(session.Values, "address")

	if err := session.Save(r, w); err != nil {
		return err
	}
	return WriteJSON(w, http.StatusOK, nil)
}

func updatePaid(w http.ResponseWriter, r *http.Request) error {
	session, _ := store.Get(r, "sessionId")
	address := session.Values["address"].(string)

	addr, _, err := getWallet(address)
	if err != nil {
		return err
	}

	if addr != "" {
		err := updateWallet(address, true)
		if err != nil {
			return err
		}
	}

	return WriteText(w, http.StatusOK, "")
}

func getInfo(w http.ResponseWriter, r *http.Request) error {
	session, _ := store.Get(r, "sessionId")
	address := session.Values["address"].(string)

	_, isPaid, err := getWallet(address)
	if err != nil {
		return err
	}

	return WriteText(w, http.StatusOK, strconv.FormatBool(isPaid))
}

func getNonce(w http.ResponseWriter, r *http.Request) error {
	nonce := siwe.GenerateNonce()

	session, _ := store.Get(r, "sessionId")
	session.Values["nonce"] = nonce

	if err := session.Save(r, w); err != nil {
		return err
	}

	return WriteText(w, http.StatusOK, nonce)
}
