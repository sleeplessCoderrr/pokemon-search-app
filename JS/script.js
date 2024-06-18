

async function fetchData() {
    const response = await fetch('https://api.github.com/users');
    const data = await response.json();
    console.log(data);
}