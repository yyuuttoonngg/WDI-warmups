// https://gist.github.com/kasun-maldeni/d483dd67a058cda4d18473735b200925
function getFriendlyDate(input){
    var print1;
    var print2;
    var friendlyDates = [];
    var y1 = input[0].slice(0,4)
    var m1 = input[0].slice(5,7)
    var d1 = input[0].slice(8)
    var y2 = input[1].slice(0,4)
    var m2 = input[1].slice(5,7)
    var d2 = input[1].slice(8)
    var month1 = new Date(input[0]).toDateString().slice(4,7)
    var month2 = new Date(input[1]).toDateString().slice(4,7)
    var date1 = printDate(d1)
    var date2 = printDate(d2)

    function printDate(date){
        if (date ==='01'){
            return '1st'
        } else if (date ==='21'||date ==='31'){
            return date[0] + '1st'
        } else if (date ==='02'){
            return '2nd'
        } else if(date==='22'){
            return '22nd'
        } else if (date === '03'){
            return '3rd'
        } else {
            return Number(date) + 'th'
        } 
    }
    
    function isSameYear(){
        if ( y1 === y2 ){
            return true
        } else if( y2 - y1 === 1 ){
            if (m2 < m1){
                return true
            } else if ( m1 === m2 && d1 > d2 ){
                return true
            } else{
                return false
            }
        } else{
            return false
        }
    }
    
    function isCurrentYear(){
        var currentYear =(new Date()).getFullYear()
        if (y1 == currentYear){
            return true
        } else{
            return false
        }
    }
    
    function isSameMonth(){
        if ( y1 === y2 && m1 === m2 ){
            return true
        } else {
            return false
        }
    }

    if (isSameMonth() && isCurrentYear()){
        print1 = month1 + ' ' + date1
        print2 = date2
    } else if (isSameYear() && isCurrentYear()){
        print1 = month1 + ' ' + date1
        print2 = month2 + ' ' + date2
    } else if (isSameYear()){
        print1 = month1 + ' ' + date1 + ', ' + y1
        print2 = month2 + ' ' + date2
    } else if (isSameMonth()){
        print1 = month1 + ' ' + date1 + ', ' + y1
        print2 = date2
    } else{
        print1 = month1 + ' ' + date1 + ', ' + y1
        print2 = month2 + ' ' + date2 + ', ' + y2
    }
    friendlyDates.push(print1)
    friendlyDates.push(print2)
    return friendlyDates
}
console.log(getFriendlyDate(["2017-07-05", "2017-08-09"]))
console.log(getFriendlyDate(["2017-09-05", "2018-07-09"]))


