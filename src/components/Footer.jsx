import React from 'react';
import PropTypes from 'prop-types';
import TaskFilter from './TasksFilter';
import buttonsFilter from './buttonsFilter';

const Footer = ({
  itemsLeftCount,
  filterTasks,
  onFilterTasks,
  onClearCompletedTasks,
  completedTask,
}) => (
  <footer className="footer">
    <span className="todo-count">{itemsLeftCount} items left</span>
    <TaskFilter filterTasks={filterTasks} onFilterTasks={onFilterTasks} />
    <button
      type="button"
      className="clear-completed"
      onClick={() => onClearCompletedTasks(completedTask)}
    >
      Clear completed
    </button>
  </footer>
);

Footer.defaultProps = {
  itemsLeftCount: 0,
  filterTasks: buttonsFilter[0].name,
  onFilterTasks: () => {},
  onClearCompletedTasks: () => {},
};

Footer.propTypes = {
  itemsLeftCount: PropTypes.number,
  filterTasks: PropTypes.string,
  onFilterTasks: PropTypes.func,
  completedTask: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClearCompletedTasks: PropTypes.func,
};
export default Footer;
