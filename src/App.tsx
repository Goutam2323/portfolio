import React, { useState, useEffect, useRef } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle, 
  TrendingUp, 
  Smartphone, 
  CreditCard, 
  BarChart3, 
  Users, 
  ArrowRight,
  Database,
  Globe,
  Zap,
  Layout,
  MessageSquare,
  Coffee,
  Percent,
  Award,
  Bell,
  Star,
  RefreshCw,
  Smartphone as SmartphoneIcon,
  PieChart,
  Heart,
  User,
  Scissors
} from 'lucide-react';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    role: 'customer'
  });
  const [submitted, setSubmitted] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observers = [];
    const sections = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

    sections.forEach(section => {
      observer.observe(section);
      observers.push({ section, observer });
    });

    return () => {
      observers.forEach(({ section, observer }) => observer.unobserve(section));
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send data to a backend
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans text-[#111827] selection:bg-teal-100">
      {/* Custom animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(2deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        .hover-lift {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02);
        }
      `}</style>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-teal-600 p-1.5 rounded-lg">
                <ScissorsIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">ZippyCut</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#6B7280]">
              <a href="#stats" className="hover:text-teal-600 transition-colors">Market</a>
              <a href="#solution" className="hover:text-teal-600 transition-colors">Solution</a>
              <a href="#customers" className="hover:text-teal-600 transition-colors">Customers</a>
              <a href="#barbers" className="hover:text-teal-600 transition-colors">Barbers</a>
              <a href="#features" className="hover:text-teal-600 transition-colors">Features</a>
              <a href="#revenue" className="hover:text-teal-600 transition-colors">Economics</a>
            </div>
            <a 
              href="#waitlist" 
              className="bg-teal-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-teal-700 transition-all hover-lift"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-animate id="hero-content" className={visibleSections['hero-content'] ? 'animate-fadeInUp' : 'opacity-0'}>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-600 border border-teal-100 mb-6 animate-pulse">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
                </span>
                LAUNCHING SOON
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                Book Your Local Barber <br />
                <span className="text-teal-600 text-6xl">in 2 Minutes.</span>
              </h1>
              <p className="text-xl text-[#6B7280] mb-10 max-w-lg leading-relaxed">
                Skip the waiting. Choose your slot. Walk in stress-free. The digital bridge for neighborhood barbershops.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#waitlist" className="flex items-center justify-center px-8 py-4 bg-teal-600 text-white rounded-2xl font-bold text-lg hover:bg-teal-700 shadow-lg shadow-teal-200 transition-all hover-lift">
                  Join Waitlist
                </a>
                <a href="#waitlist" className="flex items-center justify-center px-8 py-4 bg-white text-teal-600 border-2 border-teal-600 rounded-2xl font-bold text-lg hover:bg-teal-50 transition-all hover-lift">
                  Become a Partner
                </a>
              </div>
            </div>

            {/* Booking UI Mockup */}
            <div className="relative" data-animate id="hero-mockup" className={visibleSections['hero-mockup'] ? 'animate-float' : 'opacity-0'}>
              <div className="bg-white rounded-3xl shadow-2xl border border-[#E5E7EB] p-6 max-w-sm mx-auto transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg">Select Slot</h3>
                  <Calendar className="text-teal-600 w-5 h-5" />
                </div>
                <div className="space-y-4">
                  <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
                      <div key={day} className={`flex-shrink-0 w-12 h-16 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 ${i === 2 ? 'bg-teal-600 text-white border-teal-600' : 'bg-white border-gray-100 hover:border-teal-200'}`}>
                        <span className="text-[10px] uppercase opacity-70">{day}</span>
                        <span className="font-bold text-sm">{15 + i}</span>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {['10:00 AM', '11:30 AM', '01:00 PM', '04:30 PM', '06:00 PM', '07:30 PM'].map((time, i) => (
                      <div key={time} className={`p-2 text-center text-[11px] font-semibold rounded-lg border transition-all duration-300 hover:scale-105 hover:shadow-md ${i === 3 ? 'bg-green-50 border-green-200 text-green-700' : 'bg-gray-50 border-gray-100 hover:border-teal-200'}`}>
                        {time}
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-teal-600 text-white py-3 rounded-xl font-bold text-sm mt-4 transition-all hover:bg-teal-700 hover:scale-[1.02] active:scale-[0.98]">
                    Confirm Appointment
                  </button>
                  <p className="text-[10px] text-center text-gray-400">₹100 Booking Amount + UPI Secure</p>
                </div>
              </div>
              {/* Decorative background element */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-teal-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section (Market Gap) */}
      <section id="stats" data-animate className={`py-20 bg-white border-y border-[#E5E7EB] transition-all duration-700 ${visibleSections['stats'] ? 'animate-fadeInUp' : 'opacity-0 translate-y-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">India’s 1M+ Barbershops Are Still Offline</h2>
          <p className="text-[#6B7280] mb-12 max-w-2xl mx-auto">
            Despite massive digital adoption, most neighborhood barbers still operate manually, leading to waiting times and idle hours.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard value="$11.65B+" label="Indian Salon Industry" source="Statista 2024" />
            <StatCard value="750M+" label="Smartphone Users" source="TRAI 2024" />
            <StatCard value="100B+" label="UPI Transactions FY24" source="NPCI Annual Report" />
            <StatCard value="1M+" label="Neighborhood Shops" source="Industry Estimates" />
          </div>
          <p className="mt-10 text-[10px] text-[#6B7280] uppercase tracking-widest">
            Sources: Statista 2024, TRAI Telecom Report 2024, NPCI Annual Report 2023–24.
          </p>
        </div>
      </section>

      {/* Solution Flow - Responsive redesign */}
      <section id="solution" data-animate className={`py-20 bg-[#F9FAFB] transition-all duration-700 ${visibleSections['solution'] ? 'animate-fadeInUp' : 'opacity-0 translate-y-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Simple. Structured. Scalable.</h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto rounded-full"></div>
          </div>
          
          {/* Mobile: 2-column grid, Tablet/Desktop: flex row with connector line */}
          <div className="relative">
            {/* Connector Line - hidden on mobile/tablet, visible on large screens */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row lg:justify-between gap-6 lg:gap-4 relative z-10">
              <SolutionStep icon={<MapPin />} title="Search Nearby" desc="Find barbers in your locality" delay={0} />
              <SolutionStep icon={<Calendar />} title="Pick Slot" desc="Real-time availability" delay={100} />
              <SolutionStep icon={<MessageSquare />} title="Get Confirmed" desc="WhatsApp confirmation" delay={200} />
              <SolutionStep icon={<Clock />} title="Visit & Style" desc="Zero waiting time" delay={300} />
              <SolutionStep icon={<CreditCard />} title="Pay Digital" desc="Seamless UPI integration" delay={400} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: How It Helps Customers - with clear badge */}
      <section id="customers" data-animate className={`py-20 bg-white transition-all duration-700 ${visibleSections['customers'] ? 'animate-fadeInUp' : 'opacity-0 translate-y-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold border border-blue-100 mb-4">
              <User className="w-4 h-4" />
              FOR CUSTOMERS
            </div>
            <h2 className="text-3xl font-bold mb-4">Save Time. Book With Confidence.</h2>
            <p className="text-[#6B7280] max-w-xl mx-auto">Designed to give you convenience and control over your grooming routine.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CustomerBenefit 
              icon={<Clock className="w-6 h-6 text-blue-600" />}
              title="No Waiting"
              description="Book a fixed time slot and avoid crowded shops."
              delay={0}
            />
            <CustomerBenefit 
              icon={<Calendar className="w-6 h-6 text-blue-600" />}
              title="Transparent Availability"
              description="See available time slots before leaving home."
              delay={100}
            />
            <CustomerBenefit 
              icon={<MessageSquare className="w-6 h-6 text-blue-600" />}
              title="Digital Confirmation"
              description="Instant WhatsApp/SMS confirmation for your booking."
              delay={200}
            />
            <CustomerBenefit 
              icon={<CreditCard className="w-6 h-6 text-blue-600" />}
              title="Flexible Payments"
              description="Pay via UPI, cash, or card (Razorpay integration planned)."
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: How It Helps Barbers - with clear badge */}
      <section id="barbers" data-animate className={`py-20 bg-[#F9FAFB] transition-all duration-700 ${visibleSections['barbers'] ? 'animate-fadeInUp' : 'opacity-0 translate-y-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:hidden">
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold border border-amber-100 mb-4">
              <Scissors className="w-4 h-4" />
              FOR BARBERS
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative bg-green-50 rounded-[40px] p-8 lg:p-12 border border-green-100 order-2 lg:order-1 hover-lift transition-all">
              <div className="absolute top-8 right-8 bg-white p-4 rounded-2xl shadow-lg border border-green-100 flex items-center gap-3 animate-pulse">
                <div className="p-2 bg-green-100 rounded-lg">
                  <TrendingUp className="text-green-600 w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Revenue Growth</p>
                  <p className="font-bold text-green-600">+24%</p>
                </div>
              </div>
              <div className="mt-12 space-y-4">
                <div className="h-4 w-3/4 bg-green-200/50 rounded-full"></div>
                <div className="h-4 w-1/2 bg-green-200/50 rounded-full"></div>
                <div className="h-32 w-full bg-white rounded-2xl border border-green-100 flex items-end p-4 gap-2">
                  {[40, 70, 45, 90, 65, 80].map((h, i) => (
                    <div key={i} 
                         className="flex-1 bg-green-500 rounded-t-md transition-all duration-1000 hover:bg-green-600 hover:scale-y-110 origin-bottom" 
                         style={{ height: `${h}%` }}>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="hidden lg:inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold border border-amber-100 mb-6">
                <Scissors className="w-4 h-4" />
                FOR BARBERS
              </div>
              <h2 className="text-4xl font-bold mb-6">Increase Daily Income.<br />Reduce Idle Hours.</h2>
              <div className="space-y-6 mb-10">
                <BenefitItem text="Fill Empty Slots – Convert non-peak hours into confirmed bookings." />
                <BenefitItem text="Structured Schedule – Manage daily appointments easily." />
                <BenefitItem text="Digital Revenue Tracking – Track bookings and earnings." />
                <BenefitItem text="Repeat Customers – Build loyalty with structured booking." />
              </div>
              <a href="#waitlist" className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white rounded-2xl font-bold text-lg hover:bg-teal-700 shadow-lg shadow-teal-200 transition-all hover-lift">
                Apply for Early Partner Access
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NEW CATCHY SECTION: Game-Changing Features */}
      <section id="features" data-animate className={`py-20 bg-white relative overflow-hidden transition-all duration-700 ${visibleSections['features'] ? 'animate-fadeInUp' : 'opacity-0 translate-y-4'}`}>
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-50 rounded-full blur-3xl opacity-30 translate-x-1/3 translate-y-1/3 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-bold text-sm uppercase tracking-widest">The ZippyCut Advantage</span>
            <h2 className="text-4xl font-extrabold mt-2 mb-4">Game-Changing Features</h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">More than just booking – we're building a smarter grooming ecosystem for India.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<RefreshCw className="w-8 h-8 text-teal-600" />}
              title="Real-time Sync"
              description="Never double-booked. Instant updates across all devices."
              gradient="from-teal-50 to-cyan-50"
              delay={0}
            />
            <FeatureCard 
              icon={<SmartphoneIcon className="w-8 h-8 text-teal-600" />}
              title="Barber Dashboard"
              description="Manage appointments, track earnings, and control availability on the go."
              gradient="from-teal-50 to-emerald-50"
              delay={100}
            />
            <FeatureCard 
              icon={<Bell className="w-8 h-8 text-teal-600" />}
              title="Smart Reminders"
              description="Automated WhatsApp reminders reduce no-shows by up to 40%."
              gradient="from-teal-50 to-cyan-50"
              delay={200}
            />
            <FeatureCard 
              icon={<PieChart className="w-8 h-8 text-teal-600" />}
              title="Digital Receipts"
              description="Track your spending history and favorite services."
              gradient="from-teal-50 to-emerald-50"
              delay={300}
            />
            <FeatureCard 
              icon={<Star className="w-8 h-8 text-teal-600" />}
              title="Ratings & Reviews"
              description="Build trust with transparent feedback from real customers."
              gradient="from-teal-50 to-cyan-50"
              delay={400}
            />
            <FeatureCard 
              icon={<Heart className="w-8 h-8 text-teal-600" />}
              title="Personalized Picks"
              description="Get style recommendations based on your past bookings."
              gradient="from-teal-50 to-emerald-50"
              delay={500}
            />
          </div>

          {/* Floating badge for extra pop */}
          <div className="flex justify-center mt-12">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 px-6 py-3 rounded-full text-sm font-semibold border border-teal-200 shadow-sm hover-lift">
              <Zap className="w-4 h-4 fill-teal-600" />
              Constantly evolving with feedback from barbers & customers
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Model (updated) */}
      <section id="revenue" data-animate className={`py-20 bg-[#F9FAFB] border-t border-[#E5E7EB] transition-all duration-700 ${visibleSections['revenue'] ? 'animate-fadeInUp' : 'opacity-0 translate-y-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Simple Commission Model</h2>
            <p className="text-[#6B7280]">Fair pricing for sustainable growth.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Standard Pay-per-booking */}
            <div className="bg-white p-8 rounded-3xl border border-[#E5E7EB] shadow-sm flex flex-col hover-lift">
              <div className="mb-6">
                <h3 className="text-lg font-bold">Pay per booking</h3>
                <p className="text-[#6B7280] text-sm">No upfront cost</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-teal-600">₹10</span>
                <span className="text-[#6B7280]"> / per booking</span>
              </div>
              <ul className="space-y-4 mb-10 text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Booking Management</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> WhatsApp Notifications</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Basic UPI Integration</li>
              </ul>
            </div>

            {/* Premium monthly */}
            <div className="bg-white p-8 rounded-3xl border-2 border-teal-600 shadow-xl shadow-teal-100 flex flex-col relative hover-lift">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase animate-pulse">Optional</div>
              <div className="mb-6">
                <h3 className="text-lg font-bold">Premium Plan</h3>
                <p className="text-[#6B7280] text-sm">Analytics & promotion</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-teal-600">₹500</span>
                <span className="text-[#6B7280]"> / month</span>
              </div>
              <ul className="space-y-4 mb-10 text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> All Standard Features</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Advanced Analytics</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Promoted Store Listing</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Priority Support</li>
              </ul>
            </div>

            {/* Unit Economics Box */}
            <div className="bg-teal-900 text-white p-8 rounded-3xl flex flex-col justify-center items-center text-center hover-lift">
              <h3 className="text-xl font-bold mb-6">Unit Economics</h3>
              <div className="space-y-6 w-full">
                <div className="flex justify-between items-center border-b border-teal-800 pb-2">
                  <span className="text-teal-300 text-sm">Revenue per booking</span>
                  <span className="font-bold">₹10</span>
                </div>
                <div className="flex justify-between items-center border-b border-teal-800 pb-2">
                  <span className="text-teal-300 text-sm">Estimated cost</span>
                  <span className="font-bold">₹4–5</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-teal-300 font-bold uppercase tracking-widest text-xs">Gross Margin</span>
                  <span className="text-2xl font-bold text-green-400">50–60%</span>
                </div>
              </div>
              <p className="mt-8 text-[10px] text-teal-400">Scalable across Tier 1 & 2 cities.</p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">No hidden fees. No setup cost.</p>
        </div>
      </section>

      {/* Technology Section */}
      <section data-animate className={`py-20 bg-white transition-all duration-700 ${visibleSections['tech'] ? 'animate-fadeInUp' : 'opacity-0 translate-y-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-12">Built for Scale</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all">
            <TechItem icon={<Layout />} label="React/Angular" />
            <TechItem icon={<Database />} label="NestJS" />
            <TechItem icon={<Globe />} label="MongoDB" />
            <TechItem icon={<CreditCard />} label="Razorpay" />
            <TechItem icon={<Zap />} label="AWS" />
          </div>
        </div>
      </section>

      {/* Early Access Form */}
      <section id="waitlist" data-animate className={`py-24 bg-teal-600 relative overflow-hidden transition-all duration-700 ${visibleSections['waitlist'] ? 'animate-fadeInUp' : 'opacity-0 translate-y-4'}`}>
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-extrabold text-white mb-6">Be Part of the Digital Grooming Revolution</h2>
          <p className="text-teal-100 text-lg mb-10">Join 200+ early birds waiting for the future of salon bookings in India.</p>
          
          {submitted ? (
            <div className="bg-white p-10 rounded-[32px] text-teal-600 animate-fadeInUp">
              <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500 animate-bounce" />
              <h3 className="text-2xl font-bold">You're on the list!</h3>
              <p className="mt-2 text-gray-600">We'll notify you as soon as we launch in your city.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[32px] shadow-2xl text-left hover-lift">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-600 focus:outline-none transition-all hover:border-teal-300"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="+91"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-600 focus:outline-none transition-all hover:border-teal-300"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">City</label>
                  <input 
                    required
                    type="text" 
                    placeholder="E.g. Bengaluru"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-600 focus:outline-none transition-all hover:border-teal-300"
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Role</label>
                  <select 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-600 focus:outline-none transition-all bg-white hover:border-teal-300"
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                  >
                    <option value="customer">Customer</option>
                    <option value="barber">Barber Partner</option>
                  </select>
                </div>
              </div>
              <button className="w-full py-4 bg-teal-600 text-white rounded-xl font-bold text-lg hover:bg-teal-700 shadow-xl shadow-teal-100 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]">
                Join Early Access <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <div className="bg-teal-600 p-1.5 rounded-lg">
                  <ScissorsIcon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight">ZippyCut</span>
              </div>
              <p className="text-gray-400 text-sm">Apka Barber. Apka Time.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600 font-medium">
              <a href="#" className="hover:text-teal-600 transition-colors">Twitter</a>
              <a href="#" className="hover:text-teal-600 transition-colors">LinkedIn</a>
              <a href="mailto:hello@ZippyCut.com" className="hover:text-teal-600 transition-colors">hello@ZippyCut.com</a>
            </div>
            
            <div className="text-gray-400 text-xs">
              © 2025 ZippyCut. Built for the Indian neighborhood.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Sub-components
const ScissorsIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><line x1="20" y1="4" x2="8.12" y2="15.88" /><line x1="14.47" y1="14.48" x2="20" y2="20" /><line x1="8.12" y1="8.12" x2="12" y2="12" />
  </svg>
);

const StatCard = ({ value, label, source }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div 
      className="p-6 rounded-3xl bg-white border border-gray-100 hover:border-teal-100 hover:shadow-lg transition-all text-left hover-lift"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-3xl font-extrabold text-teal-600 mb-1">{value}</div>
      <div className="text-sm font-bold text-gray-800 mb-2">{label}</div>
      <div className="text-[10px] text-gray-400 uppercase tracking-tighter">{source}</div>
    </div>
  );
};

const SolutionStep = ({ icon, title, desc, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className="flex flex-col items-center text-center group transition-all duration-700"
      style={{ 
        opacity: isVisible ? 1 : 0, 
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${delay}ms` 
      }}
    >
      <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-3 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
        {React.cloneElement(icon, { size: 24 })}
      </div>
      <h3 className="font-bold text-sm md:text-base mb-1">{title}</h3>
      <p className="text-[10px] md:text-[11px] text-[#6B7280] max-w-[120px] md:max-w-[140px]">{desc}</p>
    </div>
  );
};

const CustomerBenefit = ({ icon, title, description, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all text-center hover-lift"
      style={{ 
        opacity: isVisible ? 1 : 0, 
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.2s ease',
        transitionDelay: `${delay}ms` 
      }}
    >
      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="font-bold text-base mb-2">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

const BenefitItem = ({ text }) => (
  <div className="flex items-center gap-3 group">
    <div className="flex-shrink-0 w-6 h-6 bg-green-50 rounded-full flex items-center justify-center border border-green-100 group-hover:bg-green-100 transition-colors">
      <CheckCircle className="w-4 h-4 text-green-600" />
    </div>
    <span className="text-gray-700 font-medium">{text}</span>
  </div>
);

const FeatureCard = ({ icon, title, description, gradient, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className={`group relative p-8 rounded-3xl bg-gradient-to-br ${gradient} border border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300 overflow-hidden hover-lift`}
      style={{ 
        opacity: isVisible ? 1 : 0, 
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.2s ease',
        transitionDelay: `${delay}ms` 
      }}
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-white/30 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
      <div className="relative z-10">
        <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-5 border border-teal-100 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const TechItem = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-2 group">
    <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-teal-50 transition-colors group-hover:scale-110 transition-transform">
      {React.cloneElement(icon, { size: 24, strokeWidth: 1.5, className: "group-hover:text-teal-600 transition-colors" })}
    </div>
    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-teal-600 transition-colors">{label}</span>
  </div>
);

export default App;