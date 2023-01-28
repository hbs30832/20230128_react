/* 
    var 키워드를 사용하지 않는 이유.
        1) 중복 선언이 허용된다. => 예기치 오류를 발생시킨다.
        2) 호이스팅이 일어난다. => 변수 선언 이전에 참조해도 오류가 발생하지 않는다.
        3) 함수 레벨 스코프(유효범위)만 지원한다. => 블록 레벨 스코프는 지원하지 않는다.
*/

console.log(num); // 변수 선언 이전에 참조하면 undefined 출력.

var num = 10;
var num = 20;

console.log(num);

// 블록 레벨 스코프 x.
for (var num = 0; num < 10; num++) {}

console.log(num); // 10.

{
  var num = 30;
}

// console.log(str); 호이스팅은 발생하지만 TDZ 때문에 오류 발생.
let str = "문자열";

/* 
    화살표 함수(Arrow Function)
        - 화살표를 사용해서 함수를 간결하게 표현할 수 있다.
        - return 생략할 수 있다.
        - 함수 호이스팅이 일어나지않는다.
*/

// sum(); 함수 호이스팅이 일어나지 않기 때문에 오류 발생.
const sum = (a, b) => a + b; // 코드 블록과 return을 생략하면 표현식의 결과가 반환된다.
const getObj = (name, age) => ({ name: name, age: age }); // 객체를 return할 때는 ()로 감싸준다.

sum(10);

/* 
    매개변수 rest
        - 매개변수가 몇개일지 정해지지 않았을 때 사용.
        - 매개변수 앞에 ...을 붙이면 인자가 몇개든 배열로 모아준다.
        - 매개변수의 마지막에 위치해야한다.
*/

function getTotal(...numbers) {
  // Array.prototype.reduce : 누산 함수
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

getTotal(2, 4, 10, 15);

/* 
    스프레드(펼침) 연산자
        - 배열이나 객체를 펼치는 효과.
        - 배열이나 객체를 복사할 때 편하다.
*/
let arr = [1, 2, 3, 4, 5];
console.log(getTotal(...arr)); // getTotal(1,2,3,4,5);
let newArr = [0, ...arr, 10]; // [0,1,2,3,4,5,10]

let user = {
  name: "seok",
  age: 31,
};

let copy = user; // 객체는 참조값이 복사된다.
copy.age = 40;
console.log(user);

let copy02 = { ...user }; // { name : "seok", age : 40 }. 참조 복사 x. 프로퍼티를 펼쳐서 복사.
copy02.age = 50;
console.log(copy02, user);

/* 
    비구조화 할당
        - 배열이나 객체의 값을 변수로 간단하게 할당할 수 있다.
        - 객체는 가져오고 싶은 프로퍼티명으로 가져온다.
            => 객체는 가져오고 싶은 프로퍼티명을 알아야한다.
        - 배열은 인덱스의 순서대로 변수에 할당된다.
            => 변수명은 자유롭게 지을 수 있다.
*/

// user의 프로퍼티 값들을 같은 이름의 변수로 담기
// let age = user.age;
// let name = user.name;
let { age: username, name, weight } = user;
console.log(username);

let fruits = ["apple", "orange", "grape"];
let [first, second] = fruits;
console.log(first, second);

/* 
    삼항 연산자 
        - 조건식 ? 참일 경우 : 거짓일 경우
        - 조건에 따라 다른 값을 할당해야할 때 유용하다.
*/
// user.age가 40보다 작으면 "red" 그게 아니면, "green"
let result;
if (user.age < 40) result = "red";
else result = "green";
console.log(result);

let result02 = user.age < 40 ? "red" : "green";

/* 
    단축 평가
        &&(and) : 앞의 값이 true일 때 뒤의 값을 평가.
        ||(or)  : 앞의 값이 false일 때 뒤의 값을 평가.
*/

const color = user.age > 40 && "red";
const text = true || "해당 없음";
console.log(color);

function print() {
  console.log("30세 이상입니다.");
}

user.age = 20;

user.age > 30 && print(); // user.age가 30보다 클 때마만 print()를 평가(실행).

/* 
    null 병합 연산자(??)
        - ?? 앞의 값이 null, undefined ?? 뒤의 값을 평가한다.
*/
0 ?? console.log("실행"); // 0은 falsy한 값이지만 null 이나 undefined가 아니기 때문에 실행 x

/* 
    옵셔널 체이닝
        - 프로퍼티 참조할 때 참조하는 객체가 undefined, null인 경우 참조하지 않는다.
*/
let obj = {
  age: 31,
  height: 173,
};

console.log(obj.weight?.num.age.name);

/* 
    템플릿 리터럴
        - 문자열 안에 JS 표현식(값)을 포함시킬 수 있다.
        - ``(백틱) 안에서 ${}안에 JS 표현식(값)을 작성하면 된다.
*/
console.log("안녕하세요 " + user.name + "입니다.");

console.log(`안녕하세요 ${user.age}세 ${user.name}입니다.`);
