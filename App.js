
//  fetch('https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric')
// .then(Response=> Response.json())
// .then(data=> console.log(data))

fetch('https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=0962d6568950d8abd49bf2891e647fac')
.then(Response=> Response.json())
.then(data=> console.log(data))