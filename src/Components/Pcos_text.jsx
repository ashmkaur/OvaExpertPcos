import React from "react"

export default function Pcos_text() {
    return(
        <div className="bg-pink-100 h-140 w-1/2 rounded-xl p-10 m-10 font-lora">
            <div>
                <h1 className="text-pink-500 font-bold font-lora text-5xl">Welcome To OvaExpert</h1>
                <p className="p-3 font-poppins text-lg">
                <p className="mt-3 mb-3 font-bold font-lora">
                Polycystic Ovary Syndrome (PCOS) is a common hormonal disorder that affects women of reproductive age. 
                </p>
                It is characterized by a variety of symptoms that can vary from person to person, and it can have both physical and emotional impacts. 
                <p className="mt-3 text-pink-500 ">
                PCOS is a complex condition that can be challenging to manage, but with the right support and information, it is possible to live well with PCOS.</p> 
                <p className="mt-3">
                OvaExpert is here to help you navigate your PCOS journey and provide you with the tools and resources you need to take control of your health and well-being. Whether you are looking for information on PCOS symptoms, treatment options, or lifestyle changes, we are here to support you every step of the way. Welcome to OvaExpert - your trusted source for all things PCOS.
                </p>
                </p>    
            </div>
            <div className="grid grid-cols-3 justify-between mt-15 w-xl h-70">
               <div className=" p-4"><img className="w-full h-full object-cover" src="https://i.pinimg.com/736x/c0/29/54/c02954658e7267e2223e682159a5440d.jpg" alt="" /></div>
               <div className=" p-4"><img className="w-full h-full object-cover" src="https://i.pinimg.com/736x/de/d8/47/ded84742a8be21488dfb6d8e4913ff81.jpg" alt="" /></div>
               <div className=" p-4"><img className="w-full h-full object-cover"  src="https://i.pinimg.com/736x/37/ad/df/37addf40b9f97325c86a42c18338dca3.jpg"  alt="" /></div>  
            </div>
        </div>
    )
}