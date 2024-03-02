export interface GetListAccountLearningPathListItemDto {
  id: number;
  accountId: number;
  learningPathId: number;
  totalNumberOfPoints: number;
  percentComplete: number;
  isContinue: boolean;
  isComplete: boolean;
  isLiked: boolean;
  isSaved: boolean;
  isActive: boolean;
}
