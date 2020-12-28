import s from './MessageItem.module.css';

const MessageItem = (props) => {
  return (
    <div className={s.message} key={props.id}>
      {props.messageBody}
    </div>
  );
};

export default MessageItem;
