import "./SearchResult.css";

export default SearchResult = ({ item }) => {
    return (
        <div
            className="search-result"
            onClick={(e) => {
                alert(`You clicked on ${item.name}`);
            }}
        >
            {item.name}
        </div>
    );
};
