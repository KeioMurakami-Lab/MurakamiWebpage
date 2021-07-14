/*document.write(
"<!--PC用（801px以上端末）メニュー-->",
"<nav id='menubar' class='nav-fix-pos'>",
"<ul class='inner'>",
"<li><a href='index.html'>HOME<span>ホーム</span></a></li>",
"<li><a href='members.html' class='cursor-default'>MEMBERS<span>メンバー</span></a></li>",
"<li><a href='javascript:void(0)' class='cursor-default'>RESEARCH &xdtri;<span>研究紹介</span></a>",
	"<ul class='ddmenu'>",
	"<li><a href='theme.html'>研究テーマ</a></li>",
	"<li><a href='thesislist.html'>論文リスト</a></li>",
	"</ul>",
"</li>",
"<li><a href='javascript:void(0)' class='cursor-default'>ACHIEVEMENTS &xdtri;<span>研究業績</span></a>",
	"<ul class='ddmenu'>",
	"<li><a href='paper.html'>原著論文</a></li>",
	"<li><a href='domconf.html'>国内会議</a></li>",
	"<li><a href='intconf.html'>国際会議</a></li>",
	"</ul>",
"</li>",
"<li><a href='forstudents.html'>FOR STUDENTS<span>研究室見学・年間スケジュール</span></a></li>",
"<li><a href='contact.html'>CONTACT<span>お問い合わせ</span></a></li>",
"</ul>",
"</nav>",
"<!--小さな端末用（800px以下端末）メニュー-->",
"<nav id='menubar-s'>",
"<ul>",
"<li><a href='index.html'>HOME<span>ホーム</span></a></li>",
"<li><a href='members.html'>MEMBERS<span>メンバー</span></a></li>",
"<li id='menubar_hdr2' class='close'>RESEARCH<span>研究紹介</span>",
	"<ul id='menubar-s2'>",
	"<li><a href='theme.html'>研究テーマ</a></li>",
	"<li><a href='thesislist.html'>論文リスト</a></li>",
	"</ul>",
"</li>",
"<li id='menubar_hdr3' class='close'>ACHIEVEMENTS<span>研究業績</span>",
	"<ul id='menubar-s3'>",
	"<li><a href='paper.html'>原著論文</a></li>",
	"<li><a href='domconf.html'>国内会議</a></li>",
	"<li><a href='intconf.html'>国際会議</a></li>",
	"</ul>",
"</li>",
"<li><a href='forstudents.html'>FOR STUDENTS<span>研究室見学・年間スケジュール</span></a></li>",
"<li><a href='contact.html'>CONTACT<span>お問い合わせ</span></a></li>",
"</ul>",
"</nav>"
)*/
//$(function(){
	var elem = document.getElementById("inc_headermenu");　 // inc_headermenuのタグが付いているところに
	//elem.innerHTML = "<!--PC用（801px以上端末）メニュー-->"+      //これを挿入
	elem.insertAdjacentHTML("afterbegin","<!--PC用（801px以上端末）メニュー-->"+
"<nav id='menubar' class='nav-fix-pos'>"+
"<ul class='inner'>"+
"<li><a href='index.html'>HOME<span>ホーム</span></a></li>"+
"<li><a href='members.html' class='cursor-default'>MEMBERS<span>メンバー</span></a></li>"+
"<li><a href='javascript:void(0)' class='cursor-default'>RESEARCH &xdtri;<span>研究紹介</span></a>"+
	"<ul class='ddmenu'>"+
	"<li><a href='theme.html'>研究テーマ</a></li>"+
	"<li><a href='thesislist.html'>論文リスト</a></li>"+
	"</ul>"+
"</li>"+
"<li><a href='javascript:void(0)' class='cursor-default'>ACHIEVEMENTS &xdtri;<span>研究業績</span></a>"+
	"<ul class='ddmenu'>"+
	"<li><a href='paper.html'>原著論文</a></li>"+
	"<li><a href='domconf.html'>国内会議</a></li>"+
	"<li><a href='intconf.html'>国際会議</a></li>"+
	"<li><a href='prize.html'>受賞</a></li>"+
	"</ul>"+
"</li>"+
"<li><a href='forstudents.html'>FOR STUDENTS<span>研究室見学・年間スケジュール</span></a></li>"+
"<li><a href='contact.html'>CONTACT<span>お問い合わせ</span></a></li>"+
"</ul>"+
"</nav>"+
"<!--小さな端末用（800px以下端末）メニュー-->"+
"<nav id='menubar-s'>"+
"<ul>"+
"<li><a href='index.html'>HOME<span>ホーム</span></a></li>"+
"<li><a href='members.html'>MEMBERS<span>メンバー</span></a></li>"+
"<li id='menubar_hdr2' class='close'>RESEARCH<span>研究紹介</span>"+
	"<ul id='menubar-s2'>"+
	"<li><a href='theme.html'>研究テーマ</a></li>"+
	"<li><a href='thesislist.html'>論文リスト</a></li>"+
	"</ul>"+
"</li>"+
"<li id='menubar_hdr3' class='close'>ACHIEVEMENTS<span>研究業績</span>"+
	"<ul id='menubar-s3'>"+
	"<li><a href='paper.html'>原著論文</a></li>"+
	"<li><a href='domconf.html'>国内会議</a></li>"+
	"<li><a href='intconf.html'>国際会議</a></li>"+
	"<li><a href='prize.html'>受賞</a></li>"+
	"</ul>"+
"</li>"+
"<li><a href='forstudents.html'>FOR STUDENTS<span>研究室見学・年間スケジュール</span></a></li>"+
"<li><a href='contact.html'>CONTACT<span>お問い合わせ</span></a></li>"+
"</ul>"+
"</nav>");
//});