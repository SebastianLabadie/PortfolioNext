


export function Footer({ lang }: { lang: "en" | "es" }) {
  const content = {
    en: {
      title: "Thanks for Scrolling"
    },
    es: {
      title: "Gracias por scrollear"
    },
  };

  return (
    <footer className="py-[100px] bg-bgSecondary ">
      <div className="container mx-auto px-4 text-center">
        <p className="text-4xl font-sourceSerifPro text-primary mb-10">&quot{content[lang].title}&quot</p>
      </div>
    </footer>
  )
}

