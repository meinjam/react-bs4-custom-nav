import { useGlobalContext } from '../contexts/GlobalState';

const Contact = () => {
  const { tests, deleteTest } = useGlobalContext();

  const getSubtotal = (array) => {
    let total = 0;
    array.forEach((list) => {
      total += list.age;
    });
    return total;
  };

  const handleDetete = (test) => {
    // console.log(test);
    deleteTest(test);
  };

  return (
    <section>
      <div className='container'>
        <div className='row'>
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
