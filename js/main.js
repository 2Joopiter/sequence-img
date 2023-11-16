const frame = document.querySelector('figure');
let tags = '';

for (let i = 0; i < 200; i++) {
	tags += `<img src='img/pic${i}.jpg' />`;
}

frame.innerHTML = tags;
