'use strict';

const api_key = "e86cc496d99b2322a740acb427eae7aa";

/**
 * Fetch data from server
 * @param {string} URL API url
 * @param {Function} callback callback
 */
export const fetchData = function (URL, callback) {
    fetch(`${URL}&APPID=${api_key}`)
        .then(res => res.json())
        .then(data => callback(data))
}

export const url = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
    },
    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
    },
    airPollution(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
    },
    reverseGeo(lat, lon) {
        return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
    },
    /**
     * @param {string} query Search query "London", "New York"
     */
    geo(query) {
        return `https://api.openweathermap.org/geo/1.0/direct?${query}&limit=5`
    },
    /**
     * @param {string} query Search query "London", "Ho Chi Minh"
     */
    geoOn(query) {
        return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    }
}