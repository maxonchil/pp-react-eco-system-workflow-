interface IEmployee {
    role:string,
    salary: number;
    experience: number;
    isEmployeeCanBePromoted: boolean;
    experienceForPromotion?:number;
}
export default IEmployee;
