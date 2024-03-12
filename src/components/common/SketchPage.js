import React, { useState, useEffect } from 'react';
import P5Sketch from './P5Sketch';
import GenerateButton from './GenerateButton';
import SaveButton from './SaveButton';

const SketchPage = () => {
  const [p5Methods, setP5Methods] = useState({});

  const handleGenerateNewImage = () => {
    p5Methods.regenerateArt && p5Methods.regenerateArt();
  };  

  const handleSaveImage = () => {
    p5Methods.saveSketch && p5Methods.saveSketch();
  };

  return (
    <div>
      <P5Sketch onSketchReady={setP5Methods} />
      <GenerateButton onGenerate={handleGenerateNewImage} />
      <SaveButton onSave={handleSaveImage} />
    </div>
  );
};

export default SketchPage;
