/* 获取文本盒子 */
var word=document.getElementById("word");
/* 复制 */
function copy(){
	var textArea = document.createElement("textarea");
	textArea.innerHTML = word.innerText;
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand('copy');
	alert('复制成功:)');
	textArea.parentNode.removeChild(textArea);
}
/* 切换句子 */
function getData(){
	var index = Math.floor(Math.random() * words.length);
	word.innerText=words[index];
}