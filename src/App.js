import { useEffect, useRef, useState } from "react";
import "./App.css";
import Card from "./card/Card";
import Footer from "./components/Footer";
import MainBody from "./components/MainBody";
import Title from "./components/Title";

function App() {
  const [todoInput, setTodoInput] = useState([]);
  const nextId = useRef(0);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("todo"));
    setTodoInput(localStorageData);

    if (localStorageData && localStorageData.length > 0) {
      nextId.current = localStorageData[localStorageData.length - 1].id;
      console.log(nextId.current);
    } else {
      setTodoInput([]);
    }
  }, []);

  const onAddValue = (value) => {
    if (todoInput.length >= 10) {
      //모달창. 최대 10개까지만 가능
      return;
    }
    const todoArr = [];

    todoArr.push(...todoInput, {
      id: nextId.current + 1,
      todo: value,
      is: false,
    });
    setTodoInput(todoArr);
    localStorage.setItem("todo", JSON.stringify(todoArr));
    nextId.current += 1;
  };

  const onremoveHanlder = (id) => {
    const filterArr = todoInput.filter((item) => item.id !== id);
    localStorage.setItem("todo", JSON.stringify(filterArr));
    setTodoInput(filterArr);
  };

  const onEditHandler = () => {};

  return (
    <Card>
      <Title />
      <MainBody
        todo={todoInput}
        onRemove={onremoveHanlder}
        onEdit={onEditHandler}
      />
      <Footer onAddValue={onAddValue} />
    </Card>
  );
}

export default App;
