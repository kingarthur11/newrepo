// import React, {useState} from 'react';
// import {useDispatch} from 'react-redux';
// import {updateauthor} from '../../actions/author';
// import { useHistory } from 'react-router-dom';

// const MakeComment = () => {
//     const user = {
//         email: "",
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
//         dispatch(updateauthor(formData, history));
//         clear();
//     }
//     const handleChange = (e) => {
//         const {name, value} = e.target;
//         setformData({ 
//             ...formData, [name]: value
//         });
//     }
//     return (
//         <div>
//         <h3>Make comment</h3>
//             <form autoComplete="off" onSubmit={handleSubmit} >
//                 <p>First Name</p>
//                 <input 
//                     id="name"
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="name"
//                 />
//                 <div>
//                 <p>Last Name</p>
//                 <input
//                     id="email"
//                     type="text"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="email"
//                 />
//                 </div>
//                 <button>Post Author</button>
//             </form>
//         </div>
//     )
// }

// export default MakeComment
