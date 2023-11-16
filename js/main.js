const frame = document.querySelector('figure');
const imgNum = 200;
let tags = '';

for (let i = 0; i < imgNum; i++) {
	tags += `<img src='img/pic${i}.jpg' />`;
}
frame.innerHTML = tags;

frame.addEventListener('mousemove', (e) => {
	const { pageX } = e;
	console.log('x축', pageX);

	// 백분율 공식 : 현재수치값 / 전체수치값 * 100
	const percent = parseInt((pageX / window.innerWidth) * imgNum);
	//parseInt('숫자'): 인수로 전달된 값에 소수점 아래는 버리고 정수를 변환
	//parseFloat('숫자'): 인수로 전달된 값의 소수점까지 포함한 실수로 반환

	console.log(percent);
});

/* 
  전체 작업 흐름
  1. 동적으로 200개의 img DOM 생성
  2. 마우스 무브시 포인터의 가로 좌표값을 200분율로 변환
  3. 200분율 중 현재 마우스 포인터 위치 순번에 따른 이미지만 보임처리
  4. 이미지돔이 생성되고 이미지 소스가 로딩될때마다 로딩 순번을 100분율처리
  5. 이미지 생성시 해당 이미지에 에러 발생시 대체이미지로 변경 처리
  6. 이미지소스가 모두 로딩되기 전까지는 마스크화면으로 가려주면서 로딩상황 백분율 출력
  7. 모든 이미지 소스 로딩 완료시 마스크화면 제거
*/
