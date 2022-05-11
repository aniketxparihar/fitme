import React from 'react'
import { useModal } from '../../Context/Modal-Context';
import { useTheme } from '../../Context/Theme-Context';
import "./NewPostModal.css"
const NewPostModal = () => {
    const { themeObject } = useTheme();
    const { modalNewPostVisible, setModalNewPostVisible } = useModal();
    return (
      <div
        className="modal__container"
        style={{ display: modalNewPostVisible }}
      >
        <div
          className="new-post-modal__container rounded-3xl flex flex-col border"
          style={{ backgroundColor: themeObject.secondary }}
        >
          <span
            className="cancel p-2 mt-8 ml-8 material-symbols-rounded  cursor-pointer  rounded-3xl "
            style={{
              backgroundColor: themeObject.primary,
              color: themeObject.text,
            }}
            onClick={() => setModalNewPostVisible("none")}
          >
            clear
          </span>
          <div className="new-post__wrapper flex p-8">
            <img
              className="display-picture h-16 w-16 rounded-full"
              alt=""
              src="https://images.unsplash.com/photo-1485528562718-2ae1c8419ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=858&q=80"
            />
            <textarea
              type="text"
              className="new-post-modal__input  rounded-3xl ml-8 text-xl text-gray-50"
              placeholder="What's Happening"
              style={{
                backgroundColor: themeObject.primary,
                color: themeObject.text,
              }}
            />
          </div>
          <div className="new-post-modal__options">
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
            <div className="add-post w-32 text-xl font-bold  bg-violet-700 text-gray-50 rounded-3xl ">
              Post
            </div>
          </div>
        </div>
      </div>
    );
}

export default NewPostModal