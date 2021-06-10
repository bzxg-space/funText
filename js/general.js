/* 复制   flag 1-去标签 0-不去标签*/
function outer_copy(word,flag){
    var textArea = document.createElement("textarea");
    textArea.innerHTML = flag==1?word.replace(/<[^>]+>/g,""):word;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    alert('复制成功:)');
    textArea.parentNode.removeChild(textArea);
}