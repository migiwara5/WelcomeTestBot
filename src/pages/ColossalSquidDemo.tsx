import { useState, useEffect } from 'react';
import { ParticleBackground } from '@/components/ParticleBackground';
import { LanguageToggle } from '@/components/LanguageToggle';
import { HeroSection } from '@/components/HeroSection';
import { UseCasesSection } from '@/components/UseCasesSection';

interface Content {
  title: string;
  subtitle: string;
  cta: string;
  usecasesTitle: string;
  usecases: string[];
}

const content: Record<'en' | 'fr', Content> = {
  en: {
    title: "Talk to a GPT bot trained on a single source",
    subtitle: "This bot only knows what's on the Wikipedia page about the colossal squid. Ask it anything — no hallucinations, no BS. Just precise, focused answers from a custom GPT.",
    cta: "Start the chat below",
    usecasesTitle: "What could you use this for?",
    usecases: [
      "Local bakery: Let customers ask about opening hours, ingredients, allergens, or today's menu.",
      "Online shop: Train the bot on your product catalog or FAQ to provide instant, reliable support.",
      "Consulting agency: Upload your methodology or service brochure and let the bot answer client questions.",
      "Internal team support: Turn an internal process PDF into a smart helpdesk bot.",
      "Event booth or landing page: Replace your static PDF with a smart assistant that interacts."
    ]
  },
  fr: {
    title: "Parlez à un chatbot GPT formé sur un seul document",
    subtitle: "Ce bot connaît uniquement le contenu de la page Wikipédia sur le calmar colossal. Posez vos questions — pas d'hallucinations, pas de bla-bla. Juste des réponses précises et fiables.",
    cta: "Lancer la discussion en bas",
    usecasesTitle: "À quoi cela peut-il servir ?",
    usecases: [
      "Boulangerie: permettre aux clients de poser des questions sur les horaires, les ingrédients ou les allergènes.",
      "Boutique en ligne: entraîner le bot sur votre catalogue ou FAQ pour un support rapide et précis.",
      "Agence de conseil: téléchargez votre offre et laissez le bot répondre aux questions des clients.",
      "Support interne: transformez un document de procédure en assistant intelligent.",
      "Salon ou landing page: remplacez votre PDF statique par un assistant interactif."
    ]
  }
};

export const ColossalSquidDemo = () => {
  const [currentLang, setCurrentLang] = useState<'en' | 'fr'>('en');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Load the Lovable chat widget
    const script = document.createElement('script');
    script.src = "https://plug-in-chat-gpt.lovable.app/widget.js";
    script.id = "lovable-chat-widget";
    script.setAttribute('data-id', 'TON-BOT-ID-ICI');
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById('lovable-chat-widget');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const handleCtaClick = () => {
    // Scroll to the chat widget at the bottom
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  const currentContent = content[currentLang];

  return (
    <div className={`min-h-screen relative particle-effect transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <ParticleBackground />
      
      <LanguageToggle 
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
      />

      <main className="relative z-10">
        <HeroSection
          title={currentContent.title}
          subtitle={currentContent.subtitle}
          cta={currentContent.cta}
          onCtaClick={handleCtaClick}
        />

        <UseCasesSection
          title={currentContent.usecasesTitle}
          usecases={currentContent.usecases}
        />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-12 text-center">
        <div className="card-ocean max-w-md mx-auto px-8 py-6 border-primary/20">
          <p className="text-muted-foreground">
            Built with ❤️ using{' '}
            <span className="text-primary font-semibold">OpenAI</span>{' '}
            and{' '}
            <span className="text-accent font-semibold">Lovable</span>
          </p>
          <p className="text-sm text-muted-foreground/70 mt-2">
            Demo by <span className="text-primary">migiwara5</span>
          </p>
        </div>
      </footer>
    </div>
  );
};