function Categories({ items, clickCategorie }) {
  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        {items.map((categoriesName, index) => (
          <li
            onClick={() => clickCategorie(categoriesName)}
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

/* КЛАССОВЫЙ КОМПОНЕНТ
import React from "react";

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
