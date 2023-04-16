function FeedbackItem(item) {
  //   const [rating, setRating] = useState(7);
  //   const [text, setText] = useState("This is an example of a feedback item");

  //   const handleClick = () => {
  //     setRating((prev) => {
  //       return prev + 1;
  //     });
  //   };
  // console.log("é esse" + item.rating);

  return (
    <div className="card">
      <div className="num-display">{item.item.rating}</div>
      <div className="text-display">{item.item.text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </div>
  );
}

export default FeedbackItem;
