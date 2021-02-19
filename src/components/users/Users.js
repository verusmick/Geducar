import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { startLoadUsers } from '../../actions/users';

export const Users = () => {
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.users);
    let history = useHistory();

    useEffect(() => {
        dispatch(startLoadUsers());
    }, [dispatch]);

    const handleSelectUser = (user) => {
        history.push(`/posts/${user.id}`)
    }

    return (
        <>
            <div className="container-lg">
                <div >
                    <div>
                        <div>
                            <div className="row">
                                <div className="col-sm-8"><h2><b>Usuarios</b></h2></div>
                            </div>
                        </div>
                        <div className="ged-card-container">
                            {
                                users.map(user => (
                                    <div className="card ged-card" key={user.id} >
                                        <div className="card-body">
                                            <h5 className="card-title">{user.name}</h5>
                                            <h6 className="card-subtitle mb-2 "><b>Email:</b> {user.email}</h6>
                                            <p className="card-subtitle text-muted"> <b>Phone:</b> {user.phone}</p>
                                            <Link className="card-link" to={{ to: user.website }} target="_blank">{user.website}</Link>
                                        </div>
                                        <div
                                            className="card-footer text-muted text-center"
                                            onClick={() => handleSelectUser(user)}>
                                            Ver Posts
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        {/* <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Users</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map(user => (
                                        <tr
                                            key={user.id}
                                            onClick={() => handleSelectUser(user)}
                                        >
                                            <td>{user.name}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table> */}
                    </div>
                </div>
            </div>
        </>
    )
}
