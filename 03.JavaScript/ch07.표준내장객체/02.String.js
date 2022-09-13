// String 객체
let hello = '안녕하세요?';  // literal로 부터 생성
let helloFromConstructor = new String('안녕하세요?'); // 생성자 함수로 생성

// 속성
console.log(hello.length); // 6

// Methods
console.log(hello[1], hello.charAt(1));  // 녕 녕
console.log(hello.concat(' 여러분!!!'));  // hello + ' 여러분!!!'
console.log(hello.indexOf('하'), hello.indexOf('한'));  // 2, -1


// 문제
// 디지털 시계(00:00 ~ 23:59)가 있다.
// 디지털 시계에서 3이라는 숫자가 있는 시간은 하루에 총 몇초 인가?

let totalSeconds = 0;
for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute++) {
        let display = String(hour) + ':' + String(minute);
        if (display.indexOf('3') >= 0)
            totalSeconds += 60;
    }
}
console.log(totalSeconds);  //29700


// Regular Expression(정규표현식)
let sample = 'A quick brown fox 갈색의 재빠른 여우가 over the lazy dog.';
let newStr = sample.replace(/[A-Z]/, ' ');          // 대문자는 공백으로
console.log(newStr);
newStr = sample.replace(/r/g,'R');                  // r문자를 대문자로
console.log(newStr);
newStr = sample.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, '');  // 한글 제거
console.log(newStr);

// 문자열의 일부분을 추출
let str = 'Apple, Banana, Kiwi';
console.log(str.slice(7, 7+6));   // Banana (시작, 끝 인덱스)
console.log(str.slice(7));        // Banana, Kiwi (시작 인덱스 끝까지)

console.log(str.substring(7, 13));

// 문자열을 특정 문자열을 기준으로 배열 만들기
const fruits = str.split(',');
console.log(fruits);

// 문제
// 1 ~ 1000 까지 숫자가 있다.
// 각 0, 1, 9의 숫자가 몇번 나오는지 알아 내시오.
let numbers = '';
for (let i=1; i<=1000; i++)
    numbers += String(i);

let obj = {};
for (let i=0; i<10; i++) {
    obj[String(i)] = numbers.split(String(i)).length - 1;
}
console.log(obj);