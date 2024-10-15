export const formatNumber = (num: number): string => {
    if (num >= 1_000_000_000) {
        return Math.floor(num / 1_000_000_000) + 'B';
    } else if (num >= 1_000_000) {
        return Math.floor(num / 1_000_000) + 'M';
    } else {
        return num.toString();
    }
};
export const formatToPKm = (num: number): string => {
    return Math.floor(num) + ' p/Km';
};
