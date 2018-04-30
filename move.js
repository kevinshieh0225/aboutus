// 網頁版按鈕，開啟intro
document.querySelector("#gang2").addEventListener("click", function(){
    document.getElementById('gang3').style.display='block';
	$('.icon').hide();
    $('.X').show();
});

document.querySelector("#en2").addEventListener("click", function(){
    document.getElementById('en3').style.display='block';
	$('.icon').hide();
    $('.X').show();
});

document.querySelector("#in2").addEventListener("click", function(){
    document.getElementById('in3').style.display='block';
	$('.icon').hide();
    $('.X').show();
});

document.querySelector("#fish2").addEventListener("click", function(){
    document.getElementById('fish3').style.display='block';
	$('.icon').hide();
    $('.X').show();
});

document.querySelector("#shan2").addEventListener("click", function(){
    document.getElementById('shan3').style.display='block';
	$('.icon').hide();
    $('.X').show();
});

document.querySelector("#hui2").addEventListener("click", function(){
    document.getElementById('hui3').style.display='block';
	$('.icon').hide();
    $('.X').show();
});

//網頁版關掉intro版面
$('.X').click(function(){
    $('.X').hide();
	$('.icon').show();
    gang3.style.display="none";
    en3.style.display="none";
    in3.style.display="none";
    fish3.style.display="none";
    shan3.style.display="none";
    hui3.style.display="none";
});

//動機欄按鈕
document.querySelector("#intro_button").addEventListener("click", function(){
    member_back.style.display="none";
    document.getElementById('intro_back').style.display='block';
    document.getElementById('intro_content').style.display='block';
});

//成員欄按鈕
document.querySelector("#member_button").addEventListener("click", function(){
    intro_back.style.display="none";
    intro_content.style.display="none";
    document.getElementById('member_back').style.display='block';
});
// function test()
// {      
//     alert("I am an alert box!!")
// }
//
//手機板開啟intro
document.querySelector("#gang_icon").addEventListener("click", function(){
    document.getElementById('gang_intro').style.display='block';
	$('.icon_phone').hide();
    $('.X_phone').show();
});

document.querySelector("#en_icon").addEventListener("click", function(){
    document.getElementById('en_intro').style.display='block';
	$('.icon_phone').hide();
    $('.X_phone').show();
});

document.querySelector("#in_icon").addEventListener("click", function(){
    document.getElementById('in_intro').style.display='block';
	$('.icon_phone').hide();
    $('.X_phone').show();
});

document.querySelector("#fish_icon").addEventListener("click", function(){
    document.getElementById('fish_intro').style.display='block';
	$('.icon_phone').hide();
    $('.X_phone').show();
});

document.querySelector("#shan_icon").addEventListener("click", function(){
    document.getElementById('shan_intro').style.display='block';
	$('.icon_phone').hide();
    $('.X_phone').show();
});

document.querySelector("#hui_icon").addEventListener("click", function(){
    document.getElementById('hui_intro').style.display='block';
	$('.icon_phone').hide();
    $('.X_phone').show();
});

//手機板關掉intro
$('.X_phone').click(function(){
    $('.X_phone').hide();
	$('.icon_phone').show();
    $('.intro_phone').hide();
});