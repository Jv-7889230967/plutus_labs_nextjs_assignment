import React from 'react';

export const dataTable = () => {
  const tableData = [
    {
      country: 'India',
      population: '1.4B',
      density: '464/km²',
      growthRate: '1.02%',
      lifeExpectancy: '70.8 years',
      birthRate: '17.4/1000',
    },
    {
      country: 'United States',
      population: '331M',
      density: '36/km²',
      growthRate: '0.59%',
      lifeExpectancy: '78.9 years',
      birthRate: '11.6/1000',
    },
    {
      country: 'China',
      population: '1.4B',
      density: '153/km²',
      growthRate: '0.39%',
      lifeExpectancy: '76.7 years',
      birthRate: '10.48/1000',
    },
    {
      country: 'Brazil',
      population: '213M',
      density: '25/km²',
      growthRate: '0.72%',
      lifeExpectancy: '75.4 years',
      birthRate: '13.8/1000',
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-400 text-left">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b border-gray-400">Country</th>
            <th className="px-6 py-3 border-b border-gray-400">Population</th>
            <th className="px-6 py-3 border-b border-gray-400">Density</th>
            <th className="px-6 py-3 border-b border-gray-400">Growth Rate</th>
            <th className="px-6 py-3 border-b border-gray-400">Life Expectancy</th>
            <th className="px-6 py-3 border-b border-gray-400">Birth Rate</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className="bg-white even:bg-gray-100">
              <td className="px-6 py-4 border-b border-gray-400">{row.country}</td>
              <td className="px-6 py-4 border-b border-gray-400">{row.population}</td>
              <td className="px-6 py-4 border-b border-gray-400">{row.density}</td>
              <td className="px-6 py-4 border-b border-gray-400">{row.growthRate}</td>
              <td className="px-6 py-4 border-b border-gray-400">{row.lifeExpectancy}</td>
              <td className="px-6 py-4 border-b border-gray-400">{row.birthRate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

