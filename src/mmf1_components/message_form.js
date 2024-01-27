import {React,useState} from 'react';
import '../mmf1_styling/message_form.css';
import '../mmf1_styling/styling_general.css';

function MessageForm(){

    // Sous-fonction pour gérer l'envoi des messages...
    const handleMessageSubmit = function(event){
        event.preventDefault();
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