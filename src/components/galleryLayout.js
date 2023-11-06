import React, { useState } from 'react';
import GalNav from './galNav';
import Grid from './grid';
import { v4 as uuidv4 } from 'uuid';

const GalleryLayout = () => {
  const [fileArr, setFileArr] = useState([
    {
      id: 1,
      fileUrl: process.env.PUBLIC_URL + '/images/image-1.webp',
      detail: '',
      checked: false
    },
    {
      id: 2,
      fileUrl: process.env.PUBLIC_URL + '/images/image-2.webp',
      detail: '',
      checked: false
    },
    {
      id: 3,
      fileUrl: process.env.PUBLIC_URL + '/images/image-3.webp',
      detail: '',
      checked: false
    },
    {
      id: 4,
      fileUrl: process.env.PUBLIC_URL + '/images/image-4.webp',
      detail: '',
      checked: false
    },
    {
      id: 5,
      fileUrl: process.env.PUBLIC_URL + '/images/image-5.webp',
      detail: '',
      checked: false
    },
    {
      id: 6,
      fileUrl: process.env.PUBLIC_URL + '/images/image-6.webp',
      detail: '',
      checked: false
    },
    {
      id: 7,
      fileUrl: process.env.PUBLIC_URL + '/images/image-7.webp',
      detail: '',
      checked: false
    },
    {
      id: 8,
      fileUrl: process.env.PUBLIC_URL + '/images/image-8.webp',
      detail: '',
      checked: false
    },
    {
      id: 9,
      fileUrl: process.env.PUBLIC_URL + '/images/image-9.webp',
      detail: '',
      checked: false
    },
    {
      id: 10,
      fileUrl: process.env.PUBLIC_URL + '/images/image-10.jpeg',
      detail: '',
      checked: false
    },
    {
      id: 11,
      fileUrl: process.env.PUBLIC_URL + '/images/image-11.jpeg',
      detail: '',
      checked: false
    }
  ]);

  const [isOpen, setIsOpen] = useState(false);

  // Clearing add image input file to avoid issues with consecutive uploads
  const onInputClick = (event) => {
    event.target.value = '';
  }; 

  const onFilesAdded = (e) => {
    let fileList = [...fileArr];
    let file = URL.createObjectURL(e.target.files[0]);
    let fileDetail = {
      id: uuidv4(),
      fileUrl: file,
      checked: false,
      detail: e.target.files[0]
    };
    fileList = [fileDetail, ...fileList];
    setFileArr(fileList);
  };

  const filteredObjects = fileArr.filter((obj) => obj.checked === true);

  const handleDelete = () => {
    const newArr = fileArr.filter((obj) => obj.checked !== true);
    setFileArr(newArr);
    setIsOpen(false);
  };

  return (
    <div className="bg-gray-100 p-8 height">
      <GalNav
        handleDelete={handleDelete}
        filteredObjects={filteredObjects}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Grid
        fileArr={fileArr}
        setFileArr={setFileArr}
        onInputClick={onInputClick}
        onFilesAdded={onFilesAdded}
      />
    </div>
  );
};

export default GalleryLayout;
