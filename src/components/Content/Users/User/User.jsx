import s from './User.module.css';

const User = (props) => {
  return (
    <div className={s.userWrapper}>
      <div className={s.leftSide}>
        <div className={s.followed}>
          {props.followed ? (
            <button onClick={() => props.unfollow(props.id)}>Unfollow</button>
          ) : (
            <button onClick={() => props.follow(props.id)}>Follow</button>
          )}
        </div>
      </div>
      <div className={s.rightSide}>
        <div className={s.fullName}>{props.name}</div>
        <div className={s.status}>{props.status}</div>
        <div className={s.location}>{props.location?.country}</div>
      </div>
    </div>
  );
};

export default User;
