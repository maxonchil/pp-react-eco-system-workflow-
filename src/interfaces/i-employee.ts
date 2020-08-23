interface IEmployee {
    id: number,
    position: string,
    salary: number;
    experience: number;
    isEmployeeCanBePromoted: boolean;
    experienceForPromotion?: number;
}

export default IEmployee;
