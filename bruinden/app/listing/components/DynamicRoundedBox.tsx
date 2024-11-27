'use client';{/* client component*/}

interface DynamicRoundedBoxProperties{
    children: React.ReactNode;
    size: { width: string, height: string };
    backgroundColor?: string;
    borderRadius?: string;     
    shadow?: boolean;      
}

const DynamicRoundedBox: React.FC<DynamicRoundedBoxProperties> = ({ children, size, backgroundColor = 'white', borderRadius = '12px', shadow = true }) => {
    return (
      <div
        className="mx-auto"
        style={{
          width: size.width,
          height: size.height,
          backgroundColor: backgroundColor,
          borderRadius: borderRadius,
          boxShadow: shadow ? '0px 4px 12px rgba(0, 0, 0, 0.1)' : 'none',  // Optional shadow
          padding: '15px',  // Add some internal padding for content spacing
        }}
      >
        {children}
      </div>
    );
}


export default DynamicRoundedBox;