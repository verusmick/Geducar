import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { cleanComments, startLoadCommentsByPostId } from '../../actions/comments';

export const Comments = () => {
    const {  postId } = useParams();
    
    const { comments } = useSelector(state => state.comments);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(startLoadCommentsByPostId(postId))
    }, [dispatch, postId])

    useEffect(() => {
        dispatch(cleanComments())
    }, [dispatch])
    return (
        <>
            <div className="container-lg">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-8"><h2>Lista de <b>Commets</b></h2></div>
                            </div>
                        </div>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Comments</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    comments.map(comment => (
                                        <tr
                                            key={comment.id}                                        
                                        >
                                            <td>{comment.name}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
