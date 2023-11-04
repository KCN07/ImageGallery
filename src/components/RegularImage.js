import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React from 'react';

const RegularImage = ({ image, index, handleOnChange }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: image.id
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    minHeight: '64px',
    minWidth: "64px"
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      key={index}
      className="md:col-span-1 lg:col-span-1 border-2 blurImg"
      style={style}
    >
      <img src={image.fileUrl} alt={`Image ${index + 2}`} className="w-full h-full object-cover" />
      <div className="overlay flex items-start" style={{ opacity: image.checked ? '1' : '' }}>
        <input
          type="checkbox"
          id={image.id}
          name="topping"
          value="Paneer"
          className="w-4 h-4 ml-2 mt-2 cursor-pointer"
          checked={image.checked}
          onChange={(e) => handleOnChange(e)}
        />
      </div>
    </div>
  );
};

export default RegularImage;
