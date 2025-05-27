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
    
    // Teken de strakke professionele ruimte-achtergrond
    const drawBackground = () => {
      // Donkere professionele achtergrond - strakker verloop
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#050510');
      gradient.addColorStop(0.3, '#0a0a18');
      gradient.addColorStop(0.7, '#12122a');
      gradient.addColorStop(1, '#08081a');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Teken heldere, zichtbare sterren
      const starCount = 350;
      
      for (let i = 0; i < starCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 2.5 + 0.8; // Grotere sterren
        const brightness = 0.6 + Math.random() * 0.4; // Helderder
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
        ctx.fill();
        
        // Duidelijke gloed voor grotere sterren
        if (size > 1.8) {
          ctx.beginPath();
          ctx.arc(x, y, size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 220, 255, ${brightness * 0.15})`;
          ctx.fill();
        }
      }
      
      // Geen nevels - houdt de achtergrond strak en helder
      
      // Teken grotere, meer zichtbare planeten
      drawProfessionalPlanet(canvas.width * 0.15, canvas.height * 0.2, 45, '#e89999', '#cc7777'); // Roze/rood
      drawProfessionalPlanet(canvas.width * 0.85, canvas.height * 0.4, 38, '#99c2e8', '#77aac2'); // Blauw
      drawProfessionalPlanet(canvas.width * 0.25, canvas.height * 0.8, 35, '#a8e899', '#88cc77'); // Groen
      drawProfessionalPlanet(canvas.width * 0.75, canvas.height * 0.85, 40, '#e8c599', '#ccaa77'); // Oranje
      
      // Voeg subtiele ringen toe aan enkele planeten
      drawSubtlePlanetRing(canvas.width * 0.15, canvas.height * 0.2, 45, 75, 'rgba(232, 153, 153, 0.4)');
      drawSubtlePlanetRing(canvas.width * 0.75, canvas.height * 0.85, 40, 70, 'rgba(232, 197, 153, 0.35)');
    };
    
    // Functie om een professionele, maar zichtbare planeet te tekenen
    const drawProfessionalPlanet = (x, y, radius, color1, color2) => {
      // Teken de planeet met duidelijk verloop
      const gradient = ctx.createRadialGradient(
        x - radius * 0.3, y - radius * 0.3, radius * 0.1,
        x, y, radius
      );
      gradient.addColorStop(0, color1);
      gradient.addColorStop(0.6, color2);
      gradient.addColorStop(1, '#1a1a35'); // Donkere maar zichtbare rand
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
      
      // Duidelijke highlight voor 3D-effect
      ctx.beginPath();
      ctx.arc(x - radius * 0.25, y - radius * 0.25, radius * 0.2, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.fill();
      
      // Zichtbare gloed
      ctx.beginPath();
      ctx.arc(x, y, radius + 8, 0, Math.PI * 2);
      const glowGradient = ctx.createRadialGradient(x, y, radius, x, y, radius + 8);
      glowGradient.addColorStop(0, `${color1}40`); // Meer zichtbare transparantie
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
