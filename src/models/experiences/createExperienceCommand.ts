export interface CreateExperienceCommand {
    accountId: number;
    cityId: number;
    companyName: string;
    jobTitle: string;
    industry: string;
    startingDate: string;
    endingDate: string | null;
    isCurrentlyWorking: boolean;
    description: string | null;
    isActive: boolean;
}