fetch("https://www.balldontlie.io/api/v1/players")
.then(res => res.json())
.then(data => console.log(data))