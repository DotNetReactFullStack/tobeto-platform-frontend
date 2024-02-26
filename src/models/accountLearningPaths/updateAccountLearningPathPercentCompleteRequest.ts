export interface updateAccountLearningPathPercentCompleteRequest {
  accountId: number;
  learningPathId: number;
  totalNumberOfPoints: number;
  percentComplete: number;
  isContinue: boolean;
  isComplete: boolean;
}
