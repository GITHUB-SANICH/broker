//let num = 100500;
//let notif = ' команда "npm run start - запущена"';
//console.log(`Число: ${num + notif}`);

/*
3-й урок
const convert = require('currency-converter-lt')
let currencyConverter = new convert({ from: "USD", to: "EUR", amount: 100 })

currencyConverter.convert().then((response) => {
	console.log(`Rsult: ${response}`)
})
*/
/*
4-й урок
const os = require('os')
const my_math = require('./my_math.js')
let res = os.platform()
console.log(res)

let math1 = my_math.add(5, 5)
let math2 = my_math.minus(10, 5)
console.log(`Result-1: ${math1}, Result-2: ${math2}`)
*/
/*
5-й урок
const fs = require('fs')
//let readSync = fs.readFileSync('some.txt', 'utf-8')
fs.readFile('some.txt', 'utf-8', (err, data) => {
	fs.writeFile('some.txt', data + '\nPushed text in file', (err, data) => {
		console.log('Чтение и запись файла выполнены!')
	})
})
//console.log(`Текст сообщения: ${read}`)
*/

/*
6-й урок
const fs = require('fs')
//fs.mkdirSync('text-files')
//fs.mkdir('text-files', () => {
//	fs.writeFile('./text-files/some.txt', 'Файлс создан+', () => { })
//})
fs.unlink('./text-files/some.txt', () => {
	fs.rmdir('./text-files', () => {
		console.log('Папка и файл удалены')
	})
})
*/

/*
7-й урок
const http = require('http')
let server = http.createServer((req, res) => {
	res.writeHead('200', { 'Content-Type': 'text/html; charset=utf-8' })
	res.end(`<!DOCTYPE html>
		<html lang="en">
		
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Node.js - уроки</title>
		</head>
		
		<body>
			<h1>Выводимый HTML на странице</h1>
		</body>
		
		</html>`)
})

const PORT = 3000
const HOST = 'localhost'

server.listen(PORT, HOST, () => {
	console.log(`Сервер запущен: http://${HOST}:${PORT}`)
})
*/

/*
8-й урок
const http = require('http')
const fs = require('fs')
let server = http.createServer((req, res) => {
	res.writeHead('200', { 'Content-Type': 'text/html; charset=utf-8' })
	if (req.url == '/') {
		fs.createReadStream('./templates/index.html').pipe(res)
	} else if (req.url == '/about') {
		fs.createReadStream('./templates/about.html').pipe(res)
	} else {
		fs.createReadStream('./templates/error.html').pipe(res)
	}

	//const stream = fs.createReadStream('./templates/index.html')
	//stream.pipe(res)
})

const PORT = 3000
const HOST = 'localhost'

server.listen(PORT, HOST, () => {
	console.log(`Сервер запущен: http://${HOST}:${PORT}`)
})
*/

/*
9-й урок
*/
const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.send('Выводимый текст через Express: главная страницы')
})

app.get('/about', (req, res) => {
	res.send('Выводимый текст через Express: про нас')
})

app.get('/user/:username/:id', (req, res) => {
	res.send(`User ID: ${req.params.id}. User name: ${req.params.username}`)
})

const PORT = 3000
app.listen(PORT, () => {
	console.log(`Сервер запущен по адресу: http://localhost:${PORT}`)
})

/*
10-й урок
*/

/*
11-й урок
*/

/*
12-й урок
*/

/*
13-й урок
*/