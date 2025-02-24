import { useEffect, useState } from "react";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("./booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <h2 className="text-4xl font-bold text-center">Books</h2>
      <p>{books.length}</p>
    </div>
  );
};

export default Books;

/**
 * 1. state to store books
 * 2. useEffect
 */
