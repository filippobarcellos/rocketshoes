<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";

import logo from "../../images/logo.svg";

import { Container, Cart } from "./styles";

function Header() {
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import { useCart } from '../../Context/Cart';

import logo from '../../assets/images/logo.svg';

import { Container, Cart } from './styles';

export default function Header() {
  const { cart } = useCart();

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

>>>>>>> 0741350256f927c2d6d51a3a27d19bd6ddf1b5d8
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="RocketShoes" />
      </Link>

      <Cart to="/cart">
        <div>
<<<<<<< HEAD
          <strong>My Cart</strong>
          <span>3 items</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
=======
          <strong>Cart</strong>
          <span>{cartCount} items</span>
        </div>
        <MdShoppingBasket size={36} color="FFF" />
>>>>>>> 0741350256f927c2d6d51a3a27d19bd6ddf1b5d8
      </Cart>
    </Container>
  );
}
<<<<<<< HEAD

export default Header;
=======
>>>>>>> 0741350256f927c2d6d51a3a27d19bd6ddf1b5d8
