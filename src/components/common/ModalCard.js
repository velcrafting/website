import React, { useState } from 'react';
import { Button, Card } from 'flowbite-react';
import MediaModal from './MediaModal';

const ModalCard = ({ title, description, modalContent }) => {
  const [showMediaModal, setShowMediaModal] = useState(false);

  // Embossed effect with CSS box-shadow
  const embossedStyle = {
    boxShadow: 'inset -2px -2px 2px #ffffff50, inset 2px 2px 4px rgba(0, 0, 0, 0.4)',
    backgroundColor: '#6C7B95',
    color: 'white',
  };

  // Active/Pressed state style
  const activeStyle = 'active:shadow-inner active:bg-[#e6c965]';

  return (
    <>
      <Card className="w-full flex flex-col justify-between p-2 text-center h-auto shadow">
        <div className="flex-1 space-y-2">
          <h5 className="text-xl font-bold mb-2">
            {title}
          </h5>
          <p className="text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
        <Button
          onClick={() => setShowMediaModal(true)}
          className={`mt-auto font-bold py-2 px-4 rounded ${activeStyle}`}
          style={embossedStyle}
        >
          View Gallery
        </Button>
      </Card>

      {showMediaModal && (
        <MediaModal
          mediaItems={modalContent}
          showModal={showMediaModal}
          setShowModal={setShowMediaModal}
        />
      )}
    </>
  );
};

export default ModalCard;
