package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

const fileName = "wallets.txt"

type Store struct{}

func (s *Store) getWallets() (string, error) {

	return "", nil
}

func (s *Store) getWallet(address string) (*Wallet, error) {
	f, err := os.Open(fileName)

	if err != nil {
		return nil, err
	}

	defer f.Close()

	acc := fmt.Sprintf("%s false", address)
	paidAcc := fmt.Sprintf("%s true", address)

	scanner := bufio.NewScanner(f)

	for scanner.Scan() {
		if scanner.Text() == acc {
			return &Wallet{address, false}, nil
		} else if scanner.Text() == paidAcc {
			return &Wallet{address, true}, nil
		}
	}

	if err := scanner.Err(); err != nil {
		return nil, err
	}

	return nil, nil
}

func (s *Store) saveWallet(address string) error {
	file, err := os.OpenFile(fileName, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	if err != nil {
		return err
	}

	defer file.Close()

	if _, err := file.WriteString(fmt.Sprintf("%s %t\n", address, false)); err != nil {
		return err
	}

	return nil
}

func (s *Store) updateWallet(address string, isPaid bool) error {
	file, err := os.OpenFile(fileName, os.O_RDWR, 0644)
	if err != nil {
		return err
	}

	defer file.Close()

	var lines []string
	var found bool

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		line := scanner.Text()
		if strings.Contains(line, address) {
			found = true
			line = fmt.Sprintf("%s %t", address, isPaid) // Update the line content
		}

		lines = append(lines, line)
	}

	if !found {
		return fmt.Errorf("wallet %s not found", address)
	}

	// Truncate the file and write the updated content
	file.Truncate(0)
	file.Seek(0, 0)
	writer := bufio.NewWriter(file)
	for _, line := range lines {
		fmt.Fprintln(writer, line)
	}
	writer.Flush()

	return nil
}
