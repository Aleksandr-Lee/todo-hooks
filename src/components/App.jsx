import React, { useState } from 'react';
import { v4 } from 'uuid';
import Header from './Header';
import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';
import Footer from './Footer';
import buttonsFilter from './buttonsFilter';
import '../index.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filterTasks, setFilterTasks] = useState(buttonsFilter[0].name);

  const onCompletedTask = (id) => {
    const idx = tasks.findIndex((el) => el.id === id);
    const oldTask = tasks[idx];
    const newTask = {
      ...oldTask,
      completed: !oldTask.completed,
    };
    const newArray = [...tasks.slice(0, idx), newTask, ...tasks.slice(idx + 1)];
    setTasks(newArray);
  };

  const addTask = (text) => {
    const newTask = {
      id: v4(),
      task: text,
      completed: false,
      editing: false,
      created: Date.now(),
      timer: 0,
    };
    setTasks((task) => [...task, newTask]);
  };

  const deletTask = (id) => {
    const newArray = tasks.filter((el) => el.id !== id);
    setTasks(newArray);
  };

  const editingTask = (text, id) => {
    const idx = tasks.findIndex((el) => el.id === id);
    const oldTask = tasks[idx];
    const newTask = {
      ...oldTask,
      task: text,
      editing: !oldTask.editing,
    };
    const newArray = [...tasks.slice(0, idx), newTask, ...tasks.slice(idx + 1)];
    setTasks(newArray);
  };

  const timeTask = (id, time) => {
    const idx = tasks.findIndex((el) => el.id === id);
    if (tasks[idx] === undefined) {
      return [];
    }
    const newTask = {
      ...tasks[idx],
      timer: time,
    };
    const newArray = [...tasks.slice(0, idx), newTask, ...tasks.slice(idx + 1)];
    return setTasks(newArray);
  };

  const filterTask = (task, filter) => {
    switch (filter) {
      case buttonsFilter[0].name:
        return task;
      case buttonsFilter[1].name:
        return task.filter((el) => !el.completed);
      case buttonsFilter[2].name:
        return task.filter((el) => el.completed);
      default:
        return task;
    }
  };

  const onFilterTasks = (filters) => {
    setFilterTasks(filters);
  };

  const clearCompletedTasks = () => {
    const newArr = tasks.filter((el) => !el.completed);
    setTasks(newArr);
  };

  const itemsLeftCount = tasks.filter((el) => !el.completed).length;
  const completedTask = tasks.filter((el) => el.completed);
  const filterArr = filterTask(tasks, filterTasks);
  
  return (
    <div>
      <Header />
      <NewTaskForm onAddTask={addTask} />
      <TaskList
        task={filterArr}
        onDeletTask={deletTask}
        editingTask={editingTask}
        onCompletedTask={onCompletedTask}
        timeTask={timeTask}
      />
      <Footer
        itemsLeftCount={itemsLeftCount}
        filterTasks={filterTasks}
        onFilterTasks={onFilterTasks}
        completedTask={completedTask}
        onClearCompletedTasks={clearCompletedTasks}
      />
    </div>
  );
};

export default App;
