import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ListProducts from "./components/ListProducts";
import ListTodo from "./components/ListTodo";
import { reducer } from "./reducers/todoReducer";
const App = () => {
  /*   
  1. Provider: Es el provedor del estado global hacia todos los componentes children
  2. store: estado global
  3. reducer: es una función que administra el estado global.
  */

  const store = createStore(reducer);
  // console.log(store.getState());

  return (
    <Provider store={store}>
      <div>
        <h1 className="text-center">Todo App</h1>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col">
              <ListProducts />
            </div>
            <div className="col">
              <ListTodo />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
