import { useGlobalContext } from '../contexts/GlobalState';

const About = () => {
  const { clearTest } = useGlobalContext();

  return (
    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h1>About</h1>
            <button className='btn btn-primary' onClick={clearTest}>
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
