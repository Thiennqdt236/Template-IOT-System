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

function random(){
    var term = document.getElementById('a');
    var humi = document.getElementById('b');
    var light = document.getElementById('c');

        
    var nhietdo = document.getElementById('Term').innerHTML = Math.floor(Math.random() * 101);
    var doam = document.getElementById('Humi').innerHTML = Math.floor(Math.random() * 101);
    var anhsang = document.getElementById('Light').innerHTML = Math.floor(Math.random() * 101);

    if(nhietdo <= 10) {
      term.style.backgroundColor = '#CCFFFF';
     }
    else if( nhietdo > 10 && nhietdo <=35) {
      term.style.backgroundColor = '#00CC33';
    }
    else {
      term.style.backgroundColor = '#FF3333';
    }

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
random();

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

Highcharts.chart('container', {

  title: {
    text: 'U.S Solar Employment Growth by Job Category, 2010-2020'
  },

  subtitle: {
    text: 'Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>'
  },

  yAxis: {
    title: {
      text: 'Number of Employees'
    }
  },

  xAxis: {
    accessibility: {
      rangeDescription: 'Range: 2010 to 2020'
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
      pointStart: 2010
    }
  },

  series: [{
    name: 'Installation & Developers',
    data: [43934, 48656, 65165, 81827, 112143, 142383,
      171533, 165174, 155157, 161454, 154610]
  }, {
    name: 'Manufacturing',
    data: [24916, 37941, 29742, 29851, 32490, 30282,
      38121, 36885, 33726, 34243, 31050]
  }, {
    name: 'Sales & Distribution',
    data: [11744, 30000, 16005, 19771, 20185, 24377,
      32147, 30912, 29243, 29213, 25663]
  }, {
    name: 'Operations & Maintenance',
    data: [null, null, null, null, null, null, null,
      null, 11164, 11218, 10077]
  }, {
    name: 'Other',
    data: [21908, 5548, 8105, 11248, 8989, 11816, 18274,
      17300, 13053, 11906, 10073]
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
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