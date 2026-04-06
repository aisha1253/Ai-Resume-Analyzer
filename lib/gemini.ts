import { GoogleGenerativeAI } from '@google/generative-ai';
import type { AnalyzeResponse } from './types';

export async function analyzeResume(
  resumeText: string,
  jobDescription: string
): Promise<AnalyzeResponse> {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY is not configured');
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });

    const prompt = `You are a professional HR expert and resume analyst.

Analyze the resume below against the job description and return ONLY a valid JSON object.
No markdown, no explanation, no code fences — just raw JSON.

RESUME:
${resumeText}

JOB DESCRIPTION:
${jobDescription}

Return this exact JSON structure:
{
  "matchScore": <integer between 0 and 100>,
  "matchedSkills": ["skill1", "skill2"],
  "missingSkills": ["skill1", "skill2"],
  "suggestions": ["tip1", "tip2", "tip3"],
  "experienceLevel": "Junior" or "Mid" or "Senior"
}`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    console.log('Raw Gemini Response:', responseText);

    // Remove any markdown code fences and trim whitespace
    const cleanedText = responseText
      .replace(/```json\n?/g, '')
      .replace(/```\n?/g, '')
      .trim();

    console.log('Cleaned Text:', cleanedText);

    // Parse as JSON and return typed as AnalyzeResponse
    const parsedResponse = JSON.parse(cleanedText) as AnalyzeResponse;
    return parsedResponse;
  } catch (error) {
    console.error('Gemini API Error:', error);
    throw new Error('Failed to analyze resume. Please try again.');
  }
}
