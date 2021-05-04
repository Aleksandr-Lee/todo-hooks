import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import DateTask from './Date';
import TimerTask from './TimerTask';

const Task = ({
  completed,
  editing,
  onCompletedTask,
  task,
  created,
  editingTask,
  id,
  onDeletTask,
  timer,
  timeTask,
}) => {
  const [value, setValue] = useState('');
  const autofocus = useRef();

  const onEnterEdit = (event) => {
    setValue(event);
  };

  useEffect(() => {
    setValue(task);
    autofocus.current.focus();
  }, [task, editingTask]);

  const onSubmitEdit = (event) => {
    event.preventDefault();
    editingTask(value, id);
    if (!value) onDeletTask(id);
  };

  let classNames;
  if (completed) classNames = 'completed';
  if (editing) classNames = 'editing';

  return (
    <li className={classNames}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={onCompletedTask}
        />
        <label>
          <span className="title">{task}</span>
          <TimerTask timer={timer} timeTask={timeTask} id={id} />
          <span className="description">
            <DateTask created={created} />
          </span>
        </label>
        <button
          type="button"
          aria-label="Изменение задачи"
          className="icon icon-edit"
          onClick={() => {
            editingTask(task, id);
            onEnterEdit(task);
          }}
        />
        <button
          type="button"
          aria-label="Удвление задачи"
          className="icon icon-destroy"
          onClick={onDeletTask}
        />
      </div>
      <form onSubmit={onSubmitEdit}>
        <input
          ref={autofocus}
          type="text"
          className="edit"
          value={value}
          onChange={(event) => onEnterEdit(event.target.value)}
        />
      </form>
    </li>
  );
};

Task.defaultProps = {
  completed: false,
  editing: false,
  timer: 0,
  timeTask: () => {},
  editingTask: () => {},
  onCompletedTask: () => {},
  onDeletTask: () => {},
};

Task.propTypes = {
  id: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  created: PropTypes.number.isRequired,
  editing: PropTypes.bool,
  editingTask: PropTypes.func,
  onCompletedTask: PropTypes.func,
  onDeletTask: PropTypes.func,
  task: PropTypes.string.isRequired,
  timeTask: PropTypes.func,
  timer: PropTypes.number,
};

export default Task;
