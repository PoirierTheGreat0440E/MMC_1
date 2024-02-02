import {React,useState} from 'react';
import "../mmf1_styling/message_list.css";
import '../mmf1_styling/styling_general.css';

function Message({message_content}){
    return(<article className="message">
        <p>{message_content}</p>
    </article>)
}

function MessageList({message_list,selected_topic}){
    return(<div className='message_list'>
        <div className='topic_space'>
            <p>{selected_topic}</p>
        </div>
        {message_list.map( (message) => <Message key={message.message_id} message_content={message.message_contenu}/>  )}
    </div>);
}

export default MessageList;