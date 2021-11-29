import { Row } from "react-bootstrap";
import React, { useState, useContext } from "react";

import AuthContext from "../api/Storage";
import "../public/css/Covid19Tracker.css";
import Header from "../components/Header";
import Map from "../components/Map";
import AllInfoBox from "../components/AllInfoBox";
import "leaflet/dist/leaflet.css";
import CaseContext from "../api/CaseSwitch";
function Covid19Tracker() {
  const [countryInfo, setCountryInfo] = useState({});
  const [mapCenter, setMapCenter] = useState([0, 0]);
  const [countries, setCountries] = useState([]);
  const { switchCase } = useContext(CaseContext);
  return (
    <React.Fragment>
      <AuthContext.Provider
        value={{
          countryInfo,
          setCountryInfo,
          mapCenter,
          setMapCenter,
          countries,
          setCountries,
        }}
      >
        <div className="covid19Tracker">
          <Row>
            <Header />
          </Row>
          {/* <div className="covid19Tracker__country">
            <Row>
              <Country />
            </Row>
          </div> */}
          <div className="covid19Tracker__stats">
            <Row>
              <AllInfoBox />
            </Row>
          </div>

          <Map casesType={switchCase} />
        </div>
      </AuthContext.Provider>
    </React.Fragment>
  );
}

export default Covid19Tracker;
