function ModalCategory({ setFade, setModalCategory, modalCategoryInput }) {
  function descartarCategoria() {
    // setTodoToEditText(""); state do input
    setFade(false);
    setModalCategory(false);
  }

  function adicionarCategoria() {
    setFade(false);
    setModalCategory(false);
  }

  return (
    <div className="modal_details modal_category">
      <label htmlFor="nova_categoria_texto">Adicionar categoria</label>
      <input
        id="nova_categoria_texto"
        type="text"
        maxLength={20}
        ref={modalCategoryInput}
      />
      <div className="modal_category__buttons">
        <button onClick={descartarCategoria}>Descartar</button>
        <button onClick={adicionarCategoria}>Adicionar</button>
      </div>
    </div>
  );
}

export default ModalCategory;
