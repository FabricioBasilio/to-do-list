function CharacterCounter({ valueLength, limit }) {
  return (
    <div className="character_counter">
      <p>
        {valueLength} / {limit}
      </p>
    </div>
  );
}

export default CharacterCounter;
