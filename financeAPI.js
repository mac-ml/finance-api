var request = require('request');

// Create a finance data class
export default class FinanceData {

    constructor(symbol, interval, apikey){
        this.symbol = symbol;
        this.interval = interval;
        this.apikey = apikey;

    }    

    // method
    getData() {
        // Get symbol, interval value and apikey from user. It must be string value. So check value during I/O
        // replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
        const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='+this.symbol+'&interval='+this.interval+'&apikey=' +this.apikey;
    
        request.get({
            url: url,
            json: true,
            headers: {'User-Agent': 'request'}
        }, (err, res, data) => {
            if (err) {
                console.log('Error:', err);
            } else if (res.statusCode !== 200) {
                console.log('Status:', res.statusCode);
            } else {
                // data is successfully parsed as a JSON object:
                return data;
            }
        });
    }

}


// Create a function that works when user select some parametre
function userOrder(){
    pass
}