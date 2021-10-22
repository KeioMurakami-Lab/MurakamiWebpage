$(function(){
document.querySelector('#flash-button').addEventListener('click', function() {
	// ボタンを押されたら、ピカッとさせたい要素にクラス "highlight" を付与
	var box = document.querySelector('#flash-box');
	box.classList.add('highlight');

	// 50ミリ秒後にすぐ外す
	setTimeout(function() {
		box.classList.remove('highlight');
	}, 500);

    setTimeout(function() {
		box.classList.add('highlight');
	}, 1000);
    
    setTimeout(function() {
		box.classList.remove('highlight');
	}, 1500);
});
});