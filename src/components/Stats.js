export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  // 위와 같은 작업을 통해 조기 렌더링이 가능하다.
  // 즉, 불필요한 작업을 줄이고 빠르게 렌더링함
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? 'You got everything! Ready to go 😆'
          : `💼 You have ${numItems} items on your list, and ypu already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
