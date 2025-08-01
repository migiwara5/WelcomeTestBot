import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface UseCasesSectionProps {
  title: string;
  usecases: string[];
}

export const UseCasesSection = ({ title, usecases }: UseCasesSectionProps) => {
  const icons = ['🥖', '🛒', '💼', '🔧', '🎪']; // Icons for each use case

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold glow-accent mb-4">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform any document into an intelligent conversation partner
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usecases.map((usecase, index) => {
            const [title, description] = usecase.split(': ');
            return (
              <Card
                key={index}
                className="card-ocean border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 group animate-float"
                style={{ animationDelay: `${0.3 * index}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {icons[index] || '🔮'}
                  </div>
                  <CardTitle className="text-xl font-semibold text-primary group-hover:glow-text transition-all duration-300">
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                    {description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};