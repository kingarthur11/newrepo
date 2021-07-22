// import React from 'react'
// import {useDispatch} from 'react-redux';
// import {deletecomment} from '../../actions/auth';
// import {useSelector} from 'react-redux'

// const CommentSection = () => {
//     const {comment} = useSelector((state) => state.auth.list)

//     const dispatch = useDispatch();
//     const deleteUserComment = () => {
//         dispatch(deletecomment())
//           .then(response => {
//             console.log(response);
//           })
//           .catch(e => {
//             console.log(e);
//         });
//     };
    
//     return (
//         <div>
//             <h3>{comment.name}</h3>
//             <p>{comment.body}</p>
//             <button onClick={deleteUserComment}>
//                 delete button
//             </button>
//         </div>
//     )
    
// }

// export default CommentSection
