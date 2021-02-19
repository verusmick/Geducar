import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { startLoadCommentsByPostId } from '../../actions/comments';

import { cleanPostsByUser, startLoadPostsByUser } from '../../actions/posts';
import { uiOpenModal } from '../../actions/ui';
import { Comments } from '../comments/Comments';

export const Posts = () => {

    const { userId } = useParams();
    const { posts } = useSelector(state => state.posts);
    const { selected } = useSelector(state => state.users);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(startLoadPostsByUser(userId))
    }, [dispatch, userId])


    useEffect(() => {
        dispatch(cleanPostsByUser())
    }, [dispatch])


    const openModal = (postId) => {
        dispatch(startLoadCommentsByPostId(postId));
        dispatch(uiOpenModal());
    }

    return (

        <div className="container-lg">
            <div >
                <div>
                    <div>
                        <div className="row">
                            <div className="col-sm-8"><h2>
                                <b>Posts</b> de {selected ? selected.name : localStorage.getItem('userSelected')}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="ged-card-container">
                        {
                            posts.map(post => (
                                <div className="card ged-card-posts  border-dark " key={post.id} >
                                    <div className="card-header"> <b>Titulo:</b> {post.title}</div>
                                    <div className="card-body text-dark">
                                        <h5 className="card-title">{post.body}</h5>

                                    </div>
                                    <div
                                        className="card-footer text-muted text-center"
                                        onClick={() => openModal(post.id)}>
                                        Ver Comentarios
                                        </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Comments />
        </div>
    )
}
