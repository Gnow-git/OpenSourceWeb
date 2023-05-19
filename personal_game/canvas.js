/**
 * canvas가 설정되는 js파일
 */
const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// 캔버스 크기
canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

ctx.fillStyle = "#12bbFF";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// 디지몬 이미지 불러오기
let image1 = new Image();
image1.src = "";

// 디지몬 만들기
let digimon = {
    x : 10,         // 디지몬 x좌표
    y : 200,        // 디지몬 y좌표
    width : 50,     // 디지몬 가로 크기
    height : 50,    // 디지몬 세로 크기
    draw() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
digimon.draw();