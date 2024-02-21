export interface GetListByLearningPathIdAccountLearningPathListItemDto {
  id: number;
  accountId: number;
  learningPathId: number;
  learningPathCategoryId: number;
  learningPathName: string;
  visibility: boolean;
  startingTime: string;
  endingTime: string;
  numberOfLikes: number;
  totalDuration: number;
  imageUrl: string;
  totalNumberOfPoints: number;
  percentComplete: number;
  isContinue: boolean;
  isComplete: boolean;
  isLiked: boolean;
  isSaved: boolean;
  isActive: boolean;
}
