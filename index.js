// Code your solution in this file!

 function distanceFromHqInBlocks(){
    const pickup = 43;
   if (pickup < 42){
    return 42 - pickup
   }
   else{
    return pickup - 42
   }
}

function distanceFromHqInBlocks(){
    const pickup = 50 
    return pickup - 42
}

function distanceFromHqInFeet(pickup){
   return distanceFromHqInBlocks(pickup)*264;

}

function distanceTravelledInFeet(start, end){
    if (start > end ){
        return (start -end )*264
    }
    else {
        return (end - start)* 264
    }
}

function calculatesFarePrice(start, destination){
    const distanceInFeet = distanceTravelledInFeet (start, destination);
    if (distanceInFeet < 400 ) {
        return 0;
    }
    else if (distanceInFeet >= 400 && distanceInFeet <= 2000){
        return ((distanceInFeet -400) *2)/100;
    }
    else if (distanceInFeet > 2000 && distanceInFeet <= 2500){
        return 25
    }
    else {
        return 'cannot travel that far';
    }
    
     
}

 
