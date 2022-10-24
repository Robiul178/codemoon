import React, { useContext } from 'react';
import { AuthContext } from './Context/UseContext';

const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h2>This is home page</h2>
        </div >
    );
};

export default Home;