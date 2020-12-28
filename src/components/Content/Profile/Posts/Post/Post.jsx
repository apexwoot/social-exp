import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.postWrapper} id={props.id}>
      <div className={s.imageAreaWrapper}>
        <img alt="" src="https://semantic-ui.com/images/avatar/large/steve.jpg" />
        <div>
          <button>Like</button>
        </div>
        <div>
          <span>{props.likesCount ? props.likesCount : 'No'} likes</span>
        </div>
      </div>
      <div className={s.postMessage}>{props.message}</div>
    </div>
  );
};

export default Post;
