import React, { useEffect } from "react";

const MouseEffect = () => {
  useEffect(() => {
    const characters = ["Hire", "Me"];
    const colors = ["#14b8a6", "#06b6d4", "#0ea5e9", "#3b82f6", "#6366f1"]; // Updated vibrant neon-cool colors
    const font = "bold 18px sans-serif";
    const cursorOffset = { x: 0, y: 0 };

    let width = window.innerWidth;
    let height = window.innerHeight;
    let cursor = { x: width / 2, y: height / 2 };
    let particles = [];
    let canvas, context, animationFrame;
    const canvImages = [];

    const createCanvas = () => {
      canvas = document.createElement("canvas");
      context = canvas.getContext("2d");

      canvas.style.position = "fixed";
      canvas.style.top = "0px";
      canvas.style.left = "0px";
      canvas.style.pointerEvents = "none";
      canvas.style.zIndex = "999999";

      canvas.width = width;
      canvas.height = height;
      document.body.appendChild(canvas);

      context.font = font;
      context.textBaseline = "middle";
      context.textAlign = "center";

      characters.forEach((char) => {
        const measurement = context.measureText(char);
        const bgCanvas = document.createElement("canvas");
        const bgCtx = bgCanvas.getContext("2d");

        bgCanvas.width = measurement.width * 1.5;
        bgCanvas.height = measurement.actualBoundingBoxAscent * 2.5;

        bgCtx.font = font;
        bgCtx.textAlign = "center";
        bgCtx.textBaseline = "middle";
        bgCtx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        bgCtx.fillText(char, bgCanvas.width / 2, bgCanvas.height / 2);

        canvImages.push(bgCanvas);
      });
    };

    const Particle = function (x, y, img) {
      this.age = 0;
      this.lifeSpan = Math.floor(Math.random() * 60 + 80);
      this.velocity = {
        x: (Math.random() - 0.5) * 5,
        y: (Math.random() - 0.5) * 5,
      };
      this.position = { x: x + cursorOffset.x, y: y + cursorOffset.y };
      this.canvasImg = img;

      this.update = (ctx) => {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.velocity.x += (Math.random() < 0.5 ? -1 : 1) / 30;
        this.velocity.y += (Math.random() < 0.5 ? -1 : 1) / 15;

        const scale = Math.max((this.lifeSpan - this.age) / this.lifeSpan * 2, 0);
        const deg = (this.lifeSpan - this.age) / 5;
        const rad = deg * 0.0174533;

        ctx.translate(this.position.x, this.position.y);
        ctx.rotate(rad);

        ctx.drawImage(
          this.canvasImg,
          (-this.canvasImg.width / 2) * scale,
          -this.canvasImg.height / 2,
          this.canvasImg.width * scale,
          this.canvasImg.height * scale
        );

        ctx.rotate(-rad);
        ctx.translate(-this.position.x, -this.position.y);
        this.age++;
        this.lifeSpan--;
      };
    };

    const addParticle = (x, y) => {
      const img = canvImages[Math.floor(Math.random() * canvImages.length)];
      particles.push(new Particle(x, y, img));
    };

    const updateParticles = () => {
      context.clearRect(0, 0, width, height);
      particles.forEach((p) => p.update(context));
      particles = particles.filter((p) => p.lifeSpan > 0);
    };

    const loop = () => {
      updateParticles();
      animationFrame = requestAnimationFrame(loop);
    };

    const onMouseMove = (e) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
      addParticle(cursor.x, cursor.y);
    };

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    // Init
    createCanvas();
    loop();
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrame);
      canvas?.remove();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return null;
};

export default MouseEffect;
