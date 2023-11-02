import{ useState } from 'react';
import magGlass from '../../assets/mag-glass.svg'
import './form.css'
import '../../index.css'

function Form() {
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Email:', email);
    console.log('Location:', location);
    console.log('Budget:', budget);
    console.log('Date:', date);
    console.log('Time:', time);

    // Clear form fields
    setEmail('');
    setLocation('');
    setBudget('');
    setDate('');
    setTime('');
  };

  return (
    <div className="container">
    <form onSubmit={handleSubmit}
          className="form">
      <label className="email">
        Email
        <input
          className="input-email"
          type="email"
          placeholder="gurufox@gmail.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </label>
      <br />
      <label className="location">
        Location 
        <img className="magGlass" src={magGlass} 
           alt="search mag glass"/>
        <input
          className="input input-location"
          type="text"
          placeholder="Search Location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          required
        />
        {/* <img className="magGlass" src={magGlass} 
           alt="search mag glass"/> */}
      </label>
     
      <br />
      <label className="budget">
        Budget
        <input
          className="input"
          type="number"
          placeholder="$50 - $100"
          value={budget}
          onChange={(event) => setBudget(event.target.value)}
          required
        />
      </label>
      <br />
      <label className="date">
        Date
        <input
        className="input"
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          required
        />
      </label>
      <br />
      <label className="time">
        Time
        <input
          className="input"
          type="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
          required
        />
      </label>
      <br />
      <button className="generate" type="submit">Generate Date Plan</button>
    </form>
    </div>
  );
}

export default Form;
