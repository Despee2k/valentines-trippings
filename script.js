let clickCount = 0;
const messages = ["Are you sure?", "Please, I'm really lonely", "If you say no, I'll be really sad"];
const size = ["text-base", "text-2xl", "text-4xl", "text-6xl","text-9xl"];

const why = () => {
    clickCount++;

    let yesBtn = document.getElementById("yesBtn");
    let noBtn = document.getElementById("noBtn");

    let width = yesBtn.clientWidth;
    let height = yesBtn.clientHeight;

    if(clickCount == 4){
        let question = document.getElementById("question");

        question.remove();
        noBtn.remove();

        yesBtn.style.width = "";
        yesBtn.style.height = "";
        yesBtn.classList.add("w-screen", "h-screen");
        yesBtn.classList.remove("rounded-md")
    } else {
        noBtn.innerHTML = messages[clickCount - 1];
        yesBtn.style.width = width * 2;
        yesBtn.style.height = height * 2;
        yesBtn.classList.remove(size[clickCount - 1]);
        yesBtn.classList.add(size[clickCount]);
    }
}

const theySaidYes = () => {
    window.location.href = "iloveyou.html";
}

window.onload = () => {
    const [navEntry] = performance.getEntriesByType("navigation");
    if(navEntry && navEntry.type === "reload"){
        setTimeout(() => {
            window.location.href = "index.html";
        }, 500);
    }
}