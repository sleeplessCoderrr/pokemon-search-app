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

function writeTop(response){
    let pokemonName = response.name;
    let pokemonId = response.id;
    let pokemonWeight = response.weight;
    let pokemonHeight = response.height;
    let pokemonType = response.types;
    let pokemonImage = response.sprites.front_default;

    const top = document.querySelector(".pokemon-place");
    top.innerHTML = "";

    const nameIdDiv = document.createElement("div");
    nameIdDiv.classList.add("name-id-div");
    const name = document.createElement("p");
    name.textContent = toTitleCase(pokemonName);
    const Id = document.createElement("p");
    Id.textContent = "#" + pokemonId;
    nameIdDiv.appendChild(name);
    nameIdDiv.appendChild(Id);

    const weightHeightDiv = document.createElement("div");
    weightHeightDiv.classList.add("weight-height-div");
    const weight = document.createElement("p");
    weight.textContent = "Weight: " + pokemonWeight;
    const height = document.createElement("p");
    height.textContent = "Height: " + pokemonHeight;
    weightHeightDiv.appendChild(weight);
    weightHeightDiv.appendChild(height);

    const imgDiv = document.createElement("div");
    imgDiv.classList.add("img-div");
    const image = document.createElement("img");
    image.src = pokemonImage;
    imgDiv.appendChild(image);

    const typeDiv = document.createElement("div");
    typeDiv.classList.add("type-div");
    pokemonType.forEach((type) => {
        const typeP = document.createElement("p");
        typeP.textContent = toTitleCase(type.type.name);
        typeDiv.appendChild(typeP);
    });

    top.appendChild(nameIdDiv);
    top.appendChild(weightHeightDiv);
    top.appendChild(imgDiv);
    top.appendChild(typeDiv);
    
    return;
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