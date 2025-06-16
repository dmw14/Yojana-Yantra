
import { Home, Book, User, Calendar, Info, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    icon: Home,
    title: "Housing Schemes",
    description: "Affordable housing & home ownership programs",
    color: "from-orange-400 to-orange-500",
    bgColor: "bg-orange-50 hover:bg-orange-100"
  },
  {
    icon: Book,
    title: "Education Schemes",
    description: "Scholarships, loans & educational support",
    color: "from-green-400 to-green-500",
    bgColor: "bg-green-50 hover:bg-green-100"
  },
  {
    icon: User,
    title: "Employment & Skill Development",
    description: "Job training, skill development & employment",
    color: "from-blue-400 to-blue-500",
    bgColor: "bg-blue-50 hover:bg-blue-100"
  },
  {
    icon: Calendar,
    title: "Agriculture & Farmers",
    description: "Farming support, subsidies & rural development",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50 hover:bg-green-100"
  },
  {
    icon: Info,
    title: "Health & Medical",
    description: "Healthcare schemes & medical assistance",
    color: "from-red-400 to-red-500",
    bgColor: "bg-red-50 hover:bg-red-100"
  },
  {
    icon: User,
    title: "Senior Citizens",
    description: "Pension schemes & elderly care programs",
    color: "from-purple-400 to-purple-500",
    bgColor: "bg-purple-50 hover:bg-purple-100"
  },
  {
    icon: Search,
    title: "Divyangjan (Persons with Disabilities)",
    description: "Support schemes for persons with disabilities",
    color: "from-indigo-400 to-indigo-500",
    bgColor: "bg-indigo-50 hover:bg-indigo-100"
  },
  {
    icon: User,
    title: "More",
    description: "Explore additional schemes & categories",
    color: "from-gray-400 to-gray-500",
    bgColor: "bg-gray-50 hover:bg-gray-100"
  }
];

const SchemeCategories = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-blue-800 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            GOVERNMENT SCHEMES - CATEGORY
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Discover schemes organized by categories to find the perfect match for your needs
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => (
            <Card 
              key={index}
              className={`${category.bgColor} border-none transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group`}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            Get Access to the Very Latest Schemes Now!
          </h3>
          <div className="flex justify-center space-x-4">
            <div className="w-8 h-8 bg-orange-400 rounded-full opacity-60 animate-pulse"></div>
            <div className="w-8 h-8 bg-white rounded-full opacity-60 animate-pulse delay-300"></div>
            <div className="w-8 h-8 bg-green-400 rounded-full opacity-60 animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchemeCategories;
