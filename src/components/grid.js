import React, { useEffect } from 'react';
import { closestCenter, DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  rectSortingStrategy
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import SortableFile from './sortableFile';


const Grid = (props) => {
  console.log(props)
  const { fileArr, setFileArr, onInputClick, onFilesAdded } = props;
  


  const handleOnChange = (e) => {
   console.log(e);
    const newArr = [...fileArr];
    const res = newArr.find((item) => item.id == e.target.id);
    res.checked = !res.checked;

    setFileArr(newArr);
    console.log(newArr);

  };

  useEffect(() => {
  }, [fileArr]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  )


  let firstIndex = fileArr[0];

  const onDragEnd = (e)=>{
    // debugger
    const { active, over } = e;
    if (active.id === over.id) {
      return;
    }
    console.log(active.id, over.id);
    setFileArr((fileArr) => {
      const oldIndex = fileArr.findIndex((image) => image.id === active.id);
      const newIndex = fileArr.findIndex((image) => image.id === over.id);
      console.log(oldIndex, newIndex)
      return arrayMove(fileArr, oldIndex, newIndex);
    });
  }

  return (

    <div className=" mx-auto p-9 bg-white height">
   
      {fileArr?.length > 0 ?
        (
          <div className="grid justify-stretch grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {/* Featured Image */}
            <div className="col-span-2 row-span-2 border-2 blurImg">
              <img src={firstIndex.fileUrl} alt="Featured" className="w-full h-full object-cover" />
              <div className='overlay flex items-start' style={{opacity: firstIndex.checked ? '1':''}}>
                <input
                  type="checkbox"
                  id={firstIndex.id}
                  name="topping"
                  value="Paneer"
                  className='w-4 h-4 ml-2 mt-2'
                  checked={firstIndex.checked}
                  onChange={(e) => handleOnChange(e)}
                />
              </div>
            </div>
            <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd} sensors={sensors}>
              <SortableContext items={fileArr} strategy={rectSortingStrategy}>
            {fileArr.slice(1).map((image, index) => (
              <SortableFile key={image.id} image={image} index={index} handleOnChange={handleOnChange} />
            ))}
            </SortableContext>
            </DndContext>

            <div className="md:col-span-1 lg:col-span-1 flex  w-100 " >
              <div className="relative w-full" >
                <label for="file-input" className="w-full h-full flex flex-col justify-center items-center cursor-pointer bg-white text-black py-2 px-4 border-2 border-dashed hover:bg-red-600/50 transition duration-300 ease-in-out absolute">
                  <i className="fa-regular fa-image"></i>
                  <div>Add Images</div>
                </label>
                <input id="file-input" type="file" style={{ visibility: 'hidden' }} accept='.jpg, .jpeg, .png, .gif, .webp'
                  onChange={(e) => onFilesAdded(e)} onClick={(e) => onInputClick(e)} />
              </div>
            </div>
            
          </div>
        ) :
        <div className="grid grid-cols-5 gap-4">
          <div className="md:col-span-1 lg:col-span-1 flex w-40 h-44">
            
            <div className="relative w-full" style={{height: '15vw'}} >
              <label for="file-input" className="w-100 flex flex-col justify-center items-center cursor-pointer bg-white text-black py-2 px-4 border-2 border-dashed hover:bg-red-600/50 transition duration-300 ease-in-out absolute">
                <i className="fa-regular fa-image"></i>
                <div>Add Images</div>
              </label>
              <input id="file-input" type="file" style={{ visibility: 'hidden' }} accept='.jpg, .jpeg, .png, .gif, .webp'
                onChange={(e) => onFilesAdded(e)} onClick={(e) => onInputClick(e)} />
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Grid;

