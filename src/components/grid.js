import React, { useEffect } from 'react';
import { closestCenter, DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import SortableFile from './sortableFile';
import AddImageButton from './AddImageButton';

const Grid = (props) => {
  const { fileArr, setFileArr, onInputClick, onFilesAdded } = props;

  const handleOnChange = (e) => {
    const newArr = [...fileArr];
    const res = newArr.find((item) => item.id == e.target.id);
    res.checked = !res.checked;

    setFileArr(newArr);
  };


  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8
      }
    })
  );

  const onDragEnd = (e) => {
    const { active, over } = e;
    if (active.id === over.id) {
      return;
    }
    setFileArr((fileArr) => {
      const oldIndex = fileArr.findIndex((image) => image.id === active.id);
      const newIndex = fileArr.findIndex((image) => image.id === over.id);

      return arrayMove(fileArr, oldIndex, newIndex);
    });
  };

  return (
    <div className=" mx-auto p-9 bg-white height">
      <div className="grid justify-stretch grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {fileArr?.length >= 0 && (
          <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd} sensors={sensors}>
            <SortableContext items={fileArr} strategy={rectSortingStrategy}>
              {fileArr.map((image, index) => (
                <SortableFile
                  key={image.id}
                  image={image}
                  index={index}
                  handleOnChange={handleOnChange}
                />
              ))}
            </SortableContext>
          </DndContext>
        )}

        <AddImageButton onFilesAdded={onFilesAdded} onInputClick={onInputClick} />
      </div>
    </div>
  );
};

export default Grid;
