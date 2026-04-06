import mammoth from 'mammoth';
import { extractTextFromPDF } from './pdfParser';

/**
 * Extract text from a PDF or Word file
 */
export async function extractTextFromFile(file: File): Promise<string> {
  const fileName = file.name.toLowerCase();
  
  try {
    if (fileName.endsWith('.pdf')) {
      return await extractTextFromPDF(file);
    } else if (fileName.endsWith('.docx')) {
      return await extractFromWord(file);
    } else if (fileName.endsWith('.doc')) {
      throw new Error('Old .doc format is not supported. Please convert to .docx or PDF.');
    } else {
      throw new Error('Unsupported file format. Please upload PDF or Word (.docx) files.');
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to extract text from file');
  }
}

/**
 * Extract text from Word document
 */
async function extractFromWord(file: File): Promise<string> {
  const arrayBuffer = await file.arrayBuffer();
  
  try {
    const result = await mammoth.extractRawText({ arrayBuffer });
    return result.value;
  } catch (error) {
    throw new Error('Failed to parse Word document');
  }
}
