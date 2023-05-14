import React, { useContext, useState } from 'react';
import { auth } from '../firebase_config';
import { collection, query, updateDoc, where } from "firebase/firestore";
import { db } from '../firebase_config';
import "./Navbar.css";
import { Link} from "react-router-dom";
import { getDocs, doc } from "firebase/firestore";
import { Authcontext } from '../contextProvider';
import user from '../components/images/user.png'
import { Button } from 'react-bootstrap';


export const Navbar = () => {
    const {currentUser} = useContext(Authcontext)
    const [search,setSearch] = useState('')
    const [search_Product,setSP] = useState({})
    const productsRef = collection(db, "products");
    const userRef = collection(db, "user");
    const [vis,setVis] = useState('hidden')

    const HandleSearch = async ()=>{
        const q1 = query(productsRef, where("product_name", "==", search))
        const temp1 = []
        const querySnapShot1 = await getDocs(q1)
        try {
          querySnapShot1.forEach((doc) => {
            temp1.push(doc.data())
          })
          setSP(temp1[0])
          setVis('visible')
        } catch (err) {
          console.log(err)
        }
    }

    const addProduct = async (product) =>{

        // code to add the selected item onto the users database collection which consists of the cart
            const q = query(userRef, where("uid", "==", `${currentUser.uid}`))
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
                alert(`Added ${product.Product_name} to cart`)
            } catch (err) {
                console.log(err)
            }
    
      }

    return (
        <>
             <div className='popup' style={{visibility:`${vis}`}} onClick={()=>setVis('hidden')}>
                <div className='popupWindow'>
                    <div className='content'>
                        <div>
                            <div className='product-name'>{search_Product.Product_name}</div>
                            <div className='product-desc'>{search_Product.desc}</div>
                            <div className='company'>{search_Product.Product_company}</div>
                        </div>
                        <button onClick={()=>{addProduct(search_Product)}}>Add To Cart</button>
                    </div>
                </div>
            </div>
            <header className="header">

                <Link to="#" className="logo"> <span>BE</span>FIT </Link>

                <div id="menu-btn" className="fas fa-bars"></div>
                <input className='search' placeholder='Search' onChange={(e)=>{setSearch(e.target.value)}}></input>
                <input className='search_btn' type='button' value='🔍' onClick={()=>{HandleSearch()}}></input>

                <nav className="navbar">
                    
                    <Link to="/">Home</Link>
                    <Link to="/Products">Products</Link>
                    <Link to="/support">Support</Link>
                    <Link to="/cart">Cart</Link>

                    {/* <img src={currentUser.photoURL}></img> */}
                    {/* The above img tag must contain the profile photo that the user uploaded while they logged in */}

                    
                </nav>

            </header>
        </>
    )
}
