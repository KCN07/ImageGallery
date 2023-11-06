import React from 'react';

const AddImageButton = ({ onFilesAdded, onInputClick }) => {
  return (
    <div className="md:col-span-1 lg:col-span-1 flex w-100 rounded-lg">
      <div className="relative w-full">
        <label
          htmlFor="file-input"
          className="w-full h-full flex flex-col justify-center items-center cursor-pointer bg-white text-black border-2 hover:border-4 border-dashed transition duration-300 ease-in-out rounded-md"
        >
          <img
            src={process.env.PUBLIC_URL + '/images/AddImageButton.png'}
            alt="Add Images"
            className="w-full h-full object-cover"
          />
        </label>
        <div className="flex items-start">
          <input
            id="file-input"
            type="file"
            style={{ visibility: 'hidden' }}
            accept=".jpg, .jpeg, .png, .gif, .webp"
            onChange={(e) => onFilesAdded(e)}
            onClick={(e) => onInputClick(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default AddImageButton;
