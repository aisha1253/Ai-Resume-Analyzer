import { analyzeSchema } from '@/lib/validation';

describe('analyzeSchema', () => {
  test('fails when resumeText is empty', () => {
    const result = analyzeSchema.safeParse({
      resumeText: '',
      jobDescription: 'some long job description text here that meets minimum',
    });
    expect(result.success).toBe(false);
  });

  test('fails when resumeText is less than 50 characters', () => {
    const result = analyzeSchema.safeParse({
      resumeText: 'short',
      jobDescription: 'some long job description text here that meets minimum',
    });
    expect(result.success).toBe(false);
  });

  test('fails when jobDescription is empty', () => {
    const result = analyzeSchema.safeParse({
      resumeText:
        'I am a developer with 3 years experience in React TypeScript and Node.js building full stack web apps',
      jobDescription: '',
    });
    expect(result.success).toBe(false);
  });

  test('passes with valid input', () => {
    const result = analyzeSchema.safeParse({
      resumeText:
        'I am a developer with 3 years experience in React TypeScript and Node.js building full stack web apps',
      jobDescription: 'We are looking for a skilled developer with React experience',
    });
    expect(result.success).toBe(true);
  });
});
