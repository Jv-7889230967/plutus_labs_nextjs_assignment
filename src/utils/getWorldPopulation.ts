import axios from "axios";
import { formatNumber } from "./dataConverter";

export const getWorldPopulation = async (year: number): Promise<string | null> => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/country/WLD/indicator/SP.POP.TOTL?date=${year}&format=json`);
    const populationData = response.data[1];
    if (populationData && populationData.length > 0) {
      const { value } = populationData[0];
      const formattedValue = formatNumber(value);
      return formattedValue;
    }
    return null;
  } catch (error: any) {
    return error;
  }
};
