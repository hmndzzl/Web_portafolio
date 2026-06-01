import React, { useEffect, useRef, useState } from 'react';

// Import all frames eagerly using Vite's import.meta.glob
const frameModules = import.meta.glob('/src/assets/neuralnetwork/ezgif-frame-*.jpg', { eager: true });
const frameKeys = Object.keys(frameModules).sort();
const FRAME_COUNT = frameKeys.length;

export const NeuralNetworkSequence: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const requestRef = useRef<number | null>(null);
  const [loaded, setLoaded] = useState(0);

  const scrollYRef = useRef(0);
  const currentScrollYRef = useRef(0);

  useEffect(() => {
    let loadedCount = 0;
    const imgs = new Array(FRAME_COUNT);

    frameKeys.forEach((key, index) => {
      const img = new Image();
      // The default export of an image asset in Vite is the URL string
      img.src = (frameModules[key] as any).default;
      img.onload = () => {
        loadedCount++;
        setLoaded(loadedCount);
      };
      imgs[index] = img;
    });

    imagesRef.current = imgs;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const resizeCanvas = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      drawFrame(); // redraw immediately on resize
    };

    window.addEventListener('resize', resizeCanvas);

    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const drawFrame = () => {
      if (!canvas || !ctx || imagesRef.current.length === 0) return;

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = maxScroll > 0 ? Math.max(0, Math.min(1, currentScrollYRef.current / maxScroll)) : 0;
      
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(scrollFraction * FRAME_COUNT)
      );

      const img = imagesRef.current[frameIndex];

      ctx.fillStyle = '#020205'; // match frame edges
      ctx.fillRect(0, 0, width, height);

      if (img && img.complete) {
        // Calculate dimensions to cover the screen like background-size: cover or contain
        // The prompt asks to fit the canvas and since it's 020205 deep black edges, we can do object-fit: contain or cover. 
        // Let's do object-fit: cover equivalent:
        const imgRatio = img.width / img.height;
        const canvasRatio = width / height;
        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
          drawWidth = width;
          drawHeight = width / imgRatio;
          offsetX = 0;
          offsetY = (height - drawHeight) / 2;
        } else {
          drawHeight = height;
          drawWidth = height * imgRatio;
          offsetX = (width - drawWidth) / 2;
          offsetY = 0;
        }

        // Scale up by 1.1 to push the bottom-left watermark off screen
        const scale = 1.1;
        const scaledWidth = drawWidth * scale;
        const scaledHeight = drawHeight * scale;
        const scaledOffsetX = offsetX - (scaledWidth - drawWidth) / 2;
        // Shift slightly up (e.g., 2% of screen height) per request
        const scaledOffsetY = offsetY - (scaledHeight - drawHeight) / 2 - (height * 0.02);

        ctx.drawImage(img, scaledOffsetX, scaledOffsetY, scaledWidth, scaledHeight);
      }
    };

    const animate = () => {
      // Smooth lerp for scroll position
      currentScrollYRef.current += (scrollYRef.current - currentScrollYRef.current) * 0.08;
      
      // Prevent microscopic updates
      if (Math.abs(scrollYRef.current - currentScrollYRef.current) > 0.5) {
        drawFrame();
      } else {
        // Snap to exact if very close
        currentScrollYRef.current = scrollYRef.current;
        drawFrame();
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    // Initial draw
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          pointerEvents: 'none',
          display: 'block',
        }}
      />
      {/* Loading state indicator if needed */}
      {loaded < FRAME_COUNT && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          color: 'var(--color-primary)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
          zIndex: 100,
          background: 'rgba(0,0,0,0.5)',
          padding: '4px 8px',
          borderRadius: '4px'
        }}>
          Loading sequence: {Math.floor((loaded / FRAME_COUNT) * 100)}%
        </div>
      )}
    </>
  );
};

export default NeuralNetworkSequence;
