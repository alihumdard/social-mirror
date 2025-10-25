import { useState } from 'react';

// --- DATA (No Changes) ---
// (Ye data array waise hi rahega, aap bas descriptions aur imageSrc update kar lein)
const featureItems = [
  {
    id: 1,
    title: 'Plug and Play Setup',
    description: 'No developers or setup required. Our mirror auto-connects to the cloud dashboard.',
    imageSrc: '/images/Desktop.png' 
  },
  {
    id: 2,
    title: 'Design and Display',
    description: 'Capture memories with ease. Craft interactive on-site experiences with our drag and drop editor. Total control, Fully customizable. Guest experience your brand, not ours.',
    imageSrc: '/images/Desktop2.png' 
  },
  {
    id: 3,
    title: 'Remote control instantly across multiple locations',
    description: 'Instantly update visuals, offers, or messaging across one or hundreds of mirrors through built-in CMS.',
    imageSrc: '/images/Desktop3.png' 
  },
  {
    id: 4,
    title: 'Secure & Compliant Data',
    description: 'Capture user data responsibly and build long-term trust. Your data is stored in your own cloud, GDPR-compliant and privacy-first by design.',
    imageSrc: '/images/Desktop4.png' 
  },
   {
    id: 5,
    title: 'Real-time Analytics and insights',
    description: 'View live performance metrics and conversion data in one dashboard. Export analytics for deeper insights.',
    imageSrc: '/images/Desktop5.png' 
  },
   {
    id: 6,
    title: 'Stay connected with automated campaigns',
    description: 'Keep the conversation going with your guests after every interaction. Automate follow-ups, deliver personalized content, and build ongoing engagement.',
    imageSrc: '/images/Desktop6.png' 
  },
    {
    id: 7,
    title: 'Built for enterprise growth',
    description: 'Scale seamlessly across locations and markets. Integrate with Meta, TikTok, and WhatsApp for maximum social reach.',
    imageSrc: '/images/Desktop7.png' 
  },
];


// --- COMPONENT ---
export default function FeaturesSection() {
  
  // (State waise hi rahega)
  const [activeId, setActiveId] = useState(1);

  // (Active feature find karna bhi waise hi rahega, ye image ke liye zaroori hai)
  const activeFeature = featureItems.find(item => item.id === activeId);

  if (!activeFeature) {
    return null; 
  }

  return (
    // (Container bhi waise hi rahega)
    <div className="md:pl-36 flex flex-col md:flex-row md:gap-20 md:pt-10">
      
      {/* --- LEFT SIDE (Updated) ---
        Ab yahan active heading/description nahi hai.
        List ab saari items ko render karegi.
      */}
      <div className="space-y-8 items-center lg:items-start text-center lg:text-left">
        <div className="pt-8 w-full md:block">
          
          {/* List ab items ke darmiyan space rakhegi */}
          <ul className="space-y-4 pt-4">
            {featureItems.map(item => (
              
              // Har item ab ek list item hai
              <li key={item.id}>
                
                {/* 1. CLICKABLE HEADING */}
                <h3
                  onClick={() => setActiveId(item.id)}
                  // Base styles (hamesha rahenge)
                  className={`text-xl font-semibold transition-colors duration-200 cursor-pointer 
                    ${
                      // Conditional styles (active ya inactive)
                      activeId === item.id
                        ? 'text-white' // Active style
                        : 'text-gray-500 hover:text-gray-300' // Inactive style
                    }`}
                >
                  {item.title}
                </h3>
                
                {/* 2. CONDITIONAL DESCRIPTION 
                  Ye <p> tag sirf tab show hoga jab 'activeId === item.id' hoga.
                */}
                {activeId === item.id && (
                  <p className="text-gray-400 text-base mt-2 w-[600px]">
                    {item.description}
                  </p>
                )}
              </li>

            ))}
          </ul>
        </div>
      </div>

      {/* --- RIGHT SIDE (No Changes) ---
        Ye section bilkul pehle jaisa hai.
        Ye hamesha active item ki image dikhayega.
      */}
      <div className="flex justify-center lg:justify-end pr-5 sm:pr-0">
        <img
          src={activeFeature.imageSrc} 
          alt={activeFeature.title} 
          className="w-full md:h-[520px] rounded-lg shadow-2xl mt-12 lg:mt-0"
          key={activeFeature.id} 
        />
      </div>
    </div>
  );
}