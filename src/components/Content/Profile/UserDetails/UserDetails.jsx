import s from './UserDetails.module.css';
import defaultAvatar from '../../../../assets/images/avatarDefault.png';

const UserDetails = (props) => {
  console.log(props);
  return (
    <div className={s.userDetailsWrapper}>
      <div className={s.imgWrapper}>
        <img alt="userImg" src={props.user.photos?.small ? props.user.photos.large : defaultAvatar} />
      </div>
      <div className={s.descriptionWrapper}>
        <div className={s.description}>
          <div className={s.name}>
            <span>Name:</span>
            <span>{props.user.fullName}</span>
          </div>
          <div className={s.age}>
            <span>Age:</span>
            <span>24</span>
          </div>
          <div className={s.location}>
            <span>About Me:</span>
            <span>{props.user.aboutMe}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
