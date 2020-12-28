import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem';
import NewMessageContainer from './NewMessage/NewMessageContainer';

const Dialogs = (props) => {
  return (
    <div className={s.dialogsWrapper}>
      <div className={s.dialogItems}>
        {props.dialogs.map((d) => (
          <DialogItem key={d.id} id={d.id} name={d.name} />
        ))}
      </div>
      <div className={s.messageItems}>
        {props.messages.map((m) => (
          <MessageItem key={m.id} messageBody={m.messageBody} />
        ))}
      </div>
      <div className={s.newMessageWrapper}>
        <NewMessageContainer />
      </div>
    </div>
  );
};

export default Dialogs;
