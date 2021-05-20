const Home = () => {
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position.coords);
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  };

  return (
    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h1>Homepage</h1>
            <button className='btn btn-primary' onClick={getLocation}>
              Get Location
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
