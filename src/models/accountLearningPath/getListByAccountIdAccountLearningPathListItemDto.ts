export interface GetListByAccountIdAccountLearningPathListItemDto {
  id: number;
  learningPathId: number;
  learningPathName: string;
  startingTime: string;
  imageUrl: string;
  totalNumberOfPoints: number;
  percentComplete: number;
  isContinue: boolean;
  isComplete: boolean;
  isLiked: boolean;
  isSaved: boolean;
  isActive: boolean;
}
