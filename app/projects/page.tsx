import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "Real-time Fraud Detection System for E-commerce Transactions",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    problem: "Increasing fraudulent transactions leading to significant financial losses and customer trust issues",
    solution: "Built a real-time fraud detection system using advanced ML algorithms and behavioral analytics, reducing fraud by 89% while maintaining legitimate transaction flow",
    tools: ["Python", "TensorFlow", "Apache Kafka", "MongoDB"]
  },
  {
    title: "Predictive Analytics for Healthcare Patient Readmission Rates",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    problem: "High patient readmission rates leading to increased healthcare costs and reduced hospital efficiency",
    solution: "Developed predictive analytics model to identify high-risk patients, enabling proactive interventions and reducing readmission rates by 42%",
    tools: ["Python", "Scikit-learn", "PostgreSQL", "Docker"]
  },
  {
    title: "Supply Chain Demand Forecasting for Manufacturing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    problem: "Inaccurate demand forecasting leading to excess inventory and production inefficiencies",
    solution: "Created ML-based forecasting model using machine learning and time series analysis, improving accuracy by 67%",
    tools: ["Python", "Time Series Analysis", "Azure"]
  },
  {
    title: "Employee Attrition Prediction for Large Corporations",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
    problem: "High employee turnover leading to increased recruitment costs and loss of productivity",
    solution: "Implemented predictive model to identify flight risk employees using ML and NLP techniques",
    tools: ["Python", "NLP", "XGBoost", "AWS"]
  },
  {
    title: "Real-time Traffic Flow Prediction for Urban Planning",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    problem: "Urban congestion leading to increased delays and inefficient resource allocation",
    solution: "Developed real-time traffic prediction system using deep learning and graph neural networks",
    tools: ["Python", "PyTorch", "Neo4j", "Redis"]
  }
];

export default function Projects() {
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
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-2">ALL PROJECTS</h1>
        <p className="text-gray-400 mb-12">Exploring the intersection of AI and real-world solutions</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden">
              <div className="relative h-[300px] w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover brightness-50 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-purple-400 mb-4">{project.title}</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-purple-400 font-semibold mb-1">PROBLEM:</h4>
                        <p className="text-gray-300 text-sm">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-purple-400 font-semibold mb-1">SOLUTION:</h4>
                        <p className="text-gray-300 text-sm">{project.solution}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools.map((tool, toolIndex) => (
                        <span 
                          key={toolIndex}
                          className="text-xs px-2 py-1 rounded-full bg-purple-900/50 text-purple-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    <Button 
                      className="w-full bg-purple-600 hover:bg-purple-700"
                    >
                      VIEW PROJECT
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}