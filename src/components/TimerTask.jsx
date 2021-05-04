import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const TimerTask = ({ timer, timeTask, id }) => {
  const [timerPlay, setTimerPlay] = useState(false);
  const [timers, setTimer] = useState(0);

  useEffect(() => {
    let timerId;
    if (timerPlay) {
      timerId = setInterval(() => {
        setTimer((timerTime) => timerTime + 1);
      }, 1000);
    }
    setTimer(timer);
    return () => clearInterval(timerId);
  }, [timerPlay, timer]);

  const startTimer = () => {
    setTimerPlay(true);
  };

  const pauseTimer = () => {
    setTimerPlay(false);
    timeTask(id, timers);
  };

  const minute = `0${Math.floor((timers % 3600) / 60)}`.slice(-2);
  const second = `0${timers % 60}`.slice(-2);
  return (
    <span className="description">
      <button
        type="button"
        aria-label="Запуск таймера"
        className="icon icon-play"
        onClick={startTimer}
      />
      <button
        type="button"
        aria-label="Остановка таймера"
        className="icon icon-pause"
        onClick={pauseTimer}
      />
      <span> {minute}</span>
      <span> :{second}</span>
    </span>
  );
};
TimerTask.defaultProps = {
  timer: 0,
  timeTask: () => {},
};

TimerTask.propTypes = {
  id: PropTypes.string.isRequired,
  timeTask: PropTypes.func,
  timer: PropTypes.number,
};

export default TimerTask;
