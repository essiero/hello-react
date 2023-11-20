import logo from './logo.svg';
import './App.css';
import Hello from './Hello.jsx';
import Header from './Header.jsx';
import StudentList from './StudentList.jsx';

function App() {
  return (
    <div>
      <Header />
      <Hello name="Matt" color="Blue" />
      <Hello name="Key" color="Chartreuse" />
      <StudentList />
    </div>
  );
}

export default App;
