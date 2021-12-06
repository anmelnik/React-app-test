import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Carts from './Cart';


function App() {
  // eslint-disable-next-line
  const [data, setData] = useState(null);
  const [genders, setGenders] = useState('');
  const [national, setNational] = useState('');


  let url = "https://randomuser.me/api/?results=15&seed=abc&inc=gender,name,email,picture,dob,id,nat&nat=gb"

  useEffect(() => {
    axios.get(url)
      .then(response => setData(response.data.results))
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    let nat = localStorage.getItem('national')
    let gender = localStorage.getItem('genders')
    if (nat && gender) {
      setNational(JSON.parse(nat));
      setGenders(JSON.parse(gender));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('genders', JSON.stringify(genders));
    localStorage.setItem('national', JSON.stringify(national));
  });


  const fetchData = async () => {
    const response = await axios.get(url)
    const dataSort = JSON.parse(JSON.stringify(response.data.results))



    if (!genders || !national) {
      alert("Please enter gender and nationality!")
    } let arrtDataSort = dataSort.filter(item => {
      if (item.gender === genders && item.nat === national) {
        return item
      }
      else if (genders === "all") {
        return item
      }
    })
    setData(arrtDataSort)
  };

  const AddFilterCats = ({ data }) => {
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
                  <p>{item.nat}</p>
                </div>
              </div>
            );
          })}
      </div>

    )
  }

  return (
    <div className="App">
      <select value={genders} onChange={e => {
        const selectGenders = e.target.value
        setGenders(selectGenders)
      }}>
        <option></option>
        <option value="all">all</option>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      <select value={national} onChange={e => {
        const selectNational = e.target.value
        setNational(selectNational)
      }}>
        <option></option>
        <option value="AU">AU</option>
        <option value="BR">BR</option>
        <option value="CA">CA</option>
        <option value="CH">CH</option>
        <option value="DE">DE</option>
        <option value="DK">DK</option>
        <option value="ES">ES</option>
        <option value="FI">FI</option>
        <option value="FR">FR</option>
        <option value="GB">GB</option>
        <option value="IE">IE</option>
        <option value="IR">IR</option>
        <option value="NO">NO</option>
        <option value="NL">NL</option>
        <option value="NZ">NZ</option>
        <option value="TR">TR</option>
        <option value="US">US</option>
      </select>
      <button className="" onClick={fetchData}>
        Apply filters
      </button>
      <Carts data={data} />
      {/* <AddFilterCats /> */}
    </div>
  );
}

export default App;








