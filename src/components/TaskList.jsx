import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const TaskList = ({
  task,
  onDeletTask,
  editingTask,
  onCompletedTask,
  timeTask,
}) => {
  const element = task.map((item) => (
    <Task
      task={item.task}
      key={item.id}
      id={item.id}
      completed={item.completed}
      editing={item.editing}
      created={item.created}
      timer={item.timer}
      onDeletTask={() => onDeletTask(item.id)}
      editingTask={editingTask}
      onCompletedTask={() => onCompletedTask(item.id)}
      timeTask={timeTask}
    />
  ));
  return (
    <section className="main">
      <ul className="todo-list">{element}</ul>
    </section>
  );
};

TaskList.defaultProps = {
  onDeletTask: () => {},
  editingTask: () => {},
  onCompletedTask: () => {},
  timeTask: () => {},
};

TaskList.propTypes = {
  task: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeletTask: PropTypes.func,
  editingTask: PropTypes.func,
  onCompletedTask: PropTypes.func,
  timeTask: PropTypes.func,
};
export default TaskList;
