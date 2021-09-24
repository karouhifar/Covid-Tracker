import React, { useContext } from "react";
import "../public/css/Country.css";
import { Card, CardContent } from "@material-ui/core";
import AuthContext from "../api/Storage";
function Country() {
  const { countryInfo } = useContext(AuthContext);
  return (
    <Card>
      <CardContent className="country justify-content-between">
        <div className="text__inner">
          <h3>{countryInfo?.country ? countryInfo?.country : "World Wide"}</h3>
          <h6>Population: {countryInfo?.population} </h6>
        </div>
        <img
          width="100"
          src={
            countryInfo.countryInfo?.flag
              ? countryInfo.countryInfo?.flag
              : "https://img.favpng.com/17/0/3/globe-flags-of-the-world-flags-of-the-world-portable-network-graphics-png-favpng-9pP2esBF9H1Ap04ssNnpwPLN5.jpg"
          }
          alt={countryInfo.country}
        />
      </CardContent>
    </Card>
  );
}

export default Country;
