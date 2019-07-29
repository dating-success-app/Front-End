// import React, { useState } from "react";

// const Member = props => {
//   const { name, location } = props.member;

//   const [input, setInput] = useState({
//     name: name,
//     location: location,
    
//   });
//   const [editing, setEditing] = useState(false);

//   const handleEdit = e => {
//     setEditing(!editing);
//   };

//   const inputHandler = e => {
//     console.log("target name", e.target.name);
//     console.log("value", e.target.value);
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   const handleUpdate = e => {
//     e.preventDefault();
//     props.update(input);
//     setEditing(false);
//   };

//   console.log("edit", editing);
//   return editing ? (
//     <form onSubmit={handleUpdate}>
//       <h1>Add Member</h1>
//       <div>
//         <label htmlFor="Name">
//           Name:{" "}
//           <input
//             type="text"
//             value={input.name}
//             onChange={inputHandler}
//             name="name"
//           />
//         </label>
//         <label htmlFor="Location">
//           Location:{" "}
//           <input
//             type="text"
//             value={input.location}
//             onChange={inputHandler}
//             name="location"
//           />
//         </label>
//       </div>
//       <button>Add Member</button>
//     </form>
//   ) : (
//     <div>
//       <h3>Name</h3>
//       <p>{name}</p>
//       <h3>Location</h3>
//       <p>{location}</p>
//       <button onClick={handleEdit}>Edit</button>
//     </div>
//   );
// };

// export default Member;
