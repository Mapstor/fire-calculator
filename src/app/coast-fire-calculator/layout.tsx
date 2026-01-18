import CleanStructuredData from '@/components/seo/CleanStructuredData';

export default function CoastFireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CleanStructuredData 
        type="calculator"
        data={{
          name: 'Coast FIRE Calculator',
          description: 'Calculate when you can stop saving for retirement and let compound growth take over. Find your Coast FI number.',
          url: 'https://financialfirecalculators.com/coast-fire-calculator',
          features: [
            'Calculate Coast FIRE Number',
            'Years Until Coast FIRE',
            'Compound Growth Projections',
            'Age-based Analysis',
            'Interactive Visualizations'
          ]
        }}
      />
      <CleanStructuredData 
        type="breadcrumb" 
        data={{
          items: [
            { name: 'Home', url: 'https://financialfirecalculators.com' },
            { name: 'Coast FIRE Calculator', url: 'https://financialfirecalculators.com/coast-fire-calculator' }
          ]
        }}
      />
      {children}
    </>
  );
}