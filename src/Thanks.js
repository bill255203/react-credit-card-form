import { useNavigate } from 'react-router-dom';

const Thanks = ({ formData }) => {
  const navigate = useNavigate();
  console.log(formData);
  return (
    <section className='section sec2'>
      <h1 style={{ fontWeight: 1000, fontSize: '3em', marginBlock: '10px' }}>
        Thank you!
      </h1>
      <h2>We've added your card details</h2>
      <h2>Your card info is</h2>
      <h2>Name: {formData.namee}</h2>
      <h2>Num: {formData.num}</h2>
      <h2>
        Exp Date: {formData.month} / {formData.year}
      </h2>
      <h2>CVC: {formData.cvc}</h2>
      <input
        type='submit'
        id='continue'
        value='Continue'
        onClick={() => navigate('/')}
      />
    </section>
  );
};

export default Thanks;
