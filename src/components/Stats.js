export default function Stats({ items }) {
  if (!items.length)
    //if there's no item in the list then just return a simple paragraph and don't do the calculations
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  //when there's item in the list then the following code will render

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${numItems} item on your list, and you already packed
          ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
