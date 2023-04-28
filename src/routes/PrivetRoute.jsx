import React, { useContext } from 'react';
import { AuthContext } from '../components/providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    // akta sorto debo jodi amader user thake tahole ami{children} tak pathabo..mane user ta children a chole jabe..akhn distructuring kore {user} tak nibo..

    const { user ,loading} = useContext(AuthContext);

    // current location dekhe ami amr location login korar por last j page a chilam oi location a pathabo

    const location = useLocation();
    console.log(location);

    // jodi loading hoite thake tahole amk ei loading spinner ta dekhabe..
    if (loading) {
        return <div>Loading hocche.....</div>
    }

    // user login kora thakle tumi j route a eecha chole jete parba
    if (user) {
        return children;
    }
    // user login na thakle agee login korar jonno login page pathabo,,...
    // login korar por last j page a chilo oi page er location onujayi replace kore debo..
    
    return <Navigate to='/login' state={{from : location}} replace> </Navigate>

    return (
        <div>

        </div>
    );
};

export default PrivetRoute;