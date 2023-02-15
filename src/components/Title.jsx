import style from "./Title.module.css";
const Title = () => {
  return (
    <>
      <h1 className={style.Title}>Todo List</h1>
      <p className={style.year}>2020-02-02</p>
    </>
  );
};

export default Title;
