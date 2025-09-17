function Options({ categories }) {

  return (
    <>
      <option value="">Selecione uma categoria</option>
      {categories.map((category) => (
        <option key={category.id} value={category.categoryName}>
          {category.categoryName}
        </option>
      ))}
    </>
  );
}

export default Options;
