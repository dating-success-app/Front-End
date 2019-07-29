import React, { useState } from "react";



const [picture, setPicture] = useState([]);

<input type="file" onChange={this.fileChangedHandler}> </input>
<button onClick={this.uploadHandler}>Upload!</button>

fileChangedHandler = (event) => {
  const file = event.target.files[0]
}

uploadHandler = () => { ... }

//stor in state
picture = { selectedFile: null }

fileChangedHandler = event => {
  this.setPicture({ selectedFile: event.target.files[0] })
}

uploadHandler = () => {
  console.log(this.picture.selectedFile)
}

//now send the file to a server
// uploadHandler = () => {
//     axios.post('my-domain.com/file-upload', this.state.selectedFile)
//   }

  //send as form data
//   uploadHandler = () => {
//     const formData = new FormData()
//     formData.append(
//       'myFile',
//       this.picture.selectedFile,
//       this.picture.selectedFile.name
//     )
//     axios.post('my-domain.com/file-upload', formData)
//   }