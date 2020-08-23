interface IEmployeeEntities {
        id: number;
        key: string;
        value: string;
        salary: number;
        experience: number;
        isEmployeeCanBePromoted: boolean;
        experienceForPromotion: number| null;
}
export default IEmployeeEntities;
