import React from 'react'
function Login() {
    return ( 
        <div className="login">
            <h1 className='logo'>Login</h1> 
            <form>
                <label >Username:</label>
                <input type="text" id="username" name="username" required />
                <br />
                <label >Password:</label>
                <input type="password" id="password" name="password" required />
                <br />
                <button type="submit">Login</button>
            </form>


               <p className='foot'>&copy; 24071A05K4. Library Management System. All rights reserved.</p>
        </div>
     );
}

export default Login;