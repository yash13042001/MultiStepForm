const UserForm = ({
  handleSubmit,
  handleBack,
  index,
  forms,
  handleInputChange,
  formData,
}) => {
  return (
    <form className="container" onSubmit={handleSubmit}>
      {index > 0 && (
        <a href="/" onClick={handleBack}>
          Back
        </a>
      )}
      <label>{forms[index].label}</label>
      <input
        id={forms[index].id}
        onChange={handleInputChange}
        required
        value={formData[forms[index].id]}
        type={forms[index].inputType}
        placeholder={forms[index].placeholder}
      />
      <button>{forms[index].buttonName}</button>
    </form>
  );
};

export default UserForm;
