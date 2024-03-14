import express from 'express'
import * as http from "http";
import WebSocket, {WebSocketServer} from 'ws'

const PORT = 3000

const app = express()
const server = http.createServer(app)

const websocketServer = new WebSocketServer({server})

server.listen(PORT, () => {
  console.log(`server listen port ${PORT}...`)
})

app.get('/send', (req, res) => {
  websocketServer.clients.forEach(client => {
    client.send(JSON.stringify(newMessage))
  })
  res.status(200).send('ok')
})

websocketServer.on('connection', socket => {
  console.log('client connected!')

  socket.on('close', () => {
    console.log('client disconnected')
  })
})

const newMessage = {
  echo: {
    type: 'update',
    data: {
      message: {
        "id": "f72e0c8c42232509a96e2a4758d184a3",
        // "author_id": 23135647,
        "author_id": 155076742,
        // "created": 1710433552,
        "created": (new Date).getTime() / 1000,
        "content": {"text": "тест 123"},
        "type": "text",
        "direction": "in",
        "isRead": true,
        "read": 1710401403
      },
      users:
        [{
        "id": 23135647, "name": "Дмитрий", "parsing_allowed": true, "public_user_profile": {
          "avatar": {
            "default": "https://20.img.avito.st/image/1/1.VCBL97a17sl9UHrPb94kV0tV-sn1XHrPfVD6yw.r0X17zMrAcQHgYSi9yIjQLMO3eqoSkIHYFdCpHfNz3U",
            "images": {
              "100x100": "https://20.img.avito.st/image/1/1.VCBL97a17sk1VTLKb94kV0tV-sn1XDLKNVX6yw.ICcRulLjRUjHs1TT0VHXnxwmWopCL2B2CZQAbR1Ugj8",
              "1024x1024": "https://20.img.avito.st/image/1/1.VCBL97at7sl9RHrbb94kV0tV-ss.Dm4yAXHF1vXh-uw-PS3Qz6OmdN9DhoBL6HWdur55EJQ",
              "128x128": "https://20.img.avito.st/image/1/1.VCBL97a17sl9VnrJb94kV0tV-sn1XHrJfVb6yw.M1bHkDWX3fztuDahNVikzPCVN2mNPf0OoFYiU9RW9T8",
              "132x132": "https://20.img.avito.st/image/1/1.VCBL97a17sl1VnLJb94kV0tV-sn1XHLJdVb6yw.CiUbr__aTgTqdbt2sBe4TVY0AY5xMp_udAmfuCKhwS4",
              "176x176": "https://20.img.avito.st/image/1/1.VCBL97a17skdVhrJb94kV0tV-sn1XBrJHVb6yw.ZlQn3YdPoaqXdoJktRgeKNeeTJVXDivbGmfx7xV0l6w",
              "192x192": "https://20.img.avito.st/image/1/1.VCBL97a17sl9V3rIb94kV0tV-sn1XHrIfVf6yw.cppQGWLKFqzUJk0CQgjotKciUxCotZ2ZkOS8SkhNLzY",
              "256x256": "https://20.img.avito.st/image/1/1.VCBL97a17sl9UHrPb94kV0tV-sn1XHrPfVD6yw.r0X17zMrAcQHgYSi9yIjQLMO3eqoSkIHYFdCpHfNz3U",
              "25x25": "https://20.img.avito.st/image/1/1.VCBL97ax7snPZmhBI8hMyv1W8sPPZvrL.K3CeyL7z0xaWHqwiNQfqsKjlnOhs4AcIulRcTlCQPBQ",
              "50x50": "https://20.img.avito.st/image/1/1.VCBL97ax7smZMGhBI8hMyv1W8sOZMPrL.uhgQQrqf3UnWvvB1tNdCboCPII3p7cTTLl1ulkjgMAE",
              "64x64": "https://20.img.avito.st/image/1/1.VCBL97a17sl9VXrKb94kV0tV-sn1XHrKfVX6yw.SikRwdj28_ZoOrAWZ4vT0hGrLZqGNOLUSpNGT18jqBA",
              "96x96": "https://20.img.avito.st/image/1/1.VCBL97a17sk9VTrKb94kV0tV-sn1XDrKPVX6yw.BkhiUQ0G2xyo181XjSINNZK0eLJ7xcE_mwY6LWk6FJs"
            }
          },
          "item_id": 2820763795,
          "url": "https://avito.ru/user/90c098ed68a5688bbc04bebb24a4afe9/profile?id=2820763795&iid=2820763795&src=messenger&page_from=from_item_messenger",
          "user_id": 23135647
        }
      }, {
        "id": 155076742, "name": "Айвазян Вартан", "parsing_allowed": true, "public_user_profile": {
          "avatar": {
            "default": "https://80.img.avito.st/image/1/1.KKy3Fra2kkWBsQZD6zJn5V21hE8JNYLHBbWG.eqS4yJMUkdMqP5b9F7Tud-abQdxzIxRUiS1NwQvgG0c",
            "images": {
              "100x100": "https://80.img.avito.st/image/1/1.KKy3Fra2kkXJtE5G6zJn5V21hE8JfYePALWG.7E39YdwAWxsIzdgk1V958KMRBUS807LXKzjkvlq2I9A",
              "1024x1024": "https://80.img.avito.st/image/1/1.KKy3FraukkWBpQZX6zJn5V21hg.xhNwpUP67b1R2z46zg4mSo4neEAdRXSJPKXsbPWuyzg",
              "128x128": "https://80.img.avito.st/image/1/1.KKy3Fra2kkWBtwZF6zJn5V21hE8JNYTHA7WG.hDFq576IGjkZEHmFBEz_TaZu55MkCwyCi8jKq1yldms",
              "132x132": "https://80.img.avito.st/image/1/1.KKy3Fra2kkWJtw5F6zJn5V21hE8JPYTPA7WG.yY8xh9Uakv1AI-KTOdFMHIiovmyJvQtIuygeUlHGc0w",
              "176x176": "https://80.img.avito.st/image/1/1.KKy3Fra2kkXht2ZF6zJn5V21hE8JVYSnA7WG.c_7b4HGc44uvsCdyQjfblnaQVAz4Uu5kdYp4wQ8zcmM",
              "192x192": "https://80.img.avito.st/image/1/1.KKy3Fra2kkWBtgZE6zJn5V21hE8JNYXHArWG.zXBhHI1jMB7ywYa5ua4iMtaaPQEPnpyqkz1HHb_5sZ4",
              "256x256": "https://80.img.avito.st/image/1/1.KKy3Fra2kkWBsQZD6zJn5V21hE8JNYLHBbWG.eqS4yJMUkdMqP5b9F7Tud-abQdxzIxRUiS1NwQvgG0c",
              "25x25": "https://80.img.avito.st/image/1/1.KKy3FraykkUzh2zA4BfaRwO9jnUztYY.Kr-PP_eAkOAvWBdznbd0Xfv2aPM578IDQtsm_lNwOe0",
              "50x50": "https://80.img.avito.st/image/1/1.KKy3FraykkVl0WzA4BfaRwO9jiNltYY.8Zug-qC3P0zxv0QiR3PL5MXgg52rxG1FGmgfcJuJvVE",
              "64x64": "https://80.img.avito.st/image/1/1.KKy3Fra2kkWBtAZG6zJn5V21hE8JNYfHALWG.mSy70sl_qfddPF-91Rv_ucNk0gbw8yPP00ATfIm_9zY",
              "96x96": "https://80.img.avito.st/image/1/1.KKy3Fra2kkXBtEZG6zJn5V21hE8JdYeHALWG.ztA-EEIndVTgqaGwblyy15aTOof25rCYX13heNwdF3E"
            }
          },
          "item_id": 2820763795,
          "url": "https://avito.ru/user/6217330936d91e6b6cef8b0dc3e2b371/profile?id=2820763795&iid=2820763795&src=messenger&page_from=from_item_messenger",
          "user_id": 155076742
        }
      }],
      chatId: "u2i-4XqsXbuqzfd0PQriTyBG0Q",
      accountId: "155076742",
    },
    entity: 'chat',
    action: 'newMessage',
  }
}
