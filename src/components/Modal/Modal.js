import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Modal.scss';
import { CLOSE_MODAL } from '../../store/types/modalTypes';
import closeIcon from '../../img/close.svg';

export default function Modal() {
  const { title, message, onClose } = useSelector((state) => state.modal);
  const modalWrapp = useRef(null);
  const dispatch = useDispatch();

  const closeModal = useCallback(() => {
    dispatch({ type: CLOSE_MODAL });
    if (onClose) onClose();
  }, [dispatch, onClose]);

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
          <div className="card modal-card">
            <div className="card-header pt-3">
              <div className="row">
                <div className="col-11">
                  <h5>{title}</h5>
                </div>
                <div className="col-1">
                  <button
                    type="button"
                    className="bttn bttn-close"
                    aria-label="Close"
                    onClick={closeModal}
                  >
                    <img src={closeIcon} className="bttn-img" alt="close" />
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body">
              {message}
            </div>
            <div className="card-footer">
              <div className="row justify-content-end">
                <div className="col-2">
                  <button
                    className="bttn primary"
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
