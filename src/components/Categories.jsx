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
