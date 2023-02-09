import React, {useState} from 'react'


export default function Textform(props) {
    const [text, setText] = useState("Enter your text")
    // text = "mdnfgke"  //wrong way to change the state 
    // setText("mdnfgke")  //correct way to change the state 

    let HandleUpClick = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
    }
    let HandleDnClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
    }
    let CopyOnClick = ()=>{
        let text = document.getElementById('mytext')
        text.select()
        navigator.clipboard.writeText(text.value)
        //abhi copy krne ke baad wo text selected rahta hai to use hatane ke liye.
        document.getSelection().removeAllRanges() //ye wali ek line add kr dete hai.

        props.func("Your text has been copied!")

        //production me navigator.clipboard.writeText(text) ye hi akela enough hai
    }

    let HandleOnChange = (event)=>{
        setText("You have clicked on button")
        setText(event.target.value)
    }
    let ResetOnClick = ()=>{
        setText("Enter your text")
        props.func("Your text has been reset.")
    }
    return (
        <>
        <div>
            <h3>{props.textHeading}</h3>
            <label htmlFor="">Text Area</label>
            <textarea name="" id="mytext" value={text} onChange={HandleOnChange} cols="30" rows="1"></textarea>
            <button disabled={text.length===0} onClick={HandleUpClick}>Change to UpperCase</button>
            <button disabled={text.length===0} onClick={HandleDnClick}>Change to LowerCase</button>
            <button disabled={text.length===0} onClick={CopyOnClick}>Copy text</button>
            <button onClick={ResetOnClick}>Reset</button>
        </div>

        <div style={props.cssstyle}>
            <h2>Your text summary </h2>
            {/* <p>You entered {text.split(" ").filter((element)=>{return element.length !==0}).length} word and {text.length} characters.</p>  */}
            {/* <p>{(0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length).toFixed(3)} mins will be required to read this.</p> */}
            {/*jab ham upar wali dono line ka use kr rhe the to sirf space wali hi split hogi agar new line me add kru word to wo count nhi krega. so */}

            {/*We are using Regular Expression  */}
            <p>You entered {text.split(/\s+/).filter((element)=>{return element.length !==0}).length} word and {text.length} characters.</p> 
            <p>{(0.008 * text.split(/\s+/).filter((element)=>{return element.length !==0}).length).toFixed(3)} mins will be required to read this.</p>

            <h4>Preview of text</h4>
            <p>{text}</p>
        </div>
        </>
        )
}
