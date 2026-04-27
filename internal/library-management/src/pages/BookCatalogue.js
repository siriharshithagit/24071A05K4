import React from 'react'

function BookCatalogue() {
  return ( 
    <div className='container'>
      <h1>Book Catalogue</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>

        <div className="card" style={{ width: '18rem' }}>
          <h3>Book 1</h3>
          <div className="card-body">
            <h5 className="card-title">Panchatantra</h5>
            <p className="card-text">A collection of ancient Indian animal fables.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>  
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <h3>Book 2</h3>
          <div className="card-body">
            <h5 className="card-title">Panchatantra 2</h5>
            <p className="card-text">A collection of ancient Indian animal fables.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>  
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <h3>Book 3</h3>
          <div className="card-body">
            <h5 className="card-title">Panchatantra 3</h5>
            <p className="card-text">A collection of ancient Indian animal fables.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>  
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <h3>Book 4</h3>
          <div className="card-body">
            <h5 className="card-title">Panchatantra 4</h5>
            <p className="card-text">A collection of ancient Indian animal fables.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>  
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <h3>Book 5</h3>
          <div className="card-body">
            <h5 className="card-title">Panchatantra 5 </h5>
            <p className="card-text">A collection of ancient Indian animal fables.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>  
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <h3>Book 6</h3>
          <div className="card-body">
            <h5 className="card-title">Panchatantra 6</h5>
            <p className="card-text">A collection of ancient Indian animal fables.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>  
        </div>

      </div>

     
        <p>&copy; 24071A05K4. Library Management System. All rights reserved.</p>
    </div>
  );
}

export default BookCatalogue;