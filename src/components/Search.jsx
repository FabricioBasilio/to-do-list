function Search({ search, setSearch }) {
  function cleanSearch() {
    setSearch("");
  }

  return (
    <section className="search">
      <label htmlFor="input_pesquisar">Pesquisar:</label>
      <div className="search__container">
        <input
          type="text"
          placeholder="Digite para pesquisar..."
          value={search}
          id="input_pesquisar"
          className="search__container__input"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={cleanSearch}>Limpar</button>
      </div>
    </section>
  );
}

export default Search;
