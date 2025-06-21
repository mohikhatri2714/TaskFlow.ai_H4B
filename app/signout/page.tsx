"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, ArrowLeft, LogOut, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function SignOut() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Back to Home */}
        <Link href="/" className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Sign Out</h1>
          <p className="text-gray-300">Are you sure you want to sign out?</p>
        </div>

        {/* Sign Out Confirmation */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
          <CardHeader className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <LogOut className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-white text-xl">Confirm Sign Out</CardTitle>
            <CardDescription className="text-gray-300">
              You will be logged out of your TaskFlow.ai account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300 text-sm">Your session will be securely ended</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/" className="flex-1">
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 backdrop-blur-sm">
                  Cancel
                </Button>
              </Link>
              <Button className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>

            <div className="text-center">
              <span className="text-gray-300 text-sm">Changed your mind? </span>
              <Link href="/dashboard" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                Return to Dashboard
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 