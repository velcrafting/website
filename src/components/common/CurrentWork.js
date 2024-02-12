import React from 'react';
import { Card, List } from 'flowbite-react';

const Current = ({ title, company, dates, tasks, image }) => {
  return (
    <Card className="flex flex-col justify-between h-full space-y-4 shadow bg-white text-black">
      {/* Image at the top */}
      <div className="flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full shadow mb-4"
        />
      </div>

      {/* Title, Company, and Dates centered */}
      <div className="text-center">
        <h5 className="text-xl font-semibold text-gray-900">{title}</h5>
        <p className="text-md font-medium text-gray-700">{company}</p>
        <p className="text-sm text-gray-600">{dates}</p>
      </div>

      {/* Tasks list */}
      <List className="list-disc space-y-2 text-left">
        {tasks.map((task, index) => (
          <List.Item key={index} className="text-sm text-gray-700">{task}</List.Item>
        ))}
      </List>
    </Card>
  );
};

export default Current;
