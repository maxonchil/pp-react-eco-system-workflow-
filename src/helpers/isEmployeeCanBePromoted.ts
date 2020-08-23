const isEmployeeCanBePromoted = (experience:number, experienceForPromotion: number | null): boolean => {
    return experience >= experienceForPromotion;

};

export default isEmployeeCanBePromoted;
