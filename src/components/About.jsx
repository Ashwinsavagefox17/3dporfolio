import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I’m a passionate Computer Engineering student from Kerala with a focus on real-world tech solutions like mobile tracking apps and data security tools. Eager to learn, collaborate, and build impactful software.
      </motion.p>

      <section className="mt-10 max-w-3xl text-white flex gap-4">
        <a
          href="https://github.com/Ashwinsavagefox17"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-purple-600 rounded-md text-purple-600 hover:bg-purple-600 hover:text-white transition"
        >
          Github Profile
        </a>
        <a
          href="https://linkedin.com/in/ashwin-rajesh-b54502324"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-purple-600 rounded-md text-purple-600 hover:bg-purple-600 hover:text-white transition"
        >
          LinkedIn Profile
        </a>
        <a
          href="/ash.resume.pdf"
          download="Ashwin_Rajesh_Resume.pdf"
          className="px-4 py-2 border border-purple-600 rounded-md text-purple-600 hover:bg-purple-600 hover:text-white transition"
        >
          Check Resume
        </a>
      </section>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
