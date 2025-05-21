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
    
    // Teken de statische ruimte-achtergrond
    const drawBackground = () => {
      // Achtergrond verloop van diep paars naar donkerblauw
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#0f0c29');
      gradient.addColorStop(0.5, '#302b63');
      gradient.addColorStop(1, '#24243e');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Teken sterren (kleine witte punten)
      const starCount = 400;
      
      for (let i = 0; i < starCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 3;
        const brightness = 0.5 + Math.random() * 0.5;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
        ctx.fill();
        
        // Voeg wat gloed toe aan grotere sterren
        if (size > 1.5) {
          ctx.beginPath();
          ctx.arc(x, y, size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 220, 255, ${brightness * 0.2})`;
          ctx.fill();
        }
      }
      
      // Teken een paar kleurrijke nevels
      drawNebula(canvas.width * 0.2, canvas.height * 0.3, 150, 'rgba(100, 50, 255, 0.1)');
      drawNebula(canvas.width * 0.8, canvas.height * 0.7, 200, 'rgba(255, 100, 100, 0.08)');
      drawNebula(canvas.width * 0.5, canvas.height * 0.2, 180, 'rgba(50, 255, 150, 0.07)');
      
      // Teken planeten
      drawPlanet(canvas.width * 0.15, canvas.height * 0.7, 60, '#6ee7b7', '#14b8a6');
      drawPlanet(canvas.width * 0.85, canvas.height * 0.3, 40, '#a78bfa', '#7c3aed');
      drawPlanet(canvas.width * 0.65, canvas.height * 0.8, 35, '#fb924c', '#ea580c');
      drawPlanet(canvas.width * 0.4, canvas.height * 0.2, 50, '#f472b6', '#db2777');
      drawPlanet(canvas.width * 0.75, canvas.height * 0.5, 30, '#facc15', '#eab308');
      
      // Teken ringen rond enkele planeten
      drawPlanetRing(canvas.width * 0.15, canvas.height * 0.7, 60, 110, '#6ee7b7');
      drawPlanetRing(canvas.width * 0.75, canvas.height * 0.5, 30, 70, '#facc15');
    };
    
    // Functie om een nevel (gekleurde wolk) te tekenen
    const drawNebula = (x, y, size, color) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    };
    
    // Functie om een planeet te tekenen
    const drawPlanet = (x, y, radius, color1, color2) => {
      // Teken de planeet
      const gradient = ctx.createRadialGradient(
        x - radius * 0.3, y - radius * 0.3, radius * 0.1,
        x, y, radius
      );
      gradient.addColorStop(0, color1);
      gradient.addColorStop(1, color2);
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
      
      // Voeg wat details toe aan de planeet
      ctx.beginPath();
      ctx.arc(x - radius * 0.2, y - radius * 0.3, radius * 0.2, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.fill();
      
      // Voeg een gloed toe rond de planeet
      ctx.beginPath();
      ctx.arc(x, y, radius + 10, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color1.substring(1, 3)}, ${color1.substring(3, 5)}, ${color1.substring(5, 7)}, 0.1)`;
      ctx.fill();
    };
    
    // Functie om ringen rond een planeet te tekenen
    const drawPlanetRing = (x, y, innerRadius, outerRadius, color) => {
      ctx.beginPath();
      ctx.ellipse(x, y, outerRadius, outerRadius * 0.3, Math.PI / 6, 0, Math.PI * 2);
      ctx.moveTo(x + innerRadius * Math.cos(Math.PI / 6), y + innerRadius * 0.3 * Math.sin(Math.PI / 6));
      ctx.ellipse(x, y, innerRadius, innerRadius * 0.3, Math.PI / 6, 0, Math.PI * 2, true);
      
      const gradient = ctx.createRadialGradient(x, y, innerRadius, x, y, outerRadius);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
      gradient.addColorStop(0.5, `${color}80`); // 50% transparant
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0.1)');
      
      ctx.fillStyle = gradient;
      ctx.fill();
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
