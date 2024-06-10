import React from "react";
import "./assets/App.css";
import AppBar from "./components/AppBar";
import { Routes, Route } from "react-router-dom";
import TodoListScreen from "./components/TodoListScreen";
class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Wash Hand",
        created: "Wed Apr 20 2020",
        description: "Wash hand and brush teeth",
        completed: true,
      },
    ],
  };
  render() {
    return (
      <div className="app">
        <AppBar />
        <br />
        <Routes>
          <Route path="/" render={(props) => <TodoListScreen {...props} />} />
        </Routes>
        {/* todo: routes */}
      </div>
    );
  }
}

export default App;
