import s from './UserDetails.module.css';

const UserDetails = (porps) => {
  return (
    <div className={s.userDetailsWrapper}>
      <div className={s.imgWrapper}>
        <img alt="userImg" src="https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg" />
      </div>
      <div className={s.descriptionWrapper}>
        <div className={s.description}>
          <div className={s.name}>
            <span>Name:</span>
            <span>Apex Woot</span>
          </div>
          <div className={s.age}>
            <span>Age:</span>
            <span>24</span>
          </div>
          <div className={s.location}>
            <span>Location:</span>
            <span>Malta</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
