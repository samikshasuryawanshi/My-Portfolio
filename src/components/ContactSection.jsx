import React, { useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const form = useRef();
  const sectionRef = useRef();
  const headingRef = useRef();
  const paragraphRef = useRef();
  const formRef = useRef();
  const infoRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%', // Start animation when the section is 80% visible
        end: 'bottom 60%',
      },
    });

    // Animate heading
    tl.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
    });

    // Animate paragraph
    tl.from(paragraphRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
    }, '-=0.4'); // Overlap with the heading animation

    // // Animate form and info divs
    tl.from(formRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      
    },'ok');
    tl.from(infoRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        
      },'ok');
  }, []);

  return (
    <div
      id="Lets Connect"
      ref={sectionRef}
      className="overflow-hidden text-white min-h-screen pt-20 pb-10 px-5 lg:px-15 flex flex-col justify-between"
    >
      {/* Intro Section */}
      <div className="text-center mb-10">
        <h1
          ref={headingRef}
          className="text-3xl lg:text-5xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
        >
          Let’s Work Together
        </h1>
        <p
          ref={paragraphRef}
          className="mt-5 text-zinc-300 max-w-2xl mx-auto text-lg"
        >
          Whether you want to discuss a project, collaborate on something innovative, or just say hi — feel free to reach out! I'm always open to exciting opportunities and new connections.
        </p>
      </div>

      {/* Contact Form + Info */}
      <div className="flex flex-col lg:flex-row lg:gap-20 gap-10 justify-between items-start mt-5">
            {/* Form */}
            <div
                ref={formRef}
                className="w-full lg:w-1/2 p-8 rounded-xl shadow-lg flex flex-col gap-4 bg-zinc-900"
                >
                <h2 className="text-2xl italic text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Get In Touch
                </h2>

                <form
                    ref={form}
                    onSubmit={(e) => {
                    e.preventDefault();
                    emailjs
                        .sendForm(
                        'service_6mzqx2u',
                        'template_9q0omwl',
                        form.current,
                        't_TnGMkAikQXY3rfZ'
                        )
                        .then(() => {
                        alert('Message sent successfully!');
                        form.current.reset();
                        })
                        .catch(() => {
                        alert('Failed to send message. Try again later.');
                        form.current.reset();
                        });
                    }}
                    className="flex flex-col gap-4"
                >
                    <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    required
                    className="p-3 rounded bg-zinc-800 text-white placeholder-zinc-400 focus:outline-none"
                    />
                    <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                    className="p-3 rounded bg-zinc-800 text-white placeholder-zinc-400 focus:outline-none"
                    />
                    <textarea
                    name="message"
                    rows="6"
                    placeholder="Your Message"
                    required
                    className="p-3 rounded bg-zinc-800 text-white placeholder-zinc-400 focus:outline-none"
                    />
                    <button
                    id="submit"
                    type="submit"
                    className="bg-violet-600 cursor-pointer hover:bg-violet-700 transition-all duration-300 py-3 w-full lg:w-1/2 mx-auto active:scale-95 rounded font-semibold"
                    >
                    Send Message
                    </button>
                </form>
          </div>


        {/* Contact Info */}
        <div
          ref={infoRef}
          className="relative flex flex-col gap-5 text-left lg:w-1/2 p-6"
        >
          <div className="flex items-start justify-start gap-5">
            <div className="h-36 w-32 overflow-hidden p-4 rounded-full border-2 border-violet-500">
              <img
                className="h-full w-full object-cover rounded-full shadow-lg hover:scale-105 transition"
                src="./profile.png"
                alt="Samiksha Profile"
              />
            </div>
            <div>
              <h1 className="mt-5 lg:text-2xl text-lg ">Hey!</h1>
              <p className="mt-2 lg:text-xl text-sm italic text-zinc-400">
                Samiksha Suryawanshi here,
              </p>
            </div>
          </div>
          <h2 className="text-2xl bg-gradient-to-r italic from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Reach Me Directly
          </h2>
          <p className="text-zinc-300">
            <span className="font-semibold text-white">Email:</span>{' '}
            <a
              href="mailto:suryawanshisamiksha506@gmail.com"
              className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent underline"
            >
              suryawanshisamiksha506@gmail.com
            </a>
          </p>
          <p className="text-zinc-400">
            <span className="font-semibold text-white">Location:</span> Bhopal,
            India 🌍
          </p>
          <p className="text-zinc-400">
            <span className="font-semibold text-white">Availability:</span> Open
            for full-time roles, freelance, and collaboration 🚀
          </p>
          <div className="flex gap-4 mt-2 text-3xl">
            <a
              href="https://www.linkedin.com/in/samiksha-suryawanshi83/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition text-violet-400"
            >
              <i className="ri-linkedin-box-fill"></i>
            </a>
            <a
              href="https://github.com/samikshasuryawanshi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition text-violet-400"
            >
              <i className="ri-github-fill"></i>
            </a>
            <a
              href="https://leetcode.com/u/samiksha_12_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                alt="LeetCode"
                className="w-8"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
