// repo link space






// kilometereToMeter 
function kilometerToMeter(kilometer){

    meter = kilometer* 1000;

    if(kilometer < 0){
        return "Warning! Distance can not be negetive value";       /* warning messege */
    }
    return meter;
}






//budgetCalculator
function budgetCalculator(watch,phone,laptop){

    productTotalPrice = 0
    var watchPrice = 50

    if(watch < 0 || phone < 0 || laptop < 0){
        return "Please input a positive number of your product items"       /* warning messege */
    }

    for(var i = 0; i <= watch; i++){
        watchTotalPrice = watchPrice *i
    }

    var phonePrice = 100
    for(var i = 0; i <=phone; i++){
        phoneTotalPrice = phonePrice*i
    }

    var laptopPrice = 500
    for(var i = 0; i <= laptop; i++){
        laptopTotalPrice = laptopPrice*i
    }

    productTotalPrice = watchTotalPrice + phoneTotalPrice + laptopTotalPrice
    return productTotalPrice

}






// hotelCost
function hotelCost(day){

    hotelTotalCost = 0

    if(day < 1){
        return "Sorry,You can not input negetive value.Day can not be negetive."        /* warning messege */
    }

    if(day <= 10){
        hotelTotalCost = day*100
    }
    else if(day <= 20){
        firstTenDaysCost = 10*100
        secondTenDays = day - 10
        secondTenDaysCost = secondTenDays * 80
        hotelTotalCost = firstTenDaysCost + secondTenDaysCost
    }
    else{
        firstTenDaysCost = 10*100
        secondTenDaysCost = 10*80
        afterTwentyDays = day - 20
        afterTwentyDaysCost = afterTwentyDays* 50
        hotelTotalCost = firstTenDaysCost + secondTenDaysCost + afterTwentyDaysCost
    }

    return hotelTotalCost
}






//megaFriend
function megaFriend(friendsName){

    var largestName = friendsName[0];

    for (var i = 0; i < friendsName.length; i++){

        var singleName = friendsName[i]

        if (singleName.length > largestName.length){
            largestName = singleName
        }
    }

    return largestName
}