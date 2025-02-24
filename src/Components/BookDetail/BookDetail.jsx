import { Link, useLoaderData, useParams } from "react-router-dom";
import { adToStoredReadList } from "../../utility/addToDb";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  // console.log(typeof bookId, data, id);

  const book = data.find((book) => book.bookId === id);
  const { image, bookName, review } = book;
  // console.log(book);

  const handleMarkAsRead = (id) => {
    /**
     * 1. understand what to store or save: => bookId
     * 2. Where to store: database
     * 3. array, list, collection:
     * 4. check: if the book is already in the readlist.
     * 5. if not, then add the book to the list
     * 6. if yes, do not add the book
     */
    adToStoredReadList(id);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} className="w-3xs rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{bookName} </h1>
          <p className="py-6">{review}</p>

          <div className="flex justify-center">
            <button
              onClick={() => handleMarkAsRead(bookId)}
              className="btn btn-outline mr-4 btn-accent"
            >
              Mark as Read
            </button>
            <button className="btn btn-outline mr-4 btn-accent">
              Wishlist
            </button>
          </div>

          <Link to={-1}>
            <button className="btn btn-primary">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
