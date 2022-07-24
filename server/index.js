// IMPORTS
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import 'dotenv/config'
import router from "./routes/index.js";

const app = express()
// 'http://localhost:3000'
// app.use(cors({ credentials:true, origin:'http://localhost:3000' }));

var whitelist = ['http://localhost:3000', process.env.REACT_APP_DOMAIN]
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true
}
app.use(cors(corsOptions))

app.use(cookieParser());
app.use(express.json());
app.use(router);
app.use(bodyParser.urlencoded({extended: true}))
app.listen(process.env.REACT_APP_API_PORT, () => {});