/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const DateTask = ({ created }) => {
  const [timerId, setTimerId] = useState(null);

  const taskCreationTimer = () => {
    const delay = 1000;
    clearTimeout(timerId);
    const newTimerId = setTimeout(() => {
      taskCreationTimer();
    }, delay);
    setTimerId(newTimerId);
  };

  useEffect(() => {
    taskCreationTimer();
    return () => setTimerId(timerId);
  }, []);

  const resultTimer = formatDistanceToNow(created, {
    includeSeconds: true,
  });

  return <span className="created">created {resultTimer} ago</span>;
};

DateTask.propTypes = {
  created: PropTypes.number.isRequired,
};
export default DateTask;
