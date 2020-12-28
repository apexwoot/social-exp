import { connect } from 'react-redux';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs.dialogsData,
    messages: state.dialogs.messagesData,
  };
};

const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;
