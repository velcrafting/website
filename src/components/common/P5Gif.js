import React, { useEffect, useRef, useState } from 'react';
import p5 from 'p5';
import GIF from 'gif.js';

const P5SketchGif = ({ onSketchReady }) => {
  const sketchRef = useRef();
  const [sketch, setSketch] = useState(null);

  useEffect(() => {
    const s = new p5((p) => {
      let gif;
      let maxRadius;
      let now = new Date();
      let timeSeed = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
      let angleOffset, angleIncrement, startHue, a, b;

      p.setup = () => {
        p.createCanvas(1200, 900);
        maxRadius = p.max(p.width, p.height) * 2; // Ensure drawing exceeds canvas bounds
        angleOffset = p.random(timeSeed) % p.TWO_PI;
        angleIncrement = p.map(timeSeed % 1000, 0, 999, p.TWO_PI / 60, p.TWO_PI / 20);
        startHue = p.random(timeSeed % 360);
        a = p.random(0.5, 2.5);
        b = p.random(0.5, 2.5);
        p.colorMode(p.HSB, 360, 100, 100);
        p.noFill();
        p.background(0);
        p.frameRate(30);

        // Initialize GIF capture
        gif = new GIF({
          workers: 2,
          quality: 10,
          workerScript: '/public/gif.worker.js',
          width: 1200,
          height: 900,
        });

        gif.on('finished', (blob) => {
          window.open(URL.createObjectURL(blob));
        });
      };

      p.draw = () => {
        let currentTime = new Date();
        let seconds = currentTime.getSeconds() + currentTime.getMilliseconds() * 0.001;
        p.background(0, 0.05);
        let dynamicHue = (startHue + seconds * 10) % 360;
        p.stroke(dynamicHue, 80, 100);
        p.strokeWeight(2);
        for (let theta = angleOffset; theta < maxRadius; theta += angleIncrement) {
          let radius = a + b * theta;
          let x = radius * p.cos(theta) + p.width / 2;
          let y = radius * p.sin(theta) + p.height / 2;
          let size = (2 + p.sin(theta + seconds) * 1.5) * b;
          p.ellipse(x, y, size, size);

          // Capture this frame
          gif.addFrame(p.canvas, {copy: true, delay: 1000 / 30}); // Capture at 30 fps
        }

        // Check if 10 seconds have passed
        if (p.frameCount >= 30 * 10) {
          p.noLoop(); // Stop the loop
          gif.render(); // Start rendering the GIF
        }
      };

      setSketch({
        regenerateArt: () => {
          p.setup(); // Reinitialize the sketch
        },
        saveSketch: () => {
          p.save(`spiral_${Date.now()}.png`);
        },
        captureGif: () => {
          p.loop(); // Ensure the loop is running
          // The GIF capturing starts automatically in draw loop
        },
      });
    }, sketchRef.current);

    return () => {
      s.remove();
    };
  }, []);

  useEffect(() => {
    if (sketch) {
      onSketchReady(sketch);
    }
  }, [sketch, onSketchReady]);

  return <div ref={sketchRef}></div>;
};

export default P5SketchGif;
