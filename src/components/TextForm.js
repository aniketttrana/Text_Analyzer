import React ,{useState} from 'react'
// import React,{useState} from 'react'


export default function TextForm(props) {

  const handleUpClick=()=>{
    console.log("Clicked" +text);
    let newText=text.toUpperCase();

setText(newText)
  }

  const handleLoClick=()=>{
    console.log("Clicked" +text);
    let newText=text.toLowerCase();

setText(newText)
  }
  const handleClClick=()=>{
    console.log("Clicked" +text);
    let newText="";

setText(newText)
  }




  const handleSpClick=()=>{
    
    
      const Speech = new SpeechSynthesisUtterance();
      const message = text; // Use the 'text' state directly here
      Speech.lang = 'en'; // Correct the language code to 'en' for English
      Speech.text = message;
      window.speechSynthesis.speak(Speech);
    };
    
    const handleRSClick = () => {
      let newText = text.replace(/[^a-zA-Z ]/g, "");
      setText(newText);
    }
  
  
  
  
  const handleOnChange=(event)=>{
    console.log("On change");
    setText(event.target.value)
  }
  const [text,setText]=useState('Enter ymmmour text here');
  // const [text,setText]=useState('Enter ymmmour text here');
// text="Please enter"  Wrong way to change the state
// setText("new text") 
  return (
    
 <>

  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">
     {props.heading2}
    </label>
    <textarea
    
      className="form-control"

      // hooks
      value={text}   onChange={handleOnChange}
      // hooks
      id="exampleFormControlTextarea1"
      rows={8}
      defaultValue={""}

    />
  </div>

  <div className="container">
<button className="btn btn-primary mx-2" onClick={handleUpClick}>ConvertToUppercase</button>


<button className="btn btn-primary mx-2" onClick={handleLoClick}>ConvertToLowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClClick}>Clear</button>

<button className="btn btn-primary mx-2" onClick={handleSpClick}>Listen</button>
<button className="btn btn-primary my-2" onClick={handleRSClick}>Remove Special Character</button>

</div>


<div className="conatiner">

  <h1>Your Text Summary</h1>
  <p>{0.008*(text.split(" ").length)} Minutes you can read</p>
  <p>{text.split(" ").length-1} words and {text.length} characters</p>
  <h2>PREVIEW</h2>
  <p>{text}</p>
</div>
</>

  )
}
