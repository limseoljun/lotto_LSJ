// 추첨번호 갯수
var num = 6;
// 유저번호
var p = new Array(num);
// 당첨번호
var r = new Array(num);
// 함수
function lotto() {
    var ran = Math.floor(Math.random() * 45) + 1;
    return ran;
}
//  유저번호 픽
p = [10, 13, 21, 35, 41, 43]

// 당첨번호
for (var i = 0; i < num; i++) {
    r[i] = lotto();
    // 중복방지
    for (var j = 0; j < i; j++) {
        if (r[i] == r[j]) {
            r[i] = lotto();
            j = 0;
        }
    }
}
// 보너스번호
var bonus = lotto();
// 중복제거
for (var i = 0; i < num; i++) {
    if (r[i] == bonus) {
        bonus = lotto();
    }
}


// 당첨 확인
var jackpot = 0;
for (var i = 0; i < num; i++) {
    for (var j = 0; j < num; j++)
        if (p[i] == r[j]) {
            jackpot = jackpot + 1;
        }
}

// 보너스 여부
var bonusOX=0;
for (var i = 0; i < num; i++) {
    if (p[i] == bonus) {
        bonusOX = 1;
    }
}

if (jackpot < 5) {
    var total = jackpot + bonusOX;
} else {
    var total = jackpot;
}

var str = "";
switch (total) {
    case 0:
        str = "꽝"
        break;
    case 1:
        str = "꽝"
        break;
    case 2:
        str = "꽝"
        break;
    case 3:
        str = "5등 입니다."
        break;
    case 4:
        str = "4등 입니다."
        break;
    case 5:
        str = "3등 입니다."
        for (var i = 0; i < num; i++) {
            if (p[i] == bonus) {
                str = "2등 입니다."
            }
        }
        break;
    case 6:
        str = "1등 입니다."
        break;
}

// 결과 값
document.write("입력 번호: " + "<br>");
for (var i = 0; i < num; i++) {
    document.write(p[i] + ", ");
}
document.write("<br>" + "당첨 번호: " + "<br>");
for (var i = 0; i < num; i++) {
    document.write(r[i] + ", ");
}
document.write("<br>" + "보너스 번호: " + "<br>");
document.write(bonus + "<br>");
document.write("맞힌 번호의 수: " + jackpot + "<br>");
document.write("보너스번호결과: " + bonusOX + "<br>");
document.write("토탈:" + total + "<br>");
document.write("결과: " + str + "<br>");