
    const apiUrl = 'http://localhost:3000/hotel';
    // Validator add new hotel 
var validator = new Validator(document.querySelector('#add-hotel-form'), function(err, res){
    // lấy dc trạng thái của form 

    if(res === true){
        addHotel();
    }

    return false;
}, {
    rules: {
        checkImgUrl: function(value){
            return (/\.(gif|jpe?g|tiff|png|webp|bmp)$/i).test(value);
        }
    },
    messages: {
        en: {
            required: {
                empty: 'Không được để trống',
                incorrect: 'Nhập sai thông tin'
            },
            minlength: {
                empty: 'Hãy nhập tối thiểu {0} ký tự',
                incorrect: 'Hãy nhập tối thiểu {0} ký tự'
            },
            checkImgUrl: {
                empty: 'Nhập đường dẫn ảnh',
                incorrect: 'Đường dẫn ảnh không đúng định dạng'
            }
        }
    }
});

function addHotel(){
    // lấy giá trị người dùng nhập vào 
    const name = document.querySelector('[name="name"]').value;
    const logo = document.querySelector('[name="logo"]').value;
    const address = document.querySelector('[name="address"]').value;
    const requestObj = {
        name: name,
        logo: logo,
        address: address
    };
    // gửi request lên mockapi để thêm khách sạn
    axios.post(apiUrl, requestObj)
    .then(data => {
        if(data.statusText === "Created"){
            window.location.href = 'list-hotel.html';
        }
    })
}

