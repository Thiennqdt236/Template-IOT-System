var i = 0;
var vanBan = '".....Chào mừng bạn đến với "Template IOT System" được thiết kế bởi Nguyễn Quốc Thiện. Hệ thống sử dụng Module Esp32 Wroom 32U và các sensor..... !!!"';
var tocDo = 50;
function typeWriter() {
  if (i < vanBan.length) {
    document.getElementById("hieu_ung_danh_chu").innerHTML += vanBan.charAt(i);
    i++;
    setTimeout(typeWriter, tocDo );
  }
}

var term = document.getElementById('a');
var humi = document.getElementById('b');
var light = document.getElementById('c');

        
var nhietdo = document.getElementById('Term').innerHTML = Math.floor(Math.random() * 101);
var doam = document.getElementById('Humi').innerHTML = Math.floor(Math.random() * 101);
var anhsang = document.getElementById('Light').innerHTML = Math.floor(Math.random() * 101);

function checkterm() {
  if(nhietdo <= 10) {
    term.style.backgroundColor = '#CCFFFF';
  }
  else if( nhietdo > 10 && nhietdo <=35) {
    term.style.backgroundColor = '#00CC33';
  }
  else {
    term.style.backgroundColor = '#FF3333';
  }
}

function checkhumi() {
  if(doam <= 10) {
    humi.style.backgroundColor = '#CDB38B';
  }
  else if( doam > 10 && doam <=35) {
    humi.style.backgroundColor = '#3366CC';
  }
  else {
    humi.style.backgroundColor = '#000099';
    humi.style.color = '#FFFFFF'
  }
}

function checklight() {
  if(anhsang <= 10) {
    light.style.backgroundColor = '#1CB4A6';
    light.style.color = '#FFFFFF';
  }
  else if( anhsang > 10 && anhsang <=35) {
    light.style.backgroundColor = '#FFFF00';
  }
  else {
    light.style.backgroundColor = '#FFFFFFF';
  }
}

checkterm();
checkhumi();
checklight();
