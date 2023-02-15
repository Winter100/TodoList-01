import { useState } from "react";
import style from "./MainBody.module.css";
import Modal from "./Modal";
const MainBody = ({ todo, onRemove, onEditValue, onChangeColorHandler }) => {
  const [onEdit, setOnEdit] = useState(false);
  const [mainBody, setMainBody] = useState("");
  const [mainId, setMainId] = useState("");

  let EditValues = "";
  let EditId = "";

  const onEditer = (item) => {
    setOnEdit(true);
    EditValues = item.todo;
    EditId = item.id;
    setMainBody(EditValues);
    setMainId(EditId);
  };

  const changeColorHandler = (id) => {
    onChangeColorHandler(id);
  };

  return (
    <div className={style.MainBody}>
      {onEdit && (
        <Modal
          header={"수정할 내용을 입력해주세요"}
          mainbody={mainBody}
          mainId={mainId}
          buttonValue={"수정"}
          setIsModal={setOnEdit}
          onEditValue={onEditValue}
          onEdit={onEdit}
        />
      )}
      <ul className={style.todoList}>
        {todo.map((item) => (
          <p className={style.pLine} key={item.id}>
            <button
              id={item.id}
              className={style.Edit}
              onClick={() => onEditer(item)}
            >
              수정
            </button>
            <span
              onClick={() => changeColorHandler(item.id)}
              className={item.is ? style.isTrue : style.span}
              onDoubleClick={() => onRemove(item.id)}
            >
              {item.todo}
            </span>
          </p>
        ))}
      </ul>
    </div>
  );
};

export default MainBody;
