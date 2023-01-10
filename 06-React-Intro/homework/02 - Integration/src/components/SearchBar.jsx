export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
         <button onClick={()=>props.onSearch(3)}>Agregar</button> 
      </div>
   );
}
