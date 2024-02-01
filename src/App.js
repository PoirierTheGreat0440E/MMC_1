
import {React,useState,useEffect} from 'react';
import TopicList from './mmf1_components/topic_list';
import MessageForm from './mmf1_components/message_form';
import MessageList from './mmf1_components/message_list';
import './App.css';

// Le module node pour faire des requêtes de ouf...
import axios from 'axios';

function App() {

  const [data,setData] = useState([]);

  // Sous-fonction pour faire une requête GEt vierge à l'endpoint /message...
  function get_messages(){
    
  }

  
  // Sous-fonction pour obtenir les topics du site web...
  function get_topics(){

    axios.get("http://localhost:3001/topic").then( response => setData(response.data) ).catch(function(error){console.log(error);});

  }
  

  const [chosen_topic,setChosenTopic] = useState("NO TOPIC SELECTED");

  useEffect( () =>{get_topics();} , []);

  useEffect( ()=>{get_messages();} , [chosen_topic] );

  return (
    <div className="App">
      <TopicList topic_list={data} selected_topic={chosen_topic} topic_identifier={setChosenTopic} />
      <div className="vertical_unfolding">
      <MessageList selected_topic={chosen_topic}/>
      <MessageForm/>
      </div>
    </div>
  );
}

export default App;
