import OGImage from '@/components/OGImage';

export default function OGImagePage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: '#f5f5f5',
      padding: '20px'
    }}>
      <div style={{ 
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        <OGImage />
      </div>
      <div style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'white',
        padding: '12px 24px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        fontSize: '14px',
        color: '#666'
      }}>
        Right-click the image above and save it as "og-image.png" (1200x630px)
      </div>
    </div>
  );
}