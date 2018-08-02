console.log('block');
function can_make_word(word){
    var blocks= [
        ['B','O'],
        ['X','K'],
        ['D','Q'],
        ['C','P'],
        ['N','A'],
        ['G','T'],
        ['R','E'],
        ['T','G'],
        ['Q','D'],
        ['F','S'],
        ['J','W'],
        ['H','U'],
        ['V','I'],
        ['A','N'],
        ['E','R'],
        ['F','S'],
        ['L','Y'],
        ['P','C'],
        ['Z','M']
      ]
    var result = true;
    word = word.split("");
    var i =0;     
    while (i <word.length){
        j=0;
        count = 0;
        while (j<blocks.length){
            if (blocks[j].indexOf(word[i])>=0){
                count +=1;
                blocks.splice(j,1);
                j =blocks.length;
            }
            else{
                j++;
            }
        }
        if (count===0){
            result = false;
        }
        i++;

        
    }
    console.log(result);
}
can_make_word("TREAT");
can_make_word("BOUGHT");
can_make_word("CONFUSE");
can_make_word("COMMON");
can_make_word("BOOK");
