import React from 'react';

const Comments = ({ comments, removeComment }) => {

    return comments.map(el => (
        <div key={el.id} className='comments'>
            <div className='comments__item'>
                <strong className='comments__name'>{el.name}</strong>
                <div className='comments__text-inner'>
                    <p className='comments__text'>{el.text}</p>
                    <button
                        className='comments__btn'
                        onClick={() => removeComment(el.id)} />
                </div>
                <div className='comments__date' >{el.time}</div>
            </div>
        </div>
    ))

}

export default Comments