import style from "./Footer.module.css";
const Footer = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form className={style.Footer} onSubmit={onSubmitHandler}>
      <input type="text" />
      <p className={style.Button}>
        <button>추가하기</button>
      </p>
    </form>
  );
};

export default Footer;
