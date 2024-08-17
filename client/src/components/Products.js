import React, {useEffect, useState} from 'react'
import EditButton from "./EditButton"
//import { Link} from "react-router-dom"
//import cottage from './image/cottageimagesmall.jpg'


const Products = () => {
  const [products, setProducts] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
      const fetchProducts = () => {
        var host = window.location.protocol + "//" + window.location.hostname + ":4000/api"
	console.log("Host is : " + host)
        fetch(host).then(res => res.json()).then(data => {
          setProducts(data.products)   
          setLoading(false)
      })}
      fetchProducts()
  }, [])

  function currencyFormat(num) {
    const formatter = new Intl.NumberFormat('en-UK', {
        style: 'currency',
        currency: 'GBP',
        maximumFractionDigits: 0,
      
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
       
      });
    return formatter.format(num);
  }
      
  function truncate(str, n){
    return (str.length > n) ? str.slice(0, n-1) : str;
  };

  return (
    <div>
      <div className='table__container'>
       
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Last Bidder</th>
            <th>Bid</th>
          </tr>
        </thead>
        <tbody>
          {loading ? <tr><td>Loading</td></tr> : products.map(product => (
            <tr key={`{${product.name}${product.price}}`}>
           
            <td><img src={`${window.location.protocol + "//" + window.location.hostname + ':3000/' + product.image}`} alt='no found' width='60' height='50' /></td>
              
              
              <td>{product.name}</td>
              <td><b>{currencyFormat(`${product.price}`)}</b></td>
              <td>{truncate(`${product.last_bidder}`,12) || "None"}</td>
              <td><EditButton product={product}/></td>
              
            </tr>
          ))}
            
        </tbody>
      </table>
      </div>

    </div>
  )
}

export default Products
