import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = (props) => {
  return (
    <div className={s.postsWrapper}>
      {props.posts.map((p) => (
        <Post key={p.id} message={p.message} likesCount={p.likesCount} />
      ))}
    </div>
  );
};

export default Posts;
