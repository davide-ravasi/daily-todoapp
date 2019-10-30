import React from 'react';

import { signInWithGoogle } from '../../firebase/firebase.js';


class LogIn extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <button onClick={signInWithGoogle}>Sign in with Google</button>
            </div>
        )
    }
}

export default LogIn;