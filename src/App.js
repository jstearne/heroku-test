import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
    id: 1,
    text: 'heyo',
    },
    {
    id: 2,
    text: 'hiya',
    },{
    id: 3,
    text: 'sup',
    }
])

// DELETE TASK


  return (
    <div className="container">
      <Header title='Hello' />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
// npm run build && (cd server && node server.js)

// To run with 'npm start-dev' ...Add this to scripts:
// "start-dev": "npm run build && (cd server && nodemon server.js)",