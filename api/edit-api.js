
var  hotelApi = 'http://localhost:3000/hotel';
var id = null ; 
var requestObj = {};

function getHotelInfo(){
    // 1 lay tham so id tren duong dan 
    const urlParam = new URLSearchParams(window.location.search);
    id = urlParam.get('id');
    // 2 send request len server de lay thong tin hotel 
    const getHotelInfoUrl = hotelApi + "/" + id;
    axios.get(getHotelInfoUrl)
        .then(res =>{
            if(res.statusText == "OK"){
                requestObj = res.data;
                // dien du lieu vao form 
                document.querySelector('[name="name"]').value = requestObj.name;
                document.querySelector('[name="logo"]').value = requestObj.logo;
                document.querySelector('[name="address"]').value = requestObj.address;
            }
        })
}
function EditHotel(){
    const name = document.querySelector('[name="name"]').value;
    const logo = document.querySelector('[name="logo"]').value;
    const address = document.querySelector('[name="address"]').value;
 
        requestObj.name =name,
        requestObj.logo =  logo,
        requestObj.address = address
 
    // gửi request lên mockapi để thêm khách sạn
    const updateUrl = hotelApi + "/" + id
    axios.put(updateUrl, requestObj)
    .then(data => {
        if(data.statusText === "OK"){
            window.location.href = 'list-hotel.html';
        }
    })
    return false;
}