export interface GetListByAccountIdLearningPathAccountLessonListItemDto {
  learningPathId: number;
  courseId: number;
  lessonId: number;
  accountId: number;
  points: number;
  isComplete: boolean;
  lessonDuration: number;
}
