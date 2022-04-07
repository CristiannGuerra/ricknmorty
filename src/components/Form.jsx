import { useForm } from "../hooks/useForm";

const Form = ({setCharacter}) => {
  const [inputs, handleChange, resetValue] = useForm({
    name: "",
  });

  const { name } = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();

    setCharacter()
    resetValue();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search character"
        className="form-control mb-2"
        value={name}
        onChange={handleChange}
        name="name"
      />
      <button type="submit" className="btn btn-dark">
        Search
      </button>
    </form>
  );
};

export default Form;
