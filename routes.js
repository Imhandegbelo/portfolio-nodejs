var url = require('url')
var fs = require('fs')
const { request } = require('http')

function renderHTML(path, response) {
  fs.readFile(path, null, (error, data) => {
    if (error) {
      response.writeHead(404)
      response.write('Oops! File not found')
      console.log(error)
    } else {
      response.write(data)
    }
    response.end()
  })
}

module.exports = {
  requestHandler: (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    var path = url.parse(req.url).pathname

    // renderHTML();

    if (path === '/' || path === '/home') {
      renderHTML('./home.html', res)
    } 
    else 
      if (path === '/contact') {
        renderHTML('./contact.html', res)
    } 
    else 
      if (path === '/about') {
        renderHTML('./about.html', res)
    } 
    else {
      res.writeHead(404)
      res.write('Oops! You seem lost. Go back home')
      res.end()
    }
  }
}