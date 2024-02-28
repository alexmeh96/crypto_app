package main

import (
	"bufio"
	"fmt"
	"os"
)

func getWallets() (string, error) {

	return "", nil
}

func getWallet(address string) (string, bool, error) {
	f, err := os.Open(fileName)

	if err != nil {
		return "", false, err
	}

	defer f.Close()

	acc := fmt.Sprintf("%s false", address)
	paidAcc := fmt.Sprintf("%s true", address)

	scanner := bufio.NewScanner(f)
	for scanner.Scan() {
		if scanner.Text() == acc {
			return address, false, nil
		} else if scanner.Text() == paidAcc {
			return address, true, nil
		}
	}

	if err := scanner.Err(); err != nil {
		return "", false, err
	}

	return "", false, nil
}

// todo: предоьвратить имеющую запись
func saveWallet(address string) error {
	f, err := os.OpenFile(fileName, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	if err != nil {
		return err
	}

	defer f.Close()

	if _, err := f.WriteString(fmt.Sprintf("%s %t\n", address, false)); err != nil {
		return err
	}

	return nil
}

func updateWallet(address string, isPaid bool) error {
	//file, err := os.OpenFile(fileName, os.O_RDWR, 0644)
	//if err != nil {
	//	return err
	//}
	//defer file.Close()
	//
	//scanner := bufio.NewScanner(file)
	//for scanner.Scan() {
	//	line := scanner.Text()
	//
	//	if strings.Contains(line, address) {
	//		line = fmt.Sprintf("%s %t\n", address, isPaid)
	//		return nil
	//	}
	//}
	//
	return fmt.Errorf("wallet %s not found", address)
}
