import React from 'react';
import { useParams } from "react-router";

const Practice = () => {
    const { id, textColor, bgColor } = useParams()
    



    return (
        <div style={{ color: textColor, backgroundColor: bgColor}}>
            {isNaN(id)?
                <h1 >the word is: {id}</h1> :
                <h1>The number is: {id}</h1>}
        </div>
    )

}


export default Practice;