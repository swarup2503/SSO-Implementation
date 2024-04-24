import './App.css'
import TicTacToe from './components/tic-tac-toe';
import { useAuth0 } from "@auth0/auth0-react";

const initialBoard=()=> Array(9).fill(null);

function App() {

  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  console.log("curent user", user);
  
  return (
    <>
    {isAuthenticated &&  <TicTacToe/> }
    <div className="App">
        <header className="App-header">
            {isAuthenticated && <h1>Hello {user.name}</h1>}
            {
                isAuthenticated ? (
                    <button onClick={() => logout({returnTo:window.location.origin})}>Logout</button>
                ) : (
                    <>
                        <h1>Welcome to Swarup's App</h1>
                        <p>(Single Sign On Implementation)</p>
                        <button  onClick={() => loginWithRedirect()}>Login</button>
                    </>
                )
            }
        </header>
    </div>
    </>
);
  
}

export default App;
