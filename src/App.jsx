import { useState,useTransition } from 'react' 
import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react';

import React,{useEffect} from 'react'
import Switcher from './component/Switcher'
import Swiper5 from './swiper/swiperrr';
import Swiper6 from './swiper/swiper6';
import Swiper7 from './swiper/swiper7';
import 'swiper/css';


// import img
import nav from './assets/nav.png';
import amico from './assets/amico.png';

import main2 from './assets/main2.png';
import main2A from './assets/main2A.png';
import main2B from './assets/main2B.png';
import main2C from './assets/main2C.png';

import main3 from './assets/main3.png';
import main3A from './assets/main3A.png';
import main3B from './assets/main3B.png';

import ma3 from './assets/ma3.png';
import ma3A from './assets/ma3A.png';
import ma3B from './assets/ma3B.png';

import main4 from './assets/main4.png';
import main4A from './assets/main4A.png';
import main4B from './assets/main4B.png';
import main4C from './assets/main4C.png';

import main8 from './assets/main8.png';

import a1 from './assets/a1.png';
import a2 from './assets/a2.png';
import a3 from './assets/a3.png';

import { useTranslation } from 'react-i18next'
import Temporary from './component/navbar';

import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
    useEffect(() => {
      AOS.init();
    }, [])

  const [lng, setLng] = useState("en")
  const {t,i18n} = useTranslation()
  const changeLanguage = (language) =>{
    i18n.changeLanguage(language)
  }

  const handleChange = (e) => {
    const {value} = e.target
    changeLanguage(value)
    setLng(value)
  }

  return (
    <div className='dark:bg-[#100f10] dark:text-white'>
      <div className="main_1 bg-[#E5E5E5]  dark:bg-[#1c1b1c] dark:text-white">
        <div className="contener w-[85%] mx-auto">
          <div className="navbar flex justify-between py-[20px]">
            <div className='flex gap-[10px]'>
              <div>
                <img src={nav} alt="" />
              </div>
              <h1 className='text-[#173A56] dark:text-[#4049b2] text-[30px] font-[700]'>{t("text")}</h1>
            </div>

            <ul className='lg:flex hidden justify-between 2xl:w-[40%] font-[600] text-[16px] xl:w-[50%] lg:w-[60%] py-[10px] px-[20px]'>
              <li className=' hover:text-[#22343D] hover:font-[700]'><a href="#">{t("text")}</a></li>
              <li className=' hover:text-[#22343D] hover:font-[700]'><a href="#">{t("text1")}</a></li>
              <li className=' hover:text-[#22343D] hover:font-[700]'><a href="#">{t("text1A")}</a></li>
              <li className=' hover:text-[#183746] hover:font-[700]'><a href="#">{t("text1B")}</a></li>
            </ul>
            <div className='flex gap-[20px]'>
              <select className='select bg-[#E5E5E5] dark:text-[#000] '  value={lng} onChange={handleChange}>
                    <option value={"en"}>En</option>
                    <option value={"ru"}>Ru</option>
              </select>
              <div className='lg:flex gap-[15px] hidden'>
              <button className='btn_1 text-[#010101]  lg:flex dark:hover:bg-[#2c7fb3] dark:bg-[#b7b3b7e0] hidden bg-[#ffffff00] hover:bg-[#02897A] hover:text-[#fff] rounded-[3px] px-[40px] text-[16px] py-[7px] font-[600]'>{t("text2")}</button>
              <button className='btn_1 text-[#010101]  lg:flex dark:hover:bg-[#2c7fb3] dark:bg-[#b7b3b7e0] hidden bg-[#ffffff00] hover:bg-[#02897A] hover:text-[#fff] rounded-[3px] px-[40px] text-[16px] py-[7px] font-[600]'>{t("text2")}</button>
              
              </div>
              <div className='mx:hidden sm:block pt-[7px]'>
              <Switcher/> 

              </div>
              <div className='mx:block lg:hidden pt-[5px]'>
              <Temporary />
              </div>

            </div>

          </div>
          <div className="main_1A lg:flex justify-between py-[60px]">
            <div className="left_1 lg:w-[50%] pt-[90px] lg:text-start mx:text-center">
              <h1 className='font-[700] text-[40px]'>{t("text3")}</h1>
              <p className='font-[400] xl:w-[50%] text-[18px] py-[20px]'>{t("text3A")}</p>

              <div className='sm:flex mx:justify-center lg:justify-start gap-[50px] py-[70px]'>
              <button className='btn_1 text-[#010101]  lg:flex dark:hover:bg-[#2c7fb3] dark:bg-[#b7b3b7e0] bg-[#ffffff00] hover:bg-[#02897A] hover:text-[#fff] rounded-[3px] px-[40px] text-[16px] py-[7px] font-[600]'>{t("text2A")}</button>
              <p className='watch_p text-[#02897A] font-[600] py-[10px] text-[17px]'>{t("text3B")}</p>

              </div>
            </div>
            <div className="right_1 lg:w-[50%]">
              <img src={amico} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="main_2 bg-[#E5E5E5] dark:bg-[#1c1b1c] dark:text-white py-[90px]">
        <div className="contener lg:w-[85%] mx-auto">
          <h1 className='font-[700] 2xl:w-[35%] xl:w-[55%] mx:w-[70%]  mx-auto text-center lg:text-[40px] mx:text-[30px]'>{t("text4")}</h1>

          <div className='main_2A py-[80px] mx:text-center lg:text-start mx:w-[60%] sm:w-[30%]  lg:w-[95%] xl:w-[90%] 2xl:w-[85%] mx-auto lg:flex flex-wrap justify-between px-[20px] '>
            <div className='lg:w-[25%]'>
              <div className='flex mx:justify-center lg:justify-start'>
              <img className='py-[15px]' src={main2} alt="" />
              </div>
              <h1 className='text-[22px] font-[600] py-[14px]'>{t("text5")}</h1>
              <p className='text-[16px] xl:w-[60%] font-[400]'>{t("text6")}</p>
            </div>

            <div className='lg:w-[25%]'>
            <div className='flex mx:justify-center lg:justify-start'>
              <img className='py-[15px]' src={main2A} alt="" />
              </div>
              <h1 className='text-[22px] font-[600] py-[14px]'>{t("text5A")}</h1>
              <p className='text-[16px] xl:w-[60%] font-[400]'>{t("text6")}</p>
            </div>

            <div className='lg:w-[25%]'>
            <div className='flex mx:justify-center lg:justify-start'>
              <img className='py-[15px]' src={main2B} alt="" />
            </div>
              <h1 className='text-[22px] font-[600] py-[14px]'>{t("text5B")}</h1>
              <p className='text-[16px] xl:w-[60%] font-[400]'>{t("text6")}</p>
            </div>

            <div className='lg:w-[25%]'>
            <div className='flex mx:justify-center lg:justify-start'>
              <img className='py-[15px]' src={main2C} alt="" />
            </div>
              <h1 className='text-[22px] font-[600] py-[14px]'>{t("text5C")}</h1>
              <p className='text-[16px] xl:w-[60%] font-[400]'>{t("text6")}</p>
            </div>
          </div>

          <div className='flex justify-center'>
          <button className='btn_1 text-[#010101]  lg:flex dark:hover:bg-[#2c7fb3] dark:bg-[#b7b3b7e0] bg-[#ffffff00] hover:bg-[#02897A] hover:text-[#fff] rounded-[3px] px-[40px] text-[16px] py-[7px] font-[600]'>{t("text2B")}</button>
          </div>
        </div>
      </div>

      <div className="main_3 py-[120px] dark:bg-[#100f10] dark:text-white">
        <div className="contener w-[85%] mx-auto">
          <div className="main3A1 lg:flex  justify-between pt-[80px]">
            <div className="left_3 lg:w-[50%] mx:w-[80%] md:w-[50%] mx-auto">
              <h3 className='text-[16px] font-[600]'>{t("text7")}</h3>
              <h3 className='text-[32px] py-[8px] font-[700]'>{t("text8")}</h3>
              <p className='xl:w-[50%] py-[25px]'>{t("text9")}</p>
              <h4 className='text-[16px] font-[700]'>{t("text10")}</h4>
              <p className='py-[12px] xl:w-[55%]'>{t("text11")}</p>
              <h4 className='text-[16px] py-[15px] font-[700]'>{t("text10A")}</h4>
              <p className=' xl:w-[55%]'>{t("text11A")}</p>

            </div>
            <div className="right_3 lg:w-[45%] mx:w-[80%] mx-auto mx:py-[90px] lg:py-0">
            <div className='flex mx:justify-center lg:justify-start'>
              <img className='py-[15px]' src={main3} alt="" />
              </div>
            </div>
          </div>

          <div className="main_3A2 lg:flex  justify-between py-[80px]  ">
            <div className="left_3 lg:w-[45%] mx:w-[80%] mx-auto mx:py-[90px] lg:py-0">
            <div className='flex mx:justify-center lg:justify-start'>
                <img className='py-[15px]' src={main3A} alt="" />
              </div>
            </div>
            <div className="right_3 lg:w-[50%] mx:w-[80%] md:w-[50%] mx:mx-auto lg:mx-0">
              <h3 className='text-[16px] font-[600]'>{t("text7A")}</h3>
              <h3 className='text-[32px] py-[8px] font-[700]'>{t("text8A")}</h3>
              <p className='xl:w-[50%] py-[25px]'>{t("text9")}</p>
              <div>
                <div className='flex gap-[20px] py-[5px]'>
                  <div className='pt-[5px]'>
                  <img src={ma3} alt="" />
                  </div>
                  <p className='text-[16px] xl:w-[33%] md:w-[67%]  mx:w-[95%] sm:w-[75%] font-[400]'>{t("text12")}</p>
                </div>
              </div>

              <div className='flex gap-[20px] py-[25px]'>
                  <div className='pt-[5px]'>
                  <img src={ma3A} alt="" />
                  </div>
                  <p className='text-[16px] xl:w-[33%] md:w-[67%]  mx:w-[95%] sm:w-[75%] font-[400]'>{t("text12")}</p>
              </div>

              <div className='flex gap-[20px] py-[5px]'>
                  <div className='pt-[5px]'>
                  <img src={ma3B} alt="" />
                  </div>
                  <p className='text-[16px] xl:w-[33%] md:w-[67%]  mx:w-[95%] sm:w-[75%] font-[400]'>{t("text12")}</p>
              </div>
            
              

            </div>
          </div>
          <div className="main3A3 lg:flex  py-[90px] justify-between">
            <div className="left_3 lg:w-[50%] mx:w-[80%] md:w-[50%] mx-auto">
              <h3 className='text-[16px] font-[600]'>{t("text7B")}</h3>
              <h3 className='text-[32px] py-[8px] font-[700]'>{t("text8B")}</h3>
              <p className='xl:w-[50%] py-[25px]'>{t("text9")}</p>
              <h4 className='text-[16px] font-[700]'>{t("text10")}</h4>
              <p className='py-[12px] xl:w-[55%]'>{t("text11")}</p>
              <h4 className='text-[16px] py-[15px] font-[700]'>{t("text10A")}</h4>
              <p className=' xl:w-[55%]'>{t("text11A")}</p>

            </div>
            <div className="right_3 lg:w-[45%] mx:w-[80%] mx-auto mx:py-[90px] lg:py-0">
              <div className='flex mx:justify-center lg:justify-start'>
                <img className='py-[15px]' src={main3B} alt="" />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="main_4567 bg-[#E5E5E5] dark:bg-[#1c1b1c] dark:text-[#dcd6dc]">

        <div className="main_4 py-[90px]">
          <div className="contener w-[80%] mx-auto">
            <h1 className='font-[700] 2xl:w-[35%] xl:w-[55%] mx:w-[70%]  mx-auto text-center lg:text-[40px] mx:text-[30px]'>Quick & Easy Process</h1>
            <p className='font-[500] xl:w-[40%] mx-auto text-center text-[16px] py-[17px]'>Do you require some help for your project: Conception workshop,
            prototyping, marketing strategy, landing page, Ux/UI?</p>

          <div className='lg:flex justify-between 2xl:w-[80%] sm:w-[70%]  py-[50px] mx-auto md:w-[55%]'>
            <div className='flex gap-[15px]  p-[10px]'>
              <div className='flex'>
                <img src={main4} alt="" />
              </div>
              <div className='flex items-center'>
              <div className='can py-[10px] px-[40px] dark:text-[#121012] bg-[#fff]'>
                <h1 className='font-[500] text-[16px]'>I can take care of your pitch</h1>
              </div>
              </div>
            </div>

            <div className='flex gap-[15px] p-[10px]'>
              <div className='flex items-center'>
              <div className='can py-[10px] px-[40px] dark:text-[#121012] bg-[#fff]'>
                <h1 className='font-[500] text-[16px]'>I can prototype your app</h1>
              </div>
              </div>
              <div className='flex'>
                <img src={main4A} alt="" />
              </div>
            </div>

            </div>

            <div className='lg:flex justify-between 2xl:w-[80%] sm:w-[70%]  py-[10px] mx-auto md:w-[55%]'>
            <div className='flex gap-[15px]  p-[10px]'>
              <div className='flex items-center'>
              <div className='can py-[10px] px-[40px] dark:text-[#121012] bg-[#fff]'>
                <h1 className='font-[500] text-[16px]'>I can take care of your pitch</h1>
              </div>
              </div>
              <div className='flex'>
                <img src={main4B} alt="" />
              </div>
            </div>

            <div className='flex gap-[15px] p-[10px]'>
              <div className='flex'>
                <img src={main4C} alt="" />
              </div>
              <div className='flex items-center'>
              <div className='can py-[10px] px-[40px] dark:text-[#121012] bg-[#fff]'>
                <h1 className='font-[500] text-[16px]'>I can prototype your app</h1>
              </div>
              </div>
            </div>

            </div>  


            <div className='flex justify-center'>
                <button className='btn_1 text-[#ffff] dark:text-[#121012]  lg:flex dark:hover:bg-[#2c7fb3] dark:bg-[#b7b3b7e0] bg-[#ffffff00] bg-[#02897A] my-[40px] hover:text-[#000] rounded-[5px] px-[70px] text-[16px] py-[10px] font-[600]'>Contact our expert</button>
            </div>

          </div>

        </div>

        <div className="main_5">
          <div className="contener w-[80%] mx-auto">
            <h1 className='font-[700] text-center lg:text-[40px] mx:text-[30px]' >Contents Strategies</h1>
            <p className='font-[500] py-[8px] text-center text-[16px]' >We focus on ergonomics and meeting you where you work. It's only a keystroke away. </p>

            <div className='py-[90px]'>
              <Swiper5/>
            </div>
          </div>
        </div>

        <div className="main_6">
          <div className="contener w-[80%] mx-auto">
            <h1 className='font-[700] lg:text-[40px] text-center mx:text-[30px]' >Price Table</h1>
            <p className='font-[500] py-[8px] text-center  text-[16px]' >We offer competitive price </p>

            <div className='py-[90px]'>
              <Swiper6/>
            </div>
          </div>
        </div>

        <div className="main_7">
          <div className="contener w-[80%] mx-auto">
            <h1 className='font-[700] lg:text-[40px] text-center mx:text-[30px]' >What Clients Say</h1>
            <p className='font-[500] py-[8px] text-center  text-[16px]' >Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics </p>

            <div className='py-[90px]'>
              <Swiper7/>
            </div>
          </div>
        </div>

        <div className="main_7 my-[50px]">
          <div className="contener w-[80%] mx-auto">
            <div className="main_7A w-[80%] pt-[80px]  mx-auto rounded-[15px] lg:flex justify-between bg-[#02897A]">
              <div className="left_8 mx:text-center lg:text-start md:py-[80px] xl:px-[80px] md:px-[40px] lg:w-[50%]">
                <h1 className='md:text-[33px] mx:text-[24px] text-[#fff] font-[600]'>Join 100 Compannies who boost their business with Product</h1>
                <div className='py-[40px]'>
                  <button className='bg-[#fff] text-[#02897A] text-[20px] font-[600] py-[5px] px-[40px] rounded-[8px]'>Get This</button>
                </div>


              </div>
              <div className="right_8 lg:w-[50%] flex justify-center">
                <img src={main8} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="main_9 py-[100px]">
          <div className="contener lg:w-[85%] mx:w-[40%] mx-auto">
            <div className="main_9A lg:flex mx:text-center lg:text-start justify-between">
              <div className='py-[25px]'>
              <div className='flex gap-[10px]'>
              <div>
                <img src={nav} alt="" />
              </div>
              <h1 className='text-[#173A56] dark:text-[#4049b2] text-[30px] font-[700]'>{t("text")}</h1>
            </div>
            <div className='flex gap-[20px] py-[20px]'>
              <img src={a3} alt="" />
              <img src={a2} alt="" />
              <img src={a1} alt="" />
            </div>
              </div>

              <ul className='flex flex-col py-[25px] gap-y-[10px] px-[15px]'>
                <h1 className='text-[20px] font-[500]'>Resource</h1>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>

              <ul className='flex flex-col py-[25px] gap-y-[10px] px-[15px]'>
                <h1 className='text-[20px] font-[500]'>Legal Stuff</h1>
                <li><a href="#">Disclaimer</a></li>
                <li><a href="#">Financing</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>

              <div className='py-[25px]'>
                <h1 className='text-[20px] font-[500]'>knowing you're always on the best energy deal.</h1>
                <div className='my-[20px] flex justify-center lg:justify-start'>
                  <input className='btn_1 px-[40px] py-[5px]' type="text" />
                </div>

                <div className='py-[40px]'>
                  <button className='bg-[#02897A] text-[#fff] text-[20px] font-[600] py-[5px] px-[40px] rounded-[8px]'>Sign up Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


   
   
    </div>
  )
}

export default App
