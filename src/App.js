import { useEffect, useRef, useState } from "react";
import "./App.css";
import Card from "./card/Card";
import Footer from "./components/Footer";
import MainBody from "./components/MainBody";
import Modal from "./components/Modal";
import Title from "./components/Title";

function App() {
  const [todoInput, setTodoInput] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const nextId = useRef(0);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("todo"));
    setTodoInput(localStorageData);

    if (localStorageData && localStorageData.length > 0) {
      nextId.current = localStorageData[localStorageData.length - 1].id;
    } else {
      setTodoInput([]);
    }
  }, []);

  useEffect(() => {
    if (todoInput.length < 10) {
      setIsModal(false);
    }
  }, [todoInput]);

  const onAddValue = (value) => {
    if (todoInput.length >= 10) {
      setIsModal(true);
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

  const onEditHandler = ({ id, value }) => {
    const updatedItems = todoInput.map((item) => {
      if (item.id === id) {
        return { ...item, todo: value };
      } else {
        return item;
      }
    });

    localStorage.setItem("todo", JSON.stringify(updatedItems));
    setTodoInput(updatedItems);
  };

  return (
    <Card>
      {isModal && (
        <Modal setIsModal={setIsModal} mainbody={"최대 목록은 10개 입니다"} />
      )}
      <Title />
      <MainBody
        todo={todoInput}
        onRemove={onremoveHanlder}
        onEditValue={onEditHandler}
      />
      <Footer onAddValue={onAddValue} />
    </Card>
  );
}

export default App;
