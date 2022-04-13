//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
  const choice = document.querySelector('input').value
  console.log(choice);
  const url = `https://api.nasa.gov/planetary/apod?api_key=8fc34Kx04IbNSO3uPQcD61I6FxIbaIzJPGQqQouw&date=${choice}`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      if (data.media_type === "image") {
        document.querySelector('#imageView').style.display = "block";
        document.querySelector('#imageView').src = data.hdurl;
        document.querySelector('#videoView').style.display = "none";
      }
      else if (data.media_type === "video") {
        document.querySelector('#videoView').src = data.url;
        document.querySelector('#videoView').style.display = "block";
        document.querySelector('#imageView').style.display = "none";
      }
      document.querySelector('.view').classList.add("hidden")
      document.querySelector('#title').innerText = data.title;
      document.querySelector('#explanation').innerText += data.explanation;
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

