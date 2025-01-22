import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Certificate = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.3, delay: 0.5 }}
      id="certificate"
      className="w-full px-[2%] py-10 scroll-mt-20"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo px-[8%]"
      >
        My Certificates
      </motion.h2>

      <div className="portfolio">
        <div className="my-works">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="two-works"
          >
            <motion.div
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="my-work"
            >
              <Image src={assets.Responsive_Design} alt="" />
              <div className="work-info">
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.3 }}
                >
                  Respnsive Web Design
                </motion.h2>

                <ul className="ul">
                  <li>
                    <a
                      rel="noopener"
                      target="_blank"
                      href="https://freecodecamp.org/certification/SurafelFikadu/responsive-web-design"
                    >
                      VIEW Certificate
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="my-work"
            >
              <Image src={assets.JS_Data_C} alt="" />
              <div className="work-info">
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.3 }}
                >
                  JavaScript Algorithm and Data Structure
                </motion.h2>

                <ul className="ul">
                  <li>
                    <a
                      rel="noopener"
                      target="_blank"
                      href="https://freecodecamp.org/certification/SurafelFikadu/javascript-algorithms-and-data-structures-v8"
                    >
                      VIEW Certificate
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="two-works"
          >
            <motion.div
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="my-work"
            >
              <Image src={assets.FrontEnd_Libraries} alt="" />
              <div className="work-info">
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.3 }}
                >
                  Front End Development Libraries
                </motion.h2>

                <ul className="ul">
                  <li>
                    <a
                      rel="noopener"
                      target="_blank"
                      href="https://freecodecamp.org/certification/SurafelFikadu/front-end-development-libraries"
                    >
                      VIEW Certificate
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="my-work"
            >
              <Image src={assets.Data_Visualization} alt="" />
              <div className="work-info">
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.3 }}
                >
                  Data Visualization
                </motion.h2>

                <ul className="ul">
                  <li>
                    <a
                      rel="noopener"
                      target="_blank"
                      href="https://freecodecamp.org/certification/SurafelFikadu/data-visualization"
                    >
                      VIEW certificate
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="two-works"
          >
            {/*  */}

            <motion.div
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="my-work m-auto"
            >
              <Image src={assets.Software_Engineering_C} alt="" />
              <div className="work-info">
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.3 }}
                >
                  Software Engineering
                </motion.h2>

                <ul className="ul">
                  <li>
                    <a
                      rel="noopener"
                      target="_blank"
                      href="https://intranet.alxswe.com/certificates/eBYM3fs6rZ/"
                    >
                      VIEW Certificate
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default Certificate;
