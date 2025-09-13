import { useEffect, useState } from "react";

function ModalCategory({ setFade, setModalCategory, modalCategoryInput }) {
  const [newCategoryName, setNewCategoryName] = useState("");

  useEffect(() => {
    console.log(newCategoryName);
    
  }, [newCategoryName])

  function descartarCategoria() {
    setNewCategoryName("");
    setFade(false);
    setModalCategory(false);
  }

  function adicionarCategoria() {
    setFade(false);
    setModalCategory(false);
  }

  function mudarTexto(e) {
    setNewCategoryName(e.target.value.trim());
    
  }

  return (
    <div className="modal_details modal_category">
      <label htmlFor="nova_categoria_texto">Adicionar categoria</label>
      <input
        id="nova_categoria_texto"
        type="text"
        maxLength={20}
        ref={modalCategoryInput}
        onChange={(e) => mudarTexto(e)}
      />
      <div className="modal_category__buttons">
        <button onClick={descartarCategoria}>Descartar</button>
        <button onClick={adicionarCategoria}>Adicionar</button>
      </div>
    </div>
  );
}

export default ModalCategory;
