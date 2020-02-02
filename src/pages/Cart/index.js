import React from 'react';

import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

function Cart() {
  return(
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUCT</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>

          <tbody>
            <tr>
              <td>
                <img src="" alt="" />
              </td>
              <td>Shoes</td>
              <span>$ 39,90</span>
              <td>
                <div>
                  <button type="button"><MdRemoveCircleOutline size={20} color="#7159c1"/></button>
                  <input type="number" readOnly value={1} />
                  <button type="button"><MdAddCircleOutline size={20} color="#7159c1"/></button>
                </div>
              </td>
              <td>
                <strong>$ 300,30</strong>
              </td>
              <td>
                <button type="button"><MdDelete size={20} color="#7159c1" /></button>
              </td>
            </tr>
          </tbody>
        </thead>

      </ProductTable>

      <footer>
        <button type="button">Check out</button>
        <Total>
          <span>TOTAL</span>
          <strong>$ 129,90</strong>
        </Total>
      </footer>
    </Container>
  );
}

export default Cart;