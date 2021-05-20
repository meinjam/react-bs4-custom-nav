import { useTest } from '../contexts/TestContext';

const About = () => {
  const { setTests } = useTest();

  const handleCart = () => {
    setTests([]);
  };

  return (
    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h1>About</h1>
            <button className='btn btn-primary' onClick={handleCart}>
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
