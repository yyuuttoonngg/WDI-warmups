// Create a function which returns a string of full, half or empty depicting the star rating depending on the input

// starRating("0.38") => "half empty empty empty empty"
// starRating("4.5") => "full full full full half"

function starRating(str){
  let fullstars = Math.floor(Number(str));
  let rating = ['empty','empty','empty','empty','empty'];
  for(let i =0; i<fullstars; i++){
    rating[i] = 'full';
  }
  if (Number(str)%1 >0){
    rating[fullstars] = 'half';
  }
  return rating.join(" ");
}
console.log(starRating('2.87'));
console.log(starRating('0.38'));
console.log(starRating('4.5'));