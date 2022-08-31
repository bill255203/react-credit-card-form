import Card from './Card.js';
import Form from './Form.js';
import Thanks from './Thanks.js';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [formData, setFormData] = useState({
    namee: '',
    num: '',
    month: '',
    year: '',
    cvc: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
    console.log(event.target.value);
  }

  return (
    <Router>
      <div className='App'>
        <div className='main split'>
          <Card />
          <Routes>
            <Route
              path='/'
              element={<Form formData={formData} handleSubmit={handleSubmit} />}
            />
            <Route path='/tks' element={<Thanks formData={formData} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
