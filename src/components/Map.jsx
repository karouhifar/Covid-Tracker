import React, { useContext } from "react";
import "../public/css/Map.css";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import AuthContext from "../api/Storage";
import { showDataOnMap } from "../public/js/utils";
function Map({ center, zoom, casesType = "cases" }) {
  const { mapCenter, countries } = useContext(AuthContext);
  return (
    <div className="map">
      <LeafletMap
        center={mapCenter}
        zoom={mapCenter[0] === 0 ? (mapCenter[1] === 0 ? 1 : 4) : 4}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
}

export default Map;
