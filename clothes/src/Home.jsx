import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
const Home=()=>{
    return(
        <>
        <div className="hero" style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"50px",gap:"60px"}}>
          <div>
           <h3>Looking for best Loundary
            <br/> in Bhopal</h3>
           <h1>Welcome to U Clean</h1>
       </div>
          <div>
            <img src="https://i0.wp.com/www.fabonow.com/wp-content/uploads/2023/05/Premium-Dry-cleaning-Services.png?w=1000&ssl=1" style={{width:"600px",height:"400px"}}/>
          </div>
        </div>
        <hr size="5" color="black"/>
        <div style={{display:"flex",gap:"100px"}}>
          <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d43383147.0500961!2d60.82596627133846!3d21.289161114289545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0x397ce6117a491723%3A0x777afb9540674fc6!2sDharampuri%2C%20Bhopal%20Division%2C%20Madhya%20Pradesh!3m2!1d23.0097478!2d76.9038011!4m0!5e0!3m2!1sen!2sin!4v1730222622004!5m2!1sen!2sin" width="500" height="400"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{marginLeft:"20px"}}></iframe>
          </div>
          <div>
            <h3 style={{color:"green"}}>Dharampuri, Madhya Pradesh</h3>
            <p style={{color:"green"}}>Address</p>
            <span style={{fontSize:"20px"}}><IoLocationOutline />FF-8, Rishi Business Park, Coral Woods, Hosangabad Road, Bhopal - 462026</span>
            <hr size="3" color="black"/>
            <p style={{color:"green"}}>Phone Number</p>
            <span style={{fontSize:"20px"}}><FaPhoneAlt />9999759911</span>
            <hr size="3" color="black"/>
            <p style={{color:"green"}}>Store Timing</p>
            <span style={{fontSize:"20px"}}><MdAccessTime />Monday-Sunday,9Am-9pm</span>
          </div>

        </div>
        </>
    )
}
export default Home;