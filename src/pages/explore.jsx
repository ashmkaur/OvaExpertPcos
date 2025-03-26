import anxiety from "../images/PCOS_Awareness_Campaign___UX_UI_Design__Brand_Identity-removebg-preview.png"
import iregularperiods from "../images/Periods_mood_swings-removebg-preview.png"
import infertility from "../images/Premium_Vector___Sickly_looking_girl_with_hot_water_bottle_semi_flat_color_vector_character-removebg-preview.png"
import hairloss from "../images/Free_Vector___Flat-hand_drawn_hair_loss_illustration_with_angry_woman-removebg-preview.png"
import last from "../images/Pin_on_vector-removebg-preview.png"
import yes from "../images/download-removebg-preview.png"


export default function Explore() {
  return (
    <div className="flex justify-centermin-h-screen p-10">
      <div className="w-9/10 flex justify-center"> 
        <div className="grid grid-cols-3 gap-10">
          {[{
            text: "In PCOS, hormonal imbalances can interfere with the normal menstrual cycle, leading to periods that are unpredictable, delayed, or sometimes absent altogether.",
            img: iregularperiods,
            link: "https://www.reidhealth.org/blog/could-pcos-be-causing-your-irregular-periods"
          }, {
            text: "PCOS is one of the leading causes of female infertility because of the lack of regular ovulation. This makes it harder to conceive.",
            img: infertility,
            link: "https://www.reidhealth.org/blog/could-pcos-be-causing-your-irregular-periods"
          }, {
            text: "Along with acne and oily skin, people with PCOS may experience darkened skin in areas like the neck, groin, or underarms.",
            img: hairloss,
            link: "https://academic.oup.com/humupd/article/22/6/687/2420598"
          }, {
            text: "Due to struggles with weight management and insulin resistance, some people with PCOS may develop disordered eating patterns.",
            img: last,
            link: "https://www.health.harvard.edu/blog/polycystic-ovarian-syndrome-and-the-skin-202104292552"
          }, {
            text: "The hormonal fluctuations in PCOS, particularly around the levels of androgens and insulin, can disrupt normal sleep patterns.",
            img: anxiety,
            link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5799701/"
          }, {
            text: "Physical symptoms like weight gain, hirsutism, or acne can lower self-esteem and cause social anxiety.",
            img: yes,
            link: "https://www.healthline.com/health/chronic-illness/pcos-and-anxiety"
          }].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-xl flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer border border-pink-300" onClick={() => window.location.href = item.link}>
              <p className="text-gray-900 font-semibold text-center text-lg">{item.text}</p>
              <img className="w-full h-44 object-contain mx-auto mt-3" src={item.img} alt="pcos" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}