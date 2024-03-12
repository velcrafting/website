import React, { useEffect, useRef, useState } from 'react';
import p5 from 'p5';

const P5Sketch = ({ onSketchReady }) => {
  const sketchRef = useRef();
  const [sketch, setSketch] = useState(null);

  useEffect(() => {
    const s = new p5((p) => {
      let maxRadius;
      let now = new Date();
      let timeSeed = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
      let angleOffset, angleIncrement, startHue, a, b;

      p.setup = () => {
        p.createCanvas(1200, 900);
        maxRadius = p.max(p.width, p.height) * 2; // Ensure drawing exceeds canvas bounds
        angleOffset = p.random(timeSeed) % p.TWO_PI;
        angleIncrement = p.map(timeSeed % 1000, 0, 999, p.TWO_PI / 60, p.TWO_PI / 20); // Tighter spiral
        startHue = p.random(timeSeed % 360);
        a = p.random(0.5, 2.5); // Adjust for broader radius changes
        b = p.random(0.5, 2.5); // Adjust for broader loop distance
        p.colorMode(p.HSB, 360, 100, 100);
        p.noFill();
        p.background(0);
        p.frameRate(30);
      };

      p.draw = () => {
        let currentTime = new Date();
        let seconds = currentTime.getSeconds() + currentTime.getMilliseconds() * 0.001;
        p.background(0, 0.05); // Slight fade effect for motion
        let dynamicHue = (startHue + seconds * 10) % 360; // Change hue over time
        p.stroke(dynamicHue, 80, 100); // Brighter color
        p.strokeWeight(2); // Thicker line for visibility
        for (let theta = angleOffset; theta < maxRadius; theta += angleIncrement) {
          let radius = a + b * theta;
          let x = radius * p.cos(theta) + p.width / 2;
          let y = radius * p.sin(theta) + p.height / 2;
          let size = (2 + p.sin(theta + seconds) * 1.5) * b; // Dynamic ellipse size
          p.ellipse(x, y, size, size);
        }
      };

      setSketch({
        regenerateArt: () => {
          p.setup(); // Call setup to regenerate with new parameters
        },
        saveSketch: () => {
          p.save(`spiral_${Date.now()}.png`);
        }
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

export default P5Sketch;
