import React, { useState } from 'react';
import Modal from '../Modal'

import './App.scss';


const App = () => {
  const [modalActive, setModalActive] = useState(false)

  return (
    < div className="AppWrapper" >
      Test content
      <main>
        <button className="open-btn" onClick={() => setModalActive(true)}>Open Modal</button>
      </main>
      <Modal active={modalActive} setActive={setModalActive}>
        <p >Ваша рекомендуемая суточная норма калорий составляет</p>
        <p >2800 ккал</p>
        <ul >Продукты, которые вам не рекомендуется употреблять
          <li >1. Мучные продукты</li>
          <li >2. Молоко</li>
          <li >3. Красное мясо</li>
          <li >4. Копчености</li>
        </ul>
        <button>Начать худеть</button>
      </Modal>
    </div >
  )
}

App.propTypes = {
  // bla: PropTypes.string,
};

App.defaultProps = {
  // bla: 'test',
};

export default App;
