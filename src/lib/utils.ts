import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const tableData = [
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