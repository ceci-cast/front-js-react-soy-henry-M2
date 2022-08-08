import NavBar from "../NavBar/NavBar";
import Cards from "../Cards/Cards";


export default function Home() {

  function onSearch(){
    fetch(`http://localhost:3001/cruises?name=${cruise}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.name)
      if(data.id){
        const cruise = {
          id:data.id,
          name:data.name,
          image:data.image,
          about:data.about,
          itinerary:data.itinerary,
          map:data.map
        }
        console.log(cruise)
        return cruise;
      }
      else{
        alert('Naviera no encontrada')
      }
    })
    .catch((error) => console.log(error));
  }
 
  return (
    <div>
      {/* <NavBar/> */}
      <Cards/>
    </div>
  )
}
