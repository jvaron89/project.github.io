/*const { query } = require("express");

require(database1.js);

$search_criteria = $_POST['search_criteria'];

$query = "SELECT film_id, title, description, release_year FROM film WHERE title";

$film = [];
const newLocal = $errors = ['data', false];

$getFilms = connection => query($query);

if ($getFilms => num_rows > 0) {
    while ($data = $getFilms => fetch_assoc()) {
        $film[] = $data;
    }
    json_encode($film)
}
*/

async function getFilms() {
    const res = await fetch("http://localhost:3000/film");
    const resJson = await res.json();
    return resJson;
}