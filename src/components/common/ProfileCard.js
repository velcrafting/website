// components/ProfileCard.js
import React from 'react';
import { Card } from 'flowbite-react';

const ProfileCard = () => {
    return (
        <Card className="max-w-sm">
          <div className="flex flex-col items-center ">
            <img
              alt="Profile image"
              src="/3362.png"
              height="96"
              width="96"
              className="mb-3 h-28 w-28 rounded-full inner-shadow"
            />
            <h5 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">Steven | Velcrafting</h5>
            <span className="text-xs text-gray-500 dark:text-gray-400">Designer | Developer | PM </span>
          </div>
        </Card>
      );
};

export default ProfileCard;

