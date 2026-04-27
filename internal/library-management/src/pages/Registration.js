import React from 'react'
function registration() {
    return ( 
        <div className='login'>
            <h1 className='logo'>Register</h1>
            <form>
                <label >Username:</label>
                <input type="text"required />
                <br />
                <label >Email:</label>
                <input type="email"  required />
                <label >Password:</label>
                <input type="password"  required />
                <br />
                <button type="submit">Register</button>
            </form>

             <p className='foot'>&copy; 24071A05K4. Library Management System. All rights reserved.</p>
        </div>
     );
}

export default registration;