import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import { useCart } from '../../Context/Cart';

import logo from '../../assets/images/logo.svg';

import { Container, Cart } from './styles';

export default function Header() {
  const { cart } = useCart();

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="RocketShoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Cart</strong>
          <span>{cartCount} items</span>
        </div>
        <MdShoppingBasket size={36} color="FFF" />
      </Cart>
    </Container>
  );
}
