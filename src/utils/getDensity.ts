import axios from "axios";
import { formatToPKm } from "./dataConverter"; // Make sure this path is correct

export const getDensity = async (): Promise<string | null> => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/country/WLD/indicator/EN.POP.DNST?date=2020&format=json`);
        const densityData = response.data[1]; // Get the array at index 1
        if (densityData && densityData.length > 0) {
            const { value } = densityData[0]; // Extract the value from the first object
            return formatToPKm(value); // Format the value using formatToPKm function
        }
        return null; 
    } catch (error: any) {
        console.error("Error fetching density data:", error);
        return null; // Return null in case of error
    }
};
