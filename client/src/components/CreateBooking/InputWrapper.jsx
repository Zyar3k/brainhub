const InputWrapper = ({ inputName, name, type, title }) => {
  return (
    <div className="inputWrapper">
      <label htmlFor={name}>{title}:</label>
      <input ref={inputName} type={type} id={name} name={name} />
    </div>
  );
};

export default InputWrapper;
