import React from 'react';
import s from './NewMessage.module.css';

const NewMessage = (props) => {
  const addMessage = () => {
    props.addMessage();
  };

  const updateNewDialogInput = (e) => {
    props.updateNewDialogInput(e.target.value);
  };

  return (
    <div className={s.newMessageContainer}>
      <div>
        <textarea onChange={updateNewDialogInput} value={props.newDialogsInput}></textarea>
      </div>
      <div>
        <button onClick={addMessage}>Send</button>
      </div>
    </div>
  );
};

export default NewMessage;
