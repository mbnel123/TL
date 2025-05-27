import React, { useEffect, useRef } from 'react';
import './SpaceBackground.css';

const SpaceBackground = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Stel canvas grootte in op volledige scherm
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Update canvas grootte bij resize
    window.addEventListener('resize', setCanvasSize);
    setCanvasSize();
    
    // Teken de professionele ruimte-achtergrond
    const drawBackground = () => {
      // Donkere professionele achtergrond - subtiel verloop
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#0a0a0f');
      gradient.addColorStop(0.3, '#12121a');
      gradient.addColorStop(0.7, '#1a1a24');
      gradient.addColorStop(1, '#0f0f16');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Teken subtiele sterren (kleinere, minder opvallende sterren)
      const starCount = 200;
      
      for (let i = 0; i < starCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 1.5 + 0.5; // Kleinere sterren
        const brightness = 0.3 + Math.random() * 0.4; // Gedimdere sterren
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
        ctx.fill();
        
        // Subtiele gloed voor grotere sterren
        if (size > 1.2) {
          ctx.beginPath();
          ctx.arc(x, y, size * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 220, 255, ${brightness * 0.1})`;
          ctx.fill();
        }
      }
      
      // Voeg enkele zeer subtiele nevels toe (veel minder opvallend)
      drawSubtleNebula(canvas.width * 0.15, canvas.height * 0.25, 120, 'rgba(60, 80, 120, 0.03)');
      drawSubtleNebula(canvas.width * 0.75, canvas.height * 0.65, 100, 'rgba(80, 60, 100, 0.025)');
      
      // Teken enkele gedempte planeten (geïnspireerd door je voorbeeld)
      drawProfessionalPlanet(canvas.width * 0.12, canvas.height * 0.15, 25, '#d97f7f', '#b86666'); // Roze/rood
      drawProfessionalPlanet(canvas.width * 0.88, canvas.height * 0.35, 20, '#7fb3d9', '#6699b8'); // Blauw
      drawProfessionalPlanet(canvas.width * 0.25, canvas.height * 0.75, 18, '#96d97f', '#7db866'); // Groen
      drawProfessionalPlanet(canvas.width * 0.75, canvas.height * 0.85, 22, '#d9b77f', '#b89966'); // Oranje
      
      // Voeg een subtiele ring toe aan een planeet
      drawSubtlePlanetRing(canvas.width * 0.12, canvas.height * 0.15, 25, 45, 'rgba(217, 127, 127, 0.3)');
    };
    
    // Functie om een subtiele nevel te tekenen
    const drawSubtleNebula = (x, y, size, color) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
      gradient.addColorStop(0, color);
      gradient.addColorStop(0.6, 'rgba(0, 0, 0, 0)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    };
    
    // Functie om een professionele, gedempte planeet te tekenen
    const drawProfessionalPlanet = (x, y, radius, color1, color2) => {
      // Teken de planeet met subtiel verloop
      const gradient = ctx.createRadialGradient(
        x - radius * 0.3, y - radius * 0.3, radius * 0.1,
        x, y, radius
      );
      gradient.addColorStop(0, color1);
      gradient.addColorStop(0.7, color2);
      gradient.addColorStop(1, '#1a1a24'); // Donkere rand die overgaat in achtergrond
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
      
      // Zeer subtiele highlight
      ctx.beginPath();
      ctx.arc(x - radius * 0.25, y - radius * 0.25, radius * 0.15, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fill();
      
      // Subtiele gloed (veel minder opvallend)
      ctx.beginPath();
      ctx.arc(x, y, radius + 3, 0, Math.PI * 2);
      const glowGradient = ctx.createRadialGradient(x, y, radius, x, y, radius + 3);
      glowGradient.addColorStop(0, `${color1}20`); // Zeer transparant
      glowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glowGradient;
      ctx.fill();
    };
    
    // Functie om subtiele ringen rond een planeet te tekenen
    const drawSubtlePlanetRing = (x, y, innerRadius, outerRadius, color) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(Math.PI / 8);
      
      // Teken de ring
      ctx.beginPath();
      ctx.ellipse(0, 0, outerRadius, outerRadius * 0.2, 0, 0, Math.PI * 2);
      ctx.ellipse(0, 0, innerRadius, innerRadius * 0.2, 0, 0, Math.PI * 2, true);
      
      const gradient = ctx.createRadialGradient(0, 0, innerRadius, 0, 0, outerRadius);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.05)');
      gradient.addColorStop(0.5, color);
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0.02)');
      
      ctx.fillStyle = gradient;
      ctx.fill();
      
      ctx.restore();
    };
    
    // Teken de achtergrond
    drawBackground();
    
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="space-background"
    />
  );
};

export default SpaceBackground;
