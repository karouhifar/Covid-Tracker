import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";
import "chartjs-adapter-moment";

const options = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      mode: "index",
      intersect: false,
      callbacks: {
        label: function (tooltipItem, data) {
          return numeral(tooltipItem.parsed.y).format("+0,0");
        },
      },
    },
  },

  elements: {
    point: {
      radius: 0,
    },
  },

  scales: {
    y: {
      ticks: {
        // Include a dollar sign in the ticks
        callback: function (value, index, values) {
          return numeral(value).format("0a");
        },
      },
    },
  },
};
const buildChartData = (data, casesType) => {
  const chartData = [];
  let lastDataPoint;

  for (let date in data.cases) {
    const time = new Date(date).getTime();
    const time1 = new Date("8/6/21").getTime();
    if (lastDataPoint) {
      let newDataPoint;
      if (casesType === "recovered" && time < time1)
        newDataPoint = {
          x: date,
          y: data[casesType][date],
        };
      else
        newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint,
        };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  }
  return chartData;
};
function LineGraph({ casesType }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
        .then((response) => response.json())
        .then((data) => {
          const chartData = buildChartData(data, casesType);
          setData(chartData);
        });
    };
    fetchData();
  }, [casesType]);

  return (
    <div>
      {data?.length > 0 ? (
        <Line
          data={{
            datasets: [
              {
                label: casesType,
                fill: true,
                backgroundColor: () => {
                  switch (casesType) {
                    case "cases":
                      return "rgba(204, 16, 52, 0.5)";

                    case "recovered":
                      return "#a7ffa2";

                    default:
                      return "#a5a5a5";
                  }
                },
                borderColor: () => {
                  switch (casesType) {
                    case "cases":
                      return "#CC1034";

                    case "recovered":
                      return "#22fd16";

                    default:
                      return "#3e3e3e";
                  }
                },
                data: data,
              },
            ],
          }}
          options={options}
        />
      ) : (
        <div>No data found</div>
      )}
    </div>
  );
}

export default LineGraph;
