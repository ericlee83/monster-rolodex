import './SearchBox.css';

export const SearchBox = (props)=>{
    return(<input className='search' type="search" placeholder={props.placeHolder} onChange={props.searchOnChange}/>);
}