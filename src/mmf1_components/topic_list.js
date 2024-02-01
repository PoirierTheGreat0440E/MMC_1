import {React} from 'react';
import '../mmf1_styling/topic_list.css';
import '../mmf1_styling/styling_general.css';

function Topic({topic_name,topic_changer}){
    return(<article className="topic" onClick={()=>{topic_changer(topic_name);}}>
        <p>{topic_name}</p>
    </article>);
}

function TopicList({topic_list,selected_topic ,topic_identifier}){

    return(<div className="topic_list">
        <p className='instruction_mini'>Select a topic to start chatting !</p>
        {topic_list.map( (topic) => <Topic key={topic.topic_id} topic_name={topic.topic_titre} topic_changer={topic_identifier} /> )}
    </div>);

}

export default TopicList;