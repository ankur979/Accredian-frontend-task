import React from 'react';

const Features = ({openModal}) => {
  return (
    <section className="py-20 bg-gray-50" id="refer">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">How Do I Refer?</h2>
        <div className="flex flex-wrap justify-around items-center">
          <div className="w-full md:w-1/3 mb-8 md:mb-0 px-6">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-500 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.094 12.094 0 0121 10.878v3.244a12.094 12.094 0 01-2.84 1.9L12 14z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v10m0-10l-6.16-3.422A12.094 12.094 0 003 10.878v3.244a12.094 12.094 0 002.84 1.9L12 14z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Submit Referrals</h3>
              <p className="text-gray-600">Submit referrals easily via our website's referral section.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0 px-6">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-500 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zM12 8v12M16 16h-8"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Earn Rewards</h3>
              <p className="text-gray-600">Earn rewards once your referral joins an Accredian program.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-6">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-500 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12l9-5-9-5-9 5 9 5z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12l6.16-3.422A12.094 12.094 0 0021 8.878v3.244a12.094 12.094 0 01-2.84 1.9L12 12z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12v10m0-10l-6.16-3.422A12.094 12.094 0 003 8.878v3.244a12.094 12.094 0 002.84 1.9L12 12z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Receive Bonus</h3>
              <p className="text-gray-600">Both parties receive a bonus 30 days after program enrollment.</p>
            </div>
          </div>
        </div>
        <button className="mt-12 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300" onClick={openModal}>Refer Now</button>
      </div>
    </section>
  );
};

export default Features;
