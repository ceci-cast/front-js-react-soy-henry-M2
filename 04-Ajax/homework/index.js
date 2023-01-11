const [boton] = $('#boton');    // aqui asigno el boton del id que encuentro en el archivo html
const [search] = $('#search');   //aqui asigno el boton del search que encuentro en el archivo html
const [deleteBtn] = $('#delete');

const url = "http://localhost:5000/amigos";

const [lista] = $("#lista");

const listFriends = (response) => { // esta funcion tiene la lista de amigos que la encuentras en el html como ul
    lista.innherHTML = "";
   response.forEach((friend) => {
    const newli = document.createdElement ("li");
    newli.innherText = `${friend.id} - ${friend.name}`;
    lista.appendChild(newli);
   }); 
};

const showFriends = () => { // esta funcion hace un llamado a la url y proceSa la respuesta con la funcion 'listFriends'
    $.get(url, listFriends);
};

const searchFriend =() => { // esta funcion nos ayuda a buscar al amigo por el id 
    const [input] = $("#input");
    const id = input.value;
    input.value = "";
    $.get(`${url}/${id}`,(response)=>{
        
        const [amigo] = $ ("#amigo")
        amigo.innerText = response.name;
    });
};

const deleteFriend = () => {
    const [inputDelete] = $("#inputDelete");
    const id = inputDelete.value;
    $.ajax({
        type : "DELETE",
        URL: `${url}/${id}`,
        success: (response) => listFriends(response),
    });
};

boton.addEventListener("click", showFriends);
search.addEventListener("click", searchFriend);
deleteButton.addEventListener("click", deleteFriend);
//Los eventos "click" en los botones con ids "boton", "search" y "delete" estan asociados a las funciones showFriends
// searchFriend y deleteFriend, respectivamente 
//esto significa que cuando se haga clic en cada uno de estos botones, se ejecutará la función asociada.