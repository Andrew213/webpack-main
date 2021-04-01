import React, { useState } from 'react';

function Form({ onSubmit }) {
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
        onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: inputText,
            name: inputName,
            time: new Date().toLocaleTimeString(),
        });

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


export default Form