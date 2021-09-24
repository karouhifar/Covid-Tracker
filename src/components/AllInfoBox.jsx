import React, { useContext } from "react";
import { Col } from "react-bootstrap";
import InfoBox from "../components/InfoBox";
import AuthContext from "../api/Storage";
import CaseContext from "../api/CaseSwitch";
function AllInfoBox() {
  const { countryInfo } = useContext(AuthContext);
  const { switchCase, setSwitchCase } = useContext(CaseContext);
  return (
    <>
      <Col md={12} lg={4} xl={4}>
        <InfoBox
          active={switchCase === "cases"}
          title="Coronavirus Cases"
          onClick={() => {
            console.log("cases");
            setSwitchCase("cases");
          }}
          cases={countryInfo.todayCases}
          total={countryInfo.cases}
        />
      </Col>
      <Col md={12} lg={4} xl={4}>
        <InfoBox
          active={switchCase === "recovered"}
          title="Recovered"
          onClick={() => {
            console.log("recovered");
            setSwitchCase("recovered");
          }}
          cases={countryInfo.todayRecovered}
          total={countryInfo.recovered}
        />
      </Col>
      <Col md={12} lg={4} xl={4}>
        <InfoBox
          active={switchCase === "deaths"}
          title="Deaths"
          onClick={() => {
            console.log("deaths");
            setSwitchCase("deaths");
          }}
          cases={countryInfo.todayDeaths}
          total={countryInfo.deaths}
        />
      </Col>
    </>
  );
}

export default AllInfoBox;
