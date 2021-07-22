import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {registerAuthor} from '../../actions/auth';
import './login.css'

const MakeComment = () => {
    const user = {
        name: "",
        email: "",
        password: "",
        c_password: ""
    }
    const [formData, setformData] = useState(user);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault() 
        dispatch(registerAuthor(formData));
        // console.log(formData)
    }
    // async function handleSubmit(e) {
    //     e.preventDefault() 
    //     let result = await fetch("http://localhost:8000/api/v1/user", {
    //         method: "POST",
    //         body: JSON.stringify(formData),
    //         headers: {
    //             "Content-Type": 'application/json', 
    //             "Action": 'application/json'
    //         }
    //     })
    //     result = await result.json()
    //     console.log(result)
    // }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setformData({ 
            ...formData, [name]: value
        });
    }
    return (
        <div className="postcommet">
            <div className="login-content">
                <h3>Register Here</h3>
                <form autoComplete="off" onSubmit={handleSubmit} >
                    <div className="input-container">
                        <label>Full Name</label>
                        <input 
                            id="name"
                            type="text"
                            name="name"
                            value={formData.full_name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-container">
                        <label>Email</label>
                        <input
                            id="email"
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-container">
                        <label>Password</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-container">
                        <label>Confirm Password</label>
                        <input
                            id="c_password"
                            type="password"
                            name="c_password"
                            value={formData.c_password}
                            onChange={handleChange}
                        />
                    </div>
                    <button className="container-button" type="submit">Post Author</button>
                </form>
            </div>
        
        </div>
    )
}

export default MakeComment
