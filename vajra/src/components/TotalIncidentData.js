import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import "../styles/totalIncidentData.css";
const TotalIncidentData = () => {
  const [records, setRecords] = useState([]);

  const fetchUserData = () => {
    fetch("http://localhost:8080/api/incident")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRecords(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <React.Fragment>
      <div className="bargraph">
        <Chart
          type="bar"
          width={1280}
          height={500}
          series={[
            {
              name: "incidents",
              data: records.map((data) => data.incidents),
            },
          ]}
          options={{
            colors: ["#FEC601"],
            theme: { mode: "light" },

            xaxis: {
              tickPlacement: "on",
              categories: records.map((data) => data.week),
              title: {
                text: "",
              },
            },

            yaxis: {
              labels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: { fontSize: "15", colors: ["black"] },
              },
              title: {
                text: "",
              },
            },

            legend: {
              show: true,
              position: "right",
            },

            dataLabels: {
              formatter: (val) => {
                return `${val}`;
              },
              style: {
                colors: ["#FEC601"],
                fontSize: 2,
              },
            },
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
};

export default TotalIncidentData;
