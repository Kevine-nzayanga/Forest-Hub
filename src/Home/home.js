import React from "react";
import './home.css';


const Home=() =>{
    return(
        <div className="mainhome">
            <div className="section1">
                <img className="vid" src="https://res.cloudinary.com/dtu8pkzkp/image/upload/v1689051787/d6e5d8d206679a5d4c4036c7458f9586_u5f5hj.gif" alt="mars"/>
            <div className="content">
                   <h1>SAVE THE FUTURE <br/> IT LIES HERE</h1>
                   <h5>1.6 billion of people depend on forests</h5>
                   <button className="btn1">LEARN MORE</button>
            </div>
            </div>


            <div className="details">

            <div className="second">
                    <img src="https://res.cloudinary.com/dtu8pkzkp/image/upload/v1689052989/110ebd9866ad99dd12e4ffdbf9c19864_wi8oto.jpg" alt=""></img>
                 </div>

                <div className="first">
                    {/* <br/>
                    <br/>  */}
                    <h1>Effects of loss of forestry</h1>
                   <p>Forests are facing a grave threat, as their degradation and loss endanger 
                    the very survival of countless species. This alarming situation not only jeopardizes 
                    biodiversity but also severely diminishes the forests' capacity to deliver vital services, 
                    including the provision of clean air and water, nurturing soils for agriculture, and crucial climate regulation.
                     The urgency to address this issue has never been more evident as we strive to safeguard our planet's future.</p>
                <div>
                <img src="https://res.cloudinary.com/dtu8pkzkp/image/upload/v1689053904/fb73de0eeddc80b645f4646182f6407b_v5mzgv.jpg" alt=""></img>
                </div>
                </div>
              
            </div>

            <div className="vaquita">
                <div>
                <h1>Polar bears</h1>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dtu8pkzkp/image/upload/v1689020155/image-removebg-preview_npmjfv.png"></img>
                </div>
            </div>

              <div className="section3">
                <h1>Types of Forest</h1>
              <div className="types">
              <div className="pic1">
                <img src="https://res.cloudinary.com/dtu8pkzkp/image/upload/v1689058252/88d08facd6c6688d01b4f1c78988c4b1_s7pshv.jpg" alt="pic1"></img>
                <h5>Temperate</h5>

                </div>
                <div className="pic2">
                <img src="https://res.cloudinary.com/dtu8pkzkp/image/upload/v1689058561/f148a39f3db073461a5aad80dce1da95_zlft3m.jpg" alt="pic2"></img>
                <h5>Mangroove Forest</h5>

                </div>
                <div className="pic3">
                <img src="https://res.cloudinary.com/dtu8pkzkp/image/upload/v1689058708/99d790708246cfaecf80a047b4931980_axq6hm.jpg" alt="pic3"></img>
                <h5> Rain Forest</h5>
                </div>
              </div>

              <button className="btn2">SEE MORE</button>

              </div>
            <div className="footer">
            <h4>Made by Kevine </h4>

            </div>
        </div>
    )
}

export default Home;