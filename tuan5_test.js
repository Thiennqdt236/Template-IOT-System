//Effect javascript
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



//hàm random
var x = Math.floor((Math.random() * 100) + 1);
var y = Math.floor((Math.random() * 100) + 1);
var z = Math.floor((Math.random() * 100) + 1);

document.getElementById('Term').innerText = x;
document.getElementById('Humi').innerText = y;
document.getElementById('Light').innerText = z;

//setup màu
if(x <= 10) {
  document.getElementById('a').style.backgroundColor = '#CCFFFF';
}
else if( x > 10 && x <=35) {
  document.getElementById('a').style.backgroundColor = '#00CC33';
}
else {
  document.getElementById('a').style.backgroundColor = '#FF3333';
}

if(y <= 10) {
  document.getElementById('b').style.backgroundColor = '#CDB38B';
}
else if( y > 10 && y <=35) {
  document.getElementById('b').style.backgroundColor ='#3366CC';
}
else {
  document.getElementById('b').style.backgroundColor = '#000099';
  document.getElementById('b').style.color = '#FFFFFF';
}

    if(z <= 10) {
      document.getElementById('c').style.backgroundColor = '#1CB4A6';
      document.getElementById('c').style.color = '#FFFFFF';
    }
    else if( z > 10 && z <=35) {
      document.getElementById('c').style.backgroundColor = '#FFFF00';
    }
    else {
      document.getElementById('c').style.backgroundColor = '#FFFFFFF';
    }
 


// thông báo khi bật,tắt đèn
function on(){
  let text="Bật công tắc";
  if(confirm(text)==true){
    document.getElementById('myImage').src='https://webvn.com/wp-content/uploads/2015/08/pic_bulbon.gif'
  }
}
function off(){
  let text="Tắt công tắc";
  if(confirm(text)==true){
    document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulboff.gif'
  }
}


//highcharts biểu đồ thời gian thực
Highcharts.chart('container', {

  title: {
    text: 'Bảng thu thập dữ liệu Cảm biến theo thời gian thực'
  },

  subtitle: {
    text: 'Source: hệ thống IoT được lắp đặt tại Học viện Công nghệ Bưu chính Viễn thông'
  },

  yAxis: {
    title: {
      text: 'Giá trị'
    }
  },

  xAxis: {
    accessibility: {
      rangeDescription: 'Range: 0 to 24'
      
    }
  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 0
    }
  },

  series: [{
    name: 'Nhiệt độ',
    data: [0,x,100]
  }, {
    name: 'Độ ẩm',
    data: [0,y]
  },  {
    name: 'Ánh sáng',
    data: [0,z]
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 0
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

});
