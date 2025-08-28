function ModalRemove({ setFade, setModalRemove, setUserRemoveAnswer }) {
  function getUserRemoveAnswer(userRemoveAnswer) {
    setUserRemoveAnswer(Boolean(userRemoveAnswer));
    hideModalRemove();
    console.log("No modal: " + Boolean(userRemoveAnswer));
    
  }

  function hideModalRemove() {
    setFade(false);
    setModalRemove(false);
  }

  

  return (
    <div className="modal_details">
      <p>Você tem certeza que deseja remover essa tarefa?</p>
      <button onClick={() => getUserRemoveAnswer(true)}>
        Sim
      </button>
      <button
        onClick={() => getUserRemoveAnswer(false)}
      >
        Não
      </button>
    </div>
  );
}

export default ModalRemove;
