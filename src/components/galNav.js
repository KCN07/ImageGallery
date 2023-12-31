import React from 'react';
import DeltModal from './DeltModal';

const GalNav = (props) => {
  const { handleDelete, filteredObjects, isOpen, setIsOpen } = props;

  return (
    <nav className="bg-white border-b-2 sticky top-0 z-50">
      <div className="mx-auto  px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="order-first flex justify-between items-center ">
            {filteredObjects?.length > 0 ? (
              <div className="text-red-800 font-semibold">
                {filteredObjects.length} {filteredObjects.length > 1 ? 'files' : 'file'} selected
              </div>
            ) : (
              <>
                <i className="fa-solid fa-images fa-2xl pl-2 pr-2 mt-2 text-red-600/50"></i>
                <h1 className="text-3xl font-bold text-red-600/50">Gallery</h1>
              </>
            )}
          </div>
          {filteredObjects?.length > 0 ? (
            <>
              <div className="order-last pr-2 text-red-800 font-semibold">
                <button onClick={() => setIsOpen(true)}>
                  Delete {filteredObjects.length > 1 ? 'files' : 'file'}
                </button>
              </div>
              <DeltModal
                isOpen={isOpen}
                handleDelete={handleDelete}
                filteredObjects={filteredObjects}
                onClose={() => setIsOpen(false)}
              />
            </>
          ) : (
            ''
          )}
        </div>
      </div>
    </nav>
  );
};

// onClick={handleDelete}

export default GalNav;
