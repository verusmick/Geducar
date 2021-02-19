import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
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
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-8"><h2>Lista de <b>Usuarios</b></h2></div>
                            </div>
                        </div>
                        <table className="table table-bordered">
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
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
