import React from "react";
import { Route } from "react-router";
import { Header } from "./components";
import { Home, Cart } from "./pages";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

/* Классовый компонент
class App extends React.Component {
  componentDidMount() {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      this.props.setPizzas(data.pizzas);
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route
            path="/"
            render={() => <Home items={this.props.items} />}
            exact
          />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    );
  }
}
*/

export default App;
// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters,
//   };
// };

// const mapDispatchToProps = {
//   setPizzas,
// };

// ↓ Более развернутая запись
// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzas(items)),
//     dispatch,
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
