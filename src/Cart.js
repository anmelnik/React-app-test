import React from 'react';
import './App.css';

const Carts = ({data}) => {
    return (
        <div className="books">
        {data &&
          data.map((item, index) => {
             return (
              <div className="book" key={index}>
                <div className="details">
                  <img src={item.picture.large} />
                  <p>{`${item.name.first} ${item.name.last}`}</p>
                  <p>{item.gender}</p>
                  <p>{item.email}</p>
                  <p>{item.dob.date.slice(0, 10)}</p>
                  {/* <p>{item.nat}</p> */}
                </div>
              </div> 
            ); 
          })}
      </div>

    )
    
}

export default Carts;