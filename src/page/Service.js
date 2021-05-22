import { useState } from 'react';
import TestItem from '../components/TestItem';

const Service = () => {
  const [data] = useState([
    { id: 45435, name: 'Injamamul Haque', age: 27, sex: 'Male' },
    { id: 87975, name: 'Johurul Haque', age: 57, sex: 'Male' },
    { id: 98735, name: 'Monwara Begum', age: 47, sex: 'Female' },
    { id: 22323, name: 'Jemima Khatun', age: 20, sex: 'Female' },
  ]);

  return (
    <section>
      <div className='container'>
        <div className='row my-4'>
          {data && data.map((user) => <TestItem key={user.id} user={user} />)}
        </div>
      </div>
    </section>
  );
};

export default Service;
