export const fetchBooksByTitle = async (title) => {
    const response = await fetch(`https://openlibrary.org/search.json?title=${title}`);
    const data = await response.json();
    return data.docs.map(book => ({
      id: book.key,
      title: book.title,
      author: book.author_name?.[0],
      genre: book.subject?.[0] || 'Unknown',
      publicationDate: book.first_publish_year || 'Unknown',
    }));
  };
  