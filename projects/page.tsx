import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Target, Plus, Calendar, Users, Clock, BarChart3, Award, ArrowLeft, Star, Zap } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-all duration-300">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                <Target className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                TaskFlow.ai
              </span>
            </Link>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Projects
            </Badge>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/features">
              <Button variant="ghost" className="hover:bg-purple-50 transition-all duration-300">
                <Zap className="w-4 h-4 mr-2" />
                Features
              </Button>
            </Link>
            <Link href="/reviews">
              <Button variant="ghost" className="hover:bg-purple-50 transition-all duration-300">
                <Star className="w-4 h-4 mr-2" />
                Reviews
              </Button>
            </Link>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <Plus className="w-4 h-4 mr-2" />
              New Project
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white/80 backdrop-blur-md border-r border-gray-200/50 min-h-screen">
          <nav className="p-4 space-y-2">
            <Link href="/">
              <Button variant="ghost" className="w-full justify-start hover:bg-gray-50 transition-all duration-300">
                <BarChart3 className="w-4 h-4 mr-3" />
                Dashboard
              </Button>
            </Link>
            <Link href="/employees">
              <Button variant="ghost" className="w-full justify-start hover:bg-gray-50 transition-all duration-300">
                <Award className="w-4 h-4 mr-3" />
                Employees
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="ghost" className="w-full justify-start bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100 transition-all duration-300">
                <Target className="w-4 h-4 mr-3" />
                Projects
              </Button>
            </Link>
            <Button variant="ghost" className="w-full justify-start hover:bg-gray-50 transition-all duration-300">
              <Calendar className="w-4 h-4 mr-3" />
              Schedule
            </Button>
            <Button variant="ghost" className="w-full justify-start hover:bg-gray-50 transition-all duration-300">
              <Clock className="w-4 h-4 mr-3" />
              Time Tracking
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Projects</h1>
            <p className="text-gray-600">Track and manage your active projects with AI-powered insights.</p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                name: "E-commerce Platform", 
                description: "Modern e-commerce solution with AI recommendations",
                progress: 85,
                status: "In Progress",
                team: 8,
                deadline: "Dec 15, 2024",
                color: "from-green-500 to-emerald-500"
              },
              { 
                name: "Mobile App Redesign", 
                description: "Complete redesign of the mobile application",
                progress: 62,
                status: "In Progress", 
                team: 5,
                deadline: "Jan 20, 2025",
                color: "from-blue-500 to-cyan-500"
              },
              { 
                name: "Data Migration", 
                description: "Legacy system migration to cloud infrastructure",
                progress: 38,
                status: "Planning",
                team: 6,
                deadline: "Feb 10, 2025",
                color: "from-yellow-500 to-orange-500"
              },
              { 
                name: "Security Audit", 
                description: "Comprehensive security assessment and improvements",
                progress: 15,
                status: "Not Started",
                team: 3,
                deadline: "Jan 5, 2025",
                color: "from-red-500 to-pink-500"
              },
              { 
                name: "API Integration", 
                description: "Third-party API integration for payment processing",
                progress: 92,
                status: "Testing",
                team: 4,
                deadline: "Dec 30, 2024",
                color: "from-purple-500 to-pink-500"
              },
              { 
                name: "Performance Optimization", 
                description: "System performance improvements and optimization",
                progress: 75,
                status: "In Progress",
                team: 7,
                deadline: "Jan 15, 2025",
                color: "from-indigo-500 to-purple-500"
              },
            ].map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg group-hover:text-purple-600 transition-colors duration-300">{project.name}</CardTitle>
                      <CardDescription className="mt-2">{project.description}</CardDescription>
                    </div>
                    <Badge 
                      variant={
                        project.status === "In Progress" ? "default" :
                        project.status === "Testing" ? "secondary" :
                        project.status === "Planning" ? "outline" : "destructive"
                      }
                      className="transition-all duration-300"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span className="font-semibold">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="w-full h-2" />
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center hover:text-purple-600 transition-colors duration-300">
                      <Users className="w-4 h-4 mr-1" />
                      {project.team} members
                    </div>
                    <div className="flex items-center hover:text-purple-600 transition-colors duration-300">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.deadline}
                    </div>
                  </div>
                  <div className="pt-2 border-t border-gray-100">
                    <Button variant="outline" size="sm" className="w-full border-purple-200 text-purple-700 hover:bg-purple-50 transition-all duration-300">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
