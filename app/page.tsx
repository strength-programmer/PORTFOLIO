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
          <a href="#" className="text-gray-400 hover:text-purple-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
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