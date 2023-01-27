import React from "react";
// import Button from "@material-ui/core/Button";
// import PhotoCamera from "@material-ui/icons/PhotoCamera";
// import IconButton from "@material-ui/core/IconButton";
import { useState } from "react";
import { v4 } from "uuid";

const App = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  // const [previewUrl, setPreviewUrl] = useState(null);
  const [data, setData] = useState([]);
  const handleChange = (event) => {
    setImage(event.target.files[0]);
  };
  const handleUpload = () => {
    // Add code here to upload the image to a server or cloud storage service
    setData((item) => [{ id: v4(), caption: caption, image: image }, ...item]);
    // console.log(image);
  };
  //   console.log(image);
  return (
    <div
    >
      <input
        accept="image/*"
        id="icon-button-file"
        type="file"
        // style={{ display: "none" }}
        onChange={handleChange}
      />
      
        <input
          type="text"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        <button onClick={handleUpload}>Upload</button>
     
      {data.map((item) => {
        return (
          <>
            <div id={item.id}>
              <p>{item.caption}</p>
              <img
                src={URL.createObjectURL(item.image)}
                alt=""
                width={"400px"}
              />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default App;
