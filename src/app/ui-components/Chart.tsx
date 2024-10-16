import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function Chart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          area: true,
          color: '#A92EFA'
        },
      ]}
      width={500}
      height={300}
    >
      {/* Defining the linear gradient */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A92EFA" />
          <stop offset="100%" stopColor="rgba(100, 27, 148, 0)" />
        </linearGradient>
      </defs>
    </LineChart>
  );
}
