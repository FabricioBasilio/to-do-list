import { useEffect, useState } from "react";
import CharacterCounter from "./CharacterCounter";

function ModalCategory({
  setFade,
  setModalCategory,
  categories,
  setCategories,
  modalCategoryInput,
}) {
  const charactersLimit = 20;

  const [newCategoryName, setNewCategoryName] = useState("");

  useEffect(() => {
    console.log(newCategoryName);
  }, [newCategoryName]);

  function descartarCategoria() {
    setNewCategoryName("");
    setFade(false);
    setModalCategory(false);
  }

  function adicionarCategoria() {
    const newCategories = [
      ...categories,
      {
        id: Math.floor(Math.random() * 10000),
        categoryName: newCategoryName.trim(),
      },
    ];

    setCategories(newCategories);

    setFade(false);
    setModalCategory(false);
  }

  function mudarTexto(e) {
    setNewCategoryName(e.target.value);
  }

  return (
    <div className="modal_details modal_category">
      <label htmlFor="nova_categoria_texto">Adicionar categoria</label>
      <input
        id="nova_categoria_texto"
        type="text"
        maxLength={charactersLimit}
        ref={modalCategoryInput}
        onChange={(e) => mudarTexto(e)}
      />
      <CharacterCounter valueLength={newCategoryName.length} limit={charactersLimit}/>
      <div className="modal_category__buttons">
        <button onClick={descartarCategoria}>Descartar</button>
        <button onClick={adicionarCategoria}>Adicionar</button>
      </div>
    </div>
  );
}

export default ModalCategory;
