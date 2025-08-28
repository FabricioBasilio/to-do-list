function Filter({ filter, setFilter, sort, setSort }) {
  return (
    <section className="filter">
        <h2>Filtrar</h2>
        <div className="filter_options">
            <div>
                <p>Status: </p>
                <select value={filter} onChange={e => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Done">Feitas</option>
                    <option value="Incomplete">Incompletas</option>
                </select>
            </div>
            <div>
                <p>Ordem alfabética: </p>
                <div className={sort === "Asc" ? "filter_options__alphabetic__buttons buttons__asc_button--active" : "filter_options__alphabetic__buttons buttons__desc_button--active"}>
                    <button onClick={() => setSort("Asc")}>Asc</button>
                    <button onClick={() => setSort("Desc")}>Desc</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Filter