 
const Footer = () => {
    return (
        <>
      
<footer className="  rounded-lg shadow bg-gray-300 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                 <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Wedding-Management</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 dark:text-black">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-black sm:text-center dark:text-black">© 2023 <a href="https://flowbite.com/" className="hover:underline">Nohan</a>. All Rights Reserved.</span>
    </div>
</footer>


 
   </>
    );
};

export default Footer;