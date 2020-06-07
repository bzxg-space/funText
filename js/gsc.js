var words=data.gsc;
/* 切换句子 */
function getData(){
	var index = Math.floor(Math.random() * words.length);
	var temp=words[index].split('&');
	var content=temp[0]+'<br/>'+'<span>'+temp[1]+'</span>'
	word.innerHTML=content;
}
getData();