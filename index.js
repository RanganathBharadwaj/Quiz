const correctAnswer = ["B","B","D","C","A"];
const quiz = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const questions = document.querySelectorAll(".question");

quiz.addEventListener("submit", (event) =>{
    event.preventDefault();

    let score = 0;
    const userAns = [quiz.q1.value, quiz.q2.value, quiz.q3.value, quiz.q4.value, quiz.q5.value];

    userAns.forEach((answer,index) =>{
        if (answer == correctAnswer[index]){
            score += 1;
            questions[index].classList.add("correct");
        } else{
            questions[index].classList.add("incorrect");
        }
    });
    scrollTo(0, 0);
    result.classList.remove("hide");
    result.querySelector("p").textContent = `You Scored ${score}/5!`;
});