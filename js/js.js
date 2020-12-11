const Dish=[
    {
        name:'CƠM GÀ GIÒN (1 MIẾNG GÀ <br> GIÒN, CƠM VÀ XÀ LÁCH)',
        path:'https://jollibee.com.vn/uploads/dish/d1834d87116836-2mingggin.png',
        price:40000,
        quantity:1
    },{
        name:'2 MIẾNG GÀ GIÒN + KHOAI <br>TÂY VỪA + NƯỚC NGỌT',
        path:'https://jollibee.com.vn/uploads/dish/d1834d87116836-2mingggin.png',
        price:80000,
        quantity:1
    },
    {
        name:'2 MIẾNG GÀ GIÒN',
        path:'https://jollibee.com.vn/uploads/dish/d1834d87116836-2mingggin.png',
        price:60000,
        quantity:1
    }
    ,{
        name:'4 MIẾNG GÀ GIÒN',
        path:'https://jollibee.com.vn/uploads/dish/d1834d87116836-2mingggin.png',
        price:116000,
        quantity:1
    }
    ,{
        name:'6 MIẾNG GÀ GIÒN',
        path:'https://jollibee.com.vn/uploads/dish/d1834d87116836-2mingggin.png',
        price:174000,
        quantity:1
    }
    ,{
        name: 'CƠM GÀ GIÒN + SÚP BÍ ĐỎ + <br>NƯỚC NGỌT',
        path:'https://jollibee.com.vn/uploads/dish/d1834d87116836-2mingggin.png',
        price:40000,
        quantity:1
    }
    ,
    {
        name:' C4 - CƠM GÀ GIÒN +<br> NƯỚC NGỌT',
        path:"https://jollibee.com.vn/uploads/dish/d1834d87116836-2mingggin.png",
        price:45000,
        quantity:1

    }
    ,{
        name:'C3 - 1 MIẾNG GÀ GIÒN + <br>KHOAI  TÂY VỪA + NƯỚC <br> NGỌT',
        path:'https://jollibee.com.vn/uploads/dish/d1834d87116836-2mingggin.png',
        price:50000,
        quantity:1
    }
    ,{
        name:'1 MIẾNG GÀ GIÒN',
        path:"https://jollibee.com.vn/uploads/dish/d1834d87116836-2mingggin.png",
        price:30000,
        quantity:1
    }
]


function Render(){
    
    let htmls=Dish.map(e=>
        `<div class="ctn-dish">
            <img src=${e.path} alt="">
            <div class="title-dish">
                ${e.name}
            </div>
            <div class="title-cost">
               ${e.price*e.quantity+' Đ'}
            </div>
            <div class="dat-hang">
                <button class="btn-dathang" >ĐẶT HÀNG</button>
            </div>
        </div>`
        ).join('');
        document.getElementById('dish').innerHTML=htmls;
      
}
const select_dish=[];
function UpdateQuantity(index,quantity){
    if(quantity<1){
        return
    }
    select_dish[index].quantity1=quantity;
  
    }
function remove(i){
    select_dish.slice(i,1);
 
}

function addFood(){
   
    let Btn_dat=[...document.getElementsByClassName('btn-dathang')];
    let ctn_order=document.getElementById('ctn-order');
    let cout_in_html=document.getElementById('sl');
    let Cout=0;
    for(let i=0;i<Btn_dat.length;i++){
        Btn_dat[i].addEventListener('click',()=>{
        
            select_dish.push({
                name1:Dish[i].name,
                price1:Dish[i].price,
                quantity1:Dish[i].quantity,
            });
        
            
            let htmld=select_dish.map(e=>`
            <div class="ctn-order-dish" id="ctn-order-dish">
                <div class="name-dish">${e.name1} </div>
                <div class="ctn-quantity">
                    <span><button class="trim">-</button></span>
                    <span class="quantity">${e.quantity1}</span>
                    <span><button class="plus">+</button></span>
                    <span class="price">${e.price1*e.quantity1 +' Đ'}</span>
                </div>
                <div class="ctn-delete"> <button class="delete">X</button></div>
            </div>
            `).join('');
            ctn_order.innerHTML=htmld;
            let total=0;
           const trim=[...document.getElementsByClassName('trim')];
            const plus=[...document.getElementsByClassName('plus')];
            const Delete =[...document.getElementsByClassName('ctn-delete')];
           
          for(let j=0;j<trim.length;j++){
               trim[j].addEventListener('click',()=>{
                   UpdateQuantity(j,select_dish[j].quantity1-1) ;
                  
               })
               plus[j].addEventListener('click',()=>{
                   UpdateQuantity(j,select_dish[j].quantity1+1)
                   
                   console.log(plus.length)
               })
               Delete[j].addEventListener('click',()=>{
                
                   remove(j);
                   
               })
           }
            select_dish.forEach(e=>{
                total+=e.quantity1*e.price1;
            })
           
            Cout++;
            cout_in_html.innerText=Cout;
            document.getElementById('total').innerText=total + ' Đ';
           console.log(select_dish);
        });
    }
}


Render();
addFood();
