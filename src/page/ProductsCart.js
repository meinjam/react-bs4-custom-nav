import { useGlobalContext } from '../contexts/GlobalState';

const ProductsCart = () => {
  const { carts, deleteCart, addCartQuantity, removeCartQuantity } =
    useGlobalContext();

  const itemPrice = (a, b) => {
    return a * b;
  };

  const handleDetete = (cart) => {
    // console.log(cart);
    deleteCart(cart);
  };

  const addZero = (items) => {
    if (items < 10) {
      return `0${items}`;
    } else {
      return items;
    }
  };

  const getSubtotal = (array) => {
    let total = 0;
    array.forEach((list) => {
      total += list.quantity * list.price;
    });
    return total;
  };

  const addCartQty = (cart) => {
    // console.log(cart);
    addCartQuantity(cart);
  };

  const removeCartQty = (cart) => {
    // console.log(cart);
    removeCartQuantity(cart);
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
                  <th scope='col'>Category</th>
                  <th scope='col'>Price</th>
                  <th scope='col'>Quantity</th>
                  <th scope='col'>Item Price</th>
                  <th scope='col'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {carts.map((cart, i) => (
                  <tr key={cart.id}>
                    <th scope='row'>{i + 1}</th>
                    <td>{cart.name}</td>
                    <td>{cart.category}</td>
                    <td>${cart.price}</td>
                    <td className='d-flex align-items-center'>
                      <span
                        className='btn btn-sm btn-danger mr-1'
                        onClick={() => removeCartQty(cart)}
                      >
                        -
                      </span>
                      <span>{addZero(cart.quantity)}</span>
                      <span
                        className='btn btn-sm btn-success ml-1'
                        onClick={() => addCartQty(cart)}
                      >
                        +
                      </span>
                    </td>
                    <td>${itemPrice(cart.quantity, cart.price).toFixed(2)}</td>
                    <td>
                      <button
                        className='btn btn-danger btn-sm'
                        onClick={() => handleDetete(cart)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h2>Total Price: ${getSubtotal(carts).toFixed(2)}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsCart;
