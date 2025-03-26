import React, { useState } from 'react';


const counsel = () => {
    const [userData, setUserData] = useState({
        "RBS(mg/dl)": '',
        "Height(Cm)": '',
        "Age (yrs)": '',
        "PRG(ng/mL)": '',
        "Waist(inch)": '',
        "Cycle length(days)": '',
        "II beta-HCG(mIU/mL)": '',
        "BP _Systolic (mmHg)": '',
        "Reg.Exercise(Y/N)": '',
        "No. of aborptions": ''
    });

    const [prediction_pcos, setPrediction_pcos] = useState('');
    const [prediction_no_pcos, setPrediction_no_pcos] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        console.log(userData)
        const response = await fetch(import.meta.env.VITE_BACKEND_URL+"/predict", {
          method: 'POST',  // ✅ Ensure it's a POST request
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userData) // Convert data to JSON string
        });
    
        const data = await response.json(); // Parse the JSON response
        setPrediction_pcos(data.prediction.probability_pcos); // ✅ Update state with prediction
        setPrediction_no_pcos(data.prediction.probability_not_pcos);
    
      } catch (error) {
        console.error('Error making prediction:', error);
      }
    };
    
  
  

    const features = [
      {
        feature:"RBS(mg/dl)",
        value:userData["RBS(mg/dl)"],
        placeholder:"RBS(mg/dl)",
        type:"numeric",
      },
      {
        feature:"Height(Cm)",
        value:userData["Height(Cm)"],
        placeholder:"Height(Cm)",
        type:"numeric",
      },
      {
         feature:"Age (yrs)",
         value:userData["Age (yrs)"], 
         placeholder:"Age (yrs)",
         type:"numeric",
      },
      {
        feature:"PRG(ng/mL)",
        value:userData["PRG(ng/mL)"],
        placeholder:"PRG(ng/mL)",
        type:"numeric",
      },
      {
        feature:"Waist(inch)",
        value:userData["Waist(inch)"],
        placeholder:"Waist(inch)",
        type:"numeric",
      },
      {
        feature:"Cycle length(days)", 
        value:userData["Cycle length(days)"],
        placeholder:"Cycle length(days)",
        type:"numeric",
      },
      {
        feature:"II beta-HCG(mIU/mL)",
        value:userData["II beta-HCG(mIU/mL)"],
        placeholder:"II beta-HCG(mIU/mL)",
        type:"numeric",
      },
      {
        feature:"BP _Systolic (mmHg)",
        value:userData["BP _Systolic (mmHg)"],
        placeholder:"BP _Systolic (mmHg)",
        type:"numeric",
      },
      {
        feature:"Reg.Exercise(Y/N)",
        value:userData["Reg.Exercise(Y/N)"],
        placeholder:"Reg.Exercise(Y/N)",
        type:"numeric",
      },
      {
        feature:"No. of aborptions",  
        value:userData["No. of aborptions"],  
        placeholder:"No. of aborptions",
        type:"numeric",
      }
    ]

    return (
      <>
      <div className='w-full pl-10 pr-10 mt-2'>
            <p className='text-pink-500 text-xl font-bold pl-2'>Disclaimer-</p>
            <p className='p-2'>This is only a <mark className='bg-pink-200'>prediction</mark> and not a medical diagnosis. While the model has an accuracy of <mark className='bg-pink-200'>88.09%</mark>, it considers the most important features for assessment. However, please consult a healthcare professional for an <mark className='bg-pink-200'>accurate diagnosis</mark> and personalized guidance.</p>
      </div>
      <div className='flex p-10 gap-10'>
        <div className='w-3/4 border border-pink-200 rounded-2xl p-3'>
        <h1 className='text-pink-500 font-bold font-lora text-5xl mb-3'>PCOS Prediction</h1>
        <form onSubmit={handleSubmit}>
          {features.map((inputField) => (
            <div className='w-full'>
            <label 
            className='inline-block mb-1 pl-1' 
           // htmlFor={id}
            >
                {inputField.feature}
            </label>
            
            <input
            type={inputField.type}
            className="px-3 py-2 rounded-lg bg-pink-100 text-black outline-none focus:bg-pink-50 duration-200 border border-pink-200 w-full"
            onChange={handleChange}
            name={inputField.feature}
            placeholder={inputField.placeholder}
            value={inputField.value}
            />
        </div>
          ))}
          <button className='bg-pink-500 text-white px-4 py-2 rounded-lg mt-5' type="submit">Submit</button>
        </form>
        </div>
        <div className='w-1/4 border border-pink-200 rounded-2xl p-3'>
          <p className='text-5xl text-pink-500 font-bold '>PCOS Probabilities</p>

          <div className='flex flex-col gap-2 mt-10'>
          <span className= 'text-black'>PCOS probability (prediction)</span>  
          <div className='w-full h-10 rounded-lg bg-pink-100 flex justify-items-center p-2'>{prediction_pcos && <p className='text-xl '>{(prediction_pcos*100).toFixed(2)}</p>}</div>
          <span className=' text-black'>Not having PCOS probability (prediction)</span> 
          <div className='w-full h-10 rounded-lg bg-pink-100 flex justify-items-center p-2'>{prediction_no_pcos && <p className='text-xl '>{(prediction_no_pcos*100).toFixed(2)}</p>}</div>
        </div>

        </div>
      </div>
      </>
    );
  }
  
  export default counsel;
