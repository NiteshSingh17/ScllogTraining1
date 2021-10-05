import {Link} from 'react-router-dom';
export default function SubjectsBox(props){
	
	const classNum=parseInt(props.curClass)-1;
	console.log("sadf",classNum,props.curSubject );
return (
<ul>{props.data[classNum].subject.find(one=>{
	return one.name===props.curSubject;
}).chapter.map(one=>(
	<li>
<p>
<Link to={"/topic/"+props.curClass+"/"+props.curSubject+"/"+one.name}>{one.name}</Link>
<span className="deletebt" onClick={()=>{props.deleteItem(one.name)}}>X</span><span onClick={()=>{
	props.setCurEdittype(one.name);
	props.setShowAddBox(true);
}}className="edit">Edit</span></p>

	</li>
))}
</ul>);
}