const getRandomNumber= (min: number, max:number): number => {
    return Math.ceil(Math.random() * (max - min) + min);
};
export default getRandomNumber;
