import Inventory from '../components/Inventory';
import { useGlobalContext } from '../contexts/GlobalState';

const Products = () => {
  const { addCart } = useGlobalContext();

  return (
    <section>
      <div className='container py-4'>
        <div className='row'>
          {Inventory.map((product) => (
            <div className='col-md-4 mb-4' key={product.id}>
              <div className='card'>
                <img
                  className='card-img-top'
                  src={`https://via.placeholder.com/300/${
                    Math.floor(Math.random() * (99999 - 11111 + 1)) + 11111
                  }`}
                  alt='jhgjhgj'
                />
                <div className='card-body'>
                  <h5 className='card-title mb-1'>{product.name}</h5>
                  <div className='d-flex justify-content-between'>
                    <p className='mb-2'>{product.category}</p>
                    <p className='mb-2'>${product.price}</p>
                  </div>
                  <button
                    className='btn btn-primary btn-block'
                    onClick={() => addCart(product)}
                  >
                    {/* {addToCartDisable ? 'Already Added' : 'Add To Cart'} */}
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

export default Products;
