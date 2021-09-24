import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

const casesTypeColors = {
  cases: {
    hex: "red",

    multiplier: 100,
  },
  recovered: {
    hex: "#7dd71d",

    multiplier: 200,
  },
  deaths: {
    hex: "black",

    multiplier: 700,
  },
};

export const sortData = (data) => {
  const sortData = [...data];
  return sortData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};

export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country, i) => (
    <Circle
      key={i}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div className="info-flag">
            <img
              width="20%"
              src={country.countryInfo.flag}
              alt={country.country}
            />
            <span>&nbsp;&nbsp;{country.country}</span>
          </div>
          <div className="info-name"></div>
          {casesType === "cases" && (
            <div className="info-confirmed">
              Cases: {numeral(country.cases).format("0,0")}
            </div>
          )}
          {casesType === "recovered" && (
            <div className="info-recovered">
              Recovered: {numeral(country.recovered).format("0,0")}
            </div>
          )}
          {casesType === "deaths" && (
            <div className="info-deaths">
              Deaths: {numeral(country.deaths).format("0,0")}
            </div>
          )}
        </div>
      </Popup>
    </Circle>
  ));
