import { addMessage, updateNewDialogMessageInput } from '../../../../redux/dialogsReducer';
import NewMessage from './NewMessage';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    newDialogsInput: state.dialogs.newDialogsInput,
  };
};

const NewMessageContainer = connect(mapStateToProps, { addMessage, updateNewDialogMessageInput })(NewMessage);

export default NewMessageContainer;
