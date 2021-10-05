
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import SubjectsBox from './SubjectsBox'
import ChapterTopics from './ChapterTopics'

import { withRouter } from 'react-router'
function SubjectsContainer(props){
	
const HomeRoute=()=>{
	console.log("Home")
	if(props.curSubject.trim().length>0){
	return <SubjectsBox data={props.data} curSubject={props.curSubject} curClass={props.curClass} deleteItem={props.deleteItem} setShowAddBox={props.setShowAddBox} setCurEdittype={props.setCurEdittype}/> 
	}return "";
	}
const TopicRoute=(topicProps)=>{
	console.log("topic");
	let classId=topicProps.match.params.classId;
	let subject=topicProps.match.params.Subject;
	let chapter=topicProps.match.params.topic;
	let topicData=[];
	props.data[classId-1].subject.find((one)=>{
	if(one.name===subject){
		console.log("onesub",one);
		return one.chapter.find((onechapter)=>{
			console.log("onechat",onechapter,chapter);
			if(onechapter.name===chapter){
				topicData=onechapter;
				console.log("chapte",chapter);
			}
			return onechapter.name===onechapter;
		})
	}
	return false;
	
})
	return <ChapterTopics chapter={topicData} setCurClass={props.setCurClass} setCurSubject={props.setCurSubject}/>}
console.log("subcons",props.location)
return (
<section className="classSubjects" style={{"top":(props.curClass>-1?"-10vh":""),"display":(props.curClass>-1?"block":"none")}}>
<switch>
<Route path="/" component={withRouter(HomeRoute)} exact/>
<Route path="/topic/:classId/:Subject/:topic" component={withRouter(TopicRoute)} exact/>
</switch>
<div id="plbt"><span onClick={()=>{console.log("cld");props.setShowAddBox(true)}}>+</span></div>
</section>);
}
export default withRouter(SubjectsContainer);