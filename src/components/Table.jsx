import React from "react";
import "../public/css/Table.css";
function Table({ countries }) {
  return (
    <div className="table overflow-auto">
      <table className="table">
        <tbody>
          {countries.map(({ country, cases, countryInfo }, i) => (
            <tr key={i}>
              <td>
                <div className="country__table">
                  <p>{country}</p>
                  <img
                    width="30"
                    height="100%"
                    src={countryInfo.flag}
                    alt={country}
                  />
                </div>
              </td>

              <td>
                <strong>{cases}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
