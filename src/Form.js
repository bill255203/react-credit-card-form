import { useNavigate } from 'react-router-dom';

const Form = ({ formData, handleSubmit }) => {
  const navigate = useNavigate();
  return (
    <form className='section sec1 form' id='form1' onSubmit={handleSubmit}>
      <label htmlFor='name'>CARDHOLDER NAME</label>
      <input
        required
        type='text'
        id='name'
        name='namee'
        onChange={handleSubmit}
        placeholder=' e.g.Jane Appleseed'
        value={formData.namee}
      />

      <label htmlFor='num'>CARD NUMBER</label>
      <input
        required
        type='number'
        id='num'
        name='num'
        onChange={handleSubmit}
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
              onChange={handleSubmit}
              placeholder='MM'
              value={formData.month}
            />
            <label htmlFor=''></label>
            <input
              required
              type='number'
              id='year'
              name='year'
              onChange={handleSubmit}
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
            onChange={handleSubmit}
            placeholder='e.g. 123'
            value={formData.cvc}
          />
        </div>
      </div>
      <input
        type='submit'
        id='submit'
        value='Confirm'
        onClick={() => navigate('/tks')}
      />
    </form>
  );
};

export default Form;
