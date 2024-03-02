export interface GetListByCourseIdLessonListItemDto {
  id: number;
  courseId: number;
  name: string;
  visibility: boolean;
  language: string;
  content: string;
  duration: number;
  isActive: boolean;
  videoUrl: string;
}
