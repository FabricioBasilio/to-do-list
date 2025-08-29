function ModalForm({ setFade, setModalForm }) {
  function handleFormSubmit(e) {
    e.preventDefault();

    setFade(false);
    setModalForm(false);
  }

  return (
    <div className="modal_details">
      <form onSubmit={handleFormSubmit}>
        <p>Certifique-se de digitar a tarefa e de selecionar uma categoria.</p>
        <button type="submit">Entendi</button>
      </form>
    </div>
  );
}

export default ModalForm;
