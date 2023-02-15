import style from "./Modal.module.css";
const Modal = ({ setIsModal }) => {
  const onRemoveModal = () => {
    setIsModal(false);
  };

  return (
    <span className={style.Modal}>
      <header className={style.hf}></header>
      <div className={style.Div}>최대 목록은 10개 입니다</div>
      <footer className={style.hf}>
        <button onClick={onRemoveModal}>닫기</button>
      </footer>
    </span>
  );
};

export default Modal;
