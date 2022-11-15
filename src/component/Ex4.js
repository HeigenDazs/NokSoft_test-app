import { React, useEffect, useState } from 'react'

const Ex4 = () => {
    const [inputNum, setInputNum] = useState('');
    const [inputRand, setInputRand] = useState('');
    const [inputFilter, setInputFilter] = useState('');
    const [allNum, setAllNum] = useState([]);
    const [filterNum, setFilterNum] = useState('');
    const [track, setTrack] = useState(false);

    const handleChangeInput = (event) => {
        setInputNum(event.target.value);
    }

    const handleChangeRand = (event) => {
        setInputRand(event.target.value);
    }

    const handleChangeFilter = (event) => {
        setInputFilter(event.target.value);
    }

    const handleSubmit = () => {
        allNum.push(inputNum)
        setTrack(true);
    }

    const clear = () => {
        setAllNum([]);
    }

    const rand = (inputRand) => {
        for(let i = 0; i <= inputRand; i++){
            const random = Math.floor(Math.random() * 9)
            allNum.push(random.toString())
        }       
        console.log(allNum)
        setTrack(true)
    }

    const filtering = () => {
        setTrack(true)
        setFilterNum(inputFilter)
    }

    const filteredIn = allNum.filter((resultIn) => {
        if(resultIn === filterNum) return resultIn;
    })

    const filteredOut = allNum.filter((resultOut) => {
        if(resultOut !== filterNum) return resultOut;
    })

    useEffect(() => {
        setTrack(false)
    }, [allNum ,filterNum , track])

    return (
        <div>
            <div>Require number <input type="number" onChange={handleChangeInput}></input>&nbsp;<button onClick={handleSubmit}>submit</button></div>
            <br></br>
            <div>จำนวนตัวเลขที่ต้องการสุ่ม <input type="number" onChange={handleChangeRand}></input>&nbsp;<button onClick={() => rand(inputRand)}>Random</button>&nbsp;<button onClick={() => clear()}>clear</button></div>
            <br></br>
            <div>เลขที่ต้องการ filter <input type="number" onChange={handleChangeFilter}></input>&nbsp;<button onClick={filtering}>Filter</button></div>
            <br></br>
            <div>จำนวนเลขทั้งหมด : {allNum.length} </div>
            <div>{allNum.map((item, index) =>
                index < allNum.length - 1 ? (
                    item + " , "
                ) : (
                    item
                )
            )}</div>
            <br></br>
            <div className='col'>เลขที่มีใน Filter : {filteredIn.length}</div>
            <div>{filteredIn.map((item, index)=> 
            index < filteredIn.length - 1 ? (
                item + " , "
            ) : (
                item
            )
            )}</div>
            <br></br>
            <div className='col'>เลขที่ไม่มีใน Filter : {filteredOut.length}</div>
            <div>{filteredOut.map((item, index)=> 
            index < filteredOut.length - 1 ? (
                item + " , "
            ) : (
                item
            )
            )}</div>
        </div>
    )
}

export default Ex4
