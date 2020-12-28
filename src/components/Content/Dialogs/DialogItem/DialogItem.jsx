import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';

const DialogItem = (props) => {
  return (
    <div className={s.dialog} key={props.id}>
      <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>
        <div className={s.dialogBorder}>{props.name}</div>
      </NavLink>
    </div>
  );
};

export default DialogItem;
