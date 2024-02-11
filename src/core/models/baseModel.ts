export default interface BaseModel<TId> {
    id: TId;
    createdDate: string;
    updatedDate: string | null;
    deletedDate: string | null;
}