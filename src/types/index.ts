// Shared type definitions for EXAMSHALL

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'student' | 'admin' | 'guest';
  createdAt: string;
  updatedAt: string;
  streak?: number;
  avatar?: string;
}

export interface Quiz {
  id: string;
  title: string;
  titleBangla: string;
  description: string;
  descriptionBangla: string;
  class: number; // 6-10
  subject: 'General Science' | 'Mathematics' | 'English' | 'ICT' | 'History';
  questions: Question[];
  duration: number; // in minutes
  totalPoints: number;
  passingPercentage: number;
  isPublished: boolean;
  isDraft: boolean;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface Question {
  id: string;
  questionText: string;
  questionTextBangla: string;
  options: QuestionOption[];
  correctOptionId: string;
  explanation: string;
  explanationBangla: string;
  points: number;
  order: number;
}

export interface QuestionOption {
  id: string;
  text: string;
  textBangla: string;
  order: number;
}

export interface QuizSubmission {
  id: string;
  userId: string;
  quizId: string;
  answers: SubmissionAnswer[];
  score: number;
  totalScore: number;
  accuracy: number; // percentage
  duration: number; // in seconds
  submittedAt: string;
  isLocked: boolean;
  lockExpiresAt?: string;
}

export interface SubmissionAnswer {
  questionId: string;
  selectedOptionId: string;
  isCorrect: boolean;
}

export interface ClearanceRequest {
  id: string;
  userId: string;
  quizId: string;
  submissionId: string;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  requestedAt: string;
  respondedAt?: string;
  respondedBy?: string;
  rejectionReason?: string;
}

export interface Analytics {
  totalUsers: number;
  totalStudents: number;
  totalAdmins: number;
  totalSubmissions: number;
  averageScore: number;
  categoricalAttempts: Record<string, number>;
  topPerformers: User[];
  recentSubmissions: QuizSubmission[];
}

export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
