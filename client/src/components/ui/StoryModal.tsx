import { ArrowLeft, Palette, Sparkle, TextIcon, Upload } from 'lucide-react';
import React, { useState, useRef } from 'react';
import toast from 'react-hot-toast';

const StoryModal = ({ setShowModal, fetchStories }) => {
  const bgColors = ['#4f46e5', '#7c3aed', '#db2777', '#e11d48', '#ca8a04'];

  const [mode, setMode] = useState('text');
  const [background, setBackground] = useState(bgColors[0]);
  const [text, setText] = useState('');
  const [media, setMedia] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const colorPickerRef = useRef(null);

  const handleOpenColorPicker = () => {
    colorPickerRef.current?.click();
  };

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
        <div className='flex items-center mt-4 gap-2'>
          {bgColors.map((color) => (
            <button
              key={color}
              className='w-6 h-6 ring rounded-full'
              style={{ backgroundColor: color }}
              onClick={() => setBackground(color)}
            />
          ))}
          <button
            onClick={handleOpenColorPicker}
            className='w-7 h-7 rounded-full bg-white flex items-center justify-center text-black text-sm shadow'
          >
            🎨
          </button>
          <input
            type='color'
            ref={colorPickerRef}
            className='absolute w-8 h-8 opacity-0'
            onChange={(e) => setBackground(e.target.value)}
          />
        </div>

        <div className='flex gap-2 mt-4'>
          <button
            onClick={() => {
              setMode('text');
              setMedia(null);
              setPreviewUrl(null);
            }}
            className={`flex-1 flex items-center justify-center gap-2 p-2 rounded ${
              mode === 'text' ? 'bg-white text-black' : 'bg-zinc-800'
            }`}
          >
            <TextIcon /> Text
          </button>
          <label
            className={`flex-1 flex items-center justify-center gap-2 p-2 rounded cursor-pointer ${
              mode === 'media' ? 'bg-white text-black' : 'bg-zinc-800'
            }`}
          >
            <Upload /> Photo/Video
            <input
              type='file'
              accept='image/*,video/*'
              className='hidden'
              onChange={(e) => {
                handleMediaUpload(e);
                setMode('media');
              }}
            />
          </label>
        </div>
        <div className='mt-10 space-y-3'>
          <button onClick={() => toast.promise(handleCreateStory(), {
            loading: 'Saving...',
            success: <p>Story Created!</p>,
            error: e => <p>{e.message}</p>
          })} className="flex items-center justify-center gap-2 bg-accent hover:bg-[#ff4b4e] py-5 rounded w-full"><Sparkle size={18} />Share Story</button>
          <button className="bg-zinc-800 w-full p-2 rounded">Discard</button>
        </div>
      </div>
    </div>
  );
};

export default StoryModal;
