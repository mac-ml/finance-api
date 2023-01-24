const express = require("express")
const app = express()
var request = require('request');
const bodyParser = require("body-parser");
const { response } = require("express");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/public", express.static("public"))
app.set("view engine", "ejs")

app.get("/", (req, res)=>{
    console.log("Server is active on PORT: 3000");
    res.render("index");
})


app.post('/', (req, response)=>{

    const symbol = req.body.symbol;
    const interval = req.body.interval;

    request.get({
        url: 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='+symbol+'&interval='+interval+'&apikey=BQDLYDVEA88Y8HM6',
        json: true,
        headers: {'User-Agent': 'request'}
    }, (err, res, data) => {
        if (err) {
            console.log('Error:', err);
        } else if (res.statusCode !== 200) {
            console.log('Status:', res.statusCode);
        }else{
            response.render('home', {
                userSelection: data,
                selectedSymbol: symbol,
                selectedInterval: interval
            });

            console.log(data);
        }
    });

});

app.listen(3000)