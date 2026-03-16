"use client";

import dynamic from "next/dynamic";
import type { ApexOptions } from "apexcharts";
import React from "react";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const options: ApexOptions = {
  chart: {
    type: "area",
    toolbar: { show: false },
    zoom: { enabled: false },
    sparkline: { enabled: false },
  },
  stroke: {
    curve: "smooth",
    width: 3.2,
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["21", "22", "23", "24", "25"],
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    min: 0,
    max: 15,
    tickAmount: 3,
    labels: {
      show: true,
      style: {
        colors: "#94a3b8",
        fontSize: "11px",
      },
      formatter: (value) => `${value}`,
    },
  },
  grid: {
    show: true,
    borderColor: "#e5e7eb",
    strokeDashArray: 0,
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
    padding: {
      left: -2,
      right: 4,
    },
  },
  tooltip: {
    enabled: false,
  },
  colors: ["#6366F1"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 90, 100],
    },
  },
};

const series = [
  {
    name: "Sessions",
    data: [0.4, 6.2, 1.8, 7.5, 13.8],
  },
];

export function SessionsApexChart() {
  return (
    <div className="w-full h-44">
      <ApexChart options={options} series={series} type="area" height="100%" />
    </div>
  );
}
