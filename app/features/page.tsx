import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Target, 
  ArrowLeft, 
  Zap, 
  Users, 
  TrendingUp, 
  Brain, 
  Calendar, 
  Clock, 
  BarChart3, 
  Video, 
  Activity, 
  Shield, 
  Star, 
  CheckCircle,
  ArrowRight,
  Play,
  Settings,
  FileText,
  MessageSquare,
  Bell,
  Database,
  Globe,
  Smartphone,
  Monitor
} from "lucide-react"
import Link from "next/link"

export default function Features() {
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
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Features
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
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Modern Teams
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover how TaskFlow.ai transforms your workflow with AI-powered automation, 
            real-time collaboration, and intelligent insights.
          </p>
        </div>

        {/* Core Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* AI-Powered Automation */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-white text-xl">AI-Powered Automation</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <CardDescription className="text-gray-300">
                Intelligent task automation that learns from your workflow patterns and optimizes processes automatically.
              </CardDescription>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Smart task prioritization</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Automated workflow routing</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Predictive analytics</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team Collaboration */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-white text-xl">Team Collaboration</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <CardDescription className="text-gray-300">
                Seamless team coordination with real-time updates, shared workspaces, and integrated communication.
              </CardDescription>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Real-time messaging</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Shared workspaces</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>File sharing & storage</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Advanced Analytics */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-white text-xl">Advanced Analytics</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <CardDescription className="text-gray-300">
                Deep insights into productivity metrics, performance trends, and actionable recommendations.
              </CardDescription>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Performance dashboards</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Custom reports</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Data visualization</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Project Management */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-white text-xl">Project Management</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <CardDescription className="text-gray-300">
                Comprehensive project tracking with milestones, deadlines, and progress monitoring.
              </CardDescription>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Gantt charts</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Milestone tracking</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Resource allocation</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Time Tracking */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-white text-xl">Time Tracking</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <CardDescription className="text-gray-300">
                Accurate time tracking with automated timers and detailed reporting for better productivity insights.
              </CardDescription>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Automated timers</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Time reports</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Productivity insights</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Video Meetings */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Video className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-white text-xl">Video Meetings</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <CardDescription className="text-gray-300">
                Integrated video conferencing with screen sharing, recording, and meeting management.
              </CardDescription>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>HD video calls</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Screen sharing</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Meeting recordings</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            More Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Calendar, title: "Calendar Integration", desc: "Sync with Google, Outlook & more" },
              { icon: Bell, title: "Smart Notifications", desc: "Intelligent alerts & reminders" },
              { icon: FileText, title: "Document Management", desc: "Centralized file organization" },
              { icon: MessageSquare, title: "Team Chat", desc: "Real-time messaging & collaboration" },
              { icon: Settings, title: "Custom Workflows", desc: "Tailored process automation" },
              { icon: Database, title: "Data Security", desc: "Enterprise-grade protection" },
              { icon: Globe, title: "Multi-language", desc: "Support for 50+ languages" },
              { icon: Smartphone, title: "Mobile App", desc: "iOS & Android applications" },
            ].map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of teams already using TaskFlow.ai to boost productivity and streamline their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/dashboard">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
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