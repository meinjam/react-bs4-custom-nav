import { useTest } from '../contexts/TestContext';

const Contact = () => {
  const { tests } = useTest();

  return (
    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <table className='table table-striped my-4'>
              <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>Age</th>
                  <th scope='col'>Sex</th>
                  <th scope='col'>Qty</th>
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
                      <td>1</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
