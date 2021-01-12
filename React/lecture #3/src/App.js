import React, { useState } from 'react';

import Header from './components/header/header'
import OlxAd from './components/card/card'


// export default function App() {

//     let ads = [
//         {
//             title: "Ad 1"
//         },
//         {
//             title: "Ad 2"
//         },
//         {
//             title: "Ad 3"
//         },
//         {
//             title: "Ad 4"
//         }
//     ];

//     return <div>
//         <Header />        
//         <div class="row">
//             {
//                 ads.map((ad) => {
//                     return <OlxAd  data={ad} city="FSD" name="khurram" />
//                 })
//             }
//         </div>
//         <h1>There is some tag</h1>
//     </div>
// }




export default function App() {

    let [ads, setAds] = useState([
        {
            title: "Ad 1"
        },
        {
            title: "Ad 2"
        },
        {
            title: "Ad 3"
        },
        {
            title: "Ad 4"
        }
    ]);
    
    function deleteAd(index) {
         
        ads.splice(index,1);
        setAds([...ads])
        
    }



    function createAd() {

        let adTitle = prompt("Enter title");

        ads.push({
            title: adTitle
        });

        setAds([...ads]);

    }
    function editAd(index) {
        let newTitle = prompt('Enter the title of add');
        ads[index].title = newTitle;
        setAds([...ads])

        
    }

    return <div>
        <Header />
        <button onClick={createAd}>Creat Ad</button>
        <div class="row">
            {
                ads.map((ad,index) => {
                    return <OlxAd data={ad} city="FSD" name="khurram"  deleteAdd ={()=>{
                        deleteAd(index) 
                    }}  editolx ={()=>{
                        debugger;
                        editAd(index) 
                    }}/>
                })
            }
        </div>
        <h1>There is some tag</h1>
    </div>
}