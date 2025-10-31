//wrap code into DOMContent Loader to avoid loading problems
document.addEventListener("DOMContentLoaded", () =>{
  const number = document.getElementById("user-input");
  const checkBtn = document.getElementById("check-btn");
  const clearBtn = document.getElementById("clear-btn");
  const result = document.getElementById("results-div");
  

//declare valid regexes
const dashRegex = /^1\s\d{3}-\d{3}-\d{4}$/;                         //1 555-555-5555
const parenthesisDashRegex = /^1\s(\(\d{3}\)|\d{3})\s\d{3}-\d{4}$/; //1 (555) 555-5555
const parenthesisNoSpaceRegex = /^1\(\d{3}\)\d{3}-\d{4}$/;          // 1(555)555-5555
const onlySpacesRegex = /^1\s\d{3}\s\d{3}\s\d{4}$/;                 // 1 555 555 5555
const rawNumberRegex = /^\d{10}$/;                                  // 5555555555
const rawDashesRegex =   /^\d{3}-\d{3}-\d{4}$/;                     // 555-555-5555
const firstThreeParenthesisRegex = /^\(\d{3}\)\d{3}-\d{4}$/;        // (555)555-5555


//declare accepted phone input list
const acceptedNumberRegex = [dashRegex,parenthesisDashRegex,parenthesisNoSpaceRegex,onlySpacesRegex,rawNumberRegex,rawDashesRegex,firstThreeParenthesisRegex];

  //check for empty inputs
  const checkUserInput = () =>{
  if (number.value===""){
    alert("Please provide a phone number");
    }
    else if(validNumber(number.value)){
      result.innerText = `Valid US number: ${number.value}`;
    }
    else{
      result.innerText = `Invalid US number: ${number.value}`;
    }
};

//return true if the number input follows the regex rules
const validNumber = (num) =>{
  const isValid = acceptedNumberRegex.some(regex=>regex.test(num));
  return isValid;
};

//clear output
const clearContent = ()=>{
  result.innerText = "";
};

checkBtn.addEventListener("click",checkUserInput);
clearBtn.addEventListener("click",clearContent)

});
