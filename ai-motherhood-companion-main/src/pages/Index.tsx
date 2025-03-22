
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ActivitySquare, Calendar, Heart, MessageCircle, ShieldCheck, Users } from 'lucide-react';
import StatBanner from '../components/StatBanner';
import FeatureCard from '../components/FeatureCard';
import TrustIndicators from '../components/TrustIndicators';
import LanguageSelector from '../components/LanguageSelector';
import FloatingActionButton from '../components/FloatingActionButton';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Example images for cards - using placeholders
  const cardImages = [
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=60'
  ];

  return (
    <>
      <StatBanner />
      <FloatingActionButton />
      
      <main className="min-h-screen pt-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-mother-blue-light via-white to-mother-blue/20"></div>
        <div className="fixed inset-0 -z-5 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-fixed opacity-5"></div>
        <div className="fixed top-0 left-0 w-full h-full -z-5">
          <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-mother-blue/30 to-transparent rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-mother-pink/20 to-transparent rounded-full filter blur-3xl" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-2/3 left-1/2 w-64 h-64 bg-gradient-to-br from-mother-green/20 to-transparent rounded-full filter blur-3xl" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Hero Section with modern gradient background */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-mother-blue/50 to-mother-pink/30 z-0 opacity-80"></div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 bg-mother-green/20 rounded-full filter blur-3xl"></div>
          <div className="absolute -top-32 -right-40 w-80 h-80 bg-mother-pink/20 rounded-full filter blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 z-10">
            <div className="max-w-3xl mx-auto text-center mb-12 staggered-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold gradient-text leading-tight mb-6 animate-float">
                Your AI-Powered Companion for Safe Pregnancy & Motherhood
              </h1>
              <p className="text-xl text-mother-gray-dark mb-8 animate-fade-in" style={{animationDelay: "0.3s"}}>
                Expert guidance, personalized care, and community support for every stage of your motherhood journey
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{animationDelay: "0.5s"}}>
                <Link to="/chat" className="btn-primary btn-effect w-full sm:w-auto transform hover:scale-105 transition-transform relative overflow-hidden group">
                  <span className="absolute inset-0 w-full h-full bg-gradient-shine bg-[length:200%_100%] animate-shine"></span>
                  <span className="relative flex items-center justify-center z-10">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Ask mAI Assistant
                  </span>
                </Link>
                <Link to="/consultation" className="btn-emergency btn-effect w-full sm:w-auto transform hover:scale-105 transition-transform relative overflow-hidden">
                  <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 group-hover:w-full"></span>
                  <span className="relative flex items-center justify-center">
                    Emergency Connect
                  </span>
                </Link>
              </div>
              
              <div className="mt-6 animate-fade-in" style={{animationDelay: "0.7s"}}>
                <Link to="/marketplace" className="text-mother-blue-dark hover:text-blue-700 underline underline-offset-2 font-medium hover:drop-shadow-md transition-all duration-300">
                  Browse Trusted Products
                </Link>
              </div>
            </div>
            
            {/* Hero image */}
            <div className="max-w-4xl mx-auto mt-16 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform perspective-1000 hover:rotate-1 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=2000&q=80" 
                  alt="Mother and child using the app" 
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-display font-semibold mb-2">Trusted by Mothers Across India</h3>
                  <p className="text-white/80">Join thousands of mothers who trust our platform for their pregnancy journey</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-mother-blue-dark rounded-full animate-morph"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-mother-pink-dark rounded-full animate-morph" style={{ animationDelay: "2s" }}></div>
            </div>
            
            <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8">
              <LanguageSelector />
            </div>
          </div>
        </section>
        
        {/* Key Features Section with glass cards */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-mother-blue/10 to-white z-0"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-mother-pink/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-mother-green/10 rounded-full filter blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-semibold gradient-text inline-block mb-4">
                Complete Care Throughout Your Journey
              </h2>
              <p className="text-mother-gray-dark max-w-2xl mx-auto">
                Our comprehensive platform provides everything you need for a healthy pregnancy and motherhood experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 card-deck">
              <FeatureCard
                title="Real-time Health Monitoring"
                description="Track your vitals, symptoms, and baby's growth with our AI-powered dashboard that alerts you to any concerning changes."
                icon={<ActivitySquare size={28} className="text-mother-blue-dark" />}
                imageUrl={cardImages[0]}
              />
              <FeatureCard
                title="AI Risk Prediction"
                description="Our advanced algorithm analyzes your health data to identify potential complications before they become serious."
                icon={<ShieldCheck size={28} className="text-mother-blue-dark" />}
                imageUrl={cardImages[1]}
              />
              <FeatureCard
                title="24/7 Expert Support"
                description="Connect with qualified OB-GYNs and pediatricians via video call whenever you need medical guidance."
                icon={<MessageCircle size={28} className="text-mother-blue-dark" />}
                imageUrl={cardImages[2]}
              />
              <FeatureCard
                title="Community Support Network"
                description="Join a community of mothers from your region to share experiences and get emotional support."
                icon={<Users size={28} className="text-mother-blue-dark" />}
                imageUrl={cardImages[3]}
              />
              <FeatureCard
                title="Verified Product Marketplace"
                description="Shop for government-certified and community-validated pregnancy and baby products."
                icon={<Heart size={28} className="text-mother-blue-dark" />}
                imageUrl={cardImages[4]}
              />
              <FeatureCard
                title="Milestone Tracking"
                description="Never miss an important checkup or vaccination with personalized reminders and schedules."
                icon={<Calendar size={28} className="text-mother-blue-dark" />}
                imageUrl={cardImages[5]}
              />
            </div>
            
            <div className="mt-16 text-center">
              <Link to="/account" className="btn-secondary btn-3d transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-shine bg-[length:200%_100%] animate-shine opacity-70"></span>
                <span className="relative z-10">Create Your Health Dashboard</span>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Health Dashboard Preview with glass effect */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-mother-blue/10 to-mother-green/10 z-0"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mb-10 lg:mb-0 animate-slide-up">
                <h2 className="text-3xl font-display font-semibold gradient-text inline-block mb-6">
                  Your Personalized Health Dashboard
                </h2>
                <p className="text-mother-gray-dark mb-6">
                  Track your pregnancy journey with our intuitive dashboard that keeps all your health information in one secure place.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Week-by-week development tracking with visualization",
                    "Vital signs monitoring with smart alerts",
                    "Nutrition and hydration tracking",
                    "Appointment reminders with direct booking",
                    "Medication and supplement management"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-mother-green-dark mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <Link to="/account" className="btn-primary btn-3d transform hover:scale-105 transition-all duration-300 shadow-neon">
                    Access Your Dashboard
                  </Link>
                </div>
              </div>
              
              <div className="glassmorphism p-6 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 transform hover:scale-105 card-3d">
                <div className="bg-white/90 backdrop-blur-lg rounded-xl shadow-sm overflow-hidden">
                  <div className="h-8 bg-gradient-to-r from-mother-blue-dark to-blue-700 flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="w-full h-64 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80" 
                        alt="Dashboard interface" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="bg-mother-blue/10 p-3 rounded-lg hover:bg-mother-blue/20 transition-colors duration-300 hover:shadow-md">
                        <div className="text-xs text-mother-gray-dark">Week</div>
                        <div className="text-2xl font-semibold text-mother-blue-dark">24</div>
                      </div>
                      <div className="bg-mother-green/10 p-3 rounded-lg hover:bg-mother-green/20 transition-colors duration-300 hover:shadow-md">
                        <div className="text-xs text-mother-gray-dark">Risk Score</div>
                        <div className="text-2xl font-semibold text-green-600">Low</div>
                      </div>
                      <div className="bg-mother-pink/10 p-3 rounded-lg hover:bg-mother-pink/20 transition-colors duration-300 hover:shadow-md">
                        <div className="text-xs text-mother-gray-dark">Next Checkup</div>
                        <div className="text-lg font-semibold text-mother-pink-dark">May 15</div>
                      </div>
                      <div className="bg-mother-yellow/10 p-3 rounded-lg hover:bg-mother-yellow/20 transition-colors duration-300 hover:shadow-md">
                        <div className="text-xs text-mother-gray-dark">Baby Size</div>
                        <div className="text-lg font-semibold text-amber-600">Papaya</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Trust Indicators */}
        <TrustIndicators />
        
        {/* Call to Action with gradient background */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-mother-blue-dark to-blue-800 z-0"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=2000&q=80" 
              alt="Background texture" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/20 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl font-display font-semibold text-white mb-6 text-shadow">
              Start Your Safe Motherhood Journey Today
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Join thousands of Indian mothers who are receiving personalized care, expert guidance, and community support through our platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/account" className="bg-white text-mother-blue-dark rounded-xl px-6 py-3 font-medium hover:bg-white/90 transition-colors shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 transition-transform">
                Create Your Account
              </Link>
              <Link to="/chat" className="bg-transparent border border-white text-white rounded-xl px-6 py-3 font-medium hover:bg-white/10 transition-colors transform hover:scale-105 transition-transform">
                Try mAI Assistant
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
