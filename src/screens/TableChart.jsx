import "../public/css/TableChart.css";
import React, { useEffect, useState, useContext } from "react";
import { Card, CardContent } from "@material-ui/core";
import Table from "../components/Table";
import { sortData } from "../public/js/utils";
import LineGraph from "../components/LineGraph";
import CaseContext from "../api/CaseSwitch";

function TableChart() {
  const [tableData, setTableData] = useState([]);
  const { switchCase } = useContext(CaseContext);
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((res) => res.json())
        .then((data) => {
          const sortedData = sortData(data);
          setTableData(sortedData);
        });
    };
    getCountriesData();
  }, []);
  return (
    <Card className="table-chart__main">
      <CardContent>
        <h3>Live Cases by Country</h3>
        <Table countries={tableData} />
        <h3>WorldWide new {switchCase}</h3>
        <LineGraph casesType={switchCase} />
      </CardContent>
    </Card>
  );
}

export default TableChart;
