function SelectField({ label, name, id, options, onChange }) {
  return (
    <div className="form__inner-wrapper">
      <label htmlFor={id}>{label}</label>
      <select name={name} id={id} onChange={onChange}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;
