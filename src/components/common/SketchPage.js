import React, { useState } from 'react';
import P5Sketch from './P5Sketch';
import GenerateButton from './GenerateButton';
import SaveButton from './SaveButton';
import { Card } from 'flowbite-react';

const SketchPage = () => {
  const [p5Methods, setP5Methods] = useState({});

  const handleGenerateNewImage = () => {
    p5Methods.regenerateArt && p5Methods.regenerateArt();
  };

  const handleSaveImage = () => {
    p5Methods.saveSketch && p5Methods.saveSketch();
  };

  return (
    <div className="flex justify-center py-8">
      <Card>
      <div className="flex flex-col items-center mt-[-20px]">
            <h5 className="text-lg font-medium text-gray-900 dark:text-white">Days Spiraling</h5>
              <span className="text-s text-gray-500 dark:text-gray-400">
              A coding meets creative project where the time of day impacts the generated art piece. As time passes the art lives and breaths until you navigate away, or generate a new image.   
              </span>
            </div>
        <div className="mt-[-10px]">
          <P5Sketch onSketchReady={setP5Methods} />
        </div>
        <div className="flex justify-around mb-[-15px] mt-[-10px]">
          <SaveButton onSave={handleSaveImage} />
          <GenerateButton onGenerate={handleGenerateNewImage} />
        </div>
      </Card>
    </div>
  );
};

export default SketchPage;
