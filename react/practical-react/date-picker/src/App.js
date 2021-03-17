import './App.css';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import React from 'react'

function App() {
  const [date, setDate] = React.useState(null)
  return (
    <div className="App">
      <DatePicker
        selected={date}
        onChange={d => setDate(d)}
        dateFormat='dd-MM-yyyy'
        // minDate={new Date()} 
        // maxDate={new Date()} 
        filterDate={date=> date.getDay() !== 6 && date.getDay() !== 0} 
        isClearable
        showYearDropdown
        scrollableYearDropdown
      />
    </div>
  );
}

export default App;
