import React,{useState} from 'react';
import AddCommentSharpIcon from '@material-ui/icons/AddCommentSharp';
import "./CreateNode.css"
import Note from "./Note";

const CreateNode=(props)=>{

 const [expand,setExpand]=useState(false);

  const[note,setNote]=useState({
      title:"",
      content:"",
      }
  )

  const addEvent=()=>{
    props.passNote(note);
    setNote({
      title:"",
      content:"",
      }
  )

    }

    const expandit=()=>{
      setExpand(true);
    }

  const Inputevent=(event)=>{
    const{name,value}=event.target;

  setNote((prevData)=>{
     return{
       ...prevData,[name]:value,
     }

  });
    console.log(note);
    }

    return (
<>
  <div class="container">
  <section className="main">
   <a class="card2" href="#">
   <h3>
  <input type="text"
   name="title"
   onChange={Inputevent} 
   class="small form-control" 
   placeholder="Add Title"
   onClick={expandit}
   value={note.title}/>
   </h3>
  <hr/>
  {expand?
  <textarea type="text"  name="content" onChange={Inputevent} class="small form-control"
   placeholder="Write a note"  value={note.content} />:null}
  <div class="go-corner" href="#">
    <div class="go-arrow">
      <AddCommentSharpIcon  className="addicon" onClick={addEvent}/>
    </div>
  </div>
  
</a>
</section>



</div>    
</>
);}

export default CreateNode;