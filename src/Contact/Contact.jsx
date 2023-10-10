import {FaLocationDot} from 'react-icons/fa6' 
import { AiOutlineMail, AiFillPhone} from 'react-icons/ai'
const Contact = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 container mx-auto'>
            <div className='text-center space-y-2 shadow-lg rounded-lg pb-4'>
                <div className='flex items-center justify-center '>
                <FaLocationDot className='text-5xl '></FaLocationDot>
                </div>
                <h2 className='text-3xl'>Address</h2>
                <p  >UTC-5 : Eastern Standard Time (EST), <br />
                IN 47933
                </p>
            </div>
            <div className='text-center space-y-2 shadow-lg rounded-lg'>
                <div className='flex items-center justify-center'>
                <AiOutlineMail className='text-5xl '></AiOutlineMail>
                </div>
                <h2 className='text-3xl'>Email</h2>
                <p>lovelove@gmail.com  <br />
                yourmail@gmail.com 
                </p>
            </div>
            <div className='text-center space-y-2 shadow-lg rounded-lg'>
                <div className='flex items-center justify-center'>
                <AiFillPhone className='text-5xl '></AiFillPhone>
                </div>
                <h2 className='text-3xl'>Phone</h2>
                <p>+1 500 123 456 789  <br />
                +1 700 321 654 987 
                </p>
            </div>
        </div>
    );
};

export default Contact;