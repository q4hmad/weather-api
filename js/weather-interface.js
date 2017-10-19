import {Bike } from './../js/weather';
let apiKey = require('./../js/weather2.js').bikeModule;
$(document).ready(function() {
  let bike = new Bike();
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");
    let promise = bike.makePromise(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=apiKey`);
    bike.callApi(promise,city);
  });
});
