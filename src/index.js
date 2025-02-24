async function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const city = cityInput.value;

    if (!city) return;

    setLoading(true);

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d100510d70904296e649d4fd7203cc06&units=metric`
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${data.message}`);
        }

        displayWeather(data);
        hideError();
    } catch (error) {
        showError(`Error: ${error.message}`);
        hideWeatherInfo();
        console.error('Full error:', error);
    } finally {
        setLoading(false);
    }
}