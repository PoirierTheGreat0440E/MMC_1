import {React,useState} from 'react';
import '../mmf1_styling/message_form.css';
import '../mmf1_styling/styling_general.css';

import axios from 'axios';

function MessageForm({topic_id_cible}){

    // Sous-fonction pour gérer l'envoi des messages...
    const handleMessageSubmit = function(event){
        event.preventDefault();
        axios.post("http://localhost:3001/messages",{message_content:message,id:topic_id_cible}).then(response => console.log(response)).catch(function(error){console.log(error);});
        console.log(message);
    }

    // State pour conserver et modifier le message saisi...
    const [message,changeMessage] = useState("");

    
    return(<div className="message_form">
        <form className='zone1' onSubmit={handleMessageSubmit}>
        <p className="instruction_mini">Post a message :</p>
        <textarea onChange={(e)=>{changeMessage(e.target.value);}}></textarea>
        <input className="message_submit" type="submit" value="POST"/>
        </form>
    </div>);

}

export default MessageForm;