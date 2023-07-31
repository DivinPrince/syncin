'use client'
import React, { useState, ChangeEvent } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const MessageInput= () => {
  const [message, setMessage] = useState<string>("");
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleEmojiClick = (emoji: any) => {
    setMessage((prevMessage) => prevMessage + emoji.native);
    console.log(emoji);
    
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={handleInputChange}
        placeholder="Type your message here..."
      />
      <button onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
        {showEmojiPicker ? "Close" : "Add Emoji"}
      </button>
      {showEmojiPicker && (
        <Picker
          data={data}
          onEmojiSelect={handleEmojiClick}
          title="Pick your emoji"
          emoji="point_up"
        />
      )}
    </div>
  );
};

export default MessageInput;
