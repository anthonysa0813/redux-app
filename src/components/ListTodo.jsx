import React from "react";
import { connect } from "react-redux";

const ListTodo = ({ carrito }) => {
  console.log(carrito);
  return (
    <div>
      <h3>Carrito</h3>
      <hr />
      <ul>
        {carrito.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    carrito: state.carrito,
  };
};

export default connect(mapStateToProps)(ListTodo);
