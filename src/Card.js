import front from './images/bg-card-front.png';
import back from './images/bg-card-back.png';

const Card = () => {
  return (
    <div className='cards'>
      <div className='img-txt'>
        <img src={front} alt='' className='up' />
        <p className='name'>0000 0000 0000</p>
        <p className='num'>Jane Appleseed</p>
        <p className='exp'>00/00 000</p>
      </div>
      <img src={back} alt='' className='down' />
    </div>
  );
};

export default Card;
