import styles from './Users.module.css';
import User from './User/User';
import Preloader from '../common/Preloader/Preloader';

const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
  const pagesArray = [];
  for (let i = 1; i <= pagesCount; i++) pagesArray.push(i);
  return (
    <>
      {props.isFetching ? (
        <Preloader />
      ) : (
        <div className={styles.UsersWrapper}>
          <div className={styles.pagination}>
            {pagesArray.map((p) => {
              return (
                <span
                  key={p}
                  className={`${styles.pageNumber} ${props.currentPage === p ? styles.selectedPage : undefined}`}
                  onClick={() => {
                    props.onPageChanged(p);
                  }}
                >
                  {p}
                </span>
              );
            })}
          </div>
          {props.users.map((u) => (
            <User
              key={u.id}
              id={u.id}
              name={u.name}
              followed={u.followed}
              status={u.status}
              profilePhoto={u.photos?.small}
              follow={props.follow}
              unfollow={props.unfollow}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Users;
