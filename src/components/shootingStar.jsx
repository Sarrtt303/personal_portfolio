import  { useEffect, useRef } from 'react';

const ShootingStars = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // ShootingStar class
    class ShootingStar {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.len = (Math.random() * 80) + 10;
        this.speed = (Math.random() * 5) + 6;
        this.size = (Math.random() * 1) + 0.1;
        this.waitTime = new Date().getTime() + (Math.random() * 6000) + 500;
        this.active = false;
      }

      update() {
        if (this.active) {
          this.x -= this.speed;
          this.y += this.speed;
          if (this.x < 0 || this.y >= canvas.height) {
            this.reset();
          } else {
            ctx.lineWidth = this.size;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + this.len, this.y - this.len);
            ctx.strokeStyle = '#FFED8A';
            ctx.stroke();
          }
        } else {
          if (this.waitTime < new Date().getTime()) {
            this.active = true;
          }
        }
      }
    }

    // Initialize shooting stars
    const shootingStars = [
      new ShootingStar()
      
    ];

    // Animation loop
    const animate = () => {
      // Clear canvas with a semi-transparent background
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw shooting stars
      shootingStars.forEach(star => star.update());

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animate);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default ShootingStars;
