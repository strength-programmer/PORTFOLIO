import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Terminal, ArrowRight, Mail, Github, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 to-purple-950">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-white text-xl font-bold">AI REPUBLIC</div>
        <div className="flex gap-6 items-center">
          <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link href="#" className="text-gray-300 hover:text-white">About</Link>
          <Link href="/projects" className="text-gray-300 hover:text-white">Projects</Link>
          <Link href="#" className="text-gray-300 hover:text-white">Skills</Link>
          <Button className="bg-purple-600 hover:bg-purple-700">CONTACT</Button>
        </div>
      </nav>

      <section className="container mx-auto px-32 py-20 grid grid-cols-2 gap-8">
        <div className="space-y-6">
          <p className="text-purple-400">LET'S COLLABORATE</p>
          <h1 className="text-6xl font-bold text-white leading-tight">
            I'M ERWIN CALUAG,<br />
            AN AI ENGINEER
          </h1>
          <p className="text-gray-400 max-w-xl">
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
          <div className="relative w-96 h-96">
            <Image
              src="https://raw.githubusercontent.com/ALGOREX-PH/AI-Republic-Student-Portfolio-Template/refs/heads/main/app/images/Erwin.jpeg"
              alt="Profile"
              fill
              className="rounded-3xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">FEATURED PROJECTS</h2>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800 text-white p-6">
              <h2 className="text-xl font-bold text-purple-400 mb-4">{project.title}</h2>
              <div className="relative h-48 mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">PROBLEM:</h3>
              <p className="text-gray-400 mb-4">{project.problem}</p>
              <h3 className="text-lg font-semibold mb-2">SOLUTION:</h3>
              <p className="text-gray-400 mb-6">{project.solution}</p>
              <Link href="/projects">
                <Button variant="outline" className="w-full bg-purple-600 text-white-400 hover:bg-purple-800 hover:text-white">
                  VIEW PROJECT
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <footer className="container mx-auto px-4 py-8 border-t border-zinc-800">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Terminal className="text-purple-600" />
            <span className="text-gray-400">hello@gmail.com</span>
            <span className="text-gray-400">+63 123 1234 123</span>
          </div>
          <div className="text-gray-400">Stay Connected</div>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-purple-600">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-600">
              <Linkedin className="h-6 w-6" />
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