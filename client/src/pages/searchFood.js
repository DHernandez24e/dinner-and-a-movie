// import React, { useState } from 'react';
// // importing hooks to connect mutations
// import { useMutation } from '@apollo/react-hooks';
// import { ADD_USER } from '../utils/mutations';
// // JSON web token (JWT)
// import Auth from '../utils/auth';


// const searchFood = () => {
//     // insert here

//     // try {
//     //     const { data } = await addUser({
//     //       variables: { ...formState }
//     //     });
  
//     //   // JSON Web Token (JWT) for addUser
//     //   Auth.login(data.addUser.token);
  
//     //   } catch (e) {
//     //     console.error(e);
//     //   }

//   };

//   return (
//     <main className='flex-row justify-center mb-4'>
//       <div className='col-12 col-md-6'>
//         <div className='card'>
//           <h4 className='card-header'>Search for Food</h4>
//           <div className='card-body'>
//             <form onSubmit={handleFormSubmit}>
//               <input
//                 className='form-input'
//                 placeholder='Your username'
//                 name='username'
//                 type='username'
//                 id='username'
//                 value={formState.username}
//                 onChange={handleChange}
//               />
//               <input
//                 className='form-input'
//                 placeholder='Your email'
//                 name='email'
//                 type='email'
//                 id='email'
//                 value={formState.email}
//                 onChange={handleChange}
//               />
//               <input
//                 className='form-input'
//                 placeholder='******'
//                 name='password'
//                 type='password'
//                 id='password'
//                 value={formState.password}
//                 onChange={handleChange}
//               />
//               <button className='btn d-block w-100' type='submit'>
//                 Submit
//               </button>
//               {error && <div>Sign up failed</div>}
//             </form>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default searchFood;
