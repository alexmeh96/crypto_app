package main

import "testing"

func TestSaveAddress(t *testing.T) {
	saveWallet("aaa1")
	saveWallet("welcome2")
}

func TestContainAddress(t *testing.T) {
	address, isPaid, _ := getWallet("aaa1")
	if address == "" {
		panic("error")
	}
	println(isPaid)
}

func TestUpdatePaid(t *testing.T) {
	err := updateWallet("aaa1", true)
	if err != nil {
		panic("error")
	}
}
