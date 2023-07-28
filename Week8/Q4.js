function checkStatus(a, b, c) {
    // Your Code Here
    let age = typeof(a) === 'number' ? a : (typeof(b) === 'number' ? b : c);
    let name = typeof(a) === 'string' ? a : (typeof(b) === 'string' ? b : c);
    let bo = typeof(a) === 'boolean' ? a : (typeof(b) === 'boolean' ? b : c);

    if(bo) {
        console.log(`Hello ${name}, Your Age Is ${age}, You Are Available For Hire`);
    } else {
        console.log(`Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire`);
    }
}


  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"