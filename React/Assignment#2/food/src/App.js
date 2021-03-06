import React,{useEffect, useState} from 'react';

import Recipe from './components/recipe/recipe';

 export default function Food(){
     let [totalBill , setBill] = useState();
     let [totalGst , setGst] = useState();
     let [totalDiscount, setDiscount] = useState(0);
     let [totalNet , setNet] = useState();
     let [recipes , setRecipe] = useState([{

        dishName : 'Biryani',
        price : '150',
        qty : '0',
        checked : false,
        color : "white"
    },{

        dishName : 'Jalfrezi',
        price : '350',
        qty : '0',
        checked : false,
        color : "white"

    },{

        dishName : 'White Karahi',
        price : '1500',
        qty : '0',
        checked : false,
        color : "white"

    },{

        dishName : 'Daal Maash',
        price : '130',
        qty : '0',
        checked : false,
        color : "white"

    },{

        dishName : 'Pasta',
        price : '450',
        qty : '0',
        checked : false,
        color : "white"

    },{

        dishName : 'Salad',
        price : '50',
        qty : '0',
        checked : false,
        color : "white"

    },{

        dishName : 'Raita',
        price : '30',
        qty : '0',
        checked : false,
        color : "white"

    },{

        dishName : 'Chai',
        price : '30',
        qty : '0',
        checked : false,
        color : "white"

    }])

    useEffect(() =>{
        setRecipe([...js_dishes_array]);
     
    },[])

     let stringArray = localStorage.getItem("food");
     let js_dishes_array = JSON.parse(stringArray);
  
     
    function calculateBill(dishes) {
        let bill = 0;
        let discount = 0;
        let netBill = 0;
        dishes.forEach((item)=>{
            if(item.checked){
            bill += item.price*item.qty;}
        })
        let gst = bill * 0.08;
         netBill = bill + gst;
        if (bill > 1200) {
            discount = bill * 0.10;
            netBill = bill - discount;
            setNet(discount)
        }
       
        localStorage.setItem('food',JSON.stringify(recipes));
        setNet(netBill)
        setGst(gst);
        setBill(bill);

        
    }


    
    function checkBox(index){
        if(!recipes[index].checked){
        recipes[index].checked= true;
        recipes[index].color = 'green'
      
       }
       else{
        recipes[index].checked= false;
        recipes[index].qty = "0"
        recipes[index].color = 'white'
       }
       setRecipe([...recipes])
       localStorage.setItem('food',JSON.stringify(recipes));
    

    }
    function quantity(evt,index){
        recipes[index].qty =  evt.target.value;
        setRecipe([...recipes])
        localStorage.setItem('food',JSON.stringify(recipes));
       
        

    }
 if(!stringArray){
     return <table border = "1px">
    {
        recipes.map((item,index)=>{

        return <Recipe name = {item.dishName} color ={item.color} price={item.price} quantity={item.qty} status ={item.checked} statusChecked = {
            ()=>{
       checkBox(index)

        }}
         Quantity = {
           (evt)=>{
      quantity(evt,index)

       }} />

        })
    }
      <tr>
       <td><button onClick={()=>{
           calculateBill(recipes)
       }}>Calculate Bill</button></td>
       <td colspan="3">
           <b>Total-Bill</b>
           <span>{totalBill}</span>
           <b> Discount</b>
           { totalDiscount > 0 ?
           <span >{totalDiscount}</span> : null}
           <b> GST</b>
           <span>{totalGst}</span>
           <b> Net Bill</b>
           <span>{totalNet}</span>
       </td>
   </tr>
 </table>


}
else{
  
    return <table border = "1px">
    {  
   
        js_dishes_array.map((item,index)=>{

        return <Recipe name = {item.dishName} color ={item.color} price={item.price} quantity={item.qty} status ={item.checked} statusChecked = {
            ()=>{
       checkBox(index)

        }}
         Quantity = {
           (evt)=>{
      quantity(evt,index)

       }} />

        })
    }
      <tr>
       <td><button onClick={()=>{
           calculateBill(js_dishes_array)
       }}>Calculate Bill</button></td>
       <td colspan="3">
           <b>Total-Bill</b>
           <span>{totalBill}</span>
           <b> Discount</b>
           { totalDiscount > 0 ?
           <span >{totalDiscount}</span> : null}
           <b> GST</b>
           <span>{totalGst}</span>
           <b> Net Bill</b>
           <span>{totalNet}</span>
       </td>
   </tr>
 </table>

}
 }