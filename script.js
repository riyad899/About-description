// Example JavaScript for future API integration
document.addEventListener('DOMContentLoaded', () => {
    // You can implement any real-time data fetching here in the future for crypto and FX rates
    console.log("Page Loaded. Ready to fetch live data!");
});
// Fetch Cryptocurrency Data from CoinGecko API
async function fetchCryptoData() {
    const apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,cardano&vs_currencies=usd';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayCryptoData(data);
    } catch (error) {
        console.error('Error fetching crypto data:', error);
    }
}

// Display Cryptocurrency Data
function displayCryptoData(data) {
    const cryptoSection = document.getElementById('crypto');
    const cryptoContent = `
        <div class="crypto-prices">
            <p>Bitcoin: $${data.bitcoin.usd}</p>
            <p>Ethereum: $${data.ethereum.usd}</p>
            <p>Cardano: $${data.cardano.usd}</p>
        </div>
    `;
    cryptoSection.innerHTML += cryptoContent;
}

// Fetch FX Rate Data from ExchangeRate-API
async function fetchFxRates() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your ExchangeRate-API key
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayFxRates(data);
    } catch (error) {
        console.error('Error fetching FX rates:', error);
    }
}

// Display FX Rate Data
function displayFxRates(data) {
    const currencySection = document.getElementById('currency');
    const fxContent = `
        <div class="fx-rates">
            <p>USD to EUR: ${data.conversion_rates.EUR}</p>
            <p>USD to GBP: ${data.conversion_rates.GBP}</p>
            <p>USD to JPY: ${data.conversion_rates.JPY}</p>
        </div>
    `;
    currencySection.innerHTML += fxContent;
}

// Initialize Fetching Data on Page Load
document.addEventListener('DOMContentLoaded', () => {
    fetchCryptoData();
    fetchFxRates();
});
