import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Typography from '@mui/material/Typography';
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { v4 } from "uuid";
// import { createContext } from 'react';
import FilterTab from "./fiter";
import axios from "axios";
// import { color, height } from '@mui/system';
import Card from "@mui/material/Card";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import { height } from '@mui/system';
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ListItem } from "@mui/material";
// import LikeComponent from "./Like";
import LikeFeature from "./Lk";
import "./post.css"


const buttonStyle = {
  backgroundColor: "Azure",
  boxShadow: "inset 0 1px 3px 0 #333333, 1px 1px 6px 0 #333333",
  width: "143px"

}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: "0 1px 3px 0 #333333, 12px 15px 12px 0 #333333",
  p: 4,
};
// export const filterContext = createContext();
// const FilterContextProvider = filterContext.Provider;

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const [data, setData] = useState<any>([]);
  const [previewimage, setPreviewimage] = useState<any>("");
  const [filterClass, setFilterClass] = useState("");
  // const [GetLike, SetLike] = useState(false)
  // const [GetCount, SetCount] = useState(0)


  const handleChange = (e: any) => {
    const file = e.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewimage(reader.result);
    };
    reader.readAsDataURL(file);
    // setPriviewurlupdate(file);
  };

  const handleUpload = () => {
    // Add code here to upload the image to a server or cloud storage service
    setData((item: any) => [
      { id: v4(), className: filterClass, caption: caption, image: image},
      ...item,
    ]);
    // console.log(image);
    const formData = new FormData();
    formData.append("file", image);
    axios
      .post("http://localhost:4000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        axios.post("http://localhost:4000/post", {
          userId: "1234",
          description: "This is a class demo 8",
          attachments: res.data,
        });
      });
    handleClose();
    setPreviewimage("");
    setFilterClass("");
    setCaption("");
  };

// console.log()

  // const HandleLike = () => {
  //   // const dataId = data.map((item:any)=>{return(
  //   // item.id
  //   // )})
  //   if(GetLike == false){
  //     SetLike(true)
  //     SetCount((item)=>{
  //       return(
  //         item = 1
  //         // break
          
  //         )
  //       })
  //     }else if(GetLike == true){
  //       SetLike(false)
  //       SetCount((item)=>{
  //         return(
  //           item = 0
  //         )
  //       })
  //     }
    
  // }
  // console.log(GetCount)
  return (
    <div className="Box">
      <div className="LeftSidebar">
      <h1>Instagram</h1>
      <br/>
      <br/>
      <Button style={buttonStyle}>Home</Button>
      <br/>
      <br/>
      <Button style={buttonStyle}>Search</Button>
      <br/>
      <br/>
      <Button style={buttonStyle}>Explore</Button>
      <br/>
      <br/>
      <Button style={buttonStyle}>Reels</Button>
      <br/>
      <br/>
      <Button style={buttonStyle}>Message</Button>
      <br/>
      <br/>
      <Button style={buttonStyle}>Notification</Button>
      <br/>
      <br/>

      <Button
        onClick={handleOpen}
        style={buttonStyle}
      > + Create </Button>
    
    </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ backgroundColor: "Lavender" }}>
          <h2>Create Post</h2>
      
          <input
            accept="image/*"
            id="icon-button-file"
            type="file"
            onChange={handleChange}
            // style={{ display: "none" }}
          />
          <br />
          <FilterTab
            filterClass={filterClass}
            setFilterClass={setFilterClass}
          />
          <img
            src={previewimage}
            className={filterClass}
            //  alt=""
            width={"400px"}
            // ref={imgResultref}
          />

          <input
            type="text"
            value={caption}
            placeholder="insert Caption"
            onChange={(e) => setCaption(e.target.value)}
          />

          <button
            onClick={handleUpload}
            style={{
              boxShadow: "inset 0 1px 3px 0 #333333, 4px 6px 10px 0 #333333",
            }}
          >
            Upload
          </button>
        </Box>
      </Modal>
      <div className="MiddleSideBar">
      {data.map((item: any) => {
        return (
          <>
            <div id={item.id} className="Box1">
              <Card sx={{ width:"500px", height: "410px", textAlign:"center"}}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: "red[500]" }} aria-label="recipe">
                      N
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Namit Purohit"
                 
                />
                <p>{item.caption}</p>

                <img
                  src={URL.createObjectURL(item.image)}
                  className={item.className}
                  alt=""
                  width={"500px"}
                  height= {"300px"}
                />
                <br />
                {/* // <IconButton aria-label="add to favorites" onClick={()=>HandleLike(item)}>
                //   <FavoriteIcon /><span>{}</span>
                // </IconButton> */}
                {/* <LikeComponent HandleLike={HandleLike} GetCount={GetCount}/> */}
                  <LikeFeature/>
              </Card>
              <br />
            </div>
          </>
        );
      })}
      </div>
    </div>
  );
}
