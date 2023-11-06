import React from 'react';

const DeltModal = ({ isOpen, handleDelete, filteredObjects, onClose }) => {
  return isOpen ? (
    <div>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header p-4 font-semibold flex justify-between">
            <h4 className="modal-title text-red-800">Delete Image</h4>
            <button onClick={onClose} className=" text-black-800 font-semibold pr-2">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="modal-body">
            Are you sure you want to delete {filteredObjects.length}{' '}
            {filteredObjects.length > 1 ? 'images' : 'image'} ?
          </div>
          <div className="modal-footer">
            <button
              onClick={onClose}
              className=" text-gray-100 bg-gray-600 hover:bg-gray-700 font-semibold px-2 py-1 mr-2 rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="text-gray-100 bg-red-600 hover:bg-red-700 font-semibold px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default DeltModal;
