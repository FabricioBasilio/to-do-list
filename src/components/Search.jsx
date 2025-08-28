function Search({search, setSearch}) {

  function cleanSearch() {
    setSearch("")
  }
  
  return (
    <section className="search">
        <h2>Pesquisar:</h2>
        <div className="search__container">
          <input type="text" placeholder="Digite para pesquisar..." value={search} className="search__container__input" onChange={e => setSearch(e.target.value)}/>
          <button onClick={cleanSearch}>Limpar</button>
        </div>
    </section>
  )
}

export default Search