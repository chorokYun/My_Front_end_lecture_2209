// ECMAScript-5(ES-5, 2009년)에서 추가된 Array method

const fruits = ['apple','banana','cherry','grape'];

// 배열 순회 메소드
fruits.forEach(function(value,  index){
    console.log(`인덱스 ${index}의 값은 ${value} 입니다.`);
});
fruits.forEach(value => console.log(value));

// 배열의 각 요소에 대해서 함수 적용 (map)
const numbers = [4,16,9,25,36];
let result = numbers.map(function(num){
    return Math.sqrt(num);
});
console.log(result);
result = numbers.map(x => Math.sqrt(x));
console.log(result);

// 배열에서 기준을 만족시키는 것만 추출(filter)
// 20보다 큰 수만 추출
result = numbers.filter(value => value > 20);
console.log(result);