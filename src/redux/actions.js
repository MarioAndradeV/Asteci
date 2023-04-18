export const FETCH_WEATHER_DATA = 'FETCH_WEATHER_DATA';
export const FETCH_WEATHER_DATA_BY_ID = 'FETCH_WEATHER_DATA_BY_ID'

export function fetchWeatherData() {
    return async (dispatch) =>{
        const response = await fetch(
            'https://api.datos.gob.mx/v1/condiciones-atmosfericas'
        );
        const json = await response.json();
        console.log(json);
        dispatch({type: FETCH_WEATHER_DATA, payload: json.results })
    }
}

export const fetchWeatherDataById = (id) => async (dispatch) =>{
    try{
        const response = await fetch(
            `https://api.datos.gob.mx/v1/condiciones-atmosfericas/${id}`
        );
        const data = await response.json();
        dispatch({ type: FETCH_WEATHER_DATA_BY_ID, payload: data })

    } catch(error){
        console.log(error);
    }

}

