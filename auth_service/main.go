package main

import (
	"fmt"
	"github.com/gorilla/sessions"
	"github.com/rs/cors"
	"net/http"
)

var store = sessions.NewCookieStore([]byte("SESSION_KEY"))

const fileName = "wallets.txt"

func main() {
	mux := http.NewServeMux()

	store.Options.HttpOnly = true

	mux.HandleFunc("GET /api/nonce", makeHTTPHandleFunc(getNonce))
	mux.HandleFunc("POST /api/signin", makeHTTPHandleFunc(signIn))
	mux.HandleFunc("GET /api/info", withAuth(makeHTTPHandleFunc(getInfo)))
	mux.HandleFunc("POST /api/paid", withAuth(makeHTTPHandleFunc(updatePaid)))
	mux.HandleFunc("GET /api/signout", withAuth(makeHTTPHandleFunc(signOut)))

	//handler := cors.Default().Handler(mux)

	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000"},
		AllowCredentials: true,
		//Debug:            true,
	})

	handler := c.Handler(mux)

	fmt.Println("server started on 8085")
	http.ListenAndServe(":8085", handler)
}
