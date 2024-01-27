import {React,useState} from 'react';
import "../mmf1_styling/message_list.css";
import '../mmf1_styling/styling_general.css';

function Message({message_content}){
    return(<article className="message">
        <p>{message_content}</p>
    </article>)
}

function MessageList({selected_topic}){
    return(<div className='message_list'>
        <div className='topic_space'>
            <p>{selected_topic}</p>
        </div>
        <Message message_content={"Premier message"}/>
    </div>);
}

export default MessageList;