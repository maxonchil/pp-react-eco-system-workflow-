interface IEmployeeEntities {
        key: string;
        value: string;
        salary: number;
        experience: number;
        isEmployeeCanBePromoted: boolean;
        experienceForPromotion?: number;
}
export default IEmployeeEntities;
