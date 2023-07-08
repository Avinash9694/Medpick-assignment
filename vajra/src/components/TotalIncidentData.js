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

// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";
// ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// function App() {
//   const data = {
//     labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
//     datasets: [
//       {
//         label: "",
//         data: [12, 28, 6, 17, 23],
//         backgroundColour: "red",
//       },
//     ],
//   };
//   const options = {};
//   return (
//     <div>
//       <Bar data={data} options={options}></Bar>
//     </div>
//   );
// }
// export default App;
