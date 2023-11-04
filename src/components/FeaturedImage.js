import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React from 'react';

const FeaturedImage = ({ image, index, handleOnChange }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: image.id
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform)
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="col-span-2 row-span-2 border-2 blurImg"
      style={style}
    >
      <img src={image.fileUrl} alt="Featured" className="w-full h-full object-cover" />
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

export default FeaturedImage;
