import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateAuthor} from '../../actions/author';
import './login.css'

const UpdateAuthor = () => {
    const user = {
        name: "",
        email: ""
    }
    const [formData, setformData] = useState(user);
    const dispatch = useDispatch();  
    // const result = useSelector((state) => currentAuthor ? state.data.list.data.find((p) => p.id == currentAuthor)  : null);
   
    // useEffect(() => {
    //     if(result) setPostData(result);
    // }, [result])

    const clear = () => {
       setformData(user)}

    const handleSubmit = (e) => {
        e.preventDefault() 
        dispatch(updateAuthor(formData));
        clear()}
    
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
                            value={formData.name}
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
                    
                    <button className="container-button" type="submit">Post Author</button>
                </form>
            </div>
        
        </div>
    )
}

export default UpdateAuthor
