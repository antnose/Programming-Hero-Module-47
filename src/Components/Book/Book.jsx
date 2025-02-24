import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookName, image, author, tags, category, bookId } = book;

  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-300 w-96 shadow-xl p-6 rounded-3xl ">
        <figure className="bg-gray-400 py-8 rounded-2xl">
          <img src={image} alt={bookName} className="h-[166px]" />
        </figure>
        <div className="card-body ">
          <div className="flex gap-4 justify-center ">
            {tags.map((tag) => (
              <button key={book.bookId} className="badge badge-accent">
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By: {author} </p>

          <div className="border-t-2 border border-dashed my-4"></div>

          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>

            <div className="">
              <div className="rating rating-lg rating-half">
                <input
                  type="radio"
                  name="rating-10"
                  className="rating-hidden"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-1 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-1 bg-green-500"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-1 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-1 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-1 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-2 bg-green-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;

// 6.17
