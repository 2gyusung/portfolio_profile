const change = document.querySelector("#change");
const body = document.querySelector("body");

//화면의 배경화면을 전체 바꿔야하니 body 태그를 불러왔다.

function changeHandle () {
    if(change.value === "NIGHT") {
        body.classList.add("night");
        body.classList.remove("day");
        change.value = "Day";
        change.style.backgroundColor = "#fff";
        change.style.color = "#000";
    } else {
        body.classList.remove("night");
        body.classList.add("day");
        change.value = "NIGHT";
    }
}


change.addEventListener("click", changeHandle);