import {
  Mail,
  ExternalLink,
  Linkedin,
  Award,
  Briefcase,
  Users,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

function App() {
  const [showAll, setShowAll] = useState(false);
  const [index, setIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  const blogs = [
    {
      title:
        "SERVIZ Redefines Service Landscape: Leads HVAC India’s After-Sales Transformation",
      link: "https://medium.com/@aarush_90764/serviz-redefines-service-landscape-leads-hvac-indias-after-sales-transformation-d8ab2a2cedc4",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*GOrduWMWxLDb8Uy4bFLBEA.jpeg",
      description:
        "How SERVIZ is transforming after-sales service in the HVAC industry with a customer-first and tech-driven approach.",
    },
    {
      title:
        "How SERVIZ is Changing the HVAC Solutions Landscape for Corporates in India",
      link: "https://medium.com/@aarush_90764/how-serviz-is-changing-the-hvac-solutions-landscape-for-corporates-in-india-8ebd5fd712ff",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*S1HWF5hoD0kt715hIMzFjg.jpeg",
      description:
        "A story of how Aarush Dhawan and his team at SERVIZ are helping corporations streamline HVAC maintenance and customer experience.",
    },
    {
      title: "What Happens When an Unhappy Customer and a CEO Come Together?",
      link: "https://medium.com/@aarush_90764/what-happens-when-an-unhappy-customer-and-a-ceo-come-together-4eeeccaa58c7",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*iCKr-j79zqUSkmkONC0oIw.jpeg",
      description:
        "A real-life story from Aarush Dhawan on how empathy, leadership, and accountability can transform customer experiences.",
    },
    {
      title: "Young Leaders Under 40: Building a New India",
      link: "https://medium.com/@aarush_90764/young-leaders-under-the-age-of-40-building-a-new-india-featuring-aarush-dhawan-6168de4ec980",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*3MRDRXwM563CK-JBPSuMiw.png",
      description:
        "Featured in Outlook India, this story highlights Aarush Dhawan’s journey as a young leader building a new India through innovation and entrepreneurship.",
    },
    {
      title:
        "Young Leaders Under 40: Featuring Aarush Dhawan, Founder of SERVIZ",
      link: "https://medium.com/@aarush_90764/young-leaders-under-the-age-of-40-building-a-new-india-featuring-aarush-dhawan-founder-of-serviz-0085b39e6259",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*3MRDRXwM563CK-JBPSuMiw.png",
      description:
        "A deep dive into Aarush Dhawan’s entrepreneurial story, leadership philosophy, and mission to redefine India’s post-purchase service landscape.",
    },
    {
      title:
        "Discover How SERVIZ is Revolutionizing the HVAC Industry in India",
      link: "https://medium.com/@aarush_90764/discover-how-serviz-is-revolutionizing-the-hvac-industry-in-india-670e4c305501",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*RxMiiknR6URS2TAQhIWdOQ.png",
      description:
        "Discover how SERVIZ is bridging the gap between brands, technicians, and customers to create India’s most reliable HVAC service ecosystem.",
    },

    {
      title:
        "Marketing Pro Quits High-Paying Job to Solve Big Problem in Electronics Sector",
      link: "https://medium.com/@aarush_90764/marketing-pro-quits-high-paying-job-to-solve-big-problem-in-electronics-sector-now-building-669877b70d78",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*jJ2GZEv_3nXgPZULOWSD3Q.jpeg",
      description:
        "From corporate success to startup hustle — Aarush Dhawan’s inspiring transition from a marketing professional to a founder on a mission.",
    },
    {
      title:
        "Revolutionizing After-Sales Services in India: SERVIZ – A Growth Story",
      link: "https://medium.com/@aarush_90764/revolutionizing-after-sales-services-in-india-serviz-a-growth-story-6177373ed829",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*HRZ-nULopEMi6bddcszAlQ.jpeg",
      description:
        "An inside look at SERVIZ’s growth story — how innovation, execution, and customer empathy turned a problem into a scalable business model.",
    },
  ];
  const images = [
    "/Gallery/aarush Dhawan Outlook 40U40 2.png",
    "/Gallery/Mobility SERVIZ Article.png",
    "/Gallery/Screenshot 2024-12-26 192858.jpg",
    "/Gallery/Untitled design (22).png",
    "/Gallery/Pic 1.JPG",
    "/Gallery/Pic 2.JPG",
    "/Gallery/Startup Pedia Article.jpg",
    "/Gallery/WhatsApp Image 2024-02-15 at 14.46.20 (1).jpeg",
  ];
  const visibleBlogs = showAll ? blogs : blogs.slice(index, index + 3);

  const handleNext = () => {
    if (index + 3 < blogs.length) setIndex(index + 3);
  };

  const handlePrev = () => {
    if (index - 3 >= 0) setIndex(index - 3);
  };
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault(); // prevent reload

    if (!form.current) {
      alert("Form not loaded yet!");
      return;
    }
    toast.loading("Sending message...");
    
    // Step 3: send form using EmailJS
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID_Aarush_Dhawan,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_Aarush_Dhawan,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY_Aarush_Dhawan
      )
      .then(
        () => {
          toast.dismiss();
          toast.success("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          toast.dismiss();
          console.error("EmailJS error:", error);
          toast.error("Failed to send message. Please try again later.");
        }
      );
  };
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email.trim()) {
      toast.error("Please enter your email before subscribing.");
      return;
    }
      if (!emailRegex.test(email)) {
      toast.error("❌ Please enter a valid email address.");
      return;
    }

    toast.success(" Subscribed successfully!");
    setEmail(""); // clear the input
  };

  return (
    <div className="min-h-screen bg-white">
           <Toaster position="top-right" reverseOrder={false} />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#F7931E] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AD</span>
              </div>
              <div>
                <div className="font-bold text-gray-900">Aarush Dhawan</div>
                <div className="text-xs text-gray-500">
                  Entrepreneur & Business Coach
                </div>
              </div>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex gap-8 text-sm">
              <a
                href="#about"
                className="text-gray-700 hover:text-[#7961A3] transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-gray-700 hover:text-[#7961A3] transition-colors"
              >
                Experience
              </a>
              <a
                href="#speaking"
                className="text-gray-700 hover:text-[#7961A3] transition-colors"
              >
                Speaking
              </a>
              <a
                href="#media"
                className="text-gray-700 hover:text-[#7961A3] transition-colors"
              >
                Media
              </a>
              <a
                href="#blogs"
                className="text-gray-700 hover:text-[#7961A3] transition-colors"
              >
                Blogs
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-[#7961A3] transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden focus:outline-none"
            >
              {menuOpen ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden bg-white border-t border-gray-200 shadow-sm transition-all duration-300 ${
            menuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col px-6 py-4 space-y-4 text-sm">
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-[#F7931E] transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-[#F7931E] transition-colors"
            >
              Experience
            </a>
            <a
              href="#speaking"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-[#F7931E] transition-colors"
            >
              Speaking
            </a>
            <a
              href="#media"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-[#F7931E] transition-colors"
            >
              Media
            </a>
            <a
              href="#blogs"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-[#F7931E] transition-colors"
            >
              Blogs
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-[#F7931E] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32  px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2 leading-tight">
                Aarush Dhawan{" "}
              </h1>
              <h2 className="text-1xl lg:text-1xl font-bold text-gray-900 mb-6 leading-tight">
                Founder, Entrepreneur, Leader, Motivation & Sales Coach{" "}
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed text-justify">
                Founder, COO & CMO at SERVIZ. Entrepreneur, Hustler, Problem
                Solver and Passionate about building businesses and brands. He
                is a known speaker and coach on entrepreneurship, leadership,
                motivation and sales. An accomplished professional with 18 years
                of successful career in Brand Building, Corporate Sales/ B2B
                Sales, D2C Sales, Strategy Planning, Revenue Generation, Product
                Management and Client Acquisition. Experience in Branding, Sales
                & Marketing, Channel Sales, Modern Trade, International
                Corporate Sales, Online Sales and Product Management. Exposure
                of working in various sectors including FMCG, Consumer
                Electronics, Media & Publication, NGO, Hospitality and SaaS.
              </p>
              <div className="flex gap-4 mb-8">
                <a
                  href="#contact"
                  className="px-8 py-3 bg-[#F7931E] hover:bg-[#e88815] text-white font-semibold rounded-lg transition-colors"
                >
                  Start a Talk
                </a>
                <a
                  href="#speaking"
                  className="px-8 py-3 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg border border-gray-300 transition-colors"
                >
                  Speaking Topics
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>Outlook India — 40 Under 40</span>
                </div>
              </div>
              {/* <div className="mt-6 flex gap-4">
                <a href="https://www.linkedin.com/in/aarushdhawan" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#7961A3] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://medium.com/@aarush" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#7961A3] transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div> */}
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 "></div>
                <img
                  src="/Aarush's Picture.png"
                  alt="Aarush Dhawan"
                  className="relative  w-full max-w-md"
                />
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-16 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Subscribe to Aarush's Newsletter
                </h3>
                <p className="text-sm text-gray-600">
                  Subscribe for short, practical write-ups — no fluff.
                </p>
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                              value={email}

                              onChange={(e) => setEmail(e.target.value)}

                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7961A3] focus:border-transparent text-sm flex-1 md:w-64"
                />
                <button className="px-6 py-2 bg-[#F7931E] hover:bg-[#e88815] text-white font-semibold rounded-lg transition-colors whitespace-nowrap text-sm"             onClick={handleSubscribe}
 >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-20  pb-0 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-1">
            About Aarush
          </h2>
          <h2 className="text-1xl lg:text-1xl font-bold text-gray-500 mb-6 leading-tight">
            {" "}
            Sales | Leadership | Entrepreneurship | Motivation
          </h2>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed">
              <p>
                <span className="font-bold">Aarush Dhawan</span> is a new-age
                entrepreneur and the Founder of SERVIZ, India’s fast-growing
                home appliance service brand under Infervize Home Services Pvt.
                Ltd. Known for his charismatic leadership and practical approach
                to business, Aarush has built{" "}
                <span className="font-semibold text-[#7961A3]">SERVIZ</span>{" "}
                into a trusted name that bridges the gap between brands,
                technicians, and consumers.
              </p>
              <p>
                As a speaker, Aarush shares{" "}
                <span className="font-bold">
                  real stories and lessons from his journey
                </span>{" "}
                — from building a startup to inspiring teams, sales
                professionals, and young entrepreneurs to take bold action, lead
                with empathy, and execute with clarity.
              </p>
              <p>
                <span className="font-bold">Aarush Dhawan</span> is an
                entrepreneur, leader, and speaker driven by one mission — to
                redefine how India experiences post-purchase service. As the
                Founder and CEO of{" "}
                <span className="font-semibold text-[#7961A3]">
                  SERVIZ (Infervize Home Services Pvt. Ltd.)
                </span>
                , he has turned a widespread problem affecting 80% of Indian
                households into a thriving business solution trusted by brands
                and customers alike.
              </p>
              <p>
                Aarush’s leadership philosophy is built on three pillars:{" "}
                <span className="font-bold">
                  clarity, empathy, and execution.
                </span>{" "}
                His journey from startup struggles to building one of India’s
                most promising home service ventures makes him a powerful voice
                on{" "}
                <span className="font-bold">
                  sales, leadership, entrepreneurship and motivation.
                </span>
              </p>
              <p>
                Through his talks, Aarush combines{" "}
                <span className="font-bold">
                  real-life stories, actionable lessons, and an unfiltered
                  perspective
                </span>{" "}
                on what it truly takes to build teams, win customers, and scale
                ideas into impactful businesses.
              </p>
              <p>
                His sessions leave audiences not just inspired, but ready to
                lead — because for Aarush, leadership isn’t about titles; it’s
                about taking responsibility and creating results.
              </p>

              {/* <div className="pt-6 border-t border-gray-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Leadership</div>
                    <div className="font-medium text-gray-900">Gumby, Empathy, Execution</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Focus Areas</div>
                    <div className="font-medium text-gray-900">GTM Ops, Schedules Enablement</div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="space-y-6">
              <div className="bg-[#7961A3] p-6 rounded-2xl text-white">
                <h3 className="font-semibold mb-4 text-lg">What’s on offer</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="text-white/70 mb-1">Topics</div>
                    <div className="font-medium">
                      Sales | Leadership | Entrepreneurship | Motivation
                    </div>
                  </div>
                  <div>
                    <div className="text-white/70 mb-1">Languages</div>
                    <div className="font-medium">English and Hindi</div>
                  </div>
                  <div>
                    <div className="text-white/70 mb-1">Theme</div>
                    <div className="font-medium">
                      “Real stories. Real lessons. Real experiences.”{" "}
                    </div>
                  </div>
                  {/* <div>
                    <div className="text-white/70 mb-1">Contact</div>
                    <a href="mailto:aarush@aarushdhawan.com" className="text-white hover:underline font-medium">
                      aarush@aarushdhawan.com
                    </a>
                  </div> */}
                </div>
               <a    href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-gray-0 transition-colors"
            > <button className="w-full mt-6 px-6 py-2.5 bg-[#F7931E] hover:bg-[#e88815] text-white font-semibold rounded-lg transition-colors">

           
              Contact Us
                          </button> </a> 
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media & Recognition */}
      <section id="media" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className=" mb-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Media & Recognition
            </h2>
            <p className="text-gray-600 text-lg ">
              Aarush Dhawan and SERVIZ have been featured in top business and
              startup publications, recognized for redefining India’s
              post-purchase and HVAC service landscape.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Card Template */}
            {[
              {
                title: "Outlook India — 40 Under 40: Building a New India",
                link: "https://www.outlookindia.com/hub4business/young-leaders-under-the-age-of-40-building-a-new-india",
                logo: "https://img-2.outlookindia.com/outlookindia/2024-02/96fb06ce-1cc8-410e-ad6c-da4de57405f8/Outlook.svg",
              },
              {
                title:
                  "Mobility India — SERVIZ leads India’s HVAC after-sales transformation",
                link: "https://www.mobilityindia.com/serviz-redefines-service-landscape-leads-hvac-indias-after-sales-transformation/",
                logo: "https://mobility-india.org/wp-content/uploads/2023/03/mi-logo.svg",
              },
              {
                title:
                  "Business Connect India — SERVIZ HVAC Solutions for Corporate India",
                link: "https://businessconnectindia.in/serviz-hvac-solutions-corporate-india/",
                logo: "https://businessconnectindia.in/wp-content/uploads/2024/01/Business-Connect-Magazine-Logo-2-1-1.png",
              },
              {
                title:
                  "The Karo Startup — Discover How SERVIZ is Revolutionizing HVAC in India",
                link: "https://thekarostartup.com/discover-how-serviz-is-revolutionizing-the-hvac-industry-in-india/",
                logo: "https://thekarostartup.com/wp-content/uploads/2025/09/main-logo-300x121-1.png",
              },
              {
                title:
                  "Money Mint — When an Unhappy Customer and a CEO Come Together",
                link: "https://moneymint.com/what-happens-when-an-unhappy-customer-and-a-ceo-come-together/",
                logo: "https://moneymint.com/wp-content/uploads/2024/08/Moneymint_new.png",
              },
              {
                title:
                  "Startup Pedia — Building India’s Largest After-Sales Network",
                link: "https://startuppedia.in/startup-stories/marketing-pro-quits-high-paying-job-to-solve-big-problem-in-electronics-sector-now-building-indias-largest-after-sales-service-network-8731822",
                logo: "https://img-cdn.publive.online/fit-in/360x160/filters:format(webp)/startuppedia/media/agency_attachments/a0o0itom23hdjpr3t3y0.png",
              },
              {
                title:
                  "The Karo Startup — Revolutionizing After-Sales Services: SERVIZ",
                link: "https://thekarostartup.com/revolutionizing-after-sales-services-serviz/",
                logo: "https://thekarostartup.com/wp-content/uploads/2025/09/main-logo-300x121-1.png",
              },
              {
                title:
                  "The Karo Startup (LinkedIn) — In Conversation with Aarush Dhawan",
                link: "https://www.linkedin.com/posts/karo-startup_in-conversation-with-aarush-dhawan-co-founder-activity-7277334937437970433-7GDP/?utm_source=share&utm_medium=member_desktop",
                logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
              },
              {
                title:
                  "The Karo Startup (Instagram) — Feature Reel on Aarush Dhawan",
                link: "https://www.instagram.com/reel/DD9tTt8zl5o/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
              },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex flex-col h-full justify-between">
                  <div className="p-8 pb-4">
                    <img
                      src={item.logo}
                      alt={item.title}
                      className="h-10 w-auto mb-6 grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <p className="font-semibold text-gray-900 leading-snug group-hover:text-[#F7931E] transition-colors">
                      {item.title}
                    </p>
                  </div>
                  <div className="px-8 py-4 border-t border-gray-200 text-sm text-[#F7931E] font-semibold group-hover:text-[#e88815] transition">
                    Read Full Story →
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="mb-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Gallery & Portraits
            </h2>
            <p className="text-gray-600 text-lg ">
              A glimpse into moments, media features, and professional portraits
              that reflect the journey of Aarush Dhawan.
            </p>
          </div>

          {/* Image Grid */}
          <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
            {images.map((src, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-2xl group shadow-md hover:shadow-xl transition-all duration-500"
              >
                <img
                  src={src}
                  alt={`Aarush Dhawan Portrait ${idx + 1}`}
                  className="w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
        </div>
      </section>

      {/* Blogs Section */}
      <section id="blogs" className="pt-20 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Blogs</h2>

            <div className="flex items-center gap-4">
              {!showAll && (
                <>
                  <button
                    onClick={handlePrev}
                    disabled={index === 0}
                    className={`p-2 rounded-full border border-gray-300 shadow-sm transition ${
                      index === 0
                        ? "opacity-40 cursor-not-allowed"
                        : "hover:bg-[#F7931E]/10"
                    }`}
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={index + 3 >= blogs.length}
                    className={`p-2 rounded-full border border-gray-300 shadow-sm transition ${
                      index + 3 >= blogs.length
                        ? "opacity-40 cursor-not-allowed"
                        : "hover:bg-[#F7931E]/10"
                    }`}
                  >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                  </button>
                </>
              )}

              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-2.5 bg-[#F7931E] hover:bg-[#e88815] text-white font-semibold rounded-lg transition-colors text-sm"
              >
                {showAll ? "Show Less" : "See All Stories"}
              </button>
            </div>
          </div>

          {/* Blog Cards */}
          <div
            className={`grid gap-8 transition-all duration-500 ${
              showAll ? "md:grid-cols-3" : "grid-cols-1 md:grid-cols-3"
            }`}
          >
            {visibleBlogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {blog.description}
                  </p>
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F7931E] font-semibold hover:text-[#e88815] transition-colors text-sm"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="pt-20 pb-0 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Experience</h2>
          <div className="space-y-10">
            <div className="relative pl-8 border-l-2 border-[#7961A3]">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-[#7961A3] rounded-full"></div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-sm text-gray-500 mb-1">SERVIZ · Startup</p>
                  <h3 className="text-xl font-bold text-gray-900">
                    Co-Founder — SERVIZ (Infervize Home Services Pvt. Ltd.)
                  </h3>
                </div>
                <span className="text-gray-500 text-sm whitespace-nowrap">
                  Nov 2022 — Present
                </span>
              </div>
              <p className="text-gray-700 mt-2">
                Built SERVIZ to address post-purchase service gap for home
                appliances across India. Led brand, operations, GTM and
                partnerships. Defined product/tech roadmap for service
                fulfilment and technician quality.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-gray-300">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-300 rounded-full"></div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-sm text-gray-500 mb-1">D2C / Ops</p>
                  <h3 className="text-xl font-bold text-gray-900">
                    CEO — Amplifii Plus
                  </h3>
                </div>
                <span className="text-gray-500 text-sm whitespace-nowrap">
                  Feb 2022 — Mar 2023
                </span>
              </div>
              <p className="text-gray-700 mt-2">
                Led company operations and GTM for Amplifii Plus.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-gray-300">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-300 rounded-full"></div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Serviced Apartments
                  </p>
                  <h3 className="text-xl font-bold text-gray-900">
                    Head of Corporate Sales — thesqua.re serviced apartments
                  </h3>
                </div>
                <span className="text-gray-500 text-sm whitespace-nowrap">
                  Sep 2018 — Feb 2022
                </span>
              </div>
              <p className="text-gray-700 mt-2">
                Headed corporate sales and strategic partnerships for
                serviced-apartment brand.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-gray-300">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-300 rounded-full"></div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Non-profit / Publishing
                  </p>
                  <h3 className="text-xl font-bold text-gray-900">
                    General Manager — The Art of Living
                  </h3>
                </div>
                <span className="text-gray-500 text-sm whitespace-nowrap">
                  Apr 2017 — Sep 2018
                </span>
              </div>
              <p className="text-gray-700 mt-2">
                Managed sales, publications and audio/video product lines.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-gray-300">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-300 rounded-full"></div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Media</p>
                  <h3 className="text-xl font-bold text-gray-900">
                    Regional Manager — Times Group (Bennett, Coleman & Co.)
                  </h3>
                </div>
                <span className="text-gray-500 text-sm whitespace-nowrap">
                  Jul 2011 — Mar 2017
                </span>
              </div>
              <p className="text-gray-700 mt-2">
                Led regional sales teams and partnerships in North India.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-gray-300">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-300 rounded-full"></div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-sm text-gray-500 mb-1">FMCG</p>
                  <h3 className="text-xl font-bold text-gray-900">
                    Area Sales Officer — Nestlé India
                  </h3>
                </div>
                <span className="text-gray-500 text-sm whitespace-nowrap">
                  Dec 2008 — Jan 2011
                </span>
              </div>
              <p className="text-gray-700 mt-2">
                Channel sales and on-ground distributor management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking & Workshops */}
      <section id="speaking" className="pt-20 pb-0 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Speaking & Workshops
          </h2>
          <p className="text-gray-600 mb-12">
            Practical, story-driven sessions tailored for founders and GTM
            teams.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Workshop Topics
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#7961A3] mt-1 flex-shrink-0" />
                  <span>Scaling Sales Operations for Startups</span>
                </li>
                <li className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-[#7961A3] mt-1 flex-shrink-0" />
                  <span>Building Customer-Centric Service Organisations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-[#7961A3] mt-1 flex-shrink-0" />
                  <span>Leadership: Gumby, Empathy, Execution</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Speaking Topics
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <ExternalLink className="w-5 h-5 text-[#7961A3] mt-1 flex-shrink-0" />
                  <span>GTM & Channel Strategy (half/full day)</span>
                </li>
                <li className="flex items-start gap-3">
                  <ExternalLink className="w-5 h-5 text-[#7961A3] mt-1 flex-shrink-0" />
                  <span>
                    Building High-Performance Sales Teams (half/full day)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ExternalLink className="w-5 h-5 text-[#7961A3] mt-1 flex-shrink-0" />
                  <span>
                    Branding for Founder-Led Startups (2-3 hour workshop)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-gray-600 mt-8 text-center">
            Custom sessions and corporate training available. Email{" "}
            <a
              href="mailto:aarushdhawan@gmail.com"
              className="text-gray-900 font-medium hover:text-[#7961A3]"
            >
              aarushdhawan@gmail.com{" "}
            </a>{" "}
            for availability and fees.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Work with Aarush
              </h2>
              <p className="text-gray-600 mb-8">
                For speaking requests, partnerships or advisory sessions, reach
                out — or use the form.
              </p>

              <div className="space-y-4 mb-4">
                {/* <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#7961A3] rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm">Phone</div>
                    <a href="tel:+919810619217" className="text-gray-900 font-medium hover:text-[#7961A3]">
                      +91 98106 19217
                    </a>
                  </div>
                </div> */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#7961A3] rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm">Email</div>
                    <a
                      href="mailto:aarushdhawan@gmail.com"
                      className="text-gray-900 font-medium hover:text-[#7961A3]"
                    >
                      aarushdhawan@gmail.com{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                {/* <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#7961A3] rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm">Phone</div>
                    <a href="tel:+919810619217" className="text-gray-900 font-medium hover:text-[#7961A3]">
                      +91 98106 19217
                    </a>
                  </div>
                </div> */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#7961A3] rounded-lg flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm">LinkedIn</div>
                    <a
                      href=" https://www.linkedin.com/in/aarush-dhawan-5b382a15/"
                      className="text-gray-900 font-medium hover:text-[#7961A3]"
                    >
                      Aarush Dhawan{" "}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#7961A3] rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faMedium}
                      className="w-6 h-6 text-white"
                    />
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm">Medium</div>
                    <a
                      href="https://medium.com/@aarush_90764"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 font-medium hover:text-[#7961A3]"
                    >
                      Aarush Dhawan{" "}
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <a
                  href="https://drive.google.com/your-resume-link"
                  className="flex items-center justify-between text-[#7961A3] hover:text-[#5a4d82] font-semibold"
                >
                  <span>Download Resume</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
                <p className="text-gray-600 text-sm mt-2">Get my most up-to-date CV</p>
              </div> */}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Message</h3>

              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7961A3] focus:border-transparent"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7961A3] focus:border-transparent"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Your message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7961A3] focus:border-transparent resize-none"
                    placeholder="Tell me about your project or speaking request..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-[#F7931E] hover:bg-[#e88815] text-white font-semibold rounded-lg transition-colors"
                >
                  Send message
                </button>
              </form>

              <p className="text-gray-500 text-xs mt-4 text-center">
                I'll get back to you soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 text-gray-600 py-8 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm">
              © 2025 Aarush Dhawan - All rights reserved.
            </p>
            {/* <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-[#7961A3] transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-[#7961A3] transition-colors">Insta</a>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
