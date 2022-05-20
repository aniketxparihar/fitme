import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "../../Context/Theme-Context";
import { addPost, editUser, getAllPosts } from "../../services";
import "./NewPost.css";
const NewPost = () => {
  const { themeObject } = useTheme();
  const { authToken } = useSelector((store) => store.auth);
  const { ownerData } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostMedia, setNewPostMedia] = useState("");

  return (
    <div
      className="new-post__container rounded-3xl flex flex-col"
      style={{ backgroundColor: themeObject.secondary }}
    >
      <div className="new-post__wrapper flex p-8">
        <img
          className="display-picture h-20 w-20 rounded-full"
          alt=""
          src={ownerData.profilePicture}
        />
        <textarea
          type="text"
          className="new-post__input  rounded-3xl ml-8 text-xl text-gray-50"
          placeholder="What's Happening"
          style={{
            backgroundColor: themeObject.primary,
            color: themeObject.text,
          }}
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
        />
      </div>
      <div className="new-post__options">
        <span className="material-symbols-rounded text-violet-500   rounded-full mr-8">
          perm_media
        </span>

        <span className="material-symbols-rounded text-violet-500  rounded-full mr-8">
          add_reaction
        </span>

        <span className="material-symbols-rounded text-violet-500  rounded-full mr-8">
          gif_box
        </span>

        <span className="material-symbols-rounded text-violet-500  rounded-full ">
          pin_drop
        </span>
        <button
          disabled={newPostContent.length < 1}
          className="add-post w-32 text-xl font-bold  bg-violet-700 text-gray-50 rounded-3xl cursor-pointer"
          onClick={() => {
            addPost(
              { content: newPostContent, media: newPostMedia },
              authToken
            );
            dispatch(getAllPosts());
            setNewPostContent("");
            setNewPostMedia("");
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default NewPost;
