export interface AnalyzeRequest {
  resumeText: string;
  jobDescription: string;
}
 
export interface AnalyzeResponse {
  matchScore: number;
  matchedSkills: string[];
  missingSkills: string[];
  suggestions: string[];
  experienceLevel: 'Junior' | 'Mid' | 'Senior';
}