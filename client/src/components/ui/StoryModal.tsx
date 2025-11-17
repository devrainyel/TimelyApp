import { ArrowLeft, Palette, TextIcon } from 'lucide-react';
import React, { useState, useRef } from 'react';

const StoryModal = ({ setShowModal, fetchStories }) => {
  const bgColors = ['#4f46e5', '#7c3aed', '#db2777', '#e11d48', '#ca8a04'];

  const [mode, setMode] = useState('text');
  const [background, setBackground] = useState(bgColors[0]);
  const [text, setText] = useState('');
  const [media, setMedia] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const colorInputRef = useRef(null);

  const handleMediaUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setMedia(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleCreateStory = async () => {};

  return (
    <div className='fixed inset-0 z-110 min-h-screen bg-black/80 backdrop-blur text-white flex items-center justify-center p-4'>
      <div className='w-full max-w-md'>
        <div className='text-center mb-4 flex items-center justify-between'>
          <button
            onClick={() => setShowModal(false)}
            className='text-white p-2 cursor-pointer'
          >
            <ArrowLeft />
          </button>
          <h2 className='text-lg font-semibold'>Create Story</h2>
          <span className='w-10'></span>
        </div>
        <div
          className='rounded-lg h-96 flex items-center justify-center relative'
          style={{ backgroundColor: background }}
        >
          {mode === 'text' && (
            <textarea
              className='bg-transparent text-white w-full h-full p-5 text-lg resize-none focus:outline-none'
              placeholder="What's on your mind today?"
              onChange={(e) => setText(e.target.value)}
              value={text}
              name=''
              id=''
            />
          )}
          {mode === 'media' &&
            previewUrl &&
            (media?.type.startsWith('image') ? (
              <img
                src={previewUrl}
                alt=''
                className='object-contain max-h-full'
              />
            ) : (
              <video src={previewUrl} className='object-contain max-h-full' />
            ))}
        </div>
        <div className='flex mt-4 gap-2'>
          {bgColors.map((color) => (
            <button
              key={color}
              className='w-6 h-6 ring rounded-full'
              style={{ backgroundColor: color }}
              onClick={() => setBackground(color)}
            />
          ))}
          <div className="mt-20">
          <input
            type='color'
            ref={colorInputRef}
            className='hidden'
            onChange={(e) => setBackground(e.target.value)}
          />
          </div>
          <button
            onClick={() => colorInputRef.current.click()}
            className='w-6 h-6 rounded-full flex items-center justify-center ring bg-white text-accent'
          >
            <Palette size={20} />
          </button>
        </div>

        <div className='flex gap-2 mt-4'>
          <button>
            <TextIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoryModal;
