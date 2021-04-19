import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { connect } from 'react-redux'
import { createComment } from '../redux/actions';

function Form({ createComment }) {
    const [inputText, setInputText] = useState('')
    const [inputName, setInputName] = useState('')

    const handleChangeText = e => {
        setInputText(e.target.value)
    }

    const handleChangeName = e => {
        setInputName(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (!inputText.trim() || !inputName.trim()) {
            return
        }
        createComment({
            id: nanoid(),
            text: inputText,
            name: inputName,
            time: new Date().toLocaleTimeString(),
        })
        setInputText('')
        setInputName('')
    }


    return (
        <form className='form' onSubmit={handleSubmit}>
            <textarea
                required
                className='form__textarea'
                placeholder='Добвьте комментарий...'
                value={inputText}
                onChange={handleChangeText}
            />
            <input
                required
                className='form__name'
                type="text"
                placeholder='Введите имя'
                value={inputName}
                onChange={handleChangeName}
            />
            <button type='submit' className='form__btn'>Добавить комментарий</button>
        </form>
    )

}

const mapDispatchToProps = {
    createComment
}

export default connect(null, mapDispatchToProps)(Form)