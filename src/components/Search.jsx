import React from 'react'

function Search({search, setSearch}) {
  return (
    <section className="search">
        <h2>Pesquisar:</h2>
        <input type="text" placeholder="Digite para pesquisar..." value={search} onChange={e => setSearch(e.target.value)}/>
    </section>
  )
}

export default Search