
import * as React from "react";
import Highcharts, { Options } from "highcharts";
import HighchartsReact from "highcharts-react-official";

export const Chart: React.FC = () => {
  const chartOptions: Options = {
    chart: {
      type: "column",
    },
    title: {
      text: "My chart",
      align: "center",
    },
    xAxis: {
      categories: ["Arsenal", "Chelsea", "Liverpool", "Manchester United"],
    },
    yAxis: {
      min: 0,
      title: {
        text: "Count trophies",
      },
      stackLabels: {
        enabled: true,
      },
    },
    plotOptions: {
      column: {
        stacking: "normal",
        dataLabels: {
          enabled: true,
        },
      },
    },
    legend: {
      align: "center",
      x: 70,
      verticalAlign: "top",
      y: 70,
      floating: true,
      backgroundColor: Highcharts.defaultOptions.legend?.backgroundColor || "white",
      borderColor: "#CCC",
      borderWidth: 1,
      shadow: false,
    },
    tooltip: {
      headerFormat: "<b>{point.x}</b><br/>",
      pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}",
    },
    series: [
      { type: "column", name: "BPL", data: [3, 5, 1, 13] },
      {
        type: "column",
        name: "FA Cup",
        data: [14, 8, 8, 12],
      },
      {
        type: "column",
        name: "CL",
        data: [0, 2, 6, 3],
      },
    ],
  };

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </>
  );
};
