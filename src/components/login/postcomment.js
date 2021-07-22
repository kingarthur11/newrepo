// import React, {useState} from 'react';
// import {useDispatch} from 'react-redux';
// import {postcomment} from '../../actions/auth';
// import { useHistory } from 'react-router-dom';
// import './login.css'

// const MakeComment = () => {
//     const user = {
//         body: "",
//         name: ""
//     }
//     const [formData, setformData] = useState(user);
//     const dispatch = useDispatch();
//     const history = useHistory()
//     const clear = () => {
//         setformData(user)
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault() 
//         dispatch(postcomment(formData, history));
//         clear();
//     }
//     const handleChange = (e) => {
//         const {name, value} = e.target;
//         setformData({ 
//             ...formData, [name]: value
//         });
//     }
//     return (
//         <div className="postcommet">
//             <div className="login-content">
//                 <h3>Make comment</h3>
//                 <form id="loginbox" autoComplete="off" onSubmit={handleSubmit} >
//                     <div className="input-container">
//                         <label>First Name</label>
//                         <input 
//                             id="name"
//                             type="text"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="input-container">
//                         <label>Last Name</label>
//                         <input
//                             id="body"
//                             type="text"
//                             name="body"
//                             value={formData.body}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <button className="container-button">Post Comment</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default MakeComment
