import style from "./Title.module.css";
const Title = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  return (
    <>
      <h1 className={style.Title}>Todo List</h1>
      <p className={style.year}>{`${year}년 ${month}월 ${day}일`}</p>
      <nav className={style.stitle}>
        (더블 클릭시 삭제되며 최대 10개의 목록이 저장됩니다)
      </nav>
    </>
  );
};

export default Title;
