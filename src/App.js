import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header";
import Footer from "./Footer";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Note from "./Note";
import CreateNode from "./CreateNode";

import "./App.css";

const App=()=>{
    
const [addItem, setAddItem] = useState([]);

    const addNote =(note)=>{
        setAddItem((prevData)=>{
            return [...prevData,note];
        });
        console.log(note);
    };


    const onDelete=(id)=>{
        setAddItem((oldData)=>{
            return oldData.filter((curData, index)=>{
                return index !== id;
        })  
    }
        )}
    
    return (

<>
<Header/>

<CreateNode passNote={addNote}/>
{

  addItem.map((val,index)=>{

      return <Note 
      key={index}
      id={index}
      title={val.title}
      content={val.content}
      deleteItem={onDelete}
      />
  })}

 


<Footer/>
</>
);}


export default App;








