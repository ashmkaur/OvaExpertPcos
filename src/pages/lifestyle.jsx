import React from "react";
import photo from '../images/Confidence.jpg';
import anxiety from "../images/PCOS_Awareness_Campaign___UX_UI_Design__Brand_Identity-removebg-preview.png";
import hairloss from "../images/Free_Vector___Flat-hand_drawn_hair_loss_illustration_with_angry_woman-removebg-preview.png";
import yes from "../images/download-removebg-preview.png";

export default function Lifestyle() {
  return (
    <div className="p-10 flex gap-6">
      <div className="w-3/4 bg-white shadow-xl rounded-2xl p-10 border border-pink-300">
        <h1 className="font-bold text-5xl mb-6 text-pink-500 text-center">Manage Your Lifestyle</h1>
        
        <p className="text-lg font-semibold text-gray-700 text-center">
          <mark className="bg-pink-300 px-1 rounded">A healthy lifestyle</mark> is crucial for managing PCOS. Remember, 
          <mark className="bg-pink-300 px-1 rounded">you're not alone! ❤️</mark>
        </p>

        <h2 className="text-xl font-bold mt-6 text-center">🌸 PCOS Lifestyle Tips 🌸</h2>
        
        <ul className="mt-5 space-y-4 text-gray-800 text-lg">
          <li className="bg-pink-50 p-4 rounded-lg shadow-md border-l-4 border-pink-400">💡 <b>Balanced Diet</b> – Focus on whole foods, fiber-rich veggies, healthy fats, and lean proteins.</li>
          <li className="bg-pink-50 p-4 rounded-lg shadow-md border-l-4 border-pink-400">🏋️‍♀️ <b>Regular Exercise</b> – Strength training, yoga, and daily walks improve insulin resistance.</li>
          <li className="bg-pink-50 p-4 rounded-lg shadow-md border-l-4 border-pink-400">🧘‍♀️ <b>Stress Management</b> – Meditation, deep breathing, and self-care help balance hormones.</li>
          <li className="bg-pink-50 p-4 rounded-lg shadow-md border-l-4 border-pink-400">🌙 <b>Proper Sleep</b> – Getting 7-9 hours of quality sleep is essential.</li>
          <li className="bg-pink-50 p-4 rounded-lg shadow-md border-l-4 border-pink-400">💧 <b>Hydration & Supplements</b> – Stay hydrated and consider essential vitamins.</li>
        </ul>

        <div className="grid grid-cols-3 gap-6 mt-8">
          {[{
            text: "How does PCOS affect your emotional health?",
            img: hairloss,
            link: "https://www.reidhealth.org/blog/could-pcos-be-causing-your-irregular-periods"
          }, {
            text: "PCOS and Diet - How does PCOS affect your Diet?",
            img: yes,
            link: "https://www.reidhealth.org/blog/could-pcos-be-causing-your-irregular-periods"
          }, {
            text: "PCOS and Exercise - How does PCOS affect your exercise patterns?",
            img: anxiety,
            link: "https://www.reidhealth.org/blog/could-pcos-be-causing-your-irregular-periods"
          }].map((item, index) => (
            <div key={index} className="bg-pink-200 p-4 rounded-xl shadow-lg flex flex-col justify-between cursor-pointer hover:scale-105 transition-transform" onClick={() => window.location.href = item.link}>
              <p className="text-gray-900 font-semibold text-center">{item.text}</p>
              <img className="w-full h-36 object-contain mx-auto mt-2" src={item.img} alt="pcos" />
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/4 flex items-center justify-center">
        <img height={500} src="https://i.pinimg.com/736x/4f/8a/e1/4f8ae184568bba84be8d9cc7102d98b8.jpg" alt="PCOS Lifestyle" />
      </div>
    </div>
  );
}
