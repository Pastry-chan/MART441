function loadAnime() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    const anime = JSON.parse(this.responseText);
    displayTable(anime);
  };

  xhttp.open("GET", "data/info.json", true);
  xhttp.send();
}

function displayTable(anime) {
  let table = `
    <tr>
      <th>Name</th>
      <th>Year</th>
      <th>Type</th>
      <th>Episodes</th>
      <th>Genre</th>
      <th>Rating</th>
    </tr>
  `;

  for (let i = 0; i < anime.length; i++) {
    const ratingClass = getRatingClass(anime[i].Rating);
    table += `
      <tr>
        <td>${anime[i].Name}</td>
        <td>${anime[i].Year}</td>
        <td>${anime[i].Type}</td>
        <td>${anime[i].Episodes}</td>
        <td>${anime[i].Genre}</td>
        <td><span class="${ratingClass}">${anime[i].Rating}</span></td>
      </tr>
    `;
  }

  document.getElementById("infoTable").innerHTML = table;

function getRatingClass(rating) {
  if (rating >= 9) return "rating-excellent";  // green
  if (rating >= 7) return "rating-good";       // blue
  if (rating >= 5) return "rating-average";    // red
}

$(".rating-excellent").css("color","green",);
$(".rating-good").css("color","orange",);
$(".rating-average").css("color","red",);

}
