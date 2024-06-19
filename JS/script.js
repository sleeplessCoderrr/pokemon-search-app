async function fetchData() {
    try {
        let pokemonInput = document.getElementById('search-input').value.toLowerCase();

        const response = await 
        fetch('https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/' + pokemonInput);
        const data = await response.json();
        
        writeTop(data);
        writeBottom(data);
    } 
    catch (error) {
       alert("Pokémon not found");
    }
}

function toTitleCase(str) {
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}

function writeTop(response) {
    let pokemonName = response.name;
    let pokemonId = response.id;
    let pokemonWeight = response.weight;
    let pokemonHeight = response.height;
    let pokemonTypes = response.types;
    let pokemonImage = response.sprites.front_default;

    const name = document.querySelector("#pokemon-name");
    name.textContent = toTitleCase(pokemonName);

    const Id = document.querySelector("#pokemon-id");
    Id.textContent = "#" + pokemonId;

    const weight = document.querySelector("#weight");
    weight.textContent = "Weight: " + pokemonWeight;

    const height = document.querySelector("#height");
    height.textContent = "Height: " + pokemonHeight;

    const image = document.querySelector("#sprite");
    image.src = pokemonImage;

    const typesContainer = document.querySelector("#types");
    typesContainer.innerHTML = "";
    
    pokemonTypes.forEach((typeInfo) => {
        const typeP = document.createElement("p");
        typeP.textContent = toTitleCase(typeInfo.type.name);
        typesContainer.appendChild(typeP);
    });
}


function writeBottom(response){
    const placeHp = document.getElementById("hp");
    const placeAttack = document.getElementById("attack");
    const placeDefense = document.getElementById("defense");
    const placeSpecialAttack = document.getElementById("special-attack");
    const placeSpecialDefense = document.getElementById("special-defense");
    const placeSpeed = document.getElementById("speed");

    placeHp.innerHTML = response.stats[0].base_stat;
    placeAttack.textContent = response.stats[1].base_stat;
    placeDefense.textContent = response.stats[2].base_stat;
    placeSpecialAttack.textContent = response.stats[3].base_stat;
    placeSpecialDefense.textContent = response.stats[4].base_stat;
    placeSpeed.textContent = response.stats[5].base_stat;

    return;
}