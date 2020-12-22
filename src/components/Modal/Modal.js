import React from 'react';
// import styles from './Modal.module.scss';
// import './Modal.module.scss'

const Modal = ({ active, setActive, children }) => {



  return (
    <>
      <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <div className={active ? "modalContent active" : "modalContent"} onClick={e => e.stopPropagation()}>
          <div>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal