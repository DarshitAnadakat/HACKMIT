
const TrustIndicators = () => {
  const partners = [
    {
      name: 'Ministry of Women & Child Development',
      logo: '/placeholder.svg',
    },
    {
      name: 'Ayushman Bharat Digital Mission',
      logo: '/placeholder.svg',
    },
    {
      name: 'Apollo Hospitals',
      logo: '/placeholder.svg',
    },
    {
      name: 'ARMMAN',
      logo: '/placeholder.svg',
    },
    {
      name: 'National Health Mission',
      logo: '/placeholder.svg',
    },
  ];

  return (
    <section className="py-12 bg-mother-blue-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl font-display font-medium text-mother-gray-dark mb-8">
          Trusted by Leading Healthcare Organizations
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center p-2 mb-2">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <p className="text-xs text-center text-mother-gray-dark max-w-[120px]">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-medium text-mother-blue-dark shadow-sm">
            <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Approved by Ministry of Women & Child Development
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
