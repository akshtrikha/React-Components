import SearchResult from "./SearchResult.jsx";
import "./SearchResultsList.css";

export default SearchResultsList = ({ results }) => {
    console.log("SeachResults: ", results);
    return (
        <div className="results-list">
            {results.map((item, _) => {
                return (
                    <SearchResult item={item} key={item.id}/>
                );
            })}
        </div>
    );
};
