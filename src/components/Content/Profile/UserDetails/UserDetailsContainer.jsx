import { connect } from 'react-redux';
import UserDetails from './UserDetails';

const mapStateToProps = (state) => ({
  user: state.posts.currentUserShowing,
});

export default connect(mapStateToProps)(UserDetails);
