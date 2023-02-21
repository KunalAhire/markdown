import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireFlameCurved, faMaximize, faDownLeftAndUpRightToCenter } from '@fortawesome/free-solid-svg-icons';
const InputEditor = (props) => {
   const { data, text } = props;
  const [visible, setVisible] = useState(false);
   const handleClick = () =>{
    if(!visible){
      document.getElementById("editor").style.height = "100vh";
      document.getElementById("mainDivFirst").style.display = "none";
      setVisible(true);
    }else{
      document.getElementById("editor").style.height = "250px";
      document.getElementById("mainDivFirst").style.display = "block";
      setVisible(false);
    }
   }
  return (
    <div className='mt-3' id='mainDivSecond'>
        <div className='d-flex flex-row justify-content-between p-2 main-lable'>
            <div className='fs-5 fw-bolder'>(<FontAwesomeIcon icon={ faFireFlameCurved } />) Editor</div>
            <div className='fs-5' style={{cursor: "pointer"}}><FontAwesomeIcon icon={ visible ? faDownLeftAndUpRightToCenter :faMaximize } onClick={() =>{handleClick()}}/></div>
        </div>
        <textarea id="editor" name="editor" className='main-background editor' value={text} onChange={(e)=>{data(e.target.value)}}></textarea>
    </div>
  )
}

export default InputEditor