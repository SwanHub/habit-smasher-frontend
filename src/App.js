import React from 'react';
import './App.css';
import Habit from './components/Habit'

class App extends React.Component {
  
  state = {
    habits: []
  }
  
  componentDidMount(){
    fetch(`https://habit-smasher.herokuapp.com/habits`)
      .then(r => r.json())
      .then(r => this.setState({
        habits: r
      }))
  }

  renderHabits = () => {
    return this.state.habits.map(habit => {
        return <Habit habit={habit} />
    })
}

  render(){
    return (
      <div className="app">
          <h1>Smash These Bad Habits</h1>
          {this.renderHabits()}
      </div>
    );
  }
}

export default App;
