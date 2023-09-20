import React from 'react';
import classes from './Dialogs.module.css'
import Dialogitem from './DialogsItem/DialogsItem';
import Message from './Massege/Massege';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/state';

const Dialogs = (props) => {
    let state = props.store.getState()

    let dialogsElements =
        state.dialogsPage.dialogs.map(d => (<Dialogitem img={d.img} name={d.name} id={d.id} />));


    let messageElements = state.dialogsPage.messages.map(m => (<Message message={m.message} id={m.id} />))
    let newMessageBody = state.dialogsPage.newMessageBody


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (event) => {
        let body = event.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div className={classes.masseges}>{messageElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>SEND</button></div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;