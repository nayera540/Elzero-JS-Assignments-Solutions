function ageInTime(theAge) {
    // Your Code Here
    if(theAge > 10 && theAge  < 100){
        let months = theAge * 12;
        let weeks = theAge * 52.1429;
        let days = theAge * 365;
        let hours = theAge * 8760;
        let minutes = theAge * 525600;
        let seconds = theAge * 3.154e+7;
        console.log(`${months} Months, ${Math.round(weeks)} Weeks, ${Math.round(days)} Days , ${Math.round(hours)} Hours, ${Math.round(minutes)} Minutes, ${Math.round(seconds)} Seconds`)
    }
    else{
        console.log("Age Out Of Range");
    }
}

  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months