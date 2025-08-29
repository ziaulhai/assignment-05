const likeCount = document.getElementById("likeCount");

// function define করা হলো
function setupToggleHeart(heartElement, countElement) {
    let liked = false; // initially not liked
    heartElement.addEventListener("click", () => {
        if (!liked) {
            // heart লাল করা এবং count +1
            heartElement.classList.remove("fa-regular");
            heartElement.classList.add("fa-solid");
            heartElement.style.color = "red";
            countElement.textContent = parseInt(countElement.textContent) + 1;
            liked = true;
        } else {
            // heart আগের অবস্থায় grey করা এবং count -1
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
const coinDisplay = document.getElementById("coin-balance")
let coins = 100;

const callData = [];
const callButtons = document.querySelectorAll(".call-now");


callButtons.forEach((button) => {
  button.addEventListener("click", function () {

      if (coins < 20) {
      alert("You have insufficient coin. You must have minimum 20 coins");
      return; // ফাংশন এখানেই থেমে যাবে
    }

    // কয়েন deduct করি
    coins -= 20;
    coinDisplay.innerText = coins; // UI তে আপডেট করি
    // outer parent ধরলাম (p-2 div)
    
    const parentCard = this.closest(".emergency-card");

    // এখন parentCard এর ভেতর থেকে data পড়ব
    const name = parentCard.querySelector(".service-name").innerText;
    const number = parentCard.querySelector(".service-number").innerText;

  alert(`Calling ${name} ${number}...`);


    const data = {
      name: name,
      number: number,
      date: new Date().toLocaleTimeString(),
    };

    callData.push(data);

    // container এ history render
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

// Clear button ধরলাম
const clearBtn = document.getElementById("clear-history");

clearBtn.addEventListener("click", function () {
  // callData array খালি করে দিলাম
  callData.length = 0;

  // history container খালি করলাম
  const historyContainer = document.getElementById("history-container");
  historyContainer.innerHTML = "";
});
