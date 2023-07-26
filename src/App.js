import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./Components/Navbar";
import Todos from "./Components/Todos";
import Footer from "./Components/Footer";
import Addtask from "./Components/Addtask";
import About from "./Components/About";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  let existingTodos = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];

  const [todo, setTodo] = useState(existingTodos);
  const addTask = (tittle, desc) => {
    let id = todo.length ? todo[todo.length - 1].job : 0;
    const newTask = {
      job: id + 1,
      title: tittle,
      description: desc,
    };
    setTodo([...todo, newTask]);
  };

  const onDelete = (task) => {
    setTodo(
      todo.filter((e) => {
        return e !== task;
      })
    );
  };
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);
  return (
    <>
      <Router>
        <NavBar title={"Todo list"} />
          <Switch>
            <Route path="/" render = {()=>{
              return (
                <>
                  <Addtask addTask={addTask} />
                  <Todos todo={todo} onDelete={onDelete} />
                </>
              )
            }}>
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
