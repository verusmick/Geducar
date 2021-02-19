import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Modal from 'react-modal';

import { cleanComments } from '../../actions/comments';
import { uiCloseModal } from '../../actions/ui';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root');

export const Comments = ({ modalIsOpen }, { setIsOpen }, props) => {

    const { modalOpen } = useSelector(state => state.ui);

    const { comments } = useSelector(state => state.comments);
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(uiCloseModal());
        dispatch(cleanComments())
    }

    return (
        <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            className="modal"
            overlayClassName="modal-fondo"
        >
            <div>

                {
                    comments.map(comment => (
                        <div>
                            <div className="card">
                                <div className="card-header">
                                    {comment.name}
                                </div>
                                <div className="card-body">
                                    <blockquote className="blockquote mb-0">
                                        <h5> {comment.body}</h5>
                                        <footer className="blockquote-footer"> <cite title="Source Title"> {comment.email}</cite></footer>
                                    </blockquote>
                                </div>
                            </div>
                            <br />
                        </div>


                    ))
                }
            </div>

        </Modal>
    )
}
