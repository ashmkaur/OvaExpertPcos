import Navbar from './Navbar'
import Pcos_text from './Pcos_text'
import Pcos_image from './Pcos_image'

function Home() {

  return (

    <div className='bg-white w-full min-h-[80vh]'>
        <div className='flex'>
           <Pcos_text/>
           <Pcos_image/>
        </div>
    </div>

  )
}

export default Home