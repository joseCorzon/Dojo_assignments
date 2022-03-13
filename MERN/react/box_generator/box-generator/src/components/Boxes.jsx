import React, {useState} from 'react';

const Boxes = ()=>{
    let [color, setColor] = useState("");
    

    let [boxList, setBoxList] = useState([])

    const colorHandler = (e)=>{
        e.preventDefault();
        let newBoxObj = {color}

        setColor('')

        setBoxList([...boxList, newBoxObj])


    }
    
    
    
    
    return (
        <>
            <h1>Welcome</h1>
            <form action="" className='form-group' onSubmit={colorHandler}>
                <label htmlFor="">Color:</label>
                <input type="text" name="" id="" className='form-control' onChange={(e)=>{setColor(e.target.value)}} value={color}/>
                <button className="btn btn-primary">Add</button>
            </form>
            {
                boxList.map(box=>{
                    return <div>
                        <p style= {{backgroundColor: box.color, height:'100px', width:'100px'}}>color</p>
                    </div>
                })
}
        </>
    )
}

export default Boxes;