import React, { useContext } from 'react';
import { AuthContext } from '../components/providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    // akta sorto debo jodi amader user thake tahole ami{children} tak pathabo..mane user ta children a chole jabe..akhn distructuring kore {user} tak nibo..

    const { user ,loading} = useContext(AuthContext);

    // jodi loading hoite thake tahole amk ei loading spinner ta dekhabe..
    if (loading) {
        return <div>Loading hocche.....</div>
    }

    // user login kora thakle tumi j route a eecha chole jete parba
    if (user) {
        return children;
    }
    // user login na thakle agee login korar jonno login page pathabo,,...
    return <Navigate to='/login'> </Navigate>

    return (
        <div>

        </div>
    );
};

export default PrivetRoute;