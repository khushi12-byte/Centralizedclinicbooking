var express = require('express');
var router = express.Router();
const axios = require('axios');

// var myHeaders = new fetch.Headers();


router.post('/', function(req, res, next) {
  const name = ' Full Name';
const email = 'khushixtha@gmail.com';
const subject = '[APPOINTMENT CONFIRMED]';
const message = 'Dear Patient, This email is a confirmation of your scheduled appointment. Please let me know if you need to change the appointment or have any questions or concerns.';

  
    const data = JSON.stringify({
      "Messages": [{
        "From": {"Email": "paudelsabina345@gmail.com", "Name": "My Health Appointment"},
        "To": [{"Email": email, "Name": name}],
        "Subject": subject,
        "TextPart": message
      }]
    });
  
    const config = {
      method: 'post',
      url: 'https://api.mailjet.com/v3.1/send',
      data: data,
      headers: {'Content-Type': 'application/json'},
      auth: {username: '1ff5c0e9d4244f082430d8fce6aa7b8c', password: '4d835b04129bff152b9226c980d64955'},
    };
  
    return axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    // fetch("https://api.mailjet.com/v3.1/send", requestOptions)
    //   .then(response => {
    //     debugger
    //     console.log('..', response)
    //     return response.text()
    //   })
    //   .then(result => {
    //     debugger
    //     console.log(result)
    //   })
    //   .catch(error => {
    //     console.log('error', error)
    //   });
    }
);

module.exports = router;
