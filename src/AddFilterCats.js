import React from 'react';
import './App.css';

const AddFilterCats = ({dataUser}) => {
    return (
        <div className="carts">
        {dataUser &&
          dataUser.map((item, index) => {
             return (
              <div className="cart" key={index}>
                <div className="details">
                  <img src={item.picture.large} />
                  <p>{`${item.name.first} ${item.name.last}`}</p>
                  <p>{item.gender}</p>
                  <p>{item.email}</p>
                  <p>{item.dob.date.slice(0, 10)}</p>
                  <p>{item.nat}</p>
                </div>
              </div> 
            ); 
          })}
      </div>

    )
    
}

export default AddFilterCats;