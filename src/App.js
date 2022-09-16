import './App.css';
import Users from "./components/users/Users";
import Ships from "./components/ships/Ships";

function App() {
  return (
      <div>
          <div className={'Users'}>
              <h1>Users</h1>
              <Users/>
          </div>
          <div className={'AllShips'}>
              <h1>Ships</h1>
              <Ships/>
          </div>
      </div>

  );
}

export default App;
