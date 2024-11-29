export function LanguageToggle({ lang, setLang }: { lang: 'en' | 'es', setLang: (lang: 'en' | 'es') => void }) {
  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
        className={`px-3 py-1 rounded-md ${lang === 'en' ? 'bg-yellow-500 text-zinc-900' : 'bg-zinc-700 text-white'} hover:bg-yellow-400 transition-colors`}
      >
        EN
      </button>
      <button
        onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
        className={`px-3 py-1 rounded-md ml-2 ${lang === 'es' ? 'bg-yellow-500 text-zinc-900' : 'bg-zinc-700 text-white'} hover:bg-yellow-400 transition-colors`}
      >
        ES
      </button>
    </div>
  )
}

