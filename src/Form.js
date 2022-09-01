import { useNavigate } from 'react-router-dom';

const Form = ({ formData, handleInfo }) => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isNaN(formData.namee)) return false;
    if (formData.num.toString().length !== 12) return false;
    if (
      formData.month.toString().length !== 2 ||
      formData.month <= 1 ||
      formData.month >= 12
    )
      return false;
    if (formData.year.toString().length !== 2 || formData.year <= 22)
      return false;
    if (formData.cvc.toString().length !== 3) return false;
    //navigate to another page
    navigate('/tks');
    return true;
  };

  return (
    <form className='section sec1 form' id='form1' onSubmit={handleSubmit}>
      <label htmlFor='name'>CARDHOLDER NAME</label>
      <input
        required
        type='text'
        id='name'
        name='namee'
        onChange={handleInfo}
        placeholder=' e.g.Jane Appleseed'
        value={formData.namee}
      />

      <label htmlFor='num'>CARD NUMBER</label>
      <input
        required
        type='number'
        id='num'
        name='num'
        onChange={handleInfo}
        placeholder='e.g. 1234 5678 9123 0000'
        value={formData.num}
      />
      <div className='split'>
        <div className='left'>
          <label htmlFor=''>Exp. Date (MM/YY)</label>
          <div className='split'>
            <input
              required
              type='number'
              id='month'
              name='month'
              onChange={handleInfo}
              placeholder='MM'
              value={formData.month}
            />
            <label htmlFor=''></label>
            <input
              required
              type='number'
              id='year'
              name='year'
              onChange={handleInfo}
              placeholder='YY'
              value={formData.year}
            />
          </div>
        </div>
        <div className='right'>
          <label htmlFor=''>CVC</label>
          <input
            required
            type='text'
            id='cvc'
            name='cvc'
            onChange={handleInfo}
            placeholder='e.g. 123'
            value={formData.cvc}
          />
        </div>
      </div>
      <input type='submit' id='submit' value='Confirm' />
    </form>
  );
};

export default Form;
