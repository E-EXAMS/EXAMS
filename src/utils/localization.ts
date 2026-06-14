export type Language = 'en' | 'bn';

export const translations = {
  en: {
    'common.welcome': 'Welcome to EXAMSHALL',
    'common.language': 'Language',
    'auth.login': 'Login',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'quiz.startQuiz': 'Start Quiz',
    'admin.dashboard': 'Admin Dashboard',
    'error.networkError': 'Network error occurred',
  },
  bn: {
    'common.welcome': 'EXAMSHALL এ স্বাগতম',
    'common.language': 'ভাষা',
    'auth.login': 'লগইন করুন',
    'auth.email': 'ইমেইল',
    'auth.password': 'পাসওয়ার্ড',
    'quiz.startQuiz': 'কুইজ শুরু করুন',
    'admin.dashboard': 'অ্যাডমিন ড্যাশবোর্ড',
    'error.networkError': 'নেটওয়ার্ক ত্রুটি ঘটেছে',
  },
} as const;

export function getTranslation(key: string, language: Language): string {
  const value = (translations[language] as any)[key];
  return typeof value === 'string' ? value : key;
}

export function useTranslation(language: Language) {
  return (key: string) => getTranslation(key, language);
}
