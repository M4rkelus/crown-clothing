import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  // return (
  //   <div className='checkout-container'>
  //     <div className='checkout-header'>
  //       <span className='header-block'>Product</span>
  //       <span className='header-block'>Description</span>
  //       <span className='header-block'>Quantity</span>
  //       <span className='header-block'>Price</span>
  //       <span className='header-block'>Remove</span>
  //     </div>
  //     {cartItems.map((item) => (
  //       <div key={item.id}>
  //         <img className='image' src={item.imageUrl} alt={`${item.name}`} />
  //         <span className='name'>{item.name}</span>
  //         <div className='quantity-container'>
  //           <button
  //             className='decrease-button'
  //             onClick={() => decreaseQuantity(item)}
  //           >
  //             &#8249;
  //           </button>
  //           {item.quantity}
  //           <button
  //             className='increase-button'
  //             onClick={() => increaseQuantity(item)}
  //           >
  //             &#8250;
  //           </button>
  //         </div>
  //         <span className='price'>{item.price}</span>
  //         <button className='remove-button' onClick={() => clearItem(item)}>
  //           &#10005;
  //         </button>
  //       </div>
  //     ))}
  //     <span>
  //       Total:{' '}
  //       {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
  //     </span>
  //   </div>
  // );

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className='total'>Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
