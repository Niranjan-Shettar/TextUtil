import React, { useState } from 'react';



export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase")
    }
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extraspaces have ben removed")
    }
    const handleClearText = () => {
        let newText = (' ')
        setText(newText)
        props.showAlert("Text has been cleared")
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text here');
    return (
        <>
    <div>
        
        <div class="mb-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 class='mb-3'>{props.heading}</h1>
            <textarea class="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? '#6a6a97': 'white', color:props.mode=== 'dark'?'white': 'black'}} id="myBox" rows="10"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear Text</button>
      
    </div>

    <div className="container my-5" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary Here</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview here"}</p>
    </div>
    </>
  )
}
