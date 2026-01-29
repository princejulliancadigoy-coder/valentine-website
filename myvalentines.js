const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const result = document.getElementById("result");

let yesSize = 18;

noBtn.addEventListener("click", () => {
    yesSize += 10;
    yesBtn.style.fontSize = yesSize + "px";
    yesBtn.style.padding = (yesSize / 2) + "px";
});

yesBtn.addEventListener("click", () => {
    question.style.display = "none";
    result.style.display = "block";
});

yesBtn.addEventListener("click", () => {
    // Hide the question/card
    question.style.display = "none";
    result.style.display = "block";

    // Array of GIF URLs (pwede mo dagdagan hanggang 10)
    const gifs = [
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnFxZ2drZ214dnVucmMzd3RzZGdwYnA5OHYweXZ0NjM0YWhsbjBpcSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/AVDSRfk3vhR0bBmaoV/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGhleTVjdno5YThic3dmbWNydjQ3ZHd5YnpsYnowdXF4NWNxZHI5ZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KmxmoHUGPDjfQXqGgv/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGhleTVjdno5YThic3dmbWNydjQ3ZHd5YnpsYnowdXF4NWNxZHI5ZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/PF6e8Xq8dVnVX1BGLS/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExanM1NW0zcncyM2FjemdyazYxeDFlbnFsbXI1Zm9odWNoZHd2cjlxcSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Zl7u48zLVFgLpRwq6f/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExanM1NW0zcncyM2FjemdyazYxeDFlbnFsbXI1Zm9odWNoZHd2cjlxcSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Rik9n81Vda3rzr5F8h/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExanM1NW0zcncyM2FjemdyazYxeDFlbnFsbXI1Zm9odWNoZHd2cjlxcSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Lv2VhwHrt6ljhvZ6LF/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXoxeGxrYmlodTZiMHh5N3kyejZnbzBidW84aXExNXM0Z2h1YXZxaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XN8YOV0H6YfVFFGxth/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGR6OTF4b3h5bXhleHR5cXIzbXNtd2M5ZjQ2bG0ybWhpMWRnZ2NuNCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/jVc9j9QXBUKkXi0nVn/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGN4b3RwbmlsM3hraWZ2a2FlMnlvejBtd2NpazY1YzY5cnY1Y3l3NyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/okfvUCpgArv3y/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExamJycWd4Y3ZybGRmdHB3MnF1d25yc2ZuaGNxZGhtb2s3ZDZtZ3NtYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/8QbwUh40Hl96yMgvOx/giphy.gif"
    ];

    // Fixed positions for each GIF
    const positions = [
        //pababa at pataas     left: no 21 to 69
    {top: "5%", left: "5%"},
    {top: "5%", left: "70%"},
    {top: "11%", left: "19%"},
    {top: "30%", left: "63%"},
    {top: "31%", left: "83%"},
    {top: "50%", left: "5%"},
    {top: "40%", left: "25%"},
    {top: "60%", left: "75%"},
    {top: "70%", left: "62%"},
    {top: "58%", left: "19%"}

    ];

    gifs.forEach((url, index) => {
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Love GIF";

    img.style.position = "fixed";
    img.style.width = "12vw";  // responsive width
    img.style.top = positions[index].top;
    img.style.left = positions[index].left;
    img.style.zIndex = "1000";

    document.body.appendChild(img);
});

});
