export default function Item({ item, onDeleteItem, onToggleItem }) {
  //item is the entire object with all details of item,
  // onDeleteItem is prop which is indirectly calling handleDeleteItem function for deleting the item from the packing list,
  // onToggleItem is receiving prop which is indirectly calling handleToggleItems for ensuring that the items are packed
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
