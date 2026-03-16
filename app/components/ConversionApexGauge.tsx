"use client";

import dynamic from "next/dynamic";
import type { ApexOptions } from "apexcharts";
import React from "react";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const options: ApexOptions = {
  chart: {
    type: "radialBar",
    toolbar: { show: false },
  },
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      hollow: {
        margin: 0,
        size: "58%",
        background: "transparent",
      },
      track: {
        background: "#eaecfb",
        strokeWidth: "95%",
        margin: 0,
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          offsetY: 18,
          fontSize: "30px",
          fontWeight: 600,
          formatter: () => "58,19%",
        },
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "horizontal",
      shadeIntensity: 0.5,
      gradientToColors: ["#4F46E5"],
      stops: [0, 100],
    },
  },
  stroke: {
    lineCap: "round",
  },
  labels: ["Conversion"],
  colors: ["#6366F1"],
};

const series = [58.19];

export function ConversionApexGauge() {
  return (
    <div className="w-full h-52">
      <ApexChart options={options} series={series} type="radialBar" height="100%" />
    </div>
  );
}
