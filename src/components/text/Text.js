import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Text.css'
import { addText } from '../../context/texSlice'

function Text() {
    const texts = useSelector(s => s.text.value)
    const dispatch = useDispatch()

    let value = useRef()
    const handleCreate = () => {
        let val = value.current.value
        if (!val.trim()) return
        dispatch(addText(val))
        value.current.value = ""
    }
    let items = texts?.map((el, inx) => <li key={inx} className='list__li'>{el}</li>)
    return (
        <>
            <div className="text__section">
                <input ref={value} type="text" />
                <button onClick={handleCreate}>add</button>
                <div className="text__wrapper">
                    <ul>
                        {items}
                    </ul>
                </div>
            </div>
        </>

    )
}

export default Text