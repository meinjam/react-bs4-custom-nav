import { useGlobalContext } from '../contexts/GlobalState';

const TestItem = ({ user }) => {
  const { addTest, tests } = useGlobalContext();

  let storedTest = tests.find((test) => test.id === user.id);
  const addToCartDisable = storedTest ? true : false;

  return (
    <div className='col-md-4 mb-4'>
      <div className='card'>
        <img
          className='card-img-top'
          src={`https://via.placeholder.com/300/${
            Math.floor(Math.random() * (99999 - 11111 + 1)) + 11111
          }`}
          alt='jhgjhgj'
        />
        <div className='card-body'>
          <h5 className='card-title'>{user.name}</h5>
          <button
            className='btn btn-primary btn-block'
            onClick={() => addTest(user)}
            disabled={addToCartDisable}
          >
            {addToCartDisable ? 'Already Added' : 'Add To Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestItem;
