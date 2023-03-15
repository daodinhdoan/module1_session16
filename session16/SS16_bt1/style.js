function cardProduct(){
    let listProduct = JSON.parse(localStorage.getItem("listProduct"));
    let result = " ";
    for(let i = 0 ; i < listProduct.length ; i++){
        result += 
        `
    <tr>
        <td>
            ${listProduct[i]}
        </td>
        <td> <button id="icon_y" onclick="editProduct(${i})"><i class="fa-solid fa-hippo"></i></button> </td>
        
        <td > <button id="icon_x" onclick="deleteProduct(${i})" > <i class="fa-solid fa-trash"></i>  </button> </td>
    
    </tr>
        `
    }
    document.getElementById("table").innerHTML = result;
}
cardProduct()
function addProduct(){
    let listProduct = JSON.parse(localStorage.getItem("listProduct"));
    let inputValue = document.getElementById("input").value;
    if(listProduct == null){
        listProduct = [];
        listProduct.push(inputValue);
        localStorage.setItem("listProduct",JSON.stringify(listProduct));
    }else{
        listProduct.push(inputValue);
        localStorage.setItem("listProduct",JSON.stringify(listProduct));
    }
    cardProduct()
    document.getElementById("input").value= " ";
}
//phần edit
function editProduct(id) {
    let listProduct = JSON.parse(localStorage.getItem("listProduct"));
    document.getElementById("input").value=""
    let uppDate = prompt("Nhập update");
    listProduct.splice(id,1,uppDate);
    localStorage.setItem("listProduct",JSON.stringify(listProduct));
    cardProduct();
}
//phần delete
function deleteProduct(id){
    let listProduct = JSON.parse(localStorage.getItem("listProduct"));
    listProduct.splice(id,1);
    localStorage.setItem("listProduct",JSON.stringify(listProduct));
   cardProduct()
}