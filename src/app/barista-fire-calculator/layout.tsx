import CleanStructuredData from '@/components/seo/CleanStructuredData';

export default function BaristaFireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CleanStructuredData 
        type="calculator"
        data={{
          name: 'Barista FIRE Calculator',
          description: 'Calculate your path to semi-retirement with part-time work. Plan for Barista FIRE with healthcare benefits.',
          url: 'https://firecalculator.com/barista-fire-calculator',
          features: [
            'Barista FIRE Number Calculation',
            'Part-time Income Planning',
            'Healthcare Benefits Analysis',
            'Reduced FIRE Target',
            'Work-Life Balance Projections'
          ]
        }}
      />
      <CleanStructuredData 
        type="breadcrumb" 
        data={{
          items: [
            { name: 'Home', url: 'https://firecalculator.com' },
            { name: 'Barista FIRE Calculator', url: 'https://firecalculator.com/barista-fire-calculator' }
          ]
        }}
      />
      {children}
    </>
  );
}