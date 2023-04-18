import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchWeatherDataById } from "../redux/actions.js";
// import "./WeatherTable.scss";

function DetailComponent({ weatherDataById, fetchWeatherDataById, match }) {

  useEffect(() => {
    fetchWeatherDataById(match.params.id);
  }, [fetchWeatherDataById, match.params.id]);


  return (
    <div id="mainContainer">
        <h2>Detalles de la consulta</h2>
        <ul>
            <li>ID:</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
      
    </div>
  );
}

const mapStateToProps = (state) => ({
  weatherData: state.weatherData,
  
});

const mapDispatchToProps = { fetchWeatherDataById };

export default connect(mapStateToProps, mapDispatchToProps)(DetailComponent);
