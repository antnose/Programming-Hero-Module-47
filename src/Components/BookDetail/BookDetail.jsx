import { Link, useParams } from "react-router-dom";

const BookDetail = () => {
  const { bookId } = useParams();
  console.log(bookId);

  return (
    <div>
      <h2>Book details</h2>
      <Link to={-1}>Go Back</Link>
    </div>
  );
};

export default BookDetail;
