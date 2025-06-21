import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Target, 
  ArrowLeft, 
  Star, 
  Quote, 
  Users, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Play,
  MessageSquare,
  ThumbsUp,
  Award
} from "lucide-react"
import Link from "next/link"

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp Inc.",
      avatar: "/avatars/sarah.jpg",
      rating: 5,
      content: "TaskFlow.ai has completely transformed how our team collaborates. The AI-powered automation saves us hours every week, and the analytics help us make data-driven decisions.",
      date: "2 weeks ago",
      verified: true
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Engineering Lead",
      company: "StartupXYZ",
      avatar: "/avatars/michael.jpg",
      rating: 5,
      content: "The project management features are incredible. We can track everything from simple tasks to complex multi-team projects. The time tracking integration is a game-changer.",
      date: "1 month ago",
      verified: true
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "GrowthCo",
      avatar: "/avatars/emily.jpg",
      rating: 5,
      content: "As a marketing team, we love the collaboration features. Real-time messaging, file sharing, and video meetings all in one platform. It's exactly what we needed.",
      date: "3 weeks ago",
      verified: true
    },
    {
      id: 4,
      name: "David Thompson",
      role: "CEO",
      company: "InnovateLab",
      avatar: "/avatars/david.jpg",
      rating: 5,
      content: "The analytics dashboard gives us insights we never had before. We can see exactly where time is being spent and optimize our processes accordingly.",
      date: "2 months ago",
      verified: true
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Operations Manager",
      company: "ScaleUp Solutions",
      avatar: "/avatars/lisa.jpg",
      rating: 5,
      content: "The customer support is outstanding. Any questions we have are answered quickly, and the platform is constantly improving with new features.",
      date: "1 week ago",
      verified: true
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Team Lead",
      company: "Digital Dynamics",
      avatar: "/avatars/james.jpg",
      rating: 5,
      content: "We've tried many project management tools, but TaskFlow.ai stands out with its AI capabilities. It actually learns from our workflow and suggests improvements.",
      date: "1 month ago",
      verified: true
    }
  ]

  const stats = [
    { label: "Happy Customers", value: "10,000+", icon: Users },
    { label: "Average Rating", value: "4.9/5", icon: Star },
    { label: "Countries", value: "50+", icon: TrendingUp },
    { label: "Success Rate", value: "98%", icon: CheckCircle }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                TaskFlow.ai
              </span>
            </Link>
            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
              Customer Reviews
            </Badge>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                Try Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            What Our{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied teams who have transformed their workflow with TaskFlow.ai. 
            Here's what they have to say about their experience.
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-2xl font-bold text-white">4.9</span>
            <span className="text-gray-300">out of 5</span>
          </div>
          
          <p className="text-gray-400">Based on 2,847 verified reviews</p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reviews.map((review) => (
            <Card key={review.id} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={review.avatar} />
                      <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-white">{review.name}</div>
                      <div className="text-sm text-gray-400">{review.role}</div>
                      <div className="text-sm text-gray-400">{review.company}</div>
                    </div>
                  </div>
                  {review.verified && (
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
                      Verified
                    </Badge>
                  )}
                </div>
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative mb-4">
                  <Quote className="w-6 h-6 text-purple-400 absolute -top-2 -left-2" />
                  <p className="text-gray-300 text-sm leading-relaxed pl-4">
                    {review.content}
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{review.date}</span>
                  <div className="flex items-center space-x-2">
                    <ThumbsUp className="w-3 h-3" />
                    <span>Helpful</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Review */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10 mb-20">
          <div className="text-center mb-8">
            <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Featured Review</h2>
            <p className="text-gray-300">Our most impactful customer story</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center justify-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl text-gray-300 text-center mb-8 leading-relaxed">
                "TaskFlow.ai revolutionized our entire company's workflow. We went from managing projects across 5 different tools to having everything in one place. The AI insights helped us identify bottlenecks we didn't even know existed. Our productivity increased by 40% in just 3 months."
              </blockquote>
              
              <div className="text-center">
                <Avatar className="w-16 h-16 mx-auto mb-4">
                  <AvatarImage src="/avatars/featured.jpg" />
                  <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div className="font-semibold text-white text-lg">Jennifer Davis</div>
                <div className="text-gray-400">Chief Operations Officer</div>
                <div className="text-gray-400">GlobalTech Solutions</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Happy Customers?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your free trial today and see why thousands of teams choose TaskFlow.ai for their workflow management needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/dashboard">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg">
              <MessageSquare className="w-5 h-5 mr-2" />
              Contact Sales
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black/20 backdrop-blur-md border-t border-white/20 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2024 TaskFlow.ai. All rights reserved. | 
              <Link href="/privacy" className="hover:text-white transition-colors ml-2">Privacy Policy</Link> | 
              <Link href="/terms" className="hover:text-white transition-colors ml-2">Terms of Service</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 