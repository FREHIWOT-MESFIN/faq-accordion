
let answerBtn = document.querySelectorAll(".answer-btn");
let answer = document.querySelectorAll(".answer");

// Function to toggle answer visibility
function toggleAnswerVisibility(index) {
    let curAns = answer[index];
    if (curAns.style.display === "none" || curAns.style.display === "") {
        curAns.style.display = "block";
        answerBtn[index].src = "./assets/images/icon-minus.svg";
    } else {
        curAns.style.display = "none";
        answerBtn[index].src = "./assets/images/icon-plus.svg";
    }
}

// Event listener for keyboard navigation
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        // Find the index of the currently focused button
        let focusedIndex = Array.from(answerBtn).findIndex(btn => btn === document.activeElement);

        // If no button is focused, focus the first button
        if (focusedIndex === -1) {
            answerBtn[0].focus();
            return;
        }

        // Calculate the index of the next button based on arrow key
        let nextIndex;
        if (event.key === "ArrowDown") {
            nextIndex = (focusedIndex + 1) % answerBtn.length;
        } else { // ArrowUp
            nextIndex = (focusedIndex - 1 + answerBtn.length) % answerBtn.length;
        }

        // Focus the next button
        answerBtn[nextIndex].focus();
    } else if (event.key === "Enter") {
        // If Enter key is pressed while a button is focused, toggle its corresponding answer visibility
        let focusedIndex = Array.from(answerBtn).findIndex(btn => btn === document.activeElement);
        if (focusedIndex !== -1) {
            toggleAnswerVisibility(focusedIndex);
        }
    }
});

// Event listener for button click
answerBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        toggleAnswerVisibility(index);
    });
});
