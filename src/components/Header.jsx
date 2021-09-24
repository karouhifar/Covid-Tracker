import "../public/css/Header.css";
import React, { useState, useEffect, useContext } from "react";
import {
  Card,
  CardContent,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Snackbar,
  IconButton,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import GetCountries from "../api/GetCountries";
import AuthContext from "../api/Storage";
function Header() {
  const [countries, setCountries] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [country, setCountry] = useState("worldWide");
  const authContext = useContext(AuthContext);
  const { countryInfo } = useContext(AuthContext);
  useEffect(() => {
    GetCountries.getCountries()
      .then((res) => res.json())
      .then((data) => {
        const countries = data.map((country) => ({
          name: country.country, // Canada , United States
          value: country.countryInfo.iso2, // CA , US
        }));
        setCountries(countries);
        authContext.setCountries(data);
      });
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((res) => res.json())
      .then((data) => {
        authContext.setCountryInfo(data);
      });
    // eslint-disable-next-line
  }, []);
  const onCountriesChange = async (event) => {
    const countryCode = event.target.value;
    const url =
      countryCode === "worldWide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setOpen(true);
        setCountry(countryCode);
        countryCode === "worldWide"
          ? authContext.setMapCenter([0, 0])
          : authContext.setMapCenter([
              data.countryInfo.lat,
              data.countryInfo.long,
            ]);
        authContext.setCountryInfo(data);
      });
  };
  const handleClose = () => {
    setOpen(false);
  };
  const bodyStyle = {
    margin: "0 auto",
    marginRight: "50px",
  };
  return (
    <React.Fragment>
      <Snackbar
        style={{ marginTop: "10px" }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        action={
          <React.Fragment>
            <div className="d-flex flex-column" style={bodyStyle}>
              <p style={bodyStyle}>
                {countryInfo?.country ? countryInfo?.country : "WorldWide"}
              </p>
              <p>Population: {countryInfo?.population}</p>
            </div>
            <div>
              <img
                width="100"
                src={
                  countryInfo.countryInfo?.flag
                    ? countryInfo.countryInfo?.flag
                    : "https://img.favpng.com/17/0/3/globe-flags-of-the-world-flags-of-the-world-portable-network-graphics-png-favpng-9pP2esBF9H1Ap04ssNnpwPLN5.jpg"
                }
                alt={`${countryInfo?.country}`}
              />
            </div>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <FontAwesomeIcon icon={faTimesCircle} />
            </IconButton>
          </React.Fragment>
        }
      />
      <Card className="header__header">
        <CardContent className="header__dropdown">
          <h1>Covid-19 Tracker</h1>
          <FormControl
            defaultValue="Hello World"
            style={{ width: "30%" }}
            autoComplete="off"
          >
            <InputLabel id="header-label">Choose country</InputLabel>
            <Select
              value={country}
              labelId="header-label"
              id="header-label"
              onChange={onCountriesChange}
            >
              <MenuItem value="worldWide">
                <em>WorldWide</em>
              </MenuItem>
              <hr />
              {countries.map((country, index) => (
                <MenuItem key={index} value={country.value}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default Header;
