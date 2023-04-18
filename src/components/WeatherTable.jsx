import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchWeatherData } from "../redux/actions.js";
import "./WeatherTable.scss";

function WeatherTable({ weatherData, fetchWeatherData }) {
//   const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchWeatherData();
    //   console.log(weatherData);
  }, [fetchWeatherData]);

//   const handleNextPage = () =>{
//     fetchWeatherData(currentPage + 1)
//         .then((data) =>{
//             setWeatherData
//         })
//   }

  return (
    <div id="mainContainer">
      <table className="weather-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>ID CIUDAD</th>
            <th>NOMBRE</th>
            <th>ESTADO</th>
            <th>PROBABILIDAD DE PRECIPITACIÓN</th>
            <th>HUMEDAD RELATIVA</th>
            <th>ÚLTIMA HORA DE REPORTE</th>
            <th>LLOVERÁ?</th>
          </tr>
        </thead>
        <tbody>
          {weatherData.map((item) => (
            <tr key={item._id}>
              <td >{item.cityid}</td>
              <td>{item.name}</td>
              <td>{item.state}</td>
              <td>{item.probabilityofprecip}</td>
              <td>{item.relativehumidity}</td>
              <td>{item.lastreporttime}</td>
              <td>{item.probabilityofprecip}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <button onClick={handleNextPage}> Siguiente </button> */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  weatherData: state.weatherData,
  
});

const mapDispatchToProps = { fetchWeatherData };

export default connect(mapStateToProps, mapDispatchToProps)(WeatherTable);
