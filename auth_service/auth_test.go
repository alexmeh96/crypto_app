package main

import "testing"

var testStore = Store{}

func TestSaveAddress(t *testing.T) {
	testStore.saveWallet("aaa")
	testStore.saveWallet("ccc")
	testStore.saveWallet("ddd")
}

func TestContainAddress(t *testing.T) {
	walletInfo, err := testStore.getWallet("aaa")
	if err != nil {
		panic("error")
	}
	println(walletInfo)
}

func TestUpdatePaid(t *testing.T) {
	err := testStore.updateWallet("ccc", true)
	if err != nil {
		panic("error")
	}
}
