
export default function AddBox(props){
	console.log("adb",props.handler);
return (<div id="editbox">
<span id="editCross" onClick={()=>{props.setShowAddBox(false)}}>X</span>
<div><div className="oneInputItem">
<input type="text" placeholder="Chapter Name" id="newChapter"/></div>
<div className="submitcon">
<input type="submit" onClick={()=>{props.handler(document.querySelector("#newChapter").value)}}/></div>
</div>
</div>);
}