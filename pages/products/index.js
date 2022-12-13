import Head from "next/head"
import Image from "next/image";
import axios from "axios"
import { AiOutlineStar } from "react-icons/ai";
import { useState, useEffect } from "react"
import Sort from "../../components/Sort";


const Products = () => {

   const [products, setProducts] = useState([])
   const [sortType, setSortType] = useState({
      name: 'По Умолчанию',
      sortProperty: '',
   })

   useEffect(() => {
      axios.get(`https://test-docs.stores.kg/api/products?order%5B${sortType.sortProperty.replace('-','')}%5D=${sortType.sortProperty.includes('-')?'asc':'desc'}
      `, {
         headers: {
            "Content-type": "application/json",
            "api-token": "f1cdecbeba8f4a1547d3dc0db9376fec",
         }
      })
         .then((response) => {
            console.log(response);
            setProducts(response.data["hydra:member"])
         })
         .catch((error) => {
            console.error(error);
         })
      
   }, [sortType])
//order=&sort=
   return (
      <>
         <Head>
            <title>
               Products
            </title>
         </Head>
         <div className="products_container">
            <Sort value={sortType} onChangeSort={(i)=> setSortType(i)} />
            <div className="products_container_block">
               {products && products.map(item => (
                  <div className="product_block" key={item.id}>
                     <div className="product_block_img">
                        <div className="product_block">
                           <p className="block_status">{item.productConditionStatus}</p>
                           <Image
                              className="block_img"
                              src={item.imagePath}
                              alt="no product photos"
                              width={200}
                              height={250}
                           />
                           <p className="block_discount">-{item.discountPercent}</p>
                        </div>
                     </div>
                     <div className="product_descriptions">
                        <h4 className="product_descriptions_price">{item.price} сом</h4>
                        <p className="product_descriptions_name">{item.name}/ {item.colorName}</p>
                     </div>
                     <div className="product_rating" data-total-value="0">
                        <AiOutlineStar className="block_rating" data-item-value="5" />
                        <AiOutlineStar className="block_rating" data-item-value="4" />
                        <AiOutlineStar className="block_rating" data-item-value="3" />
                        <AiOutlineStar className="block_rating" data-item-value="2" />
                        <AiOutlineStar className="block_rating" data-item-value="1" />
                     </div>
                  </div>
               ))}
            </div>
         </div>

      </>

   )
}

export default Products