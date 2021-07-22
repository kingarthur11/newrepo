import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getAll} from '../../actions/auth';
// import UserTable from './userTable'
import './userTable.css'

const UserTables = () => {

    const dispatch = useDispatch()

    // const mapStateToProps = state => ({
    //     postMessageList: state.auth.list.user
    // })


    const result = useSelector((state) => state.auth.list.user)
    
    useEffect(() => {
        dispatch(getAll());
    }, [dispatch])

    console.log(result)

    return (
        <div className="table-content">

            <table>
                <caption>A summary of the UK's most famous punk bands</caption>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>Operation</th>
                    </tr>
                </thead>

                <tbody>
                    {/* <tr>
                        <td>name</td>
                        <td>{data.email}</td>

                    </tr>
                    <tr>
                        <td>name</td>
                        <td>{data.email}</td>

                    </tr> */}
                
                    {/* {data.map((order, index) => {
                        <tr index={index}>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                        </tr>
                    })} */}
                </tbody>

                {/* {
                    data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.product_name}</td>
                            <td>{item.product_category}</td>
                            <td>{item.unit_price}</td>
                            <td/>
                        </tr>
                    ))
                    } */}
                {/* <tbody>
                    
                    <tr>
                        {data.map((user) => {
                            return <UserTable key={user.id} {...user} />;
                            })}
                        <td>
                            <span className="delete">delete</span>
                            <span className="delete">update</span>
                        </td>
                    </tr>
                </tbody> */}
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
