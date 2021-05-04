import React from 'react';
import PropTypes from 'prop-types';
import buttonsFilter from './buttonsFilter';

const TaskFilter = ({ filterTasks, onFilterTasks }) => {
  const buttons = buttonsFilter.map(({ name, text }) => {
    const isActive = filterTasks === name;
    const classBtn = isActive ? 'selected' : '';
    return (
      <li key={name}>
        <button
          type="button"
          className={classBtn}
          onClick={() => onFilterTasks(name)}
        >
          {text}
        </button>
      </li>
    );
  });
  return <ul className="filters">{buttons}</ul>;
};
TaskFilter.defaultProps = {
  filterTasks: buttonsFilter[0].name,
  onFilterTasks: () => {},
};

TaskFilter.propTypes = {
  filterTasks: PropTypes.string,
  onFilterTasks: PropTypes.func,
};

export default TaskFilter;
