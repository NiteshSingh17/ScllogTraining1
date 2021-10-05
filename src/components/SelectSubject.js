
import { withRouter } from 'react-router'
 function SelectSubject(props){
	const classNum=parseInt(props.curClass)-1;
return (

<div id="selectSubjectContainer">
<p>Select Subject</p>
<select onChange={(e)=>{
	props.setCurSubject(e.target.value);
	props.history.push("/");}} >
	{props.curSubject===""?<option selected value="">Nothing</option>:""}
{props.data[classNum].subject.map(one=>{
return <option key={one.name} value={one.name} selected={props.curSubject==one.name?true:false}>{one.name}</option>
})
}</select>
</div>)
}
export default withRouter(SelectSubject);