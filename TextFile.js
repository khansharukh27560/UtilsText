
import React,{useState} from 'react'


function TextFile(props){
    const [text,setText] = useState('Enter text here')
    let handleOnChange=(event)=>{
        setText(event.target.value)
    }
    let handlertoUpper=()=>{
       let newText=text.toUpperCase();
        setText(newText);
    }
    let handlertoLower=()=>{
        let newText=text.toLowerCase();
        setText(newText)
    }
   let clearText=()=>{
let newText =""
setText(newText)
    }
    let reSpace=()=>{
       let newText = text.splite('')
       let jointhe = ' '
       newText.forEach((elem)=>{
        if(elem[0]!==undefined){
            jointhe+=elem+" "
        }
       })
       setText(jointhe)
    }
    return(
        <>
            <div className="container mb-3">
             <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
             <textarea className="form-control" onChange={handleOnChange} id="output" rows="8" value={text}></textarea>
            </div>
            <div className="container">
                <button type="button"  className=" btn btn-success mx-2" onClick={handlertoUpper}> Change to Upper </button>
                <button type="button" className="btn btn-success" onClick={handlertoLower}>change Lower Case</button>
                <button type="button" className="btn btn-success mx-2" onClick={clearText} id='clear'>Clear All</button>
                <button type="button" className="btn btn-success mx-2" onClick={reSpace} id='clear'>Clear All</button>
                
            </div>
            <div>
                <h2 className='container'>Preview</h2>
                <p className='border container'>{text}</p><br/>
                <b className='container border'>Character:{text.length} word:{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b>
            </div>
                
        </>
    )
}
export default TextFile;