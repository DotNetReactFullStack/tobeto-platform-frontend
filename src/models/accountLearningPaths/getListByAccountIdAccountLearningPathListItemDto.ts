export interface GetListByAccountIdAccountLearningPathListItemDto {
  id: number;
  learningPathId: number;
  learningPathCategoryId: number;
  learningPathName: string;
  visibility: boolean;
  startingTime: string;
  endingTime: string;
  numberOfLikes: number;
  totalDuration: number;
  imageUrl: string;
  percentComplete: number;
  totalNumberOfPoints: number;
  isContinue: boolean;
  isComplete: boolean;
  isLiked: boolean;
  isSaved: boolean;
  isActive: boolean;
}
