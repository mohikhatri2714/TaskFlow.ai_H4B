import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Users,
  Calendar,
  BarChart3,
  Clock,
  Video,
  Brain,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Target,
  Activity,
  Star,
  Zap,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
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
              Dashboard
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
            <Button variant="outline" size="sm" className="border-purple-200 text-purple-700 hover:bg-purple-50 transition-all duration-300">
              <Video className="w-4 h-4 mr-2" />
              Start Meeting
            </Button>
            <Avatar className="hover:scale-105 transition-transform duration-300">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white/80 backdrop-blur-md border-r border-gray-200/50 min-h-screen">
          <nav className="p-4 space-y-2">
            <Link href="/">
              <Button variant="ghost" className="w-full justify-start bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100 transition-all duration-300">
                <BarChart3 className="w-4 h-4 mr-3" />
                Dashboard
              </Button>
            </Link>
            <Link href="/employees">
              <Button variant="ghost" className="w-full justify-start hover:bg-gray-50 transition-all duration-300">
                <Users className="w-4 h-4 mr-3" />
                Employees
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="ghost" className="w-full justify-start hover:bg-gray-50 transition-all duration-300">
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
            <Button variant="ghost" className="w-full justify-start hover:bg-gray-50 transition-all duration-300">
              <Activity className="w-4 h-4 mr-3" />
              Analytics
            </Button>
            <Button variant="ghost" className="w-full justify-start hover:bg-gray-50 transition-all duration-300">
              <Video className="w-4 h-4 mr-3" />
              Meetings
            </Button>
            <Button variant="ghost" className="w-full justify-start hover:bg-gray-50 transition-all duration-300">
              <Brain className="w-4 h-4 mr-3" />
              AI Insights
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening with your team today.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">247</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+12%</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">34</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-blue-600">+3</span> new this week
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Efficiency Score</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">94%</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+2.1%</span> from yesterday
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Hours Tracked</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,847</div>
                <p className="text-xs text-muted-foreground">This week</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Project Status */}
            <Card className="lg:col-span-2 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Project Status Overview</CardTitle>
                <CardDescription>Current status of all active projects</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="font-medium">E-commerce Platform</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Progress value={85} className="w-20" />
                      <span className="text-sm text-gray-600">85%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="font-medium">Mobile App Redesign</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Progress value={62} className="w-20" />
                      <span className="text-sm text-gray-600">62%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="font-medium">API Integration</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Progress value={45} className="w-20" />
                      <span className="text-sm text-gray-600">45%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="font-medium">Marketing Campaign</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Progress value={20} className="w-20" />
                      <span className="text-sm text-gray-600">20%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Insights */}
            <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
              <CardHeader>
                <CardTitle className="text-white">AI-Powered Insights</CardTitle>
                <CardDescription className="text-purple-200">
                  Automated recommendations for your team
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3 p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300">
                  <TrendingUp className="w-5 h-5 mt-1 text-white" />
                  <div>
                    <h4 className="font-semibold">Productivity Boost</h4>
                    <p className="text-sm text-purple-200">
                      Team Alpha's productivity is up by 15% this week. Great work!
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300">
                  <AlertCircle className="w-5 h-5 mt-1 text-yellow-300" />
                  <div>
                    <h4 className="font-semibold">Potential Bottleneck</h4>
                    <p className="text-sm text-purple-200">
                      The "API Integration" project is behind schedule. Consider reallocating resources.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300">
                  <CheckCircle className="w-5 h-5 mt-1 text-green-300" />
                  <div>
                    <h4 className="font-semibold">Milestone Achieved</h4>
                    <p className="text-sm text-purple-200">
                      "Mobile App Redesign" has reached the UI/UX completion milestone.
                    </p>
                  </div>
                </div>
                <Button variant="ghost" className="w-full justify-center text-white hover:bg-white/30 transition-all duration-300">
                  View All Insights
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>What's been happening across your projects</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center space-x-4">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder.svg?height=36&width=36" />
                    <AvatarFallback>AV</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-semibold">Alex Vance</span> completed a task:{" "}
                      <span className="font-medium text-purple-600">"Design homepage mockups"</span>
                    </p>
                    <p className="text-xs text-muted-foreground">in "E-commerce Platform" - 15 minutes ago</p>
                  </div>
                </li>
                <li className="flex items-center space-x-4">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder.svg?height=36&width=36" />
                    <AvatarFallback>BC</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-semibold">Brianna Cole</span> started a new project:{" "}
                      <span className="font-medium text-purple-600">"Q3 Marketing Strategy"</span>
                    </p>
                    <p className="text-xs text-muted-foreground">1 hour ago</p>
                  </div>
                </li>
                <li className="flex items-center space-x-4">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder.svg?height=36&width=36" />
                    <AvatarFallback>CD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-semibold">Caleb Diaz</span> joined a meeting:{" "}
                      <span className="font-medium text-purple-600">"Daily Stand-up"</span>
                    </p>
                    <p className="text-xs text-muted-foreground">3 hours ago</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
} 