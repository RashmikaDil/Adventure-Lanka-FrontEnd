import React from "react";



function Footer({ companyName = "Rashmika Dilhara" }) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto max-w-screen-xl px-6 py-10  gap-6">
   
       

     
      
    
       

       
      </div>

      <div className="bg-gray-800 text-center py-4">
        <p className="text-sm text-gray-400">
          © 2025 {companyName}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
