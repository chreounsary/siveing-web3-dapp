import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Screen/Home';
import Notfound from './Screen/Notfound';
import { useContext } from 'react';
import { StateContext } from './Context/StateProvider';
import Account from './Screen/Account';
import Header from './Layout/Header';
import ShowDetailTokenURI from './Screen/Detail/ShowDetailTokenURI';

function App() {
    const { stateUser } = useContext(StateContext);
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                {stateUser.isAuthenticated === true && (
                    <>
                        <Route exact path="/account" element={<Account />} />
                        <Route path="/token/:id" element={<ShowDetailTokenURI />} />
                    </>
                )}
                <Route path="*" element={<Notfound />} />
            </Routes>
        </>
    );
}

export default App;
