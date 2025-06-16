
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const schemes = [
  {
    name: "Ladli Bahu Yojana",
    category: "Women Welfare",
    summary: "₹1,500 Monthly Assistance For Eligible Women In Maharashtra.",
    status: "Ongoing",
    statusColor: "bg-green-100 text-green-800"
  },
  {
    name: "Mahajyoti Coaching Scheme",
    category: "Education",
    summary: "Free Coaching For UPSC, MPSC, JEE, NEET For SC/ST/OBC Students.",
    status: "Registrations Open",
    statusColor: "bg-blue-100 text-blue-800"
  },
  {
    name: "Pm E-Rickshaw Scheme",
    category: "Women Empowerment",
    summary: "Financial Aid For Women To Own & Operate Electric Rickshaws.",
    status: "New Launch",
    statusColor: "bg-purple-100 text-purple-800"
  },
  {
    name: "CIDCO Housing Scheme",
    category: "Housing",
    summary: "990 Flats At Subsidised Prices In Mumbai For EWS-LIG Groups.",
    status: "Application Open",
    statusColor: "bg-orange-100 text-orange-800"
  },
  {
    name: "Falkun Lagvad Yojana",
    category: "Agriculture",
    summary: "Subsidies And Support For Orchard & Horticulture Farming.",
    status: "Active",
    statusColor: "bg-green-100 text-green-800"
  }
];

const TrendingSchemes = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            TRENDING YOJANAS - MAHARASHTRA
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay updated with the most popular and recently launched government schemes
          </p>
        </div>

        {/* Schemes Table/Cards */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-blue-900 text-white px-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-semibold">
              <div>SCHEME NAME</div>
              <div className="hidden md:block">CATEGORY</div>
              <div className="hidden md:block">SUMMARY</div>
              <div>STATUS</div>
            </div>
          </div>

          {/* Schemes List */}
          <div className="divide-y divide-gray-200">
            {schemes.map((scheme, index) => (
              <div 
                key={index}
                className="px-6 py-4 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1">
                      {scheme.name}
                    </h3>
                    <p className="text-sm text-gray-600 md:hidden">
                      {scheme.category}
                    </p>
                  </div>
                  <div className="hidden md:block">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      {scheme.category}
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-600">
                    {scheme.summary}
                  </div>
                  <div>
                    <Badge className={scheme.statusColor}>
                      {scheme.status}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            HELPING YOU CLAIM THE SCHEMES YOU DESERVE — EASILY.
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Navigating government schemes can be confusing and time-consuming. With Yojana Yantra, we 
            simplify the process by matching you with the right schemes based on your profile and guiding you 
            through every step—right from eligibility to application. No paperwork confusion. No missed 
            benefits. Just smooth, stress-free access to what you're entitled to.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrendingSchemes;
