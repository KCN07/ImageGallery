import React from 'react';
import FeaturedImage from './FeaturedImage';
import RegularImage from './RegularImage';

const SortableFile = (props) => {
  const { image, index, handleOnChange } = props;

  if (index === 0) {
    return <FeaturedImage image={image} index={index} handleOnChange={handleOnChange} />;
  } else {
    return <RegularImage image={image} index={index} handleOnChange={handleOnChange} />;
  }
};

export default SortableFile;
