const express=require('express');
const cors=require('cors')
const bodyParser=require('body-Parser')
const SpotifyWebApi = require('spotify-web-api-node');

const app=express();
app.use(cors())
app.use(bodyParser.json())

app.post('/login',(req,res)=>{
    const code=req.body.code
    const spotifyApi=new SpotifyWebApi({
        redirectUri:'https://localhost:3000',
        clientId:'495c1586c12f4689831bc4c2ec34fe53',
        clientSecret:'4a382d3039ec41ea987b85036607a45b'
    })

    spotifyApi.authorizationCodeGrant(code).then(data=>{
        res.json({
            accessToken:data.body.access_token,
            refreshToken:data.body.refresh_token,
            expiresIn:data.body.expires_in
        })
    })
    .catch(err=> {
        res.sendStatus(400)
    })
})

app.listen(3001)