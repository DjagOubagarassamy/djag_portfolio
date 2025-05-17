import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-bold mb-4 md:mb-0">
            djag.<span className="text-purple-500">info</span>
          </div>
          
          <div className="text-center md:text-right text-gray-400 text-sm">
            <p>&copy; {currentYear} Djag Oubagarassamy. All rights reserved.</p>
            <p className="mt-1">
              Conçu avec précision et passion.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;