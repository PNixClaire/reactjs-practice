import PropTypes from 'prop-types';

function UserGreeting(props) {

    //if user is logged in, render UserGreeting, you can use if-else
    /*
    if (props.isLoggedIn) {
        return <h2>Welcome {props.username} </h2>
    }
    else {
        return <h2>Please log in to continue.</h2>
    }
    */

    //you can also use the ternary operator
    /*
    return (props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.username}</h2> :
                               <h2 className="login-prompt">Please log in to continue.</h2>);
    */
    
    //you can also use const
    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>
    const logInPrompt = <h2 className="login-prompt">Please log in to continue.</h2>

    return (props.isLoggedIn ? welcomeMessage : logInPrompt);
}

//add Proptypes for debugging
UserGreeting.prototype = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

//set up default props
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreeting