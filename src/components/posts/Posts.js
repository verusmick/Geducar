import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import { cleanPostsByUser, startLoadPostsByUser } from '../../actions/posts';

export const Posts = () => {
    const { userId } = useParams();
    const { posts } = useSelector(state => state.posts);
    const dispatch = useDispatch();
    let history = useHistory();

    useEffect(() => {
        dispatch(startLoadPostsByUser(userId))
    }, [dispatch, userId])

    useEffect(() => {
        dispatch(cleanPostsByUser())
    }, [dispatch])

    const handleSelectPost = (post) => {        
        history.push(`/comments/${post.id}`)
    }
    return (
        <>
            <div className="container-lg">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-8"><h2>Lista de <b>Posts</b></h2></div>
                            </div>
                        </div>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Posts</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    posts.map(post => (
                                        <tr
                                            key={post.id}
                                        onClick={() => handleSelectPost(post)}
                                        >
                                            <td>{post.title}</td>
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
