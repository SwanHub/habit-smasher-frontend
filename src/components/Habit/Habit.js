import React from 'react'
import './Habit.scss'

const Habit = ({habit}) => {
    return (
        <div className="habit">
            <h2>{habit.title}</h2>
        </div>
    )
}

export default Habit;
