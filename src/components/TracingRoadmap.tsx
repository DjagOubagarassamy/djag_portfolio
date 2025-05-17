// components/TracingRoadmap.tsx
import React, { useEffect, useState } from 'react';

interface TracingRoadmapProps {
  /** Position horizontale du faisceau (ex: '50%' ou '100px') */
  x?: string;
  /** Épaisseur du faisceau en px */
  thickness?: number;
  /** Couleur du faisceau */
  color?: string;
}

const TracingRoadmap: React.FC<TracingRoadmapProps> = ({
  x = '50%',
  thickness = 4,
  color = '#9333ea',
}) => {
  const [heightPct, setHeightPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY    = window.scrollY;
      const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
      const progress   = docHeight > 0 ? scrollY / docHeight : 0;
      setHeightPct(Math.min(1, Math.max(0, progress)) * 100);
    };

    // calcul initial + écoute
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      style={{
        position:        'fixed',
        borderRadius:     '50px',
        top:             0,
        left:            x,
        width:           `${thickness}px`,
        height:          `${heightPct}%`,
        backgroundColor: color,
        transform:       'translateX(-50%)',
        pointerEvents:   'none',
        zIndex:          9999,
      }}
    />
  );
};

export default TracingRoadmap;
