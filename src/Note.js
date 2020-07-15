import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import "./Node.css"

const CreateNode=(props)=>{


 const deleteNote =()=>{
 props.deleteItem(props.id);

   
}

    const month = new Date().getMonth(); 
    const year = new Date().getFullYear(); 
    const hours = new Date().getHours(); 
    const min = new Date().getMinutes(); 
    const sec = new Date().getSeconds();

   
    var today = new Date(),
    date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

    return (
<>

<div class="container">
<a class="card2" href="#">
<h3 className="heading">Reminder<span>{date}</span></h3>
<h3><input type="text" name="title"  class="small form-control" placeholder="Title" value={props.title}/></h3> 
<hr/>
<textarea type="text"  name="content" class="small form-control" placeholder="Write a note" value={props.content} />
<div class="go-corner" href="#">
  <div class="go-arrow">
  <DeleteIcon  className="addicon" onClick={deleteNote}/>
  </div>
</div>
</a>
  </div> 
  
</>
);}

export default CreateNode;