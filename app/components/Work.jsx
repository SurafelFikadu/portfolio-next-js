import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Work = ({isDarkMode}) => {
  return (
    <motion.div
    initial={{y: 20, opacity: 0}}
    whileInView={{y: 0, opacity: 1}}
    transition={{duration: 1.3, delay: 0.5}}
    id='work' className='w-full px-[2%] py-10 scroll-mt-20'>

        <motion.h4
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-center mb-2 text-lg font-Ovo'>
            My portfolio
        </motion.h4>

        <motion.h2
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{delay: 0.5, duration: 0.5}}   
        className='text-center text-5xl font-Ovo px-[8%]'>
            This are some of my projects
        </motion.h2>

        <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.7, duration: 0.5}}
         className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo px-[8%]'>
            Welcome to my web development portfolio! Explore a collection of projects
            showcasing my work.
        </motion.p>

        <div className="portfolio">
          <div className='my-works m-auto'>
            
            {/* The First Two works */}
            <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 0.3, duration: 0.4}}
              className='two-works m-auto'>

              <motion.div
              initial={{scale: 1.1}}
              whileInView={{scale: 1}}
              transition={{duration: 0.5, delay: 0.3}}
                className="my-work">
                <Image src={assets.shop_watch} alt='' />
                <div className='work-info'>
                  <motion.h2
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1}}
                  transition={{duration: 1.3}}
                  >Ecommerce Shop-Watch Website</motion.h2>
                  <motion.div
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1}}
                  transition={{duration: 1.5}}
                   className='use'>
                    <span>React</span> <span>TypeScript</span> <span>CSS</span>
                  </motion.div>
                  <ul className="ul">
                    <li>
                      <a
                        rel="noopener"
                        target="_blank"
                        href="https://shop-watch-react-sure.netlify.app//"
                      >
                        VIEW PROJECT
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noopener"
                        target="_blank"
                        href="https://github.com/SurafelFikadu/Web-Stack-Portfolio-ALX"
                      >
                        VIEW CODE
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
              initial={{scale: 1.1}}
              whileInView={{scale: 1}}
              transition={{duration: 0.5, delay: 0.3}}
                className="my-work">
                <Image src={assets.vat_service} alt='' />
                <div className='work-info'>
                  <motion.h2
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1}}
                  transition={{duration: 1.3}}
                  >Vat and Service Charge Calculator</motion.h2>
                  <motion.div
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1}}
                  transition={{duration: 1.5}}
                   className='use'>
                    <span>React</span> <span>TypeScript</span>  <span>JQuery</span>
                  </motion.div>
                  <ul className="ul">
                    <li>
                      <a
                        rel="noopener"
                        target="_blank"
                        href="https://vat-service-calculator-alx-portfolio.netlify.app/"
                      >
                        VIEW PROJECT
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noopener"
                        target="_blank"
                        href="https://github.com/SurafelFikadu/Project-Vat-and-Service-Charge-Calculator"
                      >
                        VIEW CODE
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>


            {/* The Second Two Works */}
            <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 0.3, duration: 0.4}}
              className='two-works m-auto'>

              <motion.div
              initial={{scale: 1.1}}
              whileInView={{scale: 1}}
              transition={{duration: 0.5, delay: 0.3}}
                className="my-work">
                <Image src={assets.ecommerce} alt='' />
                <div className='work-info'>
                  <motion.h2
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1}}
                  transition={{duration: 1.3}}
                  >Ecommerce Product Page</motion.h2>
                  <motion.div
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1}}
                  transition={{duration: 1.5}}
                   className='use'>
                    <span>HTML</span> <span>CSS</span> <span>JAVASCRIPT</span>
                  </motion.div>
                  <ul className="ul">
                    <li>
                      <a
                        rel="noopener"
                        target="_blank"
                        href="https://ecommerce-page-sure-js.netlify.app/"
                      >
                        VIEW-PROJECT
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noopener"
                        target="_blank"
                        href="https://github.com/SurafelFikadu/ecommerce-product-page-frontend"
                      >
                        VIEW CODE
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
              initial={{scale: 1.1}}
              whileInView={{scale: 1}}
              transition={{duration: 0.5, delay: 0.3}}
                className="my-work">
                <Image src={assets.advice} alt='' />
                <div className='work-info'>
                  <motion.h2
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1}}
                  transition={{duration: 1.3}}
                  >Adivce Genertor App</motion.h2>
                  <motion.div
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1}}
                  transition={{duration: 1.5}}
                   className='use'>
                    <span>React</span> <span>Tailwind-CSS</span> <span>API</span>
                  </motion.div>
                  <ul className="ul">
                    <li>
                      <a
                        rel="noopener"
                        target="_blank"
                        href="https://advice-api-typescript-sure.netlify.app/"
                      >
                        VIEW PROJECT
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noopener"
                        target="_blank"
                        href="https://github.com/SurafelFikadu/advice-api-react-frontend"
                      >
                        VIEW CODE
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>

            {/* The Third Two works */}
            <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 0.3, duration: 0.4}}
              className='two-works m-auto'>

              <motion.div
              initial={{scale: 1.1}}
              whileInView={{scale: 1}}
              transition={{duration: 0.5, delay: 0.3}}
                className="my-work">
                <Image src={assets.text_speech} alt='' />
                <div className='work-info'>
                  <motion.h2
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1}}
                  transition={{duration: 1.3}}
                  >Text to Speech Converter</motion.h2>
                  <motion.div
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1}}
                  transition={{duration: 1.5}}
                   className='use'>
                    <span>HTML</span> <span>CSS</span> <span>JavaScript</span>
                  </motion.div>
                  <ul className="ul">
                    <li>
                      <a
                        rel="noopener"
                        target="_blank"
                        href="https://text-to-speech-coverter-sure.netlify.app/"
                      >
                        VIEW PROJECT
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noopener"
                        target="_blank"
                        href="https://github.com/SurafelFikadu/text-to-speech-converter"
                      >
                        VIEW CODE
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
              initial={{scale: 1.1}}
              whileInView={{scale: 1}}
              transition={{duration: 0.5, delay: 0.3}}
                className="my-work">
                <Image src={assets.weather_app} alt='' />
                <div className='work-info'>
                  <motion.h2
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1}}
                  transition={{duration: 1.3}}
                  >City Weather Teller App</motion.h2>
                  <motion.div
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1}}
                  transition={{duration: 1.5}}
                   className='use'>
                    <span>HTML</span> <span>CSS</span>  <span>JavaScript</span> <span>API</span>
                  </motion.div>
                  <ul className="ul">
                    <li>
                      <a
                        rel="noopener"
                        target="_blank"
                        href="https://weather-teller-app-sure.netlify.app/"
                      >
                        VIEW PROJECT
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noopener"
                        target="_blank"
                        href="https://github.com/SurafelFikadu/weather-app"
                      >
                        VIEW CODE
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>

            {/* The Forth Two works */}
            <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 0.3, duration: 0.4}}
              className='two-works m-auto'>

              <motion.div
              initial={{scale: 1.1}}
              whileInView={{scale: 1}}
              transition={{duration: 0.5, delay: 0.3}}
                className="my-work">
                <Image src={assets.simple_quize} alt='' />
                <div className='work-info'>
                  <motion.h2
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1}}
                  transition={{duration: 1.3}}
                  >Simple Quize</motion.h2>
                  <motion.div
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1}}
                  transition={{duration: 1.5}}
                   className='use'>
                    <span>HTML</span> <span>CSS</span> <span>JavaScript</span>
                  </motion.div>
                  <ul className="ul">
                    <li>
                      <a
                        rel="noopener"
                        target="_blank"
                        href="https://simple-quiz-js-sure.netlify.app/"
                      >
                        VIEW PROJECT
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noopener"
                        target="_blank"
                        href="https://github.com/SurafelFikadu/simple-quiz"
                      >
                        VIEW CODE
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
              initial={{scale: 1.1}}
              whileInView={{scale: 1}}
              transition={{duration: 0.5, delay: 0.3}}
                className="my-work">
                <Image src={assets.image_search} alt='' />
                <div className='work-info'>
                  <motion.h2
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1}}
                  transition={{duration: 1.3}}
                  >Image Search Engine</motion.h2>
                  <motion.div
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1}}
                  transition={{duration: 1.5}}
                   className='use'>
                    <span>HTML</span> <span>CSS</span>  <span>JavaScript</span> <span>API</span>
                  </motion.div>
                  <ul className="ul">
                    <li>
                      <a
                        rel="noopener"
                        target="_blank"
                        href="https://image-search-engine-sure.netlify.app/"
                      >
                        VIEW PROJECT
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noopener"
                        target="_blank"
                        href="https://github.com/SurafelFikadu/image-search-engine"
                      >
                        VIEW CODE
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>



          {/* --- Finish project line */}
          </div>
        </div> 

          
        <motion.a
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 1.1, duration: 0.5}} 
        href="https://codepen.io/Surafel-Fikadu/" target="_blank" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:border-white dark:text-white dark:hover:bg-darkHover'>
            Show more <Image src={isDarkMode? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4' />
        </motion.a>
    </motion.div>
  )
}

export default Work