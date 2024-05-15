import React, {useState} from 'react'
import { ReactPropTypes } from 'react';

 function Textform(props) {
    const[text,setText]=useState('enter text here');
    const handleChange=(e)=>{
        setText(e.target.value);
        }
    const handleUpClick=()=>{
    console.log('u clicked UpperCase Button');
    const newtext=text.toUpperCase();
    setText(newtext);
    props.ShowAlert("clicked Upper case","success")
    }
    const handleLoClick=()=>{
        console.log('u clicked UpperCase Button');
        const newtext=text.toLowerCase();
        setText(newtext);
        props.ShowAlert("clicked lower case","success")
        }
    const handleClear=()=> {
         setText('');
         props.ShowAlert("clicked clear text case","warning")
     }
        
  return (
    <>
    
      <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>
  <label htmlFor="exampleFormControlTextarea1" className="form-label"  style={{color:props.mode==='dark'?'white':'black'}}> {props.heading}</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" value={text} 
        onChange={handleChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
  <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>convert to UpperCase</button>
  <button type="button" className="btn btn-primary mx-1" onClick={handleLoClick}>convert to lowerCase</button>
  <button type="button" className="btn btn-primary mx-1" onClick={handleClear}>clear text</button>
</div>
<div className='my-8'  style={{color:props.mode==='dark'?'white':'black'}}>
    <h3 >{text.length}characters , {text.split(' ').length}</h3>
    </div>
    </>
  )
} 
export default Textform;