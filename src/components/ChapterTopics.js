
import { withRouter } from 'react-router'
 function ChapterTopics(props){
	 
 const params=props.match.params;
 console.log(params.classId);
 if(params.classId){props.setCurClass(params.classId);}
 if(params.Subject){props.setCurSubject(params.Subject)}
 
return (
<div>
{!props.chapter.topics && <div className="topicContainer">
<p className="TopicName">Empty</p></div>}
{props.chapter.topics && props.chapter.topics.length===0 && <div className="topicContainer">
<p className="TopicName">Empty</p></div>}
{props.chapter.topics && props.chapter.topics.map(oneTopic=>{
return (<div className="topicContainer">
<p className="TopicName">{oneTopic.name}</p>
<p>{oneTopic.desc}</p>
</div>)
})}
 <div className="backBt" onClick={()=>{props.history.push('/')}}>{"<-"}</div>
</div>
)
}
export default withRouter(ChapterTopics);