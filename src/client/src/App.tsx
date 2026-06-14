import { useEffect, useState } from 'react';
import { Globe } from 'lucide-react';
import { useTranslation, type Language } from '@/utils/localization';

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const t = useTranslation(language);
  const [apiStatus, setApiStatus] = useState('checking...');

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(() => setApiStatus('connected'))
      .catch(() => setApiStatus('disconnected'));
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'bn' : 'en');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900">EXAMSHALL</h1>
          <div className="flex gap-4 items-center">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              <Globe size={18} />
              <span>{language === 'en' ? 'Bangla' : 'English'}</span>
            </button>
            <div className="text-sm text-slate-500">API: {apiStatus}</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">{t('common.welcome')}</h2>
          <p className="text-slate-600 text-lg mb-8">
            {language === 'en'
              ? 'Full-Stack Bilingual Educational Assessment Portal'
              : 'সম্পূর্ণ স্ট্যাক দ্বিভাষিক শিক্ষামূলক মূল্যায়ন পোর্টাল'}
          </p>
          
          {/* Demo Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-8 bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Student Mode</h3>
              <p className="text-slate-600 text-sm">
                {language === 'en'
                  ? 'Take quizzes and track your progress'
                  : 'কুইজ নিন এবং আপনার অগ্রগতি ট্র্যাক করুন'}
              </p>
            </div>

            <div className="p-8 bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-colors">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Admin Mode</h3>
              <p className="text-slate-600 text-sm">
                {language === 'en'
                  ? 'Manage quizzes and users'
                  : 'কুইজ এবং ব্যবহারকারী পরিচালনা করুন'}
              </p>
            </div>

            <div className="p-8 bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-colors">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Guest Access</h3>
              <p className="text-slate-600 text-sm">
                {language === 'en'
                  ? 'Try a quiz without registration'
                  : 'নিবন্ধন ছাড়াই কুইজ চেষ্টা করুন'}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
