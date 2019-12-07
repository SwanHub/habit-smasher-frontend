import React from 'react'

const Habit = ({habit}) => {
    return (
        <>
            <h3>Bad Habit: {habit.title}</h3>
            <small>Active: {String(habit.active)}</small>
        </>
    )
}

export default Habit;
