import { useState } from "react";

const arrNum = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    //e refers to event object which created while submission of form or changing the fields of form
    e.preventDefault();

    if (!description) return;

    const newItem = { quantity, description, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem); //indirectly calling handleAddItems function by passing newItem

    //Default values after submitting the form (empty values)
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/* Automatically creating array of length 20 
           {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (  */}

        {/* Using already initialized array arrNum */}
        {arrNum.map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
        {/* <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option> */}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
