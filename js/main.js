$(document).ready(function() {
   
    const apiKey = '7f5c44343cbd303a4362cf11257be4d7';  

    $('#get-weather').click(function() {
        const city = $('#city-input').val();
        if (city) {
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=az`;


           
            $.get(apiUrl, function(data) {
                const cityName = data.name;
                const temperature = data.main.temp;
                const description = data.weather[0].description;

               
                $('#city-name').text(`Şəhər: ${cityName}`);
                $('#temperature').text(`Temperatur: ${temperature}°C`);
                $('#description').text(`Hava şəraiti: ${description}`);
            }).fail(function() {
                alert('Şəhər tapılmadı, düzgün adı daxil edin.');
            });
        } else {
            alert('Xahiş olunur şəhər adını daxil edin.');
        }
    });
});
