import axios from 'axios';

const API_KEY = '1f5bf9252049427a0323efc033d473d4';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(address){
	const url = `${ROOT_URL}&q=${address}`;
	const request = axios.get(url);
	return{
		type: FETCH_WEATHER,
		payload: request
	};
}