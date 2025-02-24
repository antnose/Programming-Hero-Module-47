const Book = ({ book }) => {
  const { bookName, image, author } = book;

  return (
    <div className="card bg-base-300 w-96 shadow-xl p-6 rounded-3xl ">
      <figure className="bg-gray-400 py-8 rounded-2xl">
        <img src={image} alt={bookName} className="h-[166px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>By: {author} </p>
        <div className="card-actions justify-center">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Book;
