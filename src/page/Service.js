import { useState } from 'react';
import { useTest } from '../contexts/TestContext';

const Service = () => {
  const { tests, setTests } = useTest();

  const [data] = useState([
    { id: 45435, name: 'Injamamul Haque', age: 27, sex: 'Male' },
    { id: 87975, name: 'Johurul Haque', age: 57, sex: 'Male' },
    { id: 98735, name: 'Monwara Begum', age: 47, sex: 'Female' },
    { id: 22323, name: 'Jemima Khatun', age: 20, sex: 'Female' },
  ]);

  const addToCart = (user) => {
    console.log(user);
    setTests([...tests, user]);
  };

  return (
    <section>
      <div className='container'>
        <div className='row my-4'>
          {data &&
            data.map((user) => (
              <div className='col-md-4 mb-4' key={user.id}>
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
                      onClick={() => addToCart(user)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
