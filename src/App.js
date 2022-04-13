import axios from "axios";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import { Header, PizzaBlock } from "./components";
import { Home, Cart } from "./pages";
import { setPizzas } from "./redux/actions/pizzas";

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

PizzaBlock.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
};

PizzaBlock.defaultProps = {
  name: "Нет в наличии",
  types: [],
  imageUrl:
    "https://thumbs.gfycat.com/WanSophisticatedAntelope-size_restricted.gif",
  price: 0,
  sizes: [],
};

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};

const mapDispatchToProps = {
  setPizzas,
};

// ↓ Более развернутая запись
// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzas(items)),
//     dispatch,
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);
