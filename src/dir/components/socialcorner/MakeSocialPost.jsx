import axios from "axios";
import React, { useState } from "react";
import useAuth from "../../context/userAuth/useAuth";

export default function MakeSocialPost() {

  const {id} = useAuth();

  axios.defaults.withCredentials = true;
  const [postText, setPostText] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = stripHtmlTags(postText);

    // Handle the submission of the post form, e.g. send the data to the server
    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("content", result);
    formData.append("user_id", id);
  
    try {
      await axios
        .post(`${import.meta.env.VITE_REACT_APP_BLOG_USER}/blog-post`, formData)
        .then(async (result) => {
          if (result.status === 200) {
            window.location.reload(true)
          } else {

          }
          
        });
    } catch (err) {
      console.log(err);
    }

  };

  function stripHtmlTags(html) {
    // Remove HTML tags using regex
    return html.replace(/<[^>]*>?/gm, "");
  }

  const maxLength = 1100;

  function handleChange(event) {
    const newTexture = event.target.value;
    if (newTexture.length <= maxLength) {
        setPostText(newTexture);
    }
  }

  function handleFileChange(event) {
    setSelectedFile(event.target.files[0]);
  }

  return (
    <div className="p-4 w-full">
      <form
        onSubmit={handleSubmit} 
        method="post"  encType="multipart/form-data"  
        className="border-4 p-2 border-blue-900/50 rounded"
      >
        <div className="text-2xl font-bold text-black border-b-2 mb-4">
          Post Feeds
        </div>
        <div className="w-full pb-3">
          <div className="flex items-center space-x-2">
            <label
              htmlFor="file-upload"
              className="px-4 py-2 text-white bg-[#090abb] rounded-md cursor-pointer hover:bg-blue-600"
            >
              {selectedFile ? 'Change/Remove Image' : "Add  Image"}
              
            </label>
            <span className="text-gray-500">
              {/* {selectedFile ? selectedFile.name : "(Optional)"} */}
              {selectedFile ? 'File selected' : "(Optional)"}
            </span>
            <input 
              name="image"
              type="file"
              id="file-upload"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <textarea
          name="posts"
          value={postText}
          onChange={handleChange}
          className="resize-none  border rounded px-2 border-blue-100 w-full h-48"
          rows="4"
          cols="50"
          placeholder="What's on your mind?"
          maxLength={maxLength}
        />

<span className="flex justify-end right text-gray-500 text-xs">{postText.length}/{maxLength}</span>
        <button
          className="w-full rounded bg-[#090abb] mt-3 py-3 text-white"
          type="submit"
        >
          Make Social Post
        </button>
      </form>
    </div>
  );
}
