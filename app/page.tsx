"use client";

import React, { useState } from "react"
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Users,
  Award,
  Clock,
  BookOpen,
  Computer,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Star,
} from "lucide-react"

export default function HomePage() {
  const [showCourses, setShowCourses] = useState(false)


  const [formData, setFormData] = useState({ name: "", email: "", course: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Form Submitted:\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Computer className="h-8 w-8 text-black" />
              <h1 className="text-2xl font-bold text-black">Digital Shiksha Academy</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-black transition-colors">
                Home
              </a>
              <a href="#courses" className="text-gray-700 hover:text-black transition-colors">
                Courses
              </a>
              <a href="#about" className="text-gray-700 hover:text-black transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-black transition-colors">
                Contact
              </a>
            </nav>
            <Button className="bg-black text-white hover:bg-gray-800">Enroll Now</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-black text-white">Professional Computer Education</Badge>
              <h2 className="text-5xl font-bold text-black mb-6 leading-tight">
                Master Computer Skills with
                <span className="text-gray-600"> DCA & PGDCA & All Computer Courses </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join our comprehensive computer academy and build a successful career in IT. Expert faculty, modern
                curriculum, and hands-on training guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => setShowCourses(!showCourses)}
                  className="bg-black text-white hover:bg-gray-800"
                >
                  <GraduationCap className="mr-2 h-5 w-5" />
                  {showCourses ? "Hide Courses" : "View Courses"}
                </Button>

                {/* Course List */}
                {showCourses && (
                  <div className="mt-10 flex flex-col items-center gap-6">
                    {/* Course 1 */}
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow w-full max-w-md text-left">
                      <h3 className="text-xl font-bold text-black mb-1">📘 DCA - Diploma in Computer Applications</h3>
                      <p className="text-sm text-gray-600">Duration: 12 Months</p>
                      <p className="text-sm text-gray-600">Includes MS Office, Internet, Tally ERP 9, Basics of Programming</p>
                    </div>

                    {/* Course 2 */}
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow w-full max-w-md text-left">
                      <h3 className="text-xl font-bold text-black mb-1">📗 PGDCA - Post Graduate Diploma</h3>
                      <p className="text-sm text-gray-600">Duration: 1 Year</p>
                      <p className="text-sm text-gray-600">
                        Includes Java, SQL, Web Dev (HTML, CSS, JS), Software Engineering, Internship
                      </p>
                    </div>

                    {/* Course 3 */}
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow w-full max-w-md text-left">
                      <h3 className="text-xl font-bold text-black mb-1">📙 ADCA - Advanced Diploma</h3>
                      <p className="text-sm text-gray-600">Duration: 1 Year</p>
                      <p className="text-sm text-gray-600">Includes MS Office, Advanced Excel, Photoshop, HTML, Internet</p>
                    </div>

                    {/* Course 4 */}
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow w-full max-w-md text-left">
                      <h3 className="text-xl font-bold text-black mb-1">📕 Diploma in Modern Office Management (DMOM)</h3>
                      <p className="text-sm text-gray-600">Duration: 12 Months</p>
                      <p className="text-sm text-gray-600">Graduate in any Discipline: 12th Pass</p>
                      <p className="text-sm text-gray-600">training in MS Office, Advanced Excel, Photoshop, HTML, Internet, along with typing (English/Hindi), shorthand, communication skills, basic accounting, and modern office procedures</p>
                    </div>
                    {/* Course 5 */}
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow w-full max-w-md text-left">
                      <h3 className="text-xl font-bold text-black mb-1">📕 CPCT Prepration ( DSA CERTIFICATE)</h3>
                      <p className="text-sm text-gray-600">Duration: 6 Months</p>
                      <p className="text-sm text-gray-600">Eligibility: 12th Pass</p>
                      <p className="text-sm text-gray-600"> Typing (English/Hindi), MS Office (Word, Excel, PowerPoint), Internet basics, General Awareness, Logical Reasoning, and Data Interpretation.</p>
                    </div>
                  </div>
                )}


                <a
                  href="/DSA-Fee-Offer-2025-26-.pdf"
                  download
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-black text-black hover:bg-black hover:text-white bg-transparent"
                  >
                    Download Brochure
                  </Button>
                </a>

              </div>
            </div>
            <div className="relative">
              <img
                src="/logo.jpg?height=500&width=600"
                alt="Computer Academy"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-black text-white p-6 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">4.9/5 Rating</span>
                </div>
                <p className="text-sm text-gray-300">From Number of students + Students</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Courses</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive computer courses designed to meet industry standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* DCA Course */}
            <Card className="border-2 border-gray-200 hover:border-black transition-colors">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-black text-white rounded-full w-fit">
                  <BookOpen className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl text-black">DCA</CardTitle>
                <CardDescription className="text-lg">Diploma in Computer Applications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">10% offer discount: ₹10,350</div>
                  <Badge variant="outline" className="border-black text-black">
                    12 Months Duration
                  </Badge>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-black">Course Modules:</h4>
                  <ul className="space-y-2">
                    {[
                      "Computer Fundamentals",
                      "MS Office Suite",
                      "Internet & Email",
                      "Tally ERP 9",
                      "Basic Programming",
                      "Project Work",
                    ].map((module, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700">{module}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-black text-white hover:bg-gray-800">Enroll in DCA</Button>
              </CardContent>
            </Card>

            {/* PGDCA Course */}
            <Card className="border-2 border-black bg-black text-white">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-white text-black rounded-full w-fit">
                  <Award className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">PGDCA</CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Post Graduate Diploma in Computer Applications
                </CardDescription>
                <Badge className="bg-yellow-500 text-black w-fit mx-auto">Most Popular</Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">10% offer discount: ₹11,250</div>
                  <Badge variant="outline" className="border-white text-white">
                    12 Months Duration
                  </Badge>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">Course Modules:</h4>
                  <ul className="space-y-2">
                    {[
                      "Advanced Programming (C++, Java)",
                      "Database Management (SQL)",
                      "Web Development (HTML, CSS, JS)",
                      "Software Engineering",
                      "Data Structures & Algorithms",
                      "Major Project & Internship",
                    ].map((module, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-gray-300">{module}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-white text-black hover:bg-gray-100">Enroll in PGDCA</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            {/* Logo Image */}
            <img
              src="/logo.jpg" // <-- yahan apne logo ka path de
              alt="Digital Shiksha Academy Logo"
              className="mx-auto mb-4 w-24 h-24 object-contain"
            />

            <h2 className="text-4xl font-bold text-black mb-4">
              Why Choose Digital Shiksha Academy?
            </h2>
            <p className="text-xl text-gray-600">
              We provide the best learning experience with modern facilities
            </p>
          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Faculty",
                description: "Learn from industry professionals with years of experience",
              },
              {
                icon: Computer,
                title: "Modern Lab",
                description: "State-of-the-art computer lab with latest software and hardware",
              },
              {
                icon: Clock,
                title: "Flexible Timing",
                description: "Morning, afternoon, and evening batches available",
              },
              {
                icon: Award,
                title: "Certification",
                description: "Industry-recognized certificates upon course completion",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="mx-auto mb-4 p-3 bg-black text-white rounded-full w-fit">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">About Digital Shiksha Academy</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over 10 years of excellence in computer education, Digital Shiksha Academy has been the premier destination for
                students seeking quality IT training. We have successfully trained over 5,000 students who are now
                working in top companies.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">Number of Students getting Trainning</div>
                  <div className="text-gray-600">#</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">95%</div>
                  <div className="text-gray-600">Placement Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">50+</div>
                  <div className="text-gray-600">Industry Partners</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="TechAcademy Building"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300">Ready to start your journey? Contact us today!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gray-900 border-gray-800 text-center">
              <CardContent className="pt-8">
                <Phone className="h-8 w-8 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+91 8962247365</p>
              </CardContent>
            </Card>


            <Card className="bg-gray-900 border-gray-800 text-center">
              <CardContent className="pt-8">
                {/* Instagram Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white mx-auto mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Zm-4.5 2a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9Zm0 1.5a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z" />
                </svg>

                <h3 className="text-xl font-semibold text-white mb-2">Instagram</h3>

                {/* Instagram ID as Link */}
                <a
                  href="https://www.instagram.com/dsacademyit?igsh=MWFpbWV2MHNwdTY2dw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:underline"
                >
                  @dsacademyit
                </a>
              </CardContent>
            </Card>


            <Card className="bg-gray-900 border-gray-800 text-center">
              <CardContent className="pt-8">
                <Mail className="h-8 w-8 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">info@techacademy.com</p>
                <p className="text-gray-300">admissions@techacademy.com</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 text-center">
              <CardContent className="pt-8">
                <MapPin className="h-8 w-8 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>

                {/* Google Map Link */}
                <a
                  href="https://www.google.com/maps/place/DIGITAL+SHIKSHA+ACADEMY/@22.746572,79.7173847,765m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39803f7370b0ede9:0x2599fd4a118e36f2!8m2!3d22.7465671!4d79.7199596!16s%2Fg%2F11x8czq5b4?authuser=0&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:underline"
                >
                  <p>123 Tech Street</p>
                  <p>Digital City, DC 12345</p>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 text-center">
              <CardContent className="pt-8">
                {/* YouTube Logo as SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white mx-auto mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 15l5.19-3L10 9v6zm12-3c0-1.52-.11-2.69-.26-3.63C21.46 7.1 20.58 6.22 19.38 6.1 17.6 5.91 12 5.91 12 5.91s-5.6 0-7.38.19C3.42 6.22 2.54 7.1 2.26 8.37 2.11 9.31 2 10.48 2 12s.11 2.69.26 3.63c.28 1.27 1.16 2.15 2.36 2.27C6.4 18.09 12 18.09 12 18.09s5.6 0 7.38-.19c1.2-.12 2.08-1 2.36-2.27.15-.94.26-2.11.26-3.63z" />
                </svg>

                <h3 className="text-xl font-semibold text-white mb-2">YouTube</h3>

                <a
                  href="https://youtu.be/XxMAdU_GLxk?si=IuKH6wey8yT6AJ8H"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:underline"
                >
                  @headline24news
                </a>
              </CardContent>
            </Card>


          </div>

          <div className="text-center mt-10">
            <div className="bg-gray-100 flex items-center justify-center p-4">
              <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm"
              >
                <h2 className="text-xl font-bold mb-4 text-center">Application Form</h2>

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  onChange={handleChange}
                  className="mb-3 w-full p-2 border border-gray-300 rounded text-sm"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  onChange={handleChange}
                  className="mb-3 w-full p-2 border border-gray-300 rounded text-sm"
                />

                <select
                  name="course"
                  onChange={handleChange}
                  className="mb-3 w-full p-2 border border-gray-300 rounded text-sm"
                >
                  <option value="">Select Course</option>
                  <option value="Computer Basics">Computer Basics</option>
                  <option value="Python Programming">Python Programming</option>
                  <option value="Web Development">Web Development</option>
                </select>

                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded w-full text-sm"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Button to go to form */}
            <div className="mt-6">
              <Link href="/form">
                <Button size="sm" className="bg-white text-black hover:bg-gray-100 text-sm">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Start Your Application
                </Button>
              </Link>
            </div>


          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Computer className="h-6 w-6" />
                <h3 className="text-xl font-bold">TechAcademy</h3>
              </div>
              <p className="text-gray-400">Empowering students with quality computer education since 2014.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#courses" className="hover:text-white transition-colors">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-gray-400">
                <li>DCA Course</li>
                <li>PGDCA Course</li>
                <li>Short Term Courses</li>
                <li>Corporate Training</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+91 98765 43210</li>
                <li>info@techacademy.com</li>
                <li>123 Tech Street, Digital City</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TechAcademy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
