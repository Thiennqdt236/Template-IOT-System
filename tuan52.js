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
var nhietdo = document.getElementById('a');
var doam = document.getElementById('b');
var anhsang = document.getElementById('c');

function check() {
let term = Math.floor(Math.random() * 101);
let humi = Math.floor(Math.random() * 101);
let light = Math.floor(Math.random() * 101);

document.getElementById('Term').innerHTML = term + "&degC";
document.getElementById('Humi').innerHTML = humi + "%";
document.getElementById('Light').innerHTML = light + "Lux";

//update dữ liệu vào đồ thị
    function updateChart(){
        update.data.datasets[0].data.push(term)
        update.data.datasets[1].data.push(humi)
        update.data.datasets[2].data.push(light)
        update.data.labels.push(new Date().getSeconds());
        update.update()
        if(update.data.labels.length > 10){ //nếu dữ liệu lớn hơn 10 giá trị thì xóa giá trị cũ thêm giá trị mới
        update.data.datasets[0].data.shift()
        update.data.datasets[1].data.shift()
        update.data.datasets[2].data.shift()
        update.data.labels.shift()
        }
    }

    updateChart()

    //setup màu
    if(term <= 10) {
        nhietdo.style.backgroundColor = 'cyan'; 

    }
    else if(term <=35) {
        nhietdo.style.backgroundColor = 'lime';
    }
    else {
        nhietdo.style.backgroundColor = 'red';
    }

    if(humi <= 10) {
        doam.style.backgroundColor = 'SaddleBrown'; 

    }
    else if(humi <=35) {
        doam.style.backgroundColor = 'blue';
    }
    else {
        doam.style.backgroundColor = 'MidnightBlue';
        doam.style.color = "white";
    }

    if(light <= 10) {
        anhsang.style.backgroundColor = 'black'; 
        anhsang.style.color = "white";

    }
    else if(light <=35) {
        anhsang.style.backgroundColor = 'yellow';
    }
    else {
        anhsang.style.backgroundColor = 'white';
        anhsang.style.color = 'black'
    }
}

//hiển thị trên biểu đồ
const update = new Chart("myChart", {
    type: "line",
    data: {
        labels: [],
        datasets: [
            {
            label: "Nhiệt độ",
            borderColor: "red",
            backgroundColor: "red",
            lineTension: 0,
            data: []
            },
            {
            label: "Độ ẩm",
            borderColor: "blue",
            backgroundColor: "blue",
            lineTension: 0,
            data: []
            },
            {
            label: "Ánh sáng",
            borderColor: "yellow",
            backgroundColor: "yellow",
            lineTension: 0,
            data: [],
            }
            
        ]
    },
    options : {
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Thời gian(s)"
                }
            },

            y:{
                title:{
                    display:true,
                    text: "Dữ liệu"
                }
            },
        }
    }
})

setInterval(check, 3000);


// thông báo khi bật,tắt đèn
function on(){
  let text="Bật công tắc nhé";
  if(confirm(text)==true){
    document.getElementById('myImage').src='https://webvn.com/wp-content/uploads/2015/08/pic_bulbon.gif'
  }
}
function off(){
  let text="Tắt công tắc nhé";
  if(confirm(text)==true){
    document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulboff.gif'
  }
}