//1. 생년월일을 입력으로 받아 만 나이를 계산하는 프로그램을 작성하세요.

const today = new Date();
const birthDate = new Date(1990, 1, 11);

let age = today.getFullYear() - birthDate.getFullYear();
const m = today.getMonth() - birthDate.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {age--;}
document.writeln(age);

bYear = 2000;
bMonth = 9;
bDay = 26;

today = new Date()
tYe


//2. 년도를 입력으로 받아 윤년 여부를 판단하는 프로그램을 작성하세요.
//   4로 나뉘어 지면 윤년, 100으로 나뉘어 지면 평년, 400으로 나뉘어지면 윤년

const num = Math.ceil(Math.random() * 2000);
if (num % 400 === 0) {
    console.log(num, '윤년');
} else if (num % 100 === 0) {
    console.log(num, '평년');
} else if (num % 4 === 0) {
    console.log(num, '윤년');
} else {
    console.log(num, num);
}

//3. 시험점수를 입력으로 받아 학점을 부여하는 프로그램을 switch 문을 사용하여 작성하세요.
//   90점이상이면 A, 90점미만이면 80점 이상이면 B, ..., 60점 미만이면 F

const score = Math.ceil(Math.random() * 50+50);

switch (parseInt(score/10)) {
    case 10:
    case 9:
  	    console.log(score,'A')
  	break;
    case 9:
        console.log(score,'B')
    break;    
    case 9:
        console.log(score,'C')
    break;    
    case 9:
        console.log(score,'D')
    break;    
    case 9:
        console.log(score,'E')
    break;
  default:
  	document.write("F학점");
}

