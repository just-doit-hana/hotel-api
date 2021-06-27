// GET LIST HOTEL
var  hotelApi = 'http://localhost:3000/hotel';
axios.get(hotelApi)
.then(res=>{
    // console.log(res);
    if(res.statusText == "OK"){
        document.querySelector('tbody').innerHTML='';
        var data =res.data ; 
        var content = ``;
        data.forEach(element => {
            content +=` <tr class = "row-${element.id}">
                            <td>${element.id}</td>
                            <td>${element.name}</td>
                            <td>
                            <img src="${element.logo}" width="100px" class="img img-avatar"/>
                            </td>
                            <td>
                                ${element.address}
                            </td>
                            <td>
                            <a href="edit-hotel.html?id=${element.id}" class="btn btn-sm btn-primary">Edit</a>  
                            <button class="btn btn-sm btn-danger"  onclick="removeElement(${element.id})">Delete</button>  
                            </td>
                        </tr>

                      `
        });
        document.querySelector('tbody').innerHTML = content;
    }
})


// DETELE HOTEL
function  removeElement(id) {
    // Confirm
    Swal.fire({
        title: 'Chắc chắn xóa hotels?',
        text: "Sau khi xóa sẽ không lấy lại dữ liệu được!",
        icon: 'danger',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Đồng ý!',
        cancelButtonText: 'Không đồng ý!'
    })
    .then((result)=>{
        if(result.value){
            // Send request to server
            var deleteURL = hotelApi + "/" + id;
            axios.delete(deleteURL)
            .then(response =>{
                console.log(response);
            })
            .then(()=>{
                var removeElement = document.querySelector('.row-' + id);
                removeElement.remove();
                Swal.fire({
                    position: 'center',
                    icon: 'danger',
                    title: 'Đã xóa',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
        }
    })
  }

