import { useGlobalContext } from "./context";

const SearchForm=()=>{
    const{setValue} = useGlobalContext();
    const handleSubmit =(e)=>{
        e.preventDefault();
        const SearchValue = e.target.elements.search.value;
        setValue(SearchValue);
    }

    return(
        <div>
            <h1 className='title'>unsplash images</h1>
            <form className='search-form' onSubmit={handleSubmit}>
                <input className="form-input search-input"
                 type="text" 
                 name="search" 
                 placeholder="Searching"
                 />
                <button className="btn" type="submit">Submit</button>
            </form>    
        </div>
    )
}



export default SearchForm;
