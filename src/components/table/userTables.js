import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getAllUsers, deleteUser} from '../../actions/auth';
import {Link} from 'react-router-dom'
import './userTable.css'

const UserTables = () => {
    const dispatch = useDispatch()
    const {data} = useSelector((state) => state.user.list);
    console.log(data)
       
    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch])

    const handleDelete = async (id) => {
        if(window.confirm("are u sure you want to delete the user")){
            dispatch(deleteUser(id));
        }
     }

    return (
        <div className="table-content">
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((user) => (
                       <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link to="/updateauthor"><button className="delete">update</button></Link>
                            <span className="delete" onClick={() => handleDelete(user.id)}>delete</span>
                        </td>
                        </tr>
                    ) )}
                </tbody>
                <tfoot>
                    <tr>
                        <th >Total albums</th>
                        <td >77</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
    
}

export default UserTables 
