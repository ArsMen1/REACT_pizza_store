import React from "react";

function Categories({ items }) {
  const [activeItem, setActiveItem] = React.useState(null);

  const oneSelectItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={() => oneSelectItem(null)}
        >
          Все
        </li>
        {items &&
          items.map((categoriesName, index) => (
            <li
              className={activeItem === index ? "active" : ""}
              onClick={() => oneSelectItem(index)}
              key={`${categoriesName}_${index}`}
            >
              {categoriesName}
            </li>
          ))}
      </ul>
    </div>
  );
}

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
