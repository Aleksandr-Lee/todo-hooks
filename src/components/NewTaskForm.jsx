/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewTaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const onEnterTask = (event) => {
    setTask(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (task) {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <form className="new-todo-form" onSubmit={onSubmit}>
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        value={task}
        autoFocus
        onChange={onEnterTask}
      />
    </form>
  );
};

NewTaskForm.defaultProps = {
  onAddTask: () => {},
};

NewTaskForm.propTypes = {
  onAddTask: PropTypes.func,
};

export default NewTaskForm;
