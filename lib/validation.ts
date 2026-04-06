import { z } from 'zod';

export const analyzeSchema = z.object({
  resumeText: z
    .string()
    .min(50, 'Resume is too short — please add at least 50 characters')
    .max(5000, 'Resume is too long — maximum 5000 characters'),
  jobDescription: z
    .string()
    .min(30, 'Job description is too short — minimum 30 characters')
    .max(3000, 'Job description too long — maximum 3000 characters'),
});

export type AnalyzeInput = z.infer<typeof analyzeSchema>;
