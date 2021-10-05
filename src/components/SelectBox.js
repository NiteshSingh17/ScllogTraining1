
import { withRouter } from 'react-router'
function SelectBox(props){
	console.log("selbox",props)
return (
<div id="selectUp">
<p>Select Class</p>
<select onChange={(e)=>{
	
	props.history.push("/");
	props.handleClassChange(e.target.value)}}>

	{parseInt(props.curClass)===-1?<option selected value="">Nothing</option>:""}
{props.data.map(one=>{
return <option key={one.class} value={one.class} selected={parseInt(props.curClass)==one.class?true:false}>{one.class}</option>
})
}</select>
</div>
);
}
export default withRouter(SelectBox)