function Thermostat(){

  var currentTemp = 64;
  var body = document.getElementsByTagName('body')[0];
  var upButton = document.getElementById('up');
  var downButton = document.getElementById('down');
  var temperatureText = document.getElementById('temp');


  var convertTempToColor = function(temp){

    //linear conversion from (-40 - 120 to 0 - 360)
    //returns hsl value to style background

    var hue = -1 * ( (temp - (40*-1)) / (120 - (40*-1)) ) * (360 - 0) + 0;
    return 'hsl('+hue+',70%,60%)';

  };

  var changeTemperature = function(temp){
    // set temperature anc color based on current temperature
    temperatureText.innerHTML = temp + '<span>&deg;</span>';
    body.style.backgroundColor = convertTempToColor(temp);
  };


  var init = function(){


    changeTemperature(currentTemp);
    // add events to trigger temperature change on mousedown

    upButton.addEventListener('mousedown',function(ev){

      currentTemp = currentTemp + 1;
      changeTemperature(currentTemp);

    });


    downButton.addEventListener('mousedown',function(ev){

      currentTemp = currentTemp - 1;
      changeTemperature(currentTemp);


    });

  };


  init();

};

Thermostat();
