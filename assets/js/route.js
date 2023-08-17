'use strict';

import { updateWeather, error404 } from "./app.js"

const defaultLocation = "#/weather?lat=10.75&lon=106.6667" //HCM

const currentLocation = function () {
    window.navigator.geolocation.getCurrentPosition(res => {
        const { latitute, longitute } = res.coords;

        updateWeather(`lat=${latitute}`, `lon=${longitute}`);
    }, err => {
        window.location.hash = defaultLocation;
    });
}

/**
 * 
 * @param {string} query Searched query
 */
const searchedLocation = query => updateWeather(...query.split("&"));
// updateWeather("lat=51.5073219", "lon=-0.1276474")

const routes = new Map([
    ["/current-location", currentLocation],
    ["/weather", searchedLocation]
]);

const checkHash = function () {
    const requestUrl = window.location.hash.slice(1);

    const [route, query] = requestUrl.includes ? requestUrl.split("?") : [requestUrl];

    routes.get(route) ? routes.get(route)(query) : error404();
}

window.addEventListener("hashchange", checkHash);

window.addEventListener("load", function () {
    if (!window.location.hash) {
        window.location.hash = "#/weather?lat=10.75&lon=106.6667";
    } else {
        checkHash();
    }
});