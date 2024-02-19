export interface CreateAccountCollegeMetadataRequest {
  accountId: number;
  graduationStatusId: number;
  collegeId: number;
  educationProgramId: number;
  visibility: boolean;
  startingYear: string;
  graduationYear: string | null;
  programOnGoing: boolean;
  roles?: string[];
  bypassCache?: boolean;
  cacheKey?: string | null;
  cacheGroupKey?: string;
}
