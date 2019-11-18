import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <img
                src="https://t-static.dafiti.com.br/bWqm9c2rJZH1K7ELc4YjHJFNgI4=/fit-in/427x620/static.dafiti.com.br/p/dc-shoes-t%25c3%25aanis-dc-shoes-plaza-lite-preto-3891-5127414-1-product.jpg"
                alt="Tenis"
              />
            </td>
            <td>
              <strong>Tenis legal</strong>
              <span>R$ 129,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#9159c1" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#9159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 300,00</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar Pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$ 1920,29</strong>
        </Total>
      </footer>
    </Container>
  );
}
