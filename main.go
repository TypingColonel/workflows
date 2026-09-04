package main

import (
	"log"
	"net/http"
)

func main() {

	res, err := http.Get("localhost:3000")

	if err != nil {
		panic(err)
	}

	log.Println(res.Body)
}
