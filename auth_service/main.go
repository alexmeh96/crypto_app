package main

import (
	"fmt"
	"github.com/gorilla/sessions"
	"github.com/rs/cors"
	"net/http"
)

var sessionStore = sessions.NewCookieStore([]byte("SESSION_KEY"))
var store = Store{}
var auth = Auth{}

func main() {
	mux := http.NewServeMux()

	sessionStore.Options.HttpOnly = true

	mux.HandleFunc("GET /api/nonce", makeHTTPHandleFunc(auth.getNonce))
	mux.HandleFunc("POST /api/signin", makeHTTPHandleFunc(auth.signIn))
	mux.HandleFunc("GET /api/signout", withAuth(makeHTTPHandleFunc(auth.signOut)))

	mux.HandleFunc("GET /api/info-without-login", makeHTTPHandleFunc(auth.getInfoWithoutLogin))
	mux.HandleFunc("GET /api/info", withAuth(makeHTTPHandleFunc(auth.getInfo)))
	// 	mux.HandleFunc("POST /api/paid", withAuth(makeHTTPHandleFunc(auth.updatePaid)))
	mux.HandleFunc("POST /api/paid", makeHTTPHandleFunc(auth.updatePaidWithoutLogin))

	//handler := cors.Default().Handler(mux)

	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000", "https://adaptivebrc20.com"},
		AllowCredentials: true,
		//Debug:            true,
	})

	handler := c.Handler(mux)

	fmt.Println("server started on 8085")
	http.ListenAndServe(":8085", handler)
}
