import axios from 'axios';
// import ReactDOM from "react-dom";
import React, { useState } from 'react';
import './App.css';

function App() {
  // eslint-disable-next-line
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      "https://randomuser.me/api/?results=15&seed=abc&inc=gender,name,email,picture,dob,nat&nat=gb")
    // .then(res => res.data.results.map(result => (
    //   {
    //     name: `${result.name.first} ${result.name.last}`,
    //     gender: result.gender,
    //     email: result.email,
    //     birthday: result.dob.date,
    //     photo: result.picture.large,
    //   })))
    // .then(newData => console.log(newData))
    // .then(newData => this.setState({ name: newData, gender: newData, email: newData, birthday: newData, photo: newData }))
    // .catch(error => alert(error);
    setData(response.data.results);
  };

  return (
    <div className="App">
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Apply filters
        </button>
        <br />
      </div>
      <div className="books">
        {data &&
          data.map((item, index) => {
            let splited = item.dob.date.split('')
            splited.length = 10
            splited.join('')
            return (
              <div className="book" key={index}>
                <div className="details">
                  <img src={item.picture.large} />
                  <p>{`${item.name.first} ${item.name.last}`}</p>
                  <p>{item.gender}</p>
                  <p>{item.email}</p>
                  <p>{splited}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;








