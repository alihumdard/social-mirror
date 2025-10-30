import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Camera, LayoutGrid, Video } from 'lucide-react';

// Images array (same as yours)
const heroImages = [
  "/images/hero.png",
  "/images/capture1.png",
  "/images/capture2.png",
  "/images/capture3.png"
];

// --- NEW: Button labels array ---
// Inko images ke saath match karna zaroori hai (4 images = 4 labels)
const buttonLabels = [
  "Hospitality",
  "Events",
  "Retail",
  "Public spaces"
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- UPDATED: Refs for intervals ---
  // Refs ka istemal interval IDs ko store karne ke liye taaki hum unhe clear kar sakein
  const intervalIdRef = useRef(null);
  const resumeTimerRef = useRef(null);

  // --- NEW: Function to START auto-rotation ---
  const startAutoRotate = () => {
    // Pehle se chal rahe interval ko clear karein
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }
    // Naya interval shuru karein
    intervalIdRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 2000); // 3 seconds
  };

  // --- NEW: Function to STOP auto-rotation ---
  const stopAutoRotate = () => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }
  };

  // --- UPDATED: useEffect to use start/stop functions ---
  useEffect(() => {
    startAutoRotate(); // Component mount hone par auto-rotation shuru karein

    // Component unmount hone par safai (cleanup)
    return () => {
      stopAutoRotate();
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
    };
  }, []); // Sirf ek baar run karein

  // --- NEW: Click handler for buttons ---
  const handleButtonClick = (index) => {
    // Agar koi "resume" timer chal raha hai, to use clear karein
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }

    stopAutoRotate(); // Maujooda auto-rotation ko rokein
    setCurrentIndex(index); // Image ko clicked button ke index par set karein

    // 5 second ke baad auto-rotation ko dobara shuru karne ke liye ek timer set karein
    resumeTimerRef.current = setTimeout(() => {
      startAutoRotate();
    }, 5000); // 5 seconds inactivity
  };


  // --- Scroll Animation Logic (UNCHANGED) ---
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.8]);
  const text1Opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.25, 0.35],
    [0, 1, 1, 0]
  );
  const text2Opacity = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.8, 1],
    [0, 1, 1, 0]
  );
  // --- End of Scroll Logic ---


  return (
    <>
      {/* ... Aapka pehla <section> (header/title) yahan hai (UNCHANGED) ... */}
      <section className="flex flex-col items-center justify-center bg-white text-center px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-900 pt-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          One mirror, endless <br className="hidden sm:block" /> experiences
        </motion.h1>

        <motion.p
          className="text-gray-800 mt-4 font-semibold text-base sm:text-lg max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Your ideas on display in seconds. <br />
          A fun way to connect with your guest. No code needed.
        </motion.p>
      </section>

      {/* Scroll container (UNCHANGED) */}
      <div ref={targetRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

          {/* Scaling motion div (UNCHANGED) */}
          <motion.div
            style={{ scale }}
            className="relative w-[900px] h-[450px] mx-5"
          >
            {/* --- Slideshow Component (UNCHANGED) --- */}
            {/* Yeh 'currentIndex' state ko istemal kar raha hai, isliye yeh ab click se bhi update hoga */}
            <div className="relative w-full h-[70vh] sm:h-[80vh] lg:h-screen rounded-lg">
              {heroImages.map((imagePath, index) => (
                <img
                  key={imagePath}
                  src={imagePath}
                  alt={`Hero Image ${index + 1}`}
                  className={`absolute top-0 left-0 w-full h-full object-cover rounded-lg transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                />
              ))}

            </div>

            {/* --- End of Slideshow --- */}


            {/* --- Animated Text Overlays (UNCHANGED) --- */}
            <motion.div
              style={{ opacity: text2Opacity }}
              className="absolute inset-0 z-10 flex flex-col text-white p-8"
            >
              {/* ... "Capture moments" text... (UNCHANGED) */}
              <h5 className="text-2xl font-semibold text-center">
                Capture moments
              </h5>
              <h5 className="text-2xl font-semibold text-center mb-2">
                share mamories
              </h5>

              {/* Phone UI and rotation container (UNCHANGED) */}
              <section
                className="relative flex flex-col items-center justify-center"
                style={{ perspective: '1000px' }}
              >

                {/* ... Glowing Frame / Phone UI ... (UNCHANGED) */}
                <div className="relative z-10 border-[4px] border-white rounded-lg sm:w-[160px] h-[250px] flex flex-col items-center justify-between">
                  <div className="mt-10 text">
                    <h2 className="text-white text-md font-semibold tracking-wide">
                      LET’S CAPTURE
                    </h2>
                    <h2 className="text-white text-md font-semibold tracking-wide">
                      THIS MOMENT
                    </h2>
                  </div>
                  <div className="flex items-center justify-center gap-3 px-4 sm:px-0">
                    <div className="w-7 h-7 flex items-center justify-center rounded-full border-2 border-purple-400 hover:border-purple-300 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] cursor-pointer">
                      <Video className="text-white w-3 h-3" />
                    </div>
                    <div className="w-7 h-7 flex items-center justify-center rounded-full border-2 border-purple-400 hover:border-purple-300 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] cursor-pointer">
                      <Camera className="text-white w-3 h-3" />
                    </div>
                    <div className="w-7 h-7 flex items-center justify-center rounded-full border-2 border-purple-400 hover:border-purple-300 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] cursor-pointer">
                      <LayoutGrid className="text-white w-3 h-3" />
                    </div>
                  </div>
                  <div className="mb-4 text-center">
                    <img src="/images/logos.png" alt="" className="h-10 " />
                  </div>
                </div>


                {/* Rotating button container (UNCHANGED) */}
                <motion.div
                  className="flex flex-col text-center"
                  style={{
                    transformOrigin: "top"
                  }}
                >
                  <h2 className="text-white my-2 text-xs sm:text-md">
                    Offer guests a memory they'll share.
                  </h2>

                  {/* --- UPDATED: Dynamic Buttons --- */}
                  <div className="flex justify-center gap-1 sm:gap-2 overflow-x-auto whitespace-nowrap px-2 mx-2 scrollbar-hide">
                    {buttonLabels.map((label, index) => (
                      <button
                        key={label}
                        onClick={() => handleButtonClick(index)}
                        className={`py-1 px-2 sm:px-3 text-[8px] sm:text-xs font-medium transition-colors shrink-0 ${index === currentIndex
                            ? "bg-white text-gray-900"
                            : "bg-[#3A3B3D] text-white hover:bg-black/60"
                          }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>

                  {/* --- End of UPDATED Buttons --- */}

                </motion.div>
              </section>
            </motion.div>

          </motion.div>
        </div>
      </div>
      <div class="min-h-screen bg-[#5700FB] flex items-center justify-center p-4 sm:p-8 md:p-12">
        <div class="max-w-6xl w-full flex flex-col-reverse sm:flex-col md:flex-row items-center bg-[#5700FB]">

          <div class="relative w-full md:w-1/2 flex items-center justify-center min-h-[400px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px] flex-grow">
            <img src="/images/Container.png" alt="" />
          </div>

          <div class="w-full md:w-1/2 text-white p-3 md:p-8 lg:p-12 mt-8 md:mt-0">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Wow your guest. <br />
              Turn your ideas into <br />
              immersive content.
            </h2>
            <p class="text-base sm:text-lg mb-8 max-w-lg">
              A new way for brands to engage their audience: ethically, <br class="hidden sm:block" />
              beautifully, and instantly.
            </p>
            <a
              href="#"
              class="inline-block border-2 border-white text-black bg-white py-3 px-6 text-sm font-semibold transition-colors duration-300"
            >
              Discover our product
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default Hero;