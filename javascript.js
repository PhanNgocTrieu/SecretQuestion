let loginForm = document.getElementById("form-secret-question");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let answer = document.getElementById("answer");

    if (answer.value == "") {
        alert("Bạn nên nhập câu trả lời trước khi gửi");
    } else {
        const current_time = new Date();
        alert("Chúc mừng bạn đã hoàn thành bài đọc Kinh Thánh ngày ");
    }
});

function updateTime() {
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12]
    const current_time = new Date();
    const day = current_time.getDate();
    const month = months[current_time.getMonth()];
    const year = current_time.getFullYear();
    document.getElementById("time").innerHTML = `Date: ${day} - ${month} - ${current_time.getFullYear()}`;
}

function updateCSV() {
    
}

updateTime();