
import { useState, useEffect } from 'react';
import { Calendar, Heart, LineChart, Clock, Bell, Settings, ChevronRight } from 'lucide-react';
import FloatingActionButton from '../components/FloatingActionButton';

const UserAccount = () => {
  const [currentWeek, setCurrentWeek] = useState(24);
  const [riskLevel, setRiskLevel] = useState<'Low' | 'Medium' | 'High'>('Low');
  const [upcomingAppointments, setUpcomingAppointments] = useState([
    { id: 1, type: 'Regular Checkup', doctor: 'Dr. Priya Sharma', date: '2023-05-15', time: '10:00 AM' },
    { id: 2, type: 'Ultrasound Scan', doctor: 'Dr. Rajesh Kumar', date: '2023-05-28', time: '02:30 PM' }
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-16 pb-16 bg-mother-blue/5">
      <FloatingActionButton />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-display font-semibold text-mother-blue-dark">My Dashboard</h1>
              <p className="text-mother-gray-dark">Track your pregnancy journey and health metrics</p>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center">
              <div className="glass-card px-4 py-2 flex items-center mr-4">
                <span className="text-sm text-mother-gray-dark mr-2">Current Week:</span>
                <span className="text-xl font-semibold text-mother-blue-dark">{currentWeek}</span>
              </div>
              
              <button className="btn-secondary flex items-center">
                <Settings size={16} className="mr-2" />
                Settings
              </button>
            </div>
          </div>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content area - 2/3 width on large screens */}
          <div className="lg:col-span-2 space-y-6">
            {/* Pregnancy Progress Tracker */}
            <section className="glass-card p-6">
              <h2 className="text-xl font-display font-semibold text-mother-blue-dark mb-4">
                Pregnancy Progress
              </h2>
              
              <div className="bg-mother-blue/10 rounded-xl p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-mother-gray-dark">Week 1</span>
                  <span className="text-mother-gray-dark">Week 40</span>
                </div>
                
                <div className="relative h-3 bg-mother-blue/20 rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-mother-blue-dark rounded-full"
                    style={{ width: `${(currentWeek / 40) * 100}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-mother-gray-dark">First Trimester</span>
                  <span className="text-xs text-mother-gray-dark">Second Trimester</span>
                  <span className="text-xs text-mother-gray-dark">Third Trimester</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-mother-blue/10">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-mother-green/20 flex items-center justify-center text-mother-green-dark mr-3">
                      <Heart size={20} />
                    </div>
                    <h3 className="font-medium text-mother-blue-dark">Baby Development</h3>
                  </div>
                  
                  <p className="text-sm text-mother-gray-dark mb-3">
                    Your baby is the size of a cantaloupe and weighs about 1.3 pounds. Their face is fully formed and they're developing taste buds.
                  </p>
                  
                  <button className="text-mother-blue-dark text-sm font-medium hover:underline flex items-center">
                    See detailed development
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
                
                <div className="bg-white p-4 rounded-xl border border-mother-blue/10">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-mother-pink/20 flex items-center justify-center text-mother-pink-dark mr-3">
                      <Calendar size={20} />
                    </div>
                    <h3 className="font-medium text-mother-blue-dark">Key Milestones</h3>
                  </div>
                  
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                      <span className="text-mother-gray-dark">Anatomy Scan Completed</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
                      <span className="text-mother-gray-dark">Glucose Test (Upcoming)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-mother-gray/50 mr-2"></span>
                      <span className="text-mother-gray-dark">Third Trimester Checkup</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            
            {/* Health Metrics */}
            <section className="glass-card p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-display font-semibold text-mother-blue-dark">
                  Health Metrics
                </h2>
                <button className="text-sm text-mother-blue-dark hover:underline">View All</button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-3 rounded-xl border border-mother-blue/10 text-center">
                  <div className="text-xs text-mother-gray-dark mb-1">Blood Pressure</div>
                  <div className="text-xl font-semibold text-mother-blue-dark">110/70</div>
                  <div className="text-xs text-green-600">Normal</div>
                </div>
                
                <div className="bg-white p-3 rounded-xl border border-mother-blue/10 text-center">
                  <div className="text-xs text-mother-gray-dark mb-1">Weight</div>
                  <div className="text-xl font-semibold text-mother-blue-dark">58 kg</div>
                  <div className="text-xs text-green-600">+4.2 kg</div>
                </div>
                
                <div className="bg-white p-3 rounded-xl border border-mother-blue/10 text-center">
                  <div className="text-xs text-mother-gray-dark mb-1">Hydration</div>
                  <div className="text-xl font-semibold text-mother-blue-dark">1.8 L</div>
                  <div className="text-xs text-yellow-600">Need more</div>
                </div>
                
                <div className="bg-white p-3 rounded-xl border border-mother-blue/10 text-center">
                  <div className="text-xs text-mother-gray-dark mb-1">Sleep</div>
                  <div className="text-xl font-semibold text-mother-blue-dark">7.2 hrs</div>
                  <div className="text-xs text-green-600">Good</div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-xl border border-mother-blue/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-mother-blue-dark">Weekly Trends</h3>
                  <div className="flex space-x-2">
                    <button className="text-xs bg-mother-blue-dark text-white px-2 py-1 rounded-md">Weight</button>
                    <button className="text-xs bg-mother-gray/20 text-mother-gray-dark px-2 py-1 rounded-md">BP</button>
                    <button className="text-xs bg-mother-gray/20 text-mother-gray-dark px-2 py-1 rounded-md">Sleep</button>
                  </div>
                </div>
                
                <div className="h-40 bg-mother-gray/10 rounded-lg flex items-center justify-center">
                  <LineChart className="text-mother-gray-dark opacity-50" size={32} />
                  <span className="ml-2 text-sm text-mother-gray-dark">Tracking data visualization</span>
                </div>
              </div>
            </section>
          </div>
          
          {/* Sidebar - 1/3 width on large screens */}
          <div className="space-y-6">
            {/* Risk Assessment */}
            <section className="glass-card p-6">
              <h2 className="text-xl font-display font-semibold text-mother-blue-dark mb-4">
                AI Risk Assessment
              </h2>
              
              <div className={`p-4 rounded-xl mb-4 ${
                riskLevel === 'Low' ? 'bg-mother-green/20' : 
                riskLevel === 'Medium' ? 'bg-mother-yellow/20' : 
                'bg-mother-pink-dark/20'
              }`}>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Current Risk Level</span>
                  <span className={`text-sm font-bold ${
                    riskLevel === 'Low' ? 'text-green-600' : 
                    riskLevel === 'Medium' ? 'text-amber-600' : 
                    'text-red-600'
                  }`}>
                    {riskLevel}
                  </span>
                </div>
                
                <div className="mt-2 text-xs text-mother-gray-dark">
                  Based on your recent health data and check-ups
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg border border-mother-blue/10">
                  <div className="flex justify-between">
                    <span className="text-sm text-mother-gray-dark">Blood Pressure</span>
                    <span className="text-sm font-medium text-green-600">Normal</span>
                  </div>
                </div>
                
                <div className="bg-white p-3 rounded-lg border border-mother-blue/10">
                  <div className="flex justify-between">
                    <span className="text-sm text-mother-gray-dark">Weight Gain</span>
                    <span className="text-sm font-medium text-green-600">Normal</span>
                  </div>
                </div>
                
                <div className="bg-white p-3 rounded-lg border border-mother-blue/10">
                  <div className="flex justify-between">
                    <span className="text-sm text-mother-gray-dark">Swelling</span>
                    <span className="text-sm font-medium text-yellow-600">Mild</span>
                  </div>
                </div>
                
                <div className="bg-white p-3 rounded-lg border border-mother-blue/10">
                  <div className="flex justify-between">
                    <span className="text-sm text-mother-gray-dark">Fetal Movement</span>
                    <span className="text-sm font-medium text-green-600">Active</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full btn-primary mt-4">
                Complete Today's Check-in
              </button>
            </section>
            
            {/* Upcoming Appointments */}
            <section className="glass-card p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-display font-semibold text-mother-blue-dark">
                  Upcoming Appointments
                </h2>
                <button className="text-mother-blue-dark hover:underline text-sm font-medium">
                  Schedule New
                </button>
              </div>
              
              <div className="space-y-3">
                {upcomingAppointments.map(appointment => (
                  <div key={appointment.id} className="bg-white p-4 rounded-xl border border-mother-blue/10">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-mother-blue/20 flex items-center justify-center text-mother-blue-dark mr-3">
                        {appointment.type.includes('Ultrasound') ? (
                          <Bell size={18} />
                        ) : (
                          <Clock size={18} />
                        )}
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-mother-blue-dark">{appointment.type}</h3>
                        <p className="text-sm text-mother-gray-dark">{appointment.doctor}</p>
                        <div className="mt-2 flex items-center">
                          <Calendar size={14} className="text-mother-blue-dark mr-1" />
                          <span className="text-xs text-mother-gray-dark">
                            {new Date(appointment.date).toLocaleDateString('en-US', { 
                              month: 'short', day: 'numeric', year: 'numeric'
                            })} at {appointment.time}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-3 flex space-x-2">
                      <button className="flex-1 text-xs bg-mother-blue text-mother-blue-dark px-3 py-1.5 rounded-lg font-medium">
                        Reschedule
                      </button>
                      <button className="flex-1 text-xs bg-mother-blue-dark text-white px-3 py-1.5 rounded-lg font-medium">
                        Confirm
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4">
                <button className="w-full text-center text-mother-blue-dark hover:underline text-sm font-medium flex items-center justify-center">
                  View All Appointments
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
