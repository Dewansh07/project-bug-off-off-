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

export const Products = () => {
  const [plan,setPlan] = useState([{id:'id123',name:'Plan-1',desc:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',trainer:'Trianer-1'},{id:'id223',name:'Plan-2',desc:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',trainer:'Trianer-2'},{id:'id321',name:'Plan-1',desc:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',trainer:'Trianer-1'}])
  const usersRef = collection(db, "users");
  const {currentUser} = useContext(Authcontext)
  // const navigate = useNavigate()

  const addPlan = async (plan) =>{

    // code to add the selected plan onto the users database collection which consists of the user-plans/my-plans
        const q = query(usersRef, where("uid", "==", `${currentUser.uid}`))
        const querySnapShot = await getDocs(q)
        const temp = []
        try {
            querySnapShot.forEach((doc) => {
                temp.push(doc.data())
            })
            let UserPlans = temp[0]["UserPlans"]
            UserPlans = [...UserPlans, `${plan.id}`]
            await updateDoc(doc(db, "users", currentUser.uid), {
                "UserPlans": UserPlans,
            }).then(() => {
              console.log('success')
            })
            // navigate("/plans")
            alert(`Registered for ${plan.name}`)
        } catch (err) {
            console.log(err)
        }

  }
  return (
    <div className='plans'>
      <Navbar/>
      <div >
        {
          plan.map((plan)=>(
            <div className='plan'>
              <img src={user}></img>
              <div className='content'>
                <div className='plan-name'>{plan.name}</div>
                <div className='plan-desc'>{plan.desc}</div>
                <div className='trainer'>{plan.trainer}</div>
              </div>
              <button onClick={()=>{addPlan(plan)}}>Add plan</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}