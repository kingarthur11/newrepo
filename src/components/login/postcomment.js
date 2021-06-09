import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {postcomment} from '../../actions/auth';
import { useHistory } from 'react-router-dom';

const MakeComment = () => {
    const user = {
        body: "",
        name: ""
    }
    const [formData, setformData] = useState(user);
    const dispatch = useDispatch();
    const history = useHistory()
    const clear = () => {
        setformData(user)
    }
    const handleSubmit = (e) => {
        e.preventDefault() 
        dispatch(postcomment(formData, history));
        clear();
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setformData({ 
            ...formData, [name]: value
        });
    }
    return (
        <div>
        <h3>Make comment</h3>
            <form id="loginbox" autoComplete="off" onSubmit={handleSubmit} >
                <p>First Name</p>
                <input 
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="name"
                />
                <div className="col p-3">
                <p>Last Name</p>
                <input
                    id="body"
                    type="text"
                    name="body"
                    value={formData.body}
                    onChange={handleChange}
                    placeholder="body"
                />
                </div>
                <button>Post Comment</button>
            </form>
        </div>
        
           
    )
}

export default MakeComment
