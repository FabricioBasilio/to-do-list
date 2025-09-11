function ModalEdit({ setFade, setModalEdit }) {
  function descartarEdicao() {
    setFade(false);
    setModalEdit(false);
  }

  function reescreverEdicao() {
    setFade(false);
    setModalEdit(false);
  }

  return (
    <div className="modal_details modal_edit">
      <label htmlFor="input_edicao">
        <p>Editar tarefa</p>
      </label>
      <textarea id="input_edicao" rows={"5"}></textarea>

      <div className="modal_edit__buttons">
        <button onClick={descartarEdicao}>Descartar</button>
        <button onClick={reescreverEdicao}>Reescrever</button>
      </div>
    </div>
  );
}

export default ModalEdit;
