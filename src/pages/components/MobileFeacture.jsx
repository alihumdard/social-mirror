import React from 'react';

// 1. Saara data ek array mein nikaal liya
// Ab aap aasani se naye features add, edit, ya remove kar sakte hain.
const featuresList = [
  {
    id: 1,
    title: 'Plug and Play Setup',
    description: 'No developers or setup required. Our mirror auto-connects to the cloud dashboard',
    imageSrc: '/images/Desktop2.png' // User's 2nd block image
  },
  {
    id: 2,
    title: 'Design and display',
    description: 'Capture memories with ease. Craft interactive on-site experiences with our drag and drop editor. Total control, Fully customizable. Guest experience your brand, not ours.',
    imageSrc: '/images/Desktop3.png' // User's 3rd block image
  },
  {
    id: 3,
    title: 'Remote control instantly across multiple locations',
    description: 'Instantly update visuals, offers, or messaging across one or hundreds of mirrors through built-in CMS.',
    imageSrc: '/images/Desktop4.png'
  },
  {
    id: 4,
    title: 'Secure & Compliant Data',
    description: 'Capture user data responsibly and build long-term trust. Your data is stored in your own cloud, GDPR-compliant and privacy-first by design.',
    imageSrc: '/images/Desktop5.png'
  },
  {
    id: 5,
    title: 'Real-time Analytics and insights',
    description: 'View live performance metrics and conversion data in one dashboard. Export analytics for deeper insights.',
    imageSrc: '/images/Desktop6.png'
  }
];

const MobileFeacture = () => {
  return (
    // 2. Main Container
    // 'block sm:hidden' -> Sirf mobile par show hoga (aapke original code se)
    // 'flex flex-col' -> Saare features ko vertically stack karega
    // 'px-4' -> Screen ke side se thora padding diya hai
    <div className="pt-10 block sm:hidden flex flex-col px-4">
      
      {/* Yeh aapka pehla image block tha, jo header lag raha hai */}
      {/* Maine isse map se bahar rakha hai */}
      <div className="flex justify-center">
        <img
          src="/images/Desktop.png" 
          alt="Cloud Dashboard Mockup"
          className="w-full rounded-lg shadow-2xl mt-12"
        />
      </div>

      {/* 3. Map function */}
      {/* Hum featuresList array ke upar loop kar rahe hain */}
      {featuresList.map((feature) => (
        
        // 4. Har feature ke liye yeh structure create hoga
        // 'key' prop React ke liye zaroori hai
        // 'flex-col' text ko image ke upar stack karega
        <div key={feature.id} className="flex flex-col py-4">
          
          {/* --- Text Section --- */}
          {/* 'text-center' mobile ke liye behtar hai */}
          <div className="items-center text-center">
            <div className="space-y-4 pt-8 w-full">
              {/* Data ab 'feature' object se aa raha hai */}
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-400 text-base">
                {feature.description}
              </p>
            </div>
          </div>

          {/* --- Image Section --- */}
          <div className="flex justify-center">
            <img
              src={feature.imageSrc}
              alt={feature.title} // Alt text title se use karna behtar hai
              className="w-full rounded-lg shadow-2xl mt-12"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileFeacture;
