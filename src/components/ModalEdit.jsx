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
      <p>Editar tarefa</p>
      <div className="botoes">
        <button onClick={descartarEdicao}>Descartar</button>
        <button onClick={reescreverEdicao}>Reescrever</button>
      </div>
    </div>
  );
}

export default ModalEdit;
