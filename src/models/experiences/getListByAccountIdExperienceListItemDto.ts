export interface GetListByAccountIdExperienceListItemDto {
    id: number;
    cityName: string;
    companyName: string;
    jobTitle: string;
    industry: string;
    startingDate: string;
    endingDate: string | null;
    isCurrentlyWorking: boolean;
    description: string | null;
    isActive: boolean;
}