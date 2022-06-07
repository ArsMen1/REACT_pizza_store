import React from "react";
import PropTypes from "prop-types";

const Categories = React.memo(function Categories({
  activeCategory,
  items,
  onClickCategory,
}) {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => onClickCategory(null)}
        >
          Все
        </li>
        {items &&
          items.map((categoriesName, index) => (
            <li
              className={activeCategory === index ? "active" : ""}
              onClick={() => onClickCategory(index)}
              key={`${categoriesName}_${index}`}
            >
              {categoriesName}
            </li>
          ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  activeCategory: PropTypes.oneOf([PropTypes.number, null]).isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = {
  activeCategory: null,
  items: [],
};

export default Categories;

/* КЛАССОВЫЙ КОМПОНЕНТ || setState

class Categories extends React.Component {
  state = {
    activeItem: 0,
  };

  oneSelectItem = (index) => {
    this.setState({
      activeItem: index,
    });
  };

  render() {
    const { items, clickCategorie } = this.props;
    return (
      <div className="categories">
        <ul>
          {items.map((categoriesName, index) => (
            <li
              className={this.state.activeItem === index ? "active" : ""}
              onClick={() => this.oneSelectItem(index)}
              key={`${categoriesName}_${index}`}
            >
              {categoriesName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
*/
