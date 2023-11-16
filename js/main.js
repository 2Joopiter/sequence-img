const frame = document.querySelector('figure');
const mask = document.querySelector('.mask');
const countEl = mask.querySelector('span');
const imgNum = 200;

const imgs = createImgs(frame, imgNum);
imgLoadedCheck(imgs);

//각 동적생성 이미지 요소를 반복처리

frame.addEventListener('mousemove', showImg);

//동적 이미지 생성함수 분리 (돔 생성하자마자 바로 리턴해서 활용 가능하도록 처리)
function createImgs(frame, imgNum, imgName = 'pic') {
	let tags = '';

	for (let i = 0; i < imgNum; i++) {
		tags += `<img src='img/${imgName}${i}.jpg' />`;
	}
	frame.innerHTML = tags;
	return frame.querySelectorAll('img');
}

// 이미지 소스 로딩유무 체크함수
function imgLoadedCheck(imgs) {
	let count = 0;
	imgs.forEach((img) => {
		img.addEventListener('error', (e) => {
			console.log('해당 이미지 로딩 실패', e);
			e.currentTarget.setAttribute('src', 'logo.png');
		});
		img.addEventListener('load', () => {
			countEl.innerText = parseInt((count / imgNum) * 100);
			count++;
			if (count === imgNum) {
				mask.remove();
			}
		});
	});
}

//현재 마우스 포인터 위치에 따른 이미지 보임 함수
function showImg(e) {
	const { pageX } = e; // = const pageX = e.pageX
	console.log('x축', pageX);

	const percent = parseInt((pageX / window.innerWidth) * imgNum);

	imgs.forEach((img) => (img.style.visibility = 'hidden'));
	imgs[percent].style.visibility = 'visible';
}
