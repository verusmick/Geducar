import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLoadUsers } from '../../actions/users';

export const Users = () => {
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.users);

    useEffect(() => {
        dispatch(startLoadUsers());
    }, [dispatch]);

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
                                    users.map(client => (
                                        <tr key={client.id}>
                                            <td>{client.name}</td>                                            
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
