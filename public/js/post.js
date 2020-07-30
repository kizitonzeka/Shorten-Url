
const fetch = require('node-fetch');
const APIKEY = 'b63149b2313841be9e608227681d335b';
const url = `https://api.rebrandly.com/v1/links`

const shortenURL = async (inputurl)=>{
    const data = JSON.stringify({
        destination: inputurl
})

try{
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json', 
            'apikey': APIKEY
        }, 
        body: data
    });

    if(response.ok){
        const jsonResponse = await response.json();
        return jsonResponse;
    }

    throw new Error('Request failed!')
}catch(error){
    console.log(error)
}
}

module.exports = shortenURL;