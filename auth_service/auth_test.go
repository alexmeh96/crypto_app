package main

import "testing"

func TestSaveAddress(t *testing.T) {
	save("aaa")
	save("welcome")
}

func TestContainAddress(t *testing.T) {
	b, _ := contain("bbb")
	println(b)
}
wealcom
