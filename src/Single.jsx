function Single({ subItems }) {
  return (
    <div>
      {subItems.name}
      <img src={subItems.imageURL} alt="" height="100px" width="100px" />
      <button>Add to cart</button>
      <button>Remove from cart</button>
    </div>
  );
}

export default Single;
