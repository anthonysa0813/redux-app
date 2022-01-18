import React from "react";
import { connect } from "react-redux";

const ListProducts = ({ products, addProduct }) => {
  // console.log(addProduct);
  return (
    <div>
      <h3>Lista de Todo's</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}
            <button
              className="btn btn-primary mt-4 ml-3"
              onClick={() => addProduct(product.id, product.name)}
            >
              agregar al carrito
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (id, name) => {
      dispatch({
        type: "ADD_PRODUCT",
        payload: {
          id,
          name,
        },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);
