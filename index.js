const PORT = 8080

const express = require("express")
const app = express()

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})

app.get("/:id/sample", (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    "method": "POST",
    "url": `http://127.0.0.1/8080/${req.params.id}`,
    "httpVersion": "HTTP/1.1",
    "queryString": [
      {
        "name": "foo",
        "value": "bar"
      },
      {
        "name": "foo",
        "value": "baz"
      }
    ],
    "headers": [
      {
        "name": "Accept",
        "value": "application/json"
      },
      {
        "name": "Content-Type",
        "value": "application/x-www-form-urlencoded"
      }
    ],
    "cookies": [
      {
        "name": "foo",
        "value": "bar"
      },
      {
        "name": "bar",
        "value": "baz"
      }
    ],
    "postData": {
      "mimeType": "application/x-www-form-urlencoded",
      "params": [
        {
          "name": "foo",
          "value": "bar"
        },
        {
          "name": "bar",
          "value": "baz"
        }
      ]
    }
  }))
})
