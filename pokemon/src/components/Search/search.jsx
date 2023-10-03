import useDebounce from '../../Hookes/useDebounce';
import './Search.css';

// eslint-disable-next-line react/prop-types
function Search({updateSearchTerm}) {
    const debouncedCallback = useDebounce((e) => updateSearchTerm(e.target.value))
    return (
        <div className="search-wrapper">
            <input 
                id="pokemon-name-search"
                type="text"
                placeholder="pokemon name...."
                onChange={debouncedCallback}
            />

        </div>
    );
}

export default Search;