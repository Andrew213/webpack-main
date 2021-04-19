import React from 'react';
import { connect } from 'react-redux';
import { deleteComment } from '../redux/actions';

const Comments = ({ stateComments, deleteComment }) => {

    if (!stateComments.length) {
        return <p className='comments__nocomments'>Нет комменариев</p>
    }

    const removeComment = id => {
        // const removeArr = stateComments.filter(comment => comment.id !== id)
        deleteComment(stateComments, id)
    }

    return stateComments.map(el => (
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
const mapStateToProps = state => {
    return {
        stateComments: state.comments.comments
    }
}

const mapDispatchToProps = {
    deleteComment,
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)