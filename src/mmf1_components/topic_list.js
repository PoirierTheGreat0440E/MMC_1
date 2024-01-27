import {React,useState,useEffect} from 'react';
import '../mmf1_styling/topic_list.css';
import '../mmf1_styling/styling_general.css';

function Topic({topic_name,topic_changer}){
    return(<article className="topic" onClick={()=>{topic_changer(topic_name);}}>
        <p>{topic_name}</p>
    </article>);
}

function TopicList({selected_topic ,topic_identifier}){

    //const [chosen_topic,setChosenTopic] = useState("NO TOPIC SELECTED");
    //useEffect( ()=>{console.log(chosen_topic);} , [chosen_topic] );

    return(<div className="topic_list">
        <p className='instruction_mini'>Select a topic to start chatting !</p>
        <Topic topic_name={"First topic"} topic_changer={topic_identifier}/>
        <Topic topic_name={"Second topic"} topic_changer={topic_identifier}/>
        <Topic topic_name={"Third topic"} topic_changer={topic_identifier}/>
    </div>);
}

export default TopicList;