// config.js - Weather API Configuration
const API_KEY = "5a4c5e3313bc10b8a4e086f4c09b522f";

// Make API_KEY globally available
if (typeof window !== 'undefined') {
    window.API_KEY = API_KEY;
}