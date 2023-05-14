import './products.css'
import user from '../images/user.png'
import { useContext, useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase_config";
import { collection, query, updateDoc, where } from "firebase/firestore";
import { db } from "../../firebase_config";
import { getDocs, doc } from "firebase/firestore";
import { Link} from "react-router-dom";
import { Authcontext } from '../../contextProvider';
import { Navbar } from '../../Navbar/Navbar';
import Image1 from '../images/I1.jpg';
import Image2 from '../images/I2.jpg';
import Image3 from '../images/I3.jpg';
import Image4 from '../images/I4.webp';
import Image5 from '../images/I5.webp';
import Image6 from '../images/I6.jpg';



export const Products = () => {
  const [products,setProducts] = useState([{Product_id:'id123',Product_price:5000,Product_name:'Shirt1',Product_img:`${Image3}`,Product_desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',Product_company:'Puma'},{Product_id:'id223',Product_price:6000,Product_img:`${Image2}`,Product_name:'Shirt2',Product_desc:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',Product_company:'Puma'},{Product_id:'id321',Product_price:7000,Product_img:`${Image1}`,Product_name:'Shirt3',Product_desc:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',Product_company:'Puma'},{Product_id:'id123',Product_price:8000,Product_name:'Jogger',Product_img:`${Image4}`,Product_desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',Product_company:'Puma'}])
  const usersRef = collection(db, "users");
  const {currentUser} = useContext(Authcontext)
  const [vis,setVis] = useState('hidden')
  const [currentProduct,setCp] = useState({Product_id:'id123',Product_name:'Plan-1',Product_desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",Product_company:'Trianer-1'})
  // const navigate = useNavigate()

  const addPlan = async (product) =>{

    // code to add the selected item onto the users database collection which consists of the cart
        const q = query(usersRef, where("uid", "==", `${currentUser.uid}`))
        const querySnapShot = await getDocs(q)
        const temp = []
        try {
            querySnapShot.forEach((doc) => {
                temp.push(doc.data())
            })
            let cart = temp[0]["cart"]
            cart = [...cart, `${product.Product_id}`]
            await updateDoc(doc(db, "users", currentUser.uid), {
                "cart": cart,
            }).then(() => {
              console.log('success')
            })
            // navigate("/plans")
            alert(`Registered for ${product.Product_name}`)
        } catch (err) {
            console.log(err)
        }

  }
  
  return (
    <div className='products'>
  <Navbar/>
  <div className='popup' style={{visibility:`${vis}`}} onClick={()=>setVis('hidden')}>
    <div className='popupWindow'>
      <div className='content'>
        <div>
          <div className='product-name'>{currentProduct.Product_name}</div>
          <div className='product-desc'>{currentProduct.desc}</div>
          <div className='company'>{currentProduct.Product_company}</div>
        </div>
        <button onClick={()=>{addPlan(currentProduct)}}>Add To Cart</button>
      </div>
    </div>
  </div>
  <div className='products-container'>
    {
      products.map((product)=>(
        <div className='product' onClick={()=>setVis('visible')}>
          <img src={product.Product_img}></img>
          <div className='content'>
            <div>
              <div className='product-name'>{product.Product_name}</div>
              <div className='company'>{product.Product_company}</div>
            </div>
            <button className='btn' onClick={()=>{addPlan(product)}}>Add To Cart</button>
          </div>
        </div>
      ))
    }
  </div>
</div>
  )
}