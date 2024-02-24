export interface GetListSurveyListItemDto {
    id: number;
    surveyTypeId: number;
    surveyTypeName: string;
    organizationId: number;
    organizationName: string;
    priority: number;
    visibility: boolean;
    title: string;
    content: string;
    connectionLink: string;
    isActive: boolean;
    publishedDate: string;
}