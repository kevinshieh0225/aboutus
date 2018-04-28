// 憿舐內�𩐠��𡒊陛隞�
document.querySelector("#gang2").addEventListener("click", function(){
    document.getElementById('gang3').style.display='block';
    $('.X').show();
});

// 憿舐內�鉟�拍陛隞�
document.querySelector("#en2").addEventListener("click", function(){
    document.getElementById('en3').style.display='block';
    $('.X').show();
});

document.querySelector("#in2").addEventListener("click", function(){
    document.getElementById('in3').style.display='block';
    $('.X').show();
});

document.querySelector("#fish2").addEventListener("click", function(){
    document.getElementById('fish3').style.display='block';
    $('.X').show();
});

document.querySelector("#shan2").addEventListener("click", function(){
    document.getElementById('shan3').style.display='block';
    $('.X').show();
});

document.querySelector("#hui2").addEventListener("click", function(){
    document.getElementById('hui3').style.display='block';
    $('.X').show();
});

//��𨀣�匧�衤犖隞讠晶
$('.X').click(function(){
    $('.X').hide();
    gang3.style.display="none";
    en3.style.display="none";
    in3.style.display="none";
    fish3.style.display="none";
    shan3.style.display="none";
    hui3.style.display="none";
});

document.querySelector("#intro_button").addEventListener("click", function(){
    member_back.style.display="none";
    member.style.display="none";
    $('.X').hide();
    gang1.style.display="none";
    en1.style.display="none";
    in1.style.display="none";
    fish1.style.display="none";
    shan1.style.display="none";
    hui1.style.display="none";
    gang2.style.display="none";
    en2.style.display="none";
    in2.style.display="none";
    fish2.style.display="none";
    shan2.style.display="none";
    hui2.style.display="none";
    gang3.style.display="none";
    en3.style.display="none";
    in3.style.display="none";
    fish3.style.display="none";
    shan3.style.display="none";
    hui3.style.display="none";
    document.getElementById('intro_back').style.display='block';
    document.getElementById('intro_content').style.display='block';
});

document.querySelector("#member_button").addEventListener("click", function(){
    intro_back.style.display="none";
    intro_content.style.display="none";
    document.getElementById('member_back').style.display='block';
    document.getElementById('member').style.display='block';
    document.getElementById('gang1').style.display='block';
    document.getElementById('en1').style.display='block';
    document.getElementById('in1').style.display='block';
    document.getElementById('fish1').style.display='block';
    document.getElementById('shan1').style.display='block';
    document.getElementById('hui1').style.display='block';
    document.getElementById('gang2').style.display='block';
    document.getElementById('en2').style.display='block';
    document.getElementById('in2').style.display='block';
    document.getElementById('fish2').style.display='block';
    document.getElementById('shan2').style.display='block';
    document.getElementById('hui2').style.display='block';
});
// function test()
// {      
//     alert("I am an alert box!!")
// }
