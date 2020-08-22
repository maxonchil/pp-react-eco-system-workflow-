const isEmployeeCanBePromoted = (experience:number, experienceForPromotion: number):boolean => {
    return experience >= experienceForPromotion;
};

export default isEmployeeCanBePromoted;
