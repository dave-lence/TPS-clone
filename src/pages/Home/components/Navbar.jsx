import { useState } from 'react'
import { FaBars, FaDatabase } from "react-icons/fa"
import { FiPlus, FiMinus } from 'react-icons/fi'
import { CgSearch } from "react-icons/cg"
import { VscChromeClose } from 'react-icons/vsc'
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi"
import { BiSolidShield } from 'react-icons/bi'
import { LuMessagesSquare } from "react-icons/lu"
import { TiSupport } from 'react-icons/ti'
import { BsCloudDownloadFill } from 'react-icons/bs'
import { IoIosArrowForward } from "react-icons/io"
import { Link } from 'react-router-dom'
import TopMostInfo from './TopMostInfo'


const navlinks = [
  {
    link: 'Services',
    submenu: true,
    sublink: [
      {
        image: 'https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/themes/cis/dist/images/icons/backdrop-set/cloud.svg',
        title: 'Cloud Solutions',
        text: 'A wide range of cloud solutions for business',
        to:"/cloud-solutions"
      },
      {
        image: 'https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/themes/cis/dist/images/icons/backdrop-set/shield.svg',
        title: 'Cyber Security Services',
        text: 'Trust your IT with Experts in deliverying IT support excellence.',
        to: '/services/cyber-security'
      },
      {
        image: 'https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/themes/cis/dist/images/icons/backdrop-set/callouts.svg',
        title: 'Communications',
        text: 'Bespoke business communication systems.',
        to: '/communications'
      },
      {
        image: 'https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/themes/cis/dist/images/icons/backdrop-set/lifering.svg',
        title: 'IT Support and Consultancy Services',
        text: 'Expert IT services when you need it most.',
        to: '/services/it-support'
      },
      {
        image: 'https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/themes/cis/dist/images/icons/backdrop-set/database.svg',
        title: 'Backup and Recovery',
        text: 'Leading backup and recovery services for businesses.',
        to:"/backup-recovery"
      },
    ]
  },
  {
    link: 'Challenges',
    submenu: true,
    sublink: [
      {
        icon: <IoIosArrowForward />,
        title: 'Old, Slow and Useless',
        text: 'Dated IT Equipment can take a toll on your business.',
        to: '/challenges/old-slow-and-useless'
      },
      {
        icon: <IoIosArrowForward />,
        title: 'IT and ROI',
        text: 'Efficient IT systems streamline business operations.',
        to: '/challenges/it-and-roi'
      },
      {
        icon: <IoIosArrowForward />,
        title: 'IT and your Business Ambitions',
        text: 'Ensure your business objectives align with your IT strategy.',
        to: ''
      },
      {
        icon: <IoIosArrowForward />,
        title: "Disaster Recovery! What's that?",
        text: "Don't be caught offguard by unforeseen circumstances.",
        to: '/challenges/disaster-recovery-whats-that'
      },
      {
        icon: <IoIosArrowForward />,
        title: 'Does IT Security Matter? The Importance of IT Security',
        text: 'IT security is often an afterthought, find out why it matters.',
        to: '/challenges/it-security-does-it-matter'
      },
      {
        icon: <IoIosArrowForward />,
        title: 'Small Issues which create Big Problems',
        text: "Don't let small IT issues become business critical issues.",
        to: '/challenges/small-issues-which-create-big-problems'
      },
    ]
  },
  {
    link: 'About',
    submenu: false,
    to: '/about'
  },
  {
    link: 'Success stories',
    submenu: false,
    to: '/success-stories'
  },
  {
    link: 'Knowledge base',
    submenu: false,
    to: '/knowledge-base'
  },
  {
    link: 'Blog',
    submenu: false,
    to: '/blog'
  },
  {
    link: 'FAQs',
    submenu: false,
    to: '/faqs'
  }
]

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const openNavbar = () => setNavbar(true);
  const closeNavbar = () => setNavbar(false);

  const [openForm, setOpenForm] = useState(false);

  return (
    <header className='z-[100]'>
      <TopMostInfo />
      <div className="relative bg-black bg-opacity-70">
        <nav className='flex items-center justify-between py-5 px-7 md:p-7 bg-transparent text-white hover:bg-black border-b-2 border-b-primary h-36'>
          <Link to="/">
            <svg className="text-white w-40" height="58" viewBox="0 0 141 58" width="141" xmlns="http://www.w3.org/2000/svg"> 
              <Logo />
            </svg>
          </Link>

          <ul className="hidden lg:flex items-center gap-6">
          {
            navlinks.map((items, index) => {
              const { link, submenu, sublink, to } = items;
              return (
                <li className='group' key={index}>
                  {
                    submenu ? <div>
                      <div className="md:cursor-pointer group">
                        <p className='flex justify-between items-center group font-medium text-white hover:text-primary100 py-12 md:pr-0 pr-5 group text-base'>
                          {link}
                          <span className='block group-hover:hidden text-primary100 ml-0.5 mt-0.5 text-base'>
                            <FiPlus />
                          </span>
                          <span className='hidden group-hover:block text-primary100 ml-0.5 mt-[3px] text-base'>
                            <FiMinus />
                          </span>
                        </p>
                        {
                          submenu && <Dropdown sublink={sublink} />
                        }
                      </div>
                    </div>
                    : 
                    <Link to={to} className='text-white font-medium hover:text-primary100 text-base'>
                      {link}
                    </Link>
                  }
                </li>
              )
            })
          }
        </ul>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center ml-auto lg:ml-0"> 
          <div className="relative mr-4">
            <form role="search" method="get" id="searchform" className={`${openForm ? 'is-active nav-form' : 'overflow-hidden nav-form scale-x-0'}`}> 
              <input placeholder="Type search here" type="text" value="" name="s" id="s" required="" className='bg-white border-[3px] border-primary100 outline-primary100 rounded-full pl-4 pr-8 h-10' /> 
              <input className="hidden" type="submit" value="Search" /> 
            </form> 
            <div className={`${openForm ? 'search-icon bg-primary100' : 'search-icon hidden sm:block hover:bg-primary100'}`} onClick={() => setOpenForm(true)}> 
              <CgSearch size={18} />
            </div> 
          </div> 
          <Link to="/contact-us" className="border-2 border-primary100 px-5 py-2 rounded-3xl text-sm text-white lg:text-sm hover:bg-primary100">
            Get in touch
          </Link> 
        </div>

        <div className="cursor-pointer lg:hidden" onClick={openNavbar}>
          <FaBars size={23} />
        </div>
          </div>
        
          {/* Mobile Menu */}
          {navbar && <MobileNav close={closeNavbar} />}
        </nav>
      </div>
    </header>
  )
}

export default Navbar

const MobileNav = ({close}) => {
  const [dropdown, setDropdown] =  useState(false);
  return (
    <div className="bg-[#1e1e1e] w-full min-h-screen fixed top-0 left-0 right-0 lg:hidden transition-all duration-700 z-[80]">
      <div className="flex items-center justify-between py-3 px-5">
      <Link to="/">
          <svg className="text-white w-24" height="58" viewBox="0 0 141 58" width="141" xmlns="http://www.w3.org/2000/svg"> 
            <Logo />
          </svg>
        </Link>

        <span className='text-white hover:cursor-pointer' onClick={close}>
          <VscChromeClose size={30} />
        </span>
      </div>

      <ul className='my-6'>
        <li className='w-full border-b border-b-neutral-200 py-3 px-6 mb-3' onClick={() => setDropdown(!dropdown)}>
          <div className="flex items-center justify-between">
            <p className='text-lg font-semibold text-white'>Services</p>
            <span className='cursor-pointer text-primary'>
              {
                dropdown ? <PiCaretUpBold size={20} /> : <PiCaretDownBold size={20} />
              }
            </span>
          </div>
          {
            dropdown && (
              <ul className={`${dropdown} ? 'flex flex-col space-y-5 my-6 mx-6' : 'hidden'`}>
                <li>
                  <p className='flex items-center gap-4 text-base font-normal'>
                    <span className='text-gray-400'>
                      <BsCloudDownloadFill size={24} />
                    </span>
                    <span>Cloud Solutions</span>
                  </p>
                </li>
                <li>
                  <p className='flex items-center gap-4 text-base font-normal'>
                    <span className='text-gray-400'>
                      <BiSolidShield size={24} />
                    </span>
                    <span>Cyber Security Services</span>
                  </p>
                </li>
                <li>
                  <p className='flex items-center gap-4 text-base font-normal'>
                    <span className='text-gray-400'>
                      <LuMessagesSquare size={24} />
                    </span>
                    <span>Communications</span>
                  </p>
                </li>
                <li>
                  <Link to='/services/it-support' className='flex items-center gap-4 text-base font-normal'>
                    <span className='text-gray-400'>
                      <TiSupport size={24} />
                    </span>
                    <span>IT Support and Services</span>
                  </Link>
                </li>
                <li>
                  <p className='flex items-center gap-4 text-base font-normal'>
                    <span className='text-gray-400'>
                      <FaDatabase size={24} />
                    </span>
                    <span>
                      Backup and Recovery
                    </span>
                  </p>
                </li>
              </ul>
            )
          }
        </li>
        <li className='w-full border-b border-b-neutral-200 py-3 px-6 mb-3' onClick={() => setDropdown(!dropdown)}>
          <div className="flex items-center justify-between">
            <p className='text-lg font-semibold text-white'>Challenges</p>
            <span className='cursor-pointer text-primary'>
            {
              dropdown ? <PiCaretUpBold size={20} /> : <PiCaretDownBold size={20} />
            }
            </span>
          </div>
          {
            dropdown && (
              <ul className={`${dropdown} ? 'flex flex-col space-y-3 my-6 mx-6' : 'hidden'`}>
                <li>
                  <Link to='/challenges/old-slow-and-useless'>Old, Slow and Useless!</Link>
                </li>
                <li>
                  <p>IT and ROI</p>
                </li>
                <li>
                  <p>IT and your Business Ambitions</p>
                </li>
                <li>
                  <p>Disaster Recovery! What's that?</p>
                </li>
                <li>
                  <Link to='/challenges/it-security-does-it-matter'>Does IT Security Matter? The Importance of IT Security</Link>
                </li>
                <li>
                  <p>Small Issues which Create Big Problems</p>
                </li>
              </ul>
            )
          }
        </li>
        <li className='w-full border-b border-b-neutral-200 py-4 px-6 flex items-center justify-between mb-3'>
          <Link to="/about" className='text-lg font-semibold text-white'>About</Link>
        </li>
        
        <li className='w-full border-b border-b-neutral-200 py-4 px-6 flex items-center justify-between mb-3'>
          <Link to='/success-stories'className='text-lg font-semibold text-white'>Success Stories</Link>
        </li>
        <li className='w-full border-b border-b-neutral-200 py-4 px-6 flex items-center justify-between mb-3'>
          <Link to='/knowledge-base' className='text-lg font-semibold text-white'>Knowledge Base</Link>
        </li>
        <li className='w-full border-b border-b-neutral-200 py-4 px-6 flex items-center justify-between mb-3'>
          <Link to='/blog' className='text-lg font-semibold text-white'>Blog</Link>
        </li>
        <li className='w-full border-b border-b-neutral-200 py-4 px-6 flex items-center justify-between mb-3'>
          <Link to='/faqs' className='text-lg font-semibold text-white'>FAQs</Link>
        </li>
      </ul>
      
      <Link to='/contact-us' className="bg-transparent border-2 m-4 px-8 py-3 border-primary100 rounded-full transition hover:cursor-pointer hover:bg-sky-500">
        Get in touch
      </Link>
    </div>
  )
}

const Dropdown = ({sublink}) => {
  return (
    <div className='hover:md:block'>
      <div className="absolute top-31 left-0 hidden group-hover:md:block w-full bg-white z-[100]">
        <ul className="bg-white pt-20 pb-24 flex items-center flex-wrap mx-auto gap-x-10 gap-y-12 lg:w-[90%]">
          {
            sublink.map((item, index) => {
              const {image, title, text, icon, to} = item;
              return (
                <li key={index} className='basis-[22rem]'>
                  <Link to={to} className='flex flex-col items-start space-y-3'>
                    {
                      image && <img src={image} className='w-10 h-auto' alt="" />
                    }
                    {
                      icon && <span  className='text-primary100 text-2xl'>{icon}</span>
                    }
                    <Link to={to} className='text-xl text-slate-900 font-bold'>{title}</Link>
                    <p className='text-base text-slate-700 font-normal'>{text}</p>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}


const Logo = () => {
  return (
    <g className="fill-current" fill-rule="evenodd"> 
      <path d="m29 0c16.0162577 0 29 12.9837423 29 29s-12.9837423 29-29 29-29-12.9837423-29-29 12.9837423-29 29-29zm9.099253 17c-3.3960847 0-6.4574265 1.4249434-8.6257551 3.7066821l.0029267.0029267-1.5445728 1.5445728 3.3660859 3.3660859 1.5445728-1.5445728c1.3075091-1.41909 3.1751178-2.3150301 5.2567425-2.3150301 3.94338 0 7.140814 3.1967024 7.140814 7.1404482 0 3.9437459-3.197434 7.1408141-7.140814 7.1408141-2.030773 0-3.8559445-.8542344-5.1561367-2.215156l-3.3646225 3.3649884.4049839.4053497c2.1247937 1.9872382 4.9768755 3.2051167 8.1157753 3.2051167 6.5726659 0 11.900747-5.3280812 11.900747-11.9011129 0-6.5726658-5.3280811-11.9011128-11.900747-11.9011128zm-22.3985009 3.2100921c-4.8049312 0-8.7007521 3.895455-8.7007521 8.7007521 0 4.805297 3.8958209 8.700752 8.7007521 8.700752 2.2989331 0 4.3878746-.8930133 5.9434225-2.349053l.0058535.0054876 2.3852711-2.3849053-3.3675492-3.3675493-1.5950586 1.5950587-.2436489.2440147-.5341251.5586363c-.6954602.6021712-1.6016437.9680104-2.5941653.9680104-2.1928398 0-3.9700863-1.7776124-3.9700863-3.9704521 0-2.1928398 1.7772465-3.9704522 3.9700863-3.9704522 1.1567833 0 2.1979615.4953462 2.9237863 1.2848271l3.3445014-3.3448672c-1.5826201-1.6448128-3.8050928-2.6702598-6.2682877-2.6702598zm8.9592906 5.3150572-3.3682809 3.3671834 3.3671834 3.3671834 3.3675492-3.3679151zm2.6479437-2.6473217-.4269343.4269343-1.5972537 1.5968878 3.3664517 3.3664517 1.5968878-1.5972537.3848628-.3844969.0420715-.0424373z"></path> <path d="m84.2 46.768c4.848 0 9.312-1.584 12.768-4.992l-4.32-4.368c-2.208 2.208-5.52 3.408-8.448 3.408-8.304 0-11.52-5.808-11.568-11.376-.048-5.616 3.456-11.664 11.568-11.664 2.928 0 5.904 1.008 8.112 3.168l4.224-4.08c-3.456-3.408-7.776-5.136-12.336-5.136-12.144 0-17.856 8.928-17.8083 17.712.0483 8.736 5.3283 17.328 17.8083 17.328zm22.804-.768v-33.6h-6.288v33.6zm19.732.864c7.488 0 14.112-3.216 14.112-10.704 0-8.016-6.528-9.84-13.536-10.704-4.032-.48-7.488-1.296-7.488-4.224 0-2.496 2.256-4.464 6.96-4.464 3.648 0 6.816 1.824 7.968 3.744l5.04-2.592c-2.544-5.184-7.968-6.672-13.2-6.672-6.192.048-13.008 2.88-13.008 9.792 0 7.536 6.336 9.36 13.2 10.176 4.464.48 7.776 1.776 7.776 4.944 0 3.648-3.744 5.04-7.728 5.04-4.08 0-7.968-1.632-9.456-5.328l-5.28 2.736c2.496 6.144 7.776 8.256 14.64 8.256z" fill-rule="nonzero"></path> 
    </g> 
  )
}