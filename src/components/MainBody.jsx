import style from "./MainBody.module.css";
const MainBody = ({ todo, onRemove, onEdit }) => {
  return (
    <div className={style.MainBody}>
      <ul className={style.todoList}>
        {todo.map((item) => (
          <p className={style.pLine} key={item.id}>
            <button className={style.Edit}>수정</button>
            <span
              className={style.span}
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
