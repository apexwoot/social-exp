import { addMessageAC, updateNewDialogMessageInputAC } from '../../../../redux/dialogsReducer';
import NewMessage from './NewMessage';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    newDialogsInput: state.dialogs.newDialogsInput,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageAC());
    },
    updateNewDialogInput: (input) => {
      dispatch(updateNewDialogMessageInputAC(input));
    },
  };
};

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage);

export default NewMessageContainer;
