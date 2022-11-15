import { React, useEffect, useState } from 'react'

const Ex3 = () => {
    const [inputNum, setInputNum] = useState('');
    const [Num, setNum] = useState('');
    const [resultC, setResultC] = useState('');
    const [resultN, setResultN] = useState([]);
    const [filter, setFilter] = useState("all");

    const handleChange = (event) => {
        setInputNum(event.target.value);
    }

    const handleSubmit = () => {
        setResultN([]);
        if (inputNum > 100) {
            setNum('100');
        } else if (inputNum > 0) {
            setNum(inputNum);
        } else {
            console.log("require number 1 - 100")
        }
        setInputNum('')
    }

    useEffect(() => {
        if(Num !== ''){
            setResultC("มีจำนวนทั้งหมด " + Num)
        } else {
            setResultC("ไม่มีจำนวนที่เลือก")
        }
        generateNum();
    }, [Num])

    const generateNum = () => {
        for (let i = 1; i <= Num; i++) {
            resultN.push(i)
        }
    }

    const filtered = resultN.filter((itemF) => {
        if (filter === "even") {
            if (itemF % 2 === 0) {
                return itemF
            }
        } else if (filter === "odd") {
            if (itemF % 2 !== 0) {
                return itemF
            }
        } else {
            return itemF
        }
    })

    const clear = () => {
        setInputNum('');
        setNum('');
    }

    return (
        <div>
            <div>
                Number is require 1 - 100 : <input className='input' type="number" min={1} max={100} value={inputNum} onChange={handleChange}></input>
                <button type="submit" className="submit" id='submit' value="Submit" onClick={() => handleSubmit()}>Submit</button>
                <button>clr</button>
            </div>
            <br></br>
            <div><button onClick={() => setFilter("all")}>แสดงเลขทั้งหมด</button>&nbsp;&nbsp;<button onClick={() => setFilter("even")}>เลือกแค่เลขคู่</button>&nbsp;&nbsp;<button onClick={() => setFilter("odd")}>เลือกแค่เลขคี่</button></div>
            <br></br>
            <div className='col'>{resultC}</div>
            <br></br>
            <div className='row'>{filtered.map((item) =>
                <div className='col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1'> {item}&nbsp;&nbsp;&nbsp;&nbsp;</div>)}</div>
        </div>
    )
}

export default Ex3
