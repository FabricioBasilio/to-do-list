function Search({ search, setSearch }) {
  const charactersLimit = 25;

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
          maxLength={charactersLimit}
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
