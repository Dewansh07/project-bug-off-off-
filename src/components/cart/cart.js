import React, { useContext, useEffect, useState } from 'react'
import { Navbar } from '../../Navbar/Navbar'
import { Authcontext } from '../../contextProvider';
import { auth } from "../../firebase_config";
import { collection, query, updateDoc, where } from "firebase/firestore";
import { db } from '../../firebase_config';
import { getDocs, doc } from "firebase/firestore";
import "./cart.css"
export const Cart = () => {
  const [plan,setPlan] = useState([{name:'Plan-1',desc:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',trainer:'Trianer-1'}])
  const eventsRef = collection(db, "events");
  const {currentUser} = useContext(Authcontext)
  const FetchAllUserPlans = async()=>
  {
    const q1 = query(eventsRef, where("uid", "==", currentUser.uid))
    const temp1 = []
    const querySnapShot1 = await getDocs(q1)
    try {
        querySnapShot1.forEach((doc) => {
            temp1.push(doc.data())
        })
        setPlan(temp1)
    } catch (err) {
        console.log(err)
    }
  }
  useEffect(()=>{

    // FetchAllUserPlans()

  })
  return (
    <div className='plan'>
      <Navbar/>
      <div className='plans'>
        {
          plan.map((plan)=>(
            <div className='plan'>
              <div className='content'>
                <div className='plan-name'>{plan.name}</div>
                <div className='plan-desc'>{plan.desc}</div>
                <div className='trainer'>{plan.trainer}</div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
