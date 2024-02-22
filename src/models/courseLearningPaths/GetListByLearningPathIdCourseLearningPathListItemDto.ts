export interface GetListByLearningPathIdCourseLearningPathListItemDto {
  id: number;
  courseId: number;
  learningPathId: number;
  courseCategoryId: number;
  courseName: string;
  totalDuration: number;
  priority: number;
  isActive: boolean;
  visibility: boolean;
}
