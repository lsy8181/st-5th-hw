import React, { useState, useContext } from "react";
import TextContext from "../contexts/TextContext";

const TextInput = () => {
  const [input, setInput] = useState("");
  const { onAddText } = useContext(TextContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddText(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add Text</button>
    </form>
  );
};

export default TextInput;
