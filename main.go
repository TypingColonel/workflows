package main

import (
	"io"
	"log"
	"net/http"
)

func main() {

	res, err := http.Get("http://localhost:3000")

	if err != nil {
		panic(err)
	}

	defer res.Body.Close()

	x, err := io.ReadAll(res.Body)

	log.Println(string(x))
}
