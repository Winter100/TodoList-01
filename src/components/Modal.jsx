import { useRef, useState } from "react";
import style from "./Modal.module.css";
const Modal = ({
  onEdit,
  setIsModal,
  mainbody,
  mainId,
  header = "",
  buttonValue = "닫기",
  onEditValue,
}) => {
  const [value, setValue] = useState("");

  const changeRef = useRef();

  const onChangeHanlder = (e) => {
    setValue(e.target.vlaue);
  };

  const onChangeSumbitHandler = (e) => {
    e.preventDefault();
    if (!onEdit) {
      setIsModal(false);
      return;
    } else if (onEdit) {
      const changeValue = changeRef.current.value;
      if (changeValue.trim().length === 0) {
        setIsModal(false);
        return;
      }

      onEditValue({ id: mainId, value: changeValue });
      //수정 배열받아서 올려주기
      setIsModal(false);
    }
  };
  return (
    <span className={style.Modal}>
      <form onSubmit={onChangeSumbitHandler}>
        <header className={style.hf}>{header}</header>
        {!onEdit && <div className={style.Div}>{mainbody}</div>}
        {onEdit && (
          <div className={style.Input}>
            <input
              type="text"
              onChange={onChangeHanlder}
              placeholder={mainbody}
              ref={changeRef}
              value={value || undefined}
            />
          </div>
        )}
        <footer className={style.hf}>
          <button>{buttonValue}</button>
        </footer>
      </form>
    </span>
  );
};

export default Modal;
