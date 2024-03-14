import React from 'react';
import { Button } from 'flowbite-react';

const GenerateButton = ({ onGenerate }) => (
  <Button onClick={onGenerate}>New Image</Button>
);

export default GenerateButton;
