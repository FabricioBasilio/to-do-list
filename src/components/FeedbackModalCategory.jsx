function FeedbackModalCategory({ isEmpty, hasCategory }) {
  return (
    <div className="modal_category__feedback">
      {isEmpty && <p>Digite a categoria a adicionar.</p>}
      {hasCategory() && <p>Essa categoria já existe.</p>}
    </div>
  );
}

export default FeedbackModalCategory;
