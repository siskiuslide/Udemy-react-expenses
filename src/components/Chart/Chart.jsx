import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((point) => point.value);
  const maxValue = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((point) => {
        return <ChartBar key={point.label} value={point.value} maxValue={maxValue} label={point.label} />;
      })}
    </div>
  );
};

export default Chart;
