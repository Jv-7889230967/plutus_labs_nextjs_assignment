import axios from "axios";
import { getWorldPopulation } from "./getWorldPopulation";
import { formatNumber } from "./dataConverter"; // Import your formatNumber function

// Helper function to convert formatted population string to number
const convertFormattedPopulationToNumber = (formattedPopulation: string): number => {
    if (formattedPopulation.endsWith("B")) {
        return Number(formattedPopulation.slice(0, -1)) * 1_000_000_000; // Convert billions to actual number
    } else if (formattedPopulation.endsWith("M")) {
        return Number(formattedPopulation.slice(0, -1)) * 1_000_000; // Convert millions to actual number
    }
    return Number(formattedPopulation); // Return as is if it's a plain number
};

export const getGrowth = async (): Promise<string | null> => {
    try {
        const population = await getWorldPopulation();
        if (population === null) {
            console.error("Failed to fetch world population");
            return null;
        }
        const actualPopulation = convertFormattedPopulationToNumber(population);

        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/country/WLD/indicator/SP.POP.GROW?date=1960:2023&format=json`);
        const growthData = response.data[1];

        if (growthData && growthData.length > 0) {
            const growthRate = growthData[0].value;
            const increase = (actualPopulation * (growthRate / 100)); // Calculate the increase
            const formattedValue = formatNumber(increase); // Format the increase
            return formattedValue; // Return the formatted increase
        }
        return null;
    } catch (error: any) {
        console.error("Error fetching growth data:", error);
        return null;
    }
};
