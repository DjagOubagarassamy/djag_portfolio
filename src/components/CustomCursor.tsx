import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isDown, setIsDown] = useState(false);

  useEffect(() => {
    // 1. Cacher le curseur natif partout via une règle CSS globale
    const styleEl = document.createElement('style');
    styleEl.id = 'hide-native-cursor';
    styleEl.innerHTML = `
      html, body, * {
        cursor: none !important;
      }
    `;
    document.head.appendChild(styleEl);

    // 2. Écouteurs pour position + clic
    const onMouseMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const onMouseDown = () => setIsDown(true);
    const onMouseUp   = () => setIsDown(false);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      // Cleanup
      document.head.removeChild(styleEl);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  const size = 13;
  const style: React.CSSProperties = {
    position:      'fixed',
    top:           0,
    left:          0,
    width:         `${size}px`,
    height:        `${size}px`,
    transform:     `translate3d(${pos.x}px, ${pos.y}px, 0) rotate(-45deg) ${isDown ? 'scale(0.9)' : ''}`,
    pointerEvents: 'none',
    borderLeft:    '2px solid currentColor',
    borderBottom:  '2px solid currentColor',
    transition:    'transform 0.08s ease-out',
    zIndex:        9999,
    backgroundColor: '#933fff',
  };

  return <div style={style} />;
};

export default CustomCursor;
