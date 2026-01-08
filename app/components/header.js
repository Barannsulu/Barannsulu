import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Header = () => {
  return (
    <nav className='fixed top-0 w-full text-white shadow z-50'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
        {/* Sol: Logo */}
        <div className='text-xl font-bold tracking-wide'>Baran Sulu</div>

        {/* Sağ: İkonlar */}
        <div className='flex space-x-5 text-xl'>
          <a href='mailto:baransulu0@gmail.com' className='hover:text-blue-400'>
            <HiOutlineMail />
          </a>
          <a
            href='https://github.com/barannsulu'
            target='_blank'
            className='hover:text-blue-400'>
            <FaGithub />
          </a>
          <a
            href='https://www.linkedin.com/in/baran-s%C3%BCl%C3%BC-565114207/'
            target='_blank'
            className='hover:text-blue-400'>
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
