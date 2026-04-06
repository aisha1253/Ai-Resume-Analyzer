import { NextRequest, NextResponse } from 'next/server';
import { analyzeSchema } from '@/lib/validation';
import { analyzeResume } from '@/lib/gemini';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const result = analyzeSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json(
        { error: result.error.issues[0].message },
        { status: 400 }
      );
    }
    
    const { resumeText, jobDescription } = result.data;
    
    const analysisResult = await analyzeResume(resumeText, jobDescription);
    
    return NextResponse.json(analysisResult, { status: 200 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Analysis failed. Please try again.' },
      { status: 500 }
    );
  }
}
