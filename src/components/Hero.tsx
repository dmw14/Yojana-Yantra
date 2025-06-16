
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-24">
      {/* Indian Flag Colors Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-r from-orange-400 to-orange-500 opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-r from-green-400 to-green-500 opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Indian Flag Symbol */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-blue-100">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <div className="w-full h-4 bg-gradient-to-r from-orange-400 to-orange-500"></div>
                    <div className="w-full h-4 bg-white flex items-center justify-center">
                      <div className="w-8 h-8 border-2 border-blue-900 rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-blue-900 rounded-full"></div>
                      </div>
                    </div>
                    <div className="w-full h-4 bg-gradient-to-r from-green-400 to-green-500"></div>
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-600 font-medium">
                Stay Informed. Stay Ahead.
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight">
                UNLOCK YOUR
                <span className="block text-blue-700">BENEFITS.</span>
                <span className="block text-blue-800">DISCOVER THE</span>
                <span className="block text-blue-900">SCHEMES MADE FOR</span>
                <span className="block text-blue-700">YOU.</span>
              </h1>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-cyan-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg text-gray-700 font-medium">
                    Schemes Simplified. Opportunities Amplified.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-cyan-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg text-gray-700 font-medium">
                    Har Yojana, Har Nagrik Tak.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-cyan-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg text-gray-700 font-medium">
                    Student? Farmer? Entrepreneur? We've Got You Covered.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold">
                Explore Schemes
              </Button>
              <Button size="lg" variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold">
                Check Eligibility
              </Button>
            </div>
          </div>

          {/* Right Content - Image/Illustration */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <img 
                src="/lovable-uploads/31c3aba2-966c-4f68-b1df-c0fbacbbf6fe.png"
                alt="Person celebrating government scheme benefits"
                className="w-full h-auto rounded-lg"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-200 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-green-200 rounded-full opacity-60 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
