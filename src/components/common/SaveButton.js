import React from 'react';
import { Button } from 'flowbite-react';

const SaveButton = ({ onSave }) => (
  <Button onClick={onSave}>Save Image</Button>
);

export default SaveButton;
