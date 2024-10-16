"use client"
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Chart from '@/app/ui-components/Chart';
import { setCategory, setSelectedYear, setYearRange } from '@/lib/store/dropdownSlice';
import { RootState } from '@/lib/store/store';
import { tableData } from '@/lib/utils';

const Page = () => {
  const dispatch = useDispatch();

  // Select values from the store
  const category = useSelector((state: RootState) => state.dropdown.category);
  const yearRange = useSelector((state: RootState) => state.dropdown.yearRange);
  const selectedYear = useSelector((state: RootState) => state.dropdown.selectedYear);

  return (
    <main className='population-container'>
      <div className='h-[50px] w-full px-[15px] flex items-center justify-between'>
        {/* Category Dropdown */}
        <select
          className="h-[40px] w-[140px] px-[7px] rounded-[14px]"
          value={category}
          onChange={(e) => dispatch(setCategory(e.target.value))}
        >
          <option value="default" disabled>Select an option</option>
          <option value="population">Population</option>
          <option value="population density">Density</option>
          <option value="growth rate">Growth rate</option>
          <option value="life expectancy">Life Exp</option>
          <option value="birth rate">Birth rate</option>
          <option value="death rate">Death rate</option>
          <option value="fertility rate">Fertility rate</option>
        </select>

        {/* Year Range Dropdown */}
        <select
          className="h-[40px] w-[140px] px-[7px] rounded-[14px]"
          value={yearRange}
          onChange={(e) => dispatch(setYearRange(e.target.value))}
        >
          <option value="default" disabled>Select an option</option>
          <option value="5yr">5yr</option>
          <option value="10yr">10yr</option>
          <option value="20yr">20yr</option>
          <option value="50yr">50yr</option>
          <option value="100yr">100yr</option>
        </select>
      </div>

      <div className='flex-grow w-full flex flex-col'>
        <div className='h-fit w-full px-[60px]'>
          <Chart />
        </div>

        <div className='flex-grow w-full flex flex-col'>
          <div className='h-[40px] w-full flex justify-end px-[30px]'>
            {/* Selected Year Dropdown */}
            <select
              className="h-[40px] w-[140px] px-[7px] rounded-[14px]"
              value={selectedYear}
              onChange={(e) => dispatch(setSelectedYear(e.target.value))}
            >
              <option value="default" disabled>Select a year</option>
              {Array.from({ length: 2023 - 1990 + 1 }, (_, i) => (
                <option key={i} value={2023 - i}>
                  {2023 - i}
                </option>
              ))}
            </select>
          </div>

          <div className='size-full flex justify-center overflow-x-auto'>
            <table className="h-full w-full min-w-[30rem] border border-gray-400 text-left">
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
        </div>
      </div>
    </main>
  );
};

export default Page;
