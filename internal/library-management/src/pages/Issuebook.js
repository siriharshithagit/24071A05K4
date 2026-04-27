import React from 'react'
function IssueBook() {
    return ( 
        <div className='login'>
            <h1 className='logo'>Issue Book</h1>
            <form>
            <label >Book id:</label>
                <input type="text" required />
                <br />
                <label >User id:</label>
            <input type="text" required />
                <br />
                <button type="submit">Issue</button>

            </form>

          

                <p className='foot'>&copy; 24071A05K4. Library Management System. All rights reserved.</p>
        
           
        </div>
     );
}

export default IssueBook;