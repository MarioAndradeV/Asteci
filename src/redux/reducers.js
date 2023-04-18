import { FETCH_WEATHER_DATA, FETCH_WEATHER_DATA_BY_ID  } from './actions'

const initialState = {
    weatherData: [],
    // currentPage: 1,
    // totalPages: 0,
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case FETCH_WEATHER_DATA:
            return { ...state, weatherData: action.payload}

        case FETCH_WEATHER_DATA_BY_ID:
            return { ...state, weatherDataById: action.payload}

        default:
            return state;
        }
}

export default rootReducer;