import React from "react";
const FilterCategories = (props) => {
  const { categ, handleFilter } = props;
  return (
    <div>
      {/* <!-- filter header --> */}
      <h5>Categories</h5>
      {/* <!-- filter list --> */}
      <ul className="list list--vr-separator">
        {categ.map((c) => (
          <li
            onClick={() => handleFilter(c.id)}
            key={c.id}
            className="link list__item"
          >
            <i className="link__icon fas fa-angle-right"></i>
            {c.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterCategories;
