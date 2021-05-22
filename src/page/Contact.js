import { useState } from 'react';
import { useGlobalContext } from '../contexts/GlobalState';

const Contact = () => {
  const { tests, deleteTest } = useGlobalContext();
  const [showSort, setShowSort] = useState(false);
  const [sortResults, setSortResults] = useState([]);

  const getSubtotal = (array) => {
    let total = 0;
    array.forEach((list) => {
      total += list.age;
    });
    return total;
  };

  const handleDetete = (test) => {
    deleteTest(test);
  };

  const handleSort = (e) => {
    if (e.target.value === 'default') {
      setShowSort(false);
    } else if (e.target.value === 'age') {
      setShowSort(true);
      // const sortByAge = [...tests].sort((p1, p2) => {
      //   if (p1.age > p2.age) {
      //     return 1;
      //   } else {
      //     return -1;
      //   }
      // });
      const sortByAge = [...tests].sort((p1, p2) => (p1.age > p2.age ? 1 : -1));
      console.log(sortByAge);
      setSortResults(sortByAge);
    } else {
      setShowSort(false);
    }
  };

  return (
    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mt-4'>
            <div className='float-right'>
              <select
                className='form-control form-control-lg'
                onChange={handleSort}
              >
                <option>Sory By:</option>
                <option value='default'>Default</option>
                <option value='age'>Age</option>
              </select>
            </div>
          </div>
          {!showSort ? (
            <div className='col-md-12 table-responsive'>
              <table className='table table-striped my-4'>
                <thead>
                  <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Age</th>
                    <th scope='col'>Sex</th>
                    <th scope='col'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tests &&
                    tests.map((test, i) => (
                      <tr key={i}>
                        <th scope='row'>{i + 1}</th>
                        <td>{test.name}</td>
                        <td>{test.age}</td>
                        <td>{test.sex}</td>
                        <td>
                          <button
                            className='btn btn-danger btn-sm'
                            onClick={() => handleDetete(test)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>

              <h2>Total Age: {getSubtotal(tests)} years</h2>
            </div>
          ) : (
            <div className='col-md-12 table-responsive'>
              <table className='table table-striped my-4'>
                <thead>
                  <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Age</th>
                    <th scope='col'>Sex</th>
                    <th scope='col'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sortResults &&
                    sortResults.map((test, i) => (
                      <tr key={i}>
                        <th scope='row'>{i + 1}</th>
                        <td>{test.name}</td>
                        <td>{test.age}</td>
                        <td>{test.sex}</td>
                        <td>
                          <button
                            className='btn btn-danger btn-sm'
                            onClick={() => {
                              handleDetete(test);
                              console.log(sortResults.splice(i, 1));
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <h2>Total Age: {getSubtotal(sortResults)} years</h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
