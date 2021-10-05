import logo from './logo.svg';

import {useState} from 'react';
import './App.css';


import {data,additem,delItem,moditem} from './data/data'
import SelectSubject from'./components/SelectSubject';
import SelectBox from'./components/SelectBox';
import SubjectsContainer from'./components/SubjectsContainer';
import AddBox from'./components/AddBox';

function App(props) {
 console.log("app",props);
const [curClass,setCurClass]=useState(-1);
const [curSubject,setCurSubject]=useState('');
const [showAddBox,setShowAddBox]=useState(false);
const [sampledata,setSampleData]=useState(data);

const [rerender,setRenrender]=useState(false);
const addNewItem=(item)=>{
setSampleData(additem(sampledata,curClass-1,curSubject,item));
setShowAddBox(false);
}
const modifyItem=(preChapter,item)=>{
setSampleData(moditem(sampledata,curClass-1,curSubject,preChapter,item));
}

const handleClassChange=(newclass)=>{
	console.log("mod");
	setCurSubject('');
	setCurClass(newclass);
}
const [curEdittype,setCurEdittype]=useState('add');
const addboxhandler=(item)=>{
	if(curEdittype==='add'){
		addNewItem(item);
	}else{
	console.log("addh, edit",curEdittype);	
	modifyItem(curEdittype,item);
	setCurEdittype('add');
	}	
	setShowAddBox(false);
}
const deleteItem=(item)=>{
	console.log("del",item);
	setSampleData(delItem(sampledata,curClass-1,curSubject,item));
	setRenrender(pre=>!pre);
}
 return (
    <div className="App">
<section className="classSelecorCon"> 
<SelectBox data={sampledata} curClass={curClass} handleClassChange={handleClassChange}/>
</section>
{curClass>-1?<SelectSubject  data={sampledata} curClass={curClass} curSubject={curSubject} setCurSubject={setCurSubject}/>:""}

{<SubjectsContainer data={data} deleteItem={deleteItem} setShowAddBox={setShowAddBox} setCurEdittype={setCurEdittype} data={sampledata} setShowAddBox={setShowAddBox} curClass={curClass} curSubject={curSubject} setCurClass={setCurClass} setCurSubject={setCurSubject} />
}
{showAddBox?<AddBox setShowAddBox={setShowAddBox} handler={addboxhandler}/>:""}


 </div>
  );
}



export default App;
