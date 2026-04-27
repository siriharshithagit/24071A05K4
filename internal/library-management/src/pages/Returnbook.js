import React from 'react'
function returnbook() {
    return (  
        <div className='login'>
            <h1 className='logo'>Return Book</h1>
            <form>  
            <label >Book id:</label>
                <input type="text" required />
                <br />
                <label >User id:</label>
            <input type="text" required />
                <br />
                <button type="submit">Return</button>
            </form>

             <p className='foot'>&copy; 24071A05K4. Library Management System. All rights reserved.</p>
        </div>
    );
}

export default returnbook;