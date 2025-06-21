import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Search,
  Filter,
  Plus,
  Target,
  Star,
  Clock,
  Calendar,
  Mail,
  Phone,
  MapPin,
  TrendingUp,
  Award,
  Users,
} from "lucide-react"
import Link from "next/link"

export default function Employees() {
  const employees = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Frontend Developer",
      email: "sarah.johnson@company.com",
      phone: "+1 (555) 123-4567",
      location: "New York, NY",
      avatar: "/placeholder.svg?height=40&width=40",
      skills: ["React", "TypeScript", "CSS", "JavaScript"],
      efficiency: 98,
      tasksCompleted: 47,
      hoursWorked: 168,
      status: "Available",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      role: "Backend Developer",
      email: "mike.rodriguez@company.com",
      phone: "+1 (555) 234-5678",
      location: "San Francisco, CA",
      avatar: "/placeholder.svg?height=40&width=40",
      skills: ["Node.js", "Python", "PostgreSQL", "AWS"],
      efficiency: 96,
      tasksCompleted: 42,
      hoursWorked: 172,
      status: "Busy",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Anna Lee",
      role: "UI/UX Designer",
      email: "anna.lee@company.com",
      phone: "+1 (555) 345-6789",
      location: "Austin, TX",
      avatar: "/placeholder.svg?height=40&width=40",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      efficiency: 94,
      tasksCompleted: 38,
      hoursWorked: 156,
      status: "Available",
      rating: 4.7,
    },
    {
      id: 4,
      name: "David Chen",
      role: "DevOps Engineer",
      email: "david.chen@company.com",
      phone: "+1 (555) 456-7890",
      location: "Seattle, WA",
      avatar: "/placeholder.svg?height=40&width=40",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
      efficiency: 92,
      tasksCompleted: 35,
      hoursWorked: 164,
      status: "On Leave",
      rating: 4.6,
    },
    {
      id: 5,
      name: "Emily Watson",
      role: "Product Manager",
      email: "emily.watson@company.com",
      phone: "+1 (555) 567-8901",
      location: "Chicago, IL",
      avatar: "/placeholder.svg?height=40&width=40",
      skills: ["Product Strategy", "Agile", "Analytics", "Leadership"],
      efficiency: 89,
      tasksCompleted: 31,
      hoursWorked: 148,
      status: "Available",
      rating: 4.5,
    },
    {
      id: 6,
      name: "James Wilson",
      role: "QA Engineer",
      email: "james.wilson@company.com",
      phone: "+1 (555) 678-9012",
      location: "Boston, MA",
      avatar: "/placeholder.svg?height=40&width=40",
      skills: ["Test Automation", "Selenium", "Jest", "Quality Assurance"],
      efficiency: 91,
      tasksCompleted: 44,
      hoursWorked: 160,
      status: "Busy",
      rating: 4.4,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                TaskFlow.ai
              </span>
            </Link>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Employees
            </Badge>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Employee
          </Button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r min-h-screen">
          <nav className="p-4 space-y-2">
            <Link href="/">
              <Button variant="ghost" className="w-full justify-start">
                <Target className="w-4 h-4 mr-3" />
                Dashboard
              </Button>
            </Link>
            <Link href="/employees">
              <Button variant="ghost" className="w-full justify-start bg-blue-50 text-blue-700">
                <Award className="w-4 h-4 mr-3" />
                Employees
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="ghost" className="w-full justify-start">
                <Target className="w-4 h-4 mr-3" />
                Projects
              </Button>
            </Link>
            <Button variant="ghost" className="w-full justify-start">
              <Calendar className="w-4 h-4 mr-3" />
              Schedule
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Clock className="w-4 h-4 mr-3" />
              Time Tracking
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Employees</h1>
            <p className="text-gray-600">Manage your team members and their performance.</p>
          </div>

          {/* Search and Filters */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search employees..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">247</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+12</span> this month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Available</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">189</div>
                <p className="text-xs text-muted-foreground">76% of total workforce</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Efficiency</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">92%</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+3%</span> from last week
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Top Rated</CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.7</div>
                <p className="text-xs text-muted-foreground">Average rating</p>
              </CardContent>
            </Card>
          </div>

          {/* Employee Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {employees.map((employee) => (
              <Card key={employee.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={employee.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {employee.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{employee.name}</CardTitle>
                      <CardDescription>{employee.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Contact Info */}
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>{employee.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>{employee.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{employee.location}</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <p className="text-sm font-medium mb-2">Skills</p>
                    <div className="flex flex-wrap gap-1">
                      {employee.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Efficiency</span>
                        <span>{employee.efficiency}%</span>
                      </div>
                      <Progress value={employee.efficiency} className="h-2" />
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-blue-600">{employee.tasksCompleted}</div>
                        <div className="text-xs text-gray-600">Tasks</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-green-600">{employee.hoursWorked}h</div>
                        <div className="text-xs text-gray-600">Hours</div>
                      </div>
                      <div>
                        <div className="flex items-center justify-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          <span className="text-lg font-bold text-yellow-600">{employee.rating}</span>
                        </div>
                        <div className="text-xs text-gray-600">Rating</div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" className="flex-1">
                      View Profile
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      Assign Task
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
