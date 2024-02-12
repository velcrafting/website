import React, { useRef } from 'react';
import { Modal } from 'flowbite-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const MediaModal = ({ mediaItems, showModal, setShowModal }) => {
  const mainSliderRef = useRef();
  const previewSliderRef = useRef();

  // Function to navigate the main slider based on preview selection
  const handlePreviewClick = (index) => {
    if (mainSliderRef.current) {
      mainSliderRef.current.slickGoTo(index);
    }
  };

  // Main slider settings
  const mainSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.media-preview-slider', // This should match the class name of the preview slider
  };

  // Preview slider settings
  const previewSettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: '.media-main-slider', // This should match the class name of the main slider
  };

  return (
    <Modal show={showModal} onClose={() => setShowModal(false)} dismissible>
      <Modal.Header>Media Gallery</Modal.Header>
      <Modal.Body>
        <div className="media-main-slider">
          <Slider {...mainSettings} ref={mainSliderRef}>
            {mediaItems.map((media, index) => (
                <div key={index} className="w-full max-h-96 flex justify-center items-center">
                    {media.type === 'video' ? (
                        <video src={media.url} controls className="max-w-full max-h-96 mx-auto" style={{ height: 'auto' }} />
                    ) : (
                        <img src={media.url} alt={`Media ${index}`} className="max-w-full max-h-96 mx-auto" style={{ height: 'auto' }} />
                    )}
                </div>
            ))}
          </Slider>
        </div>
        <div className="media-preview-slider mt-4">
          <Slider {...previewSettings} ref={previewSliderRef}>
            {mediaItems.map((media, index) => (
              <div key={index} onClick={() => handlePreviewClick(index)} className="px-2">
                <img src={media.thumbnail || media.url} alt={`Preview ${index}`} className="w-full h-auto mx-auto cursor-pointer" />
              </div>
            ))}
          </Slider>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default MediaModal;
