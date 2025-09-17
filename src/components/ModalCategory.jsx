import { useEffect, useState } from "react";
import CharacterCounter from "./CharacterCounter";
import FeedbackModalCategory from "./FeedbackModalCategory";

function ModalCategory({
  setFade,
  setModalCategory,
  categories,
  setCategories,
  modalCategoryInput,
}) {
  const categorySuggestions = [
    "Entretenimento",
    "Arte",
    "Culinária",
    "Estudos",
    "Trabalho",
    "Esporte",
    "Pessoal",
  ];

  const categorySuggestion =
    categorySuggestions[Math.floor(Math.random() * categorySuggestions.length)];

  const charactersLimit = 20;

  const [newCategoryName, setNewCategoryName] = useState("");


  function handleFormSubmit(e) {
    e.preventDefault();

    adicionarCategoria();
  }

  function descartarCategoria() {
    setNewCategoryName("");
    setFade(false);
    setModalCategory(false);
  }

  function adicionarCategoria() {
    if (isEmpty() || hasCategory()) {
      return;
    }

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

  function hasCategory() {
    const categoryNameToFind = newCategoryName.trim();
    const categoriesLength = categories.length;
    let categoryExists = false;
    let i;
    for (i = 0; i < categoriesLength; i++) {
      if (categories[i].categoryName === categoryNameToFind) {
        categoryExists = true;
        break;
      }
    }

    return categoryExists ? categoryExists : false;
  }

  function mudarTexto(e) {
    setNewCategoryName(e.target.value);
  }

  function isEmpty() {
    return !newCategoryName.trim();
  }

  return (
    <div className="modal_details modal_category">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="nova_categoria_texto">Adicionar categoria</label>
        <input
          placeholder={categorySuggestion}
          type="text"
          maxLength={charactersLimit}
          id="nova_categoria_texto"
          className={
            isEmpty() || hasCategory()
              ? "modal_category__category_name--feedback"
              : ""
          }
          ref={modalCategoryInput}
          onChange={(e) => mudarTexto(e)}
        />
        <CharacterCounter
          valueLength={newCategoryName.length}
          limit={charactersLimit}
        />
        <FeedbackModalCategory isEmpty={isEmpty} hasCategory={hasCategory} />
        <div className="modal_category__buttons">
          <button type="button" onClick={descartarCategoria}>
            Descartar
          </button>
          <button type="submit" disabled={isEmpty() || hasCategory()}>
            Adicionar
          </button>
        </div>
      </form>
    </div>
  );
}

export default ModalCategory;
