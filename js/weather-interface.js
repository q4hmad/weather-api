import {Bike } from './../js/weather';

$(document).ready(function() {
  let bike = new Bike();
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");
    let promise = bike.makePromise(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eeb72cd89e66872719c274878618bb7a`);
    bike.callApi(promise,city);
  });
});
