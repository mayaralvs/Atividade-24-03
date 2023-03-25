import express from "express"
//const express = require('express')
const app = express()
const port = 3000

class Pessoa{
    constructor(nome, email, idade, hobbies){
        this.nome = nome
        this.email = email
        this.idade = idade
        this.hobbies = hobbies

    }
}

const pessoa1 = new Pessoa ("Mayara", 
"mayara-lima02@outlook.com", 
"29", ["Lutar Kung Fu","comer"])


const pessoa2 = new Pessoa("Bruno", 
"bruno@fatec.sp.gov.br", 
"20", ["Fazer bolo", "Alimentar a Mayara"])

const pessoa3 = new Pessoa("Maria",
"maria@outlook.com", "33", ["dormir","andar de bike"]
)



app.get('/hobbies',(req,res)=>{

    res.send([pessoa1, pessoa2, pessoa3])
    
})



app.listen(port,() =>{
    console.log('App executando na porta ' + port)
})

