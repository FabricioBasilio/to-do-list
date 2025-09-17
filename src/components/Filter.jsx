function Filter({
  filter,
  setFilter,
  filterCategory,
  setFilterCategory,
  sort,
  setSort,
  categories
}) {
  
  return (
    <section className="filter">
      <h2>Filtrar</h2>
      <div className="filter_options">
        <div className="filter_options__filter">
          <label htmlFor="select_filter">Status: </label>
          <select
            value={filter}
            id="select_filter"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">Todas</option>
            <option value="Done">Feitas</option>
            <option value="Incomplete">Incompletas</option>
          </select>
        </div>
        <div className="filter_options__filter">
          <label htmlFor="select_filter_category">Categoria: </label>
          <select
            value={filterCategory}
            id="select_filter_category"
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="">Todas</option>
            {categories.map((category) => (
              <option key={category.id} value={category.categoryName}>
                {category.categoryName}
              </option>
            ))}
          </select>
        </div>
        <div className="filter_options__alphabetic">
          <p>Ordem alfabética: </p>
          <div
            className={
              sort === "Asc"
                ? "filter_options__alphabetic__buttons buttons__asc_button--active"
                : "filter_options__alphabetic__buttons buttons__desc_button--active"
            }
          >
            <button onClick={() => setSort("Asc")}>Asc</button>
            <button onClick={() => setSort("Desc")}>Desc</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Filter;
