import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Terminal, ArrowRight, Mail, Github, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 to-purple-950">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-white text-xl font-bold">AI REPUBLIC</div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 items-center">
            <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
            <Link href="#" className="text-gray-300 hover:text-white">About</Link>
            <Link href="/projects" className="text-gray-300 hover:text-white">Projects</Link>
            <Link href="/skills" className="text-gray-300 hover:text-white">Skills</Link>
            <Button className="bg-purple-600 hover:bg-purple-700">CONTACT</Button>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <p className="text-purple-400">LET'S COLLABORATE</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              I'M ERWIN CALUAG,<br />
              AN AI ENGINEER
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto lg:mx-0">
              I employ a range of advanced analytical techniques, including statistical modeling, machine learning, and data analysis to solve complex business problems.
            </p>
            <Link href="/projects">
              <Button className="bg-purple-600 hover:bg-purple-700">
                VIEW MY PROJECTS
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <Image
                src="https://raw.githubusercontent.com/ALGOREX-PH/AI-Republic-Student-Portfolio-Template/refs/heads/main/app/images/Erwin.jpeg"
                alt="Profile"
                fill
                className="rounded-3xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">FEATURED PROJECTS</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800 text-white p-4 sm:p-6">
              <h2 className="text-xl font-bold text-purple-400 mb-4">{project.title}</h2>
              <div className="relative h-40 sm:h-48 mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">PROBLEM:</h3>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">{project.problem}</p>
              <h3 className="text-lg font-semibold mb-2">SOLUTION:</h3>
              <p className="text-gray-400 mb-6 text-sm sm:text-base">{project.solution}</p>
              <Link href="/projects">
                <Button variant="outline" className="w-full bg-purple-600 text-white hover:bg-purple-800 hover:text-white">
                  VIEW PROJECT
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-zinc-800">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Terminal className="text-purple-600" />
            <span className="text-gray-400 text-sm sm:text-base">hello@gmail.com</span>
            <span className="text-gray-400 text-sm sm:text-base">+63 123 1234 123</span>
          </div>
          <div className="text-gray-400 text-sm sm:text-base">Stay Connected</div>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-purple-600">
              <Github className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-600">
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

const projects = [
  {
    title: "Machine Learning-Powered Inventory Optimization",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&fit=crop",
    problem: "Inefficient stock management leading to lost sales, excess inventory, and stock issues: 41.5%",
    solution: "Developed an inventory optimization tool using machine learning to forecast demand and optimize stock levels, resulting in a 35% reduction in stockouts and a 40% decrease in holding costs."
  },
  {
    title: "Predictive Model for Reducing Customer Churn",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&fit=crop",
    problem: "High customer churn rates resulting in revenue loss and decreased acquisition cost: Average churn rate: 26%, Customer acquisition cost: $245 per customer",
    solution: "Developed a churn prediction model using advanced ML algorithms to identify high-risk customers, achieving targeted retention strategies: This led to a 45% decrease in churn rate and a 30% reduction in acquisition costs."
  },
  {
    title: "Energy Demand Forecasting System",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&fit=crop",
    problem: "Unreliable energy demand modeling inefficient resource allocation and higher operational costs: Annual energy cost fluctuations: 32%, Peak demand overload: 28%, System outage",
    solution: "Created an energy consumption forecasting system using ML and IoT, leading to accurate prediction accuracy by 35%. This enabled efficient grid management and a 25% reduction in operational costs."
  }
];