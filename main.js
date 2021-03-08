
let matchingNums = new Array();
let matchingStars = new Array();

let randNums = document.querySelector(".randNumbers");
let randStars = document.querySelector(".randStars");
let starscont = document.querySelector(".starscont");
let numbers = document.getElementsByClassName("number");



for(let i = 0; i < numbers.length; i++){
    $(".number").on('click', () => {
        $(".numbers").css('background', 'red');
    });
}

for(let i = 1; i < 51; i++){
    $(".inputNumbers").append(`<input type="checkbox" name="" id="${i}"  value="${i}" style="display: none;">
    <label for="${i}" class="number"><p class="p-number">${i}</p></label>
    `)
}


for(let i = 1; i < 13; i++){
    $(".inputStars").append(`<input type="checkbox" name="" id="${i}"  value="${i}" style="display: none;">
    <label for="${i}" class="number">${i}</label>
    `)
}

let submit = document.querySelector('.submitbtn');

$('#submitbtn').on('click', function() {
    randNums.innerText = " ";
    starscont.innerText = " ";
    matchingNums = [];
    matchingStars = [];
    


    // Random Numbers 
    const nums = new Array();
    while(nums.length != 5){
        let rnd = Math.floor(Math.random() * 50) + 1;
        if(!nums.includes(rnd)){
            nums.push(rnd);
        }else{
            console.log('skipped number');
        }
    }

    const stars = new Array();
    while(stars.length !== 2) {
        let starrnd = Math.floor(Math.random() * 12) + 1;
        if(!stars.includes(starrnd)){
                stars.push(starrnd);
        }else{
            console.log('skipped number');
        }
    }

    // Log the random NUMBERS to the page
    for(let x = 0; x < nums.length; x++){
        randNums.innerHTML += `<div class="ball"><p>${nums[x]} </p></div>`;
    }


    // Log the random STARS to the page
    for(let y = 0; y < stars.length; y++){
        starscont.innerHTML += `<div class="randStars">
        <div class="startext">${stars[y]}</div>    
        <div class="star">⭐</div>
    </div>`;
    }
    



    // Finding the matching NUMBERS and store them in the matchingNums Array
    for(let i = 0; i < nums.length; i++){
        if(pickednums.includes(nums[i])){
            matchingNums.push(nums[i]);
        }
    }

    if(matchingNums.length == 0){
        $(".message").html("<div class='Fail'>No Matching Numbers! Better Luck next time.</div>"); 
    }
    if(matchingNums != 0){
        $(".message").html(`<div class='sucess'> The matching numbers are: ${matchingNums};`);
    }
    



    // Finding the matching STARS and store them in the matchingNums Array
    for(let i = 0; i < stars.length; i++){
        if(pickedstars.includes(stars[i])){ 
            matchingStars.push(stars[i]); 
        }
    }
    if(matchingStars.length == 0){
        $(".message").append("<div class='Fail'>No Matching Numbers! Better Luck next time.</div>");
    }
    if(matchingStars != 0){
        $(".message").append(`<div class='sucess'> The matching numbers are: ${matchingStars};`);
    }; 
}); 




// NUMBERS SELECTED
let pickednums = new Array();
$(".inputNumbers").on("click", "label", function(e) {
  var getValue = $(this).attr("for");
  var goToParent = $(this).parents(".inputNumbers");
  var getInputRadio = goToParent.find("input[id = " + getValue + "]");
  let numberid = getInputRadio.attr("id");
  pickednums.push(parseInt(numberid));
//   $(this).css("background", "white");
//   $(this).text("❌")
  $(this).addClass("checked");
  console.log(pickednums)

  if(pickednums.length > 5){
    alert("You can only pick 5 numbers!");
    pickednums = pickednums.slice(0, -1)
    $(this).css("background", "tomato");
    console.log(pickednums)
  }
  else if(pickednums.length > 6){
  alert("You can only pick 5 numbers!");
  pickednums = pickednums.slice(0, -1)
  $(this).css("background", "tomato");
  }
});


let pickedstars = new Array();
$(".inputStars").on("click", "label", function(e) {
  var getValue = $(this).attr("for");
  var goToParent = $(this).parents(".inputStars");
  var getInputRadio = goToParent.find("input[id = " + getValue + "]");
  let starid = getInputRadio.attr("id");
  pickedstars.push(parseInt(starid))
  $(this).addClass("checked");
//   $(this).text("⭐")
  console.log(pickedstars)

  if(pickedstars.length > 2){
    alert("You can only pick 2 stars!");
    pickedstars = pickedstars.slice(0, -1)
    $(this).css("background", "white");
    
  }
  else if(pickedstars.length > 3){
  alert("You can only pick 2 stars!");
  pickedstars = pickedstars.slice(0, -1)
  $(this).css("background", "white");
  }
});

$(".reset").on("click", () => {
    pickednums = [ ];
    pickedstars = [ ];
    $("label").removeClass("checked");
    $("number").css("background-image", "none");
    $("number").css("color", "black");

    
});

// let btn = document.querySelector('.btn');
// let count = document.querySelector('.count');
// let clickCount = 0;
// btn.addEventListener('click', () => {
//     clickCount++;
//     console.log("The click count is: " + clickCount);
//     count.innerHTML = `You have clicked the button ${clickCount} times!`
// });