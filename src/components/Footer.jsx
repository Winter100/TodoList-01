import { useState } from "react";
import style from "./Footer.module.css";

const Footer = ({ onAddValue }) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (inputValue.trim().length === 0) {
      return;
    }

    onAddValue(inputValue);
    setInputValue("");
  };
  return (
    <form className={style.Footer} onSubmit={onSubmitHandler}>
      <input
        type="text"
        onChange={onChangeHandler}
        value={inputValue}
        placeholder="할일을 적어주세요"
      />
      <p className={style.Button}>
        <button>추가하기</button>
      </p>
    </form>
  );
};

export default Footer;
