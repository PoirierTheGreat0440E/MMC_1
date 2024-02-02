
import {React,useState,useEffect} from 'react';
import TopicList from './mmf1_components/topic_list';
import MessageForm from './mmf1_components/message_form';
import MessageList from './mmf1_components/message_list';
import './App.css';

// Le module node pour faire des requêtes de ouf...
import axios from 'axios';

function App() {

  const [data,setData] = useState([]);

  const [chosen_topic,setChosenTopic] = useState(0);

  const [messages,setMessages] = useState([]);

  // Sous-fonction pour faire une requête GEt vierge à l'endpoint /message...
  function get_messages(topic_id){

    axios.get("http://localhost:3001/messages",{params:{id_topic : topic_id}}).then(response => setMessages(response.data) ).catch(function(error){console.log(error);});

  }

  
  // Sous-fonction pour obtenir les topics du site web...
  function get_topics(){

    axios.get("http://localhost:3001/topic").then( response => setData(response.data) ).catch(function(error){console.log(error);});

  }

  useEffect( () =>{get_topics();} , []);

  useEffect( ()=>{get_messages(chosen_topic);} , [chosen_topic] );

  return (
    <div className="App">
      <TopicList topic_list={data} selected_topic={chosen_topic} topic_identifier={setChosenTopic} />
      <div className="vertical_unfolding">
      <MessageList selected_topic={chosen_topic} message_list={messages}/>
      <MessageForm topic_id_cible={chosen_topic}/>
      </div>
    </div>
  );
}

export default App;
