export function LanguageToggle({ lang, setLang }: { lang: 'en' | 'es', setLang: (lang: 'en' | 'es') => void }) {
  return (
    <div >
      <button
        onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
        className={`px-3 py-1 rounded-md ${lang === 'en' ? 'bg-primary text-zinc-900' : 'bg-zinc-700 text-white'} hover:bg-primary transition-colors`}
      >
        EN
      </button>
      <button
        onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
        className={`px-3 py-1 rounded-md ml-2 ${lang === 'es' ? 'bg-primary text-zinc-900' : 'bg-zinc-700 text-white'} hover:bg-primary transition-colors`}
      >
        ES
      </button>
    </div>
  )
}

