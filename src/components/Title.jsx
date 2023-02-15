import style from "./Title.module.css";
const Title = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  return (
    <>
      <h1 className={style.Title}>Todo List</h1>
      <p className={style.year}>{`${year}년 ${month}월 ${day}일`}</p>
    </>
  );
};

export default Title;
