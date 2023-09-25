export const toDashSeparatedCase = (str: string): string => {
    return str.toLowerCase().split(' ').join('-');
};

export const getRandomNumberInRange = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}; 