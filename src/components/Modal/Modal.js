import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import './Modal.scss';
import { CLOSE_MODAL } from '../../store/types/modalTypes';

export default function Modal({ data, error }) {
  const { title, message, onClose } = error ? data.errorMessage : data;
  const modalWrapp = useRef(null);
  const dispatch = useDispatch();

  const closeModal = useCallback(() => {
    if (error) data.clearError();
    else dispatch({ type: CLOSE_MODAL });

    if (onClose) onClose();
  }, [dispatch, onClose, data, error]);

  useEffect(() => {
    const wrapper = modalWrapp.current;
    const handlerWrappClick = ({ target }) => {
      if (target.classList.contains('modal-click')) closeModal();
    };

    wrapper.addEventListener('click', handlerWrappClick);

    return () => wrapper.removeEventListener('click', handlerWrappClick);
  }, [dispatch, closeModal]);

  return (
    <div className="modal-card-wrapp container-fluid" ref={modalWrapp}>
      <div className="row modal-click justify-content-center align-items-center h-100">
        <div className="col-xl-7 col-md-9">
          <div className={`card modal-card ${error ? 'modal-card-error' : ''}`}>
            <div className="card-header pt-3">
              <h5>{title}</h5>
            </div>
            <div className="card-body">
              {message}
            </div>
            <div className="card-footer">
              <div className="row justify-content-end">
                <div className="col-md-3 col-xl-2">
                  <button
                    className="bttn primary btn-close"
                    type="button"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
