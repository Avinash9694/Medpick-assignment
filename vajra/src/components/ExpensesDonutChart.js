import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

function ExpensesDonutchart() {
  const [expenseName, setExpenseName] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      const getExpensesName = [];
      const getExpenses = [];

      const reqData = await fetch("http://localhost:8080/api/expenses");
      const resData = await reqData.json();
      for (let i = 0; i < resData.length; i++) {
        console.log(resData.week);
        getExpensesName.push(resData[i].week);
        getExpenses.push(parseInt(resData[i].incidents));
      }
      setExpenseName(getExpensesName);
      setExpenses(getExpenses);
    };
    getdata();
  }, []);

  return (
    <React.Fragment>
      <div>
        <Chart
          type="donut"
          width={370}
          height={440}
          series={expenses}
          options={{
            labels: expenseName,
            title: {
              text: "",
              // align:"center",
            },

            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: false,
                    total: {
                      show: false,
                      showAlways: false,
                      fontSize: 30,
                      color: "#f90000",
                    },
                  },
                },
              },
            },

            dataLabels: {
              enabled: true,
            },
          }}
        />
      </div>
    </React.Fragment>
  );
}
export default ExpensesDonutchart;
