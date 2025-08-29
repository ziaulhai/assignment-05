//like count

const likeCount = document.getElementById("likeCount");

function setupToggleHeart(heartElement, countElement) {
    let liked = false; 
    heartElement.addEventListener("click", () => {
        if (!liked) {
            
            heartElement.classList.remove("fa-regular");
            heartElement.classList.add("fa-solid");
            heartElement.style.color = "red";
            countElement.textContent = parseInt(countElement.textContent) + 1;
            liked = true;
        } else {
            
            heartElement.classList.remove("fa-solid");
            heartElement.classList.add("fa-regular");
            heartElement.style.color = "black";
            countElement.textContent = parseInt(countElement.textContent) - 1;
            liked = false;
        }
    });
}


setupToggleHeart(document.getElementById("toggleHeart1"), likeCount);
setupToggleHeart(document.getElementById("toggleHeart2"), likeCount);
setupToggleHeart(document.getElementById("toggleHeart3"), likeCount);
setupToggleHeart(document.getElementById("toggleHeart4"), likeCount);
setupToggleHeart(document.getElementById("toggleHeart5"), likeCount);
setupToggleHeart(document.getElementById("toggleHeart6"), likeCount);
setupToggleHeart(document.getElementById("toggleHeart7"), likeCount);
setupToggleHeart(document.getElementById("toggleHeart8"), likeCount);
setupToggleHeart(document.getElementById("toggleHeart9"), likeCount);




// call history and coin
let coins = 100; 
const coinDisplay = document.getElementById("coin-balance"); 

const callData = [];
const callButtons = document.querySelectorAll(".call-now");

callButtons.forEach((button) => {
  button.addEventListener("click", function () {
    
    if (coins < 20) {
      alert("You have insufficient coin. You must have minimum 20 coins to call");
      return; 
    }

   
    coins -= 20;
    coinDisplay.innerText = coins; 

    
    const parentCard = this.closest(".emergency-card");

   
    const name = parentCard.querySelector(".service-name").innerText;
    const number = parentCard.querySelector(".service-number").innerText;

   
    alert(`Calling ${name} at ${number}...`);

    
    const data = {
      name: name,
      number: number,
      date: new Date().toLocaleTimeString(),
    };

    callData.push(data);

   
    const historyContainer = document.getElementById("history-container");
    historyContainer.innerHTML = "";

    for (const item of callData) {
      const div = document.createElement("div");
      div.innerHTML = `
        <div class="flex place-content-between items-center p-5 bg-[#FAFAFA] rounded-xl w-[380px] mx-auto my-2">
          <div>
            <h1 class="text-[16px] font-semibold">${item.name}</h1>
            <p class="text-[#5C5C5C]">${item.number}</p>
          </div>
          <p>${item.date}</p>
        </div>
      `;
      historyContainer.appendChild(div);
    }
  });
});



// history clear

const clearBtn = document.getElementById("clear-history");

clearBtn.addEventListener("click", function () {
  
  callData.length = 0;

 
  const historyContainer = document.getElementById("history-container");
  historyContainer.innerHTML = "";
});






// Copy counter
let copyCount = 0;
const copyCounter = document.getElementById("copy-counter");


const copyButtons = document.querySelectorAll(".emergency-card .do-copy");

copyButtons.forEach((icon, index) => {
  icon.addEventListener("click", () => {
    console.log(`Button ${index + 1} clicked`);
  });
});

const copyToClipboard = async (number) => {
  try {
    await navigator.clipboard.writeText(number);  
    copyCount++;                                  
    copyCounter.innerText = copyCount;
    alert(`Copied ${number} to clipboard!`);     
  } catch (err) {
    console.error("Failed to copy: ", err);      
  }
};


copyButtons.forEach((icon) => {
  icon.addEventListener("click", function () {
    const parentCard = this.closest(".emergency-card");
    const number = parentCard.querySelector(".service-number").innerText;
    copyToClipboard(number);  
  });
});
