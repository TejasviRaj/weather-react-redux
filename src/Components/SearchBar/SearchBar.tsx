import React, {ChangeEvent, SyntheticEvent} from 'react';

interface PropTypes {
    searchText: string,
   setSearchText: (value: string | ((prevState: string) => string)) => void,
   handleSubmit: (e:SyntheticEvent) => void

}

const SearchBar = (props: PropTypes) => {
    console.log(props);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        props.setSearchText(event.target.value);
    }
    return (
    <div className="container">
	  <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            <form className="card card-sm" onSubmit = {props.handleSubmit}>
                                <div className="card-body row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <i className="fas fa-search h4 text-body"></i>
                                    </div>
                                    <div className="col">
                                        <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords" value = {props.searchText} onChange = {(e) => handleChange(e)}/>
                                    </div>
                                    <div className="col-auto">
                                        <button className="btn btn-lg btn-dark" type="submit">Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
      </div>
  </div>
    );
}

export default SearchBar;