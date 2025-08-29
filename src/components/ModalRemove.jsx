function ModalRemove({ setFade, setModalRemove, setUserRemoveAnswer }) {
  function getUserRemoveAnswer(answer) {
    setUserRemoveAnswer(Boolean(answer));
    hideModalRemove();
  }

  function hideModalRemove() {
    setFade(false);
    setModalRemove(false);
  }

  return (
    <div className="modal_details modal_remove">
      <p>Você tem certeza que deseja remover essa tarefa?</p>
      <div className="modal_remove__buttons">
        <button onClick={() => getUserRemoveAnswer(true)}>Sim</button>
        <button onClick={() => getUserRemoveAnswer(false)}>Não</button>
      </div>
    </div>
  );
}

export default ModalRemove;
