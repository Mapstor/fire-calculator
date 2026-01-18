import CleanStructuredData from '@/components/seo/CleanStructuredData';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Blog Section Schema */}
      <CleanStructuredData 
        type="webpage"
        data={{
          title: "FIRE Calculator Blog",
          description: "Educational articles about Financial Independence, Retire Early strategies, calculators, and planning",
          url: "https://financialfirecalculators.com/blog",
          datePublished: "2024-01-01",
        }}
      />
      {children}
    </>
  );
}