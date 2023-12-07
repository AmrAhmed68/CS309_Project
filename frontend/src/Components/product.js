// const Products = require('./Schema')
// const Laps_Prooduct = require('./Laps_Product');

// const DefaultData = async () => {
//     try {

//         await Products.deleteMany({});

//         const storeData = await Products.insertMany(Laps_Prooduct);
//         console.log(storeData);
//     } catch (error) {
//         console.log("error" + error.message);
//     }
// };

// module.exports = DefaultData;
// import { useState } from "react";
import Input from "./Input";
import Laps_Product from "./Laps_Product";

function Product() {
    const products = Laps_Product.map((product) => {
        return(
            <Input key={product.id} product={product}/>
        )
    })
    return <div> {products} </div>
  }
  
  export default Product;
  