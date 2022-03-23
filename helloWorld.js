//console.log('hello world')

const myName = 'Corbin'

// console.log(myName)

// using let here because age will change
let age = 23

// console.log(age)

let isCool = true

let nothing = null

let height = undefined

// console.log(height)

height = `5' 6"`

// console.log(height)

let x = 4
let y = 10
let z = 7 + 8

let sum = x + y + z

// console.log(sum)

let str1 = "string"
let str2 = 'string'
let str3 = `string`

let firstName = 'corbin'
let lastName = 'steig'

let greeting = "Hello, " + firstName + ' ' + lastName

let greeting2 = `Hello, ${firstName} ${lastName}`

// console.log(greeting2)

const readline = require('readline')

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  reader.question("Howdy, what's your name?", function(answer){
    console.log("Hi, " + answer)
    reader.close()  
  })