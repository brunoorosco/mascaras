import React, { useState, useEffect } from 'react'

import './styles.css'


export default function Alert(props) {

    const [color, setColor] = useState([])
    const [xhidden, setHidden] = useState(["none"])
    
   

    useEffect(() => {
       setHidden(props.view)
        if (props.color === "warning") {
            setColor("orange")
            
        }else if(props.color === "danger"){
            setColor("red")
        }else if(props.color === "info"){
            setColor("blue")
        }else{
            setColor(props.color)
        }
        setTimeout(() => {
            setHidden("none")
        }, 5000);
    })
        return (
            <>
                <div className="alert"
                    style={{
                        background: color,
                        display: xhidden
                    }}
                >
                    {props.text}
                </div>
            </>
        )

    }