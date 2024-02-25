export interface GetListByAccountIdAccountAnnouncementListItemDto {
    id: number;
    announcementTypeName: string;
    organizationName: string;
    read: boolean;
    priority: number;
    visibility: boolean;
    name: string;
    content: string;
    publishedDate: string;
}