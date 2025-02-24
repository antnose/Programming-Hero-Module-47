import { Link, useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  // console.log(typeof bookId, data, id);

  const book = data.find((book) => book.bookId === id);
  const { image, bookId: currentBookId, bookName, review } = book;
  // console.log(book);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} className="w-3xs rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{bookName} </h1>
          <p className="py-6">{review}</p>
          <Link to={-1}>
            <button className="btn btn-primary">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
