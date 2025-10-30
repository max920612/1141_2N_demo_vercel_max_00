import books_data from "../assets/data/booklist_data2.js"
import Wrapper from "../assets/wrappers/Booklist_00";

console.log('books_data', books_data);
const BookListPage_00 = () => {
    return (
        <Wrapper>
    <section className='booklist'>
    {books_data.map((book) => {
        return (
        <article className="book">
            <img src={book.img}/>
            <div className='bookinfo'>
                <h1>{book.title}</h1>
                <h4>{book.author}</h4>
            </div>
        </article>
    );
    })}
        </section>
        </Wrapper>
        );
};

export default BookListPage_00;