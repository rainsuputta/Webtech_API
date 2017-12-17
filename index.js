const express = require('express')
const app = express.Router()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

var contacts = [
    {id: 0, name: 'Suputta', surname: 'Kamwang', email: '57160245@go.buu.ac.th', phone: '123-456-7890', url: 'www.google.com', notes: 'Winter is coming.'},
    {id: 1, name: 'Adisak', surname: 'Poungmanee', email: '57660120@go.buu.ac.th', phone: '094-694-9240', url: 'www.google.com', notes: 'Reluctant to pay iron price.'},
    {id: 2, name: 'Supareak', surname: 'Sangnaul', email: '57660013@go.buu.ac.th', phone: '123-456-7890', url: 'www.google.com', notes: 'Loyal brother of the watch.'},
    {id: 3, name: 'Phongsatorn', surname: 'Poapan', email: '58160576@go.buu.ac.th', phone: '123-456-7890', url: 'www.google.com', notes: 'Knows nothing.'},
  ]

  // get contacts all
app.get('/contacts', (req, res) => {
    res.json(contacts)
})

// create new contact
app.post('/contacts',(req,res) => {
    contacts.push(req.body)
    res.json("Create new contact")
})

// get contact information
app.get('/contacts/:id', (req, res) => {
    let flag = true
    for (let i = 0; i < contacts.length; i++) {
        if(req.params.id == contacts[i].id){
            flag = false
            res.json(contacts[i])
        }  
    }
    if(flag){
        res.json("Don't success")
    }
})


//update contact information
app.put('/contacts/:id',(req,res)=>{
    let flag = true
    for (let i = 0; i < contacts.length; i++) {
        if(req.params.id == contacts[i].id){
            flag = false
            contacts[i] = req.body
            res.json("Update contact information")
        }
    }
    if(flag){
        res.json("Don't Success")
    }

})

// remove contact from list
app.delete('/contacts/:id',(req,res)=>{
    let flag = true
    for (let i = 0; i < contacts.length; i++) {
        if(req.params.id == contacts[i].id){
            flag = false
            contactList.splice(i,1)
            res.json("Remove contact from list")
        }
    }
    if(flag){
        res.json("Don't Success")
    }
})


// search contact by name
app.get('/contacts/:name', (req, res) => {
    let flag = true
    for (let i = 0; i < contacts.length; i++) {
        if(req.params.name == contacts[i].name){
            flag = false
            res.json(contacts[i])
        } 
    }
    if(flag){
        res.json("Not found contacts")
    }
})

 
module.exports = app
