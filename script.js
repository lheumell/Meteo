$(document).ready(function () {
    $('#text').keyup(function () {
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#text').val() + "&appid=1d7713a7487b1159d5e0a8c5d783bd42&units=metric",
            success: function (resultat) {
                console.log(resultat)
                var text = document.getElementById('text').value;
                text = text.charAt(0).toUpperCase() + text.slice(1);
                document.getElementById('text').value = text;
                $("#h1").html("Ville : " + resultat.name + "<br>" + resultat.main.temp + " °C");
                document.getElementById('image').src = 'http://openweathermap.org/img/wn/' + resultat.weather[0].icon + '@2x.png'
            }
        });
    })

    $('#text').keyup(function () {
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#text').val() + "&appid=1d7713a7487b1159d5e0a8c5d783bd42&units=metric",
            success: function (resultat) {
                console.log(resultat)
                $("#nom").html(resultat.name);
                $("#degre").html(resultat.main.temp) ;
                $("#humidity").html(resultat.main.humidity + "% de précipitation") ;
                $("wendy").html(resultat.wind.deg + "km/h") ;
                document.getElementById('image').src = 'http://openweathermap.org/img/wn/' + resultat.weather[0].icon + '@2x.png'
            }
        });
    })
    
});