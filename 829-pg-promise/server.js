var pgp = require('pg-promise')()
var db = pgp({
  database: 'movies'
})
var request = require('request');
var search ="Jaws"

db.any('select * FROM movies')
    .then(function(movies) {
      console.log(movies[0].title)
    })
    .catch(function(error) {
        console.log("error: "+ error.message)
    });

// request
//   .get(`http://omdbapi.com/?t=${search}&apikey=2f6435d9`)
//   .on('response', function(response) {
//     console.log(response.statusCode) 
//     console.log(JSON.parse(response)) 
//   })
//   .pipe(request.put('http://mysite.com/img.png'))

  request(`http://omdbapi.com/?t=${search}&apikey=2f6435d9`, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(res)
  console.log(body.url);
  console.log(body.explanation);
});