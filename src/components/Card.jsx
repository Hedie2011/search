function Card({ id, img, text, price }) {
  return (
    <div className="card" id={id}>
      <img src={img} alt="" />
      <p>{text}</p>
      <p>{price} теңге</p>
      <button>add</button>
    </div>
  );
}
export default Card;
