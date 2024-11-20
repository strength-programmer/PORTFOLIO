'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: "FEATURED",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "CSS", icon: "🎨" },
      { name: "HTML", icon: "📄" },
      { name: "JavaScript", icon: "📜" },
      { name: "Next.js", icon: "▲" },
      { name: "SASS", icon: "💅" },
      { name: "Flutter", icon: "📱" }
    ]
  },
  {
    title: "FRONTEND",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "CSS", icon: "🎨" },
      { name: "HTML", icon: "📄" },
      { name: "JavaScript", icon: "📜" },
      { name: "Next.js", icon: "▲" },
      { name: "SASS", icon: "💅" },
      { name: "Flutter", icon: "📱" }
    ]
  },
  {
    title: "BACKEND",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "GraphQL", icon: "📊" },
      { name: "Docker", icon: "🐳" }
    ]
  }
];

const technologies = {
  featured: [
    { name: "TensorFlow", icon: "🧠" },
    { name: "PyTorch", icon: "🔥" },
    { name: "Scikit-learn", icon: "🤖" },
    { name: "OpenAI API", icon: "🌟" },
    { name: "Keras", icon: "⚡" },
    { name: "Pandas", icon: "🐼" },
    { name: "NumPy", icon: "📊" },
    { name: "CUDA", icon: "💻" },
    { name: "OpenCV", icon: "👁️" },
    { name: "Hugging Face", icon: "🤗" }
  ],
  frontend: [
    { name: "React", icon: "⚛️" },
    { name: "Vue.js", icon: "💚" },
    { name: "Angular", icon: "🅰️" },
    { name: "Svelte", icon: "🔥" },
    { name: "TypeScript", icon: "📘" }
  ],
  backend: [
    { name: "Python", icon: "🐍" },
    { name: "Node.js", icon: "💚" },
    { name: "Django", icon: "🎯" },
    { name: "FastAPI", icon: "⚡" },
    { name: "Flask", icon: "🌶️" }
  ]
};

export default function Skills() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 to-purple-950">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-white text-xl font-bold">AI REPUBLIC</div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 items-center">
            <Link href="/" className="text-gray-300 hover:text-white text-sm sm:text-base">Home</Link>
            <Link href="#" className="text-gray-300 hover:text-white text-sm sm:text-base">About</Link>
            <Link href="/projects" className="text-gray-300 hover:text-white text-sm sm:text-base">Projects</Link>
            <Link href="/skills" className="text-gray-300 hover:text-white text-sm sm:text-base">Skills</Link>
            <Button className="bg-purple-600 hover:bg-purple-700 text-sm sm:text-base">CONTACT</Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12 lg:mb-16 text-center sm:text-left">SKILLS</h1>

        <div className="space-y-12 sm:space-y-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-purple-400 text-center sm:text-left">{category.title}</h2>
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 sm:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    className="py-2 sm:py-3 px-3 sm:px-4 bg-black/40 hover:bg-black/60 border border-purple-500/20 hover:border-purple-500/40 text-white transition-all duration-300 text-sm sm:text-base flex items-center justify-center"
                  >
                    <span className="mr-2 text-base sm:text-lg">{skill.icon}</span>
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 sm:mt-20 lg:mt-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12 lg:mb-16 text-center sm:text-left">
            SOME TECHNOLOGIES I'VE WORKED WITH
          </h2>
          
          <div className="space-y-12 sm:space-y-16">
            {Object.entries(technologies).map(([category, techs]) => (
              <div key={category}>
                <h3 className="text-xl sm:text-2xl font-bold text-purple-400 mb-4 sm:mb-6 text-center sm:text-left">
                  {category.toUpperCase()}
                </h3>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                  {techs.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center p-3 sm:p-4 bg-black/40 border border-purple-500/20 hover:border-purple-500/40 rounded-lg transition-all duration-300 gap-2"
                    >
                      <span className="text-xl sm:text-2xl">{tech.icon}</span>
                      <span className="text-white font-mono text-sm sm:text-base">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 sm:mt-20 lg:mt-24 mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 text-center sm:text-left">GET IN TOUCH</h2>
          <p className="text-gray-400 mb-8 sm:mb-12 text-sm sm:text-base text-center sm:text-left">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Reach out, and let's create something amazing together!
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 max-w-3xl mx-auto sm:mx-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm text-purple-400">
                  FIRSTNAME*
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  className="bg-black/40 border-purple-500/20 focus:border-purple-500/40 text-white text-sm sm:text-base"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm text-purple-400">
                  LASTNAME*
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  className="bg-black/40 border-purple-500/20 focus:border-purple-500/40 text-white text-sm sm:text-base"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-purple-400">
                EMAIL*
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="bg-black/40 border-purple-500/20 focus:border-purple-500/40 text-white text-sm sm:text-base"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-purple-400">
                MESSAGE*
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here"
                className="bg-black/40 border-purple-500/20 focus:border-purple-500/40 text-white min-h-[150px] text-sm sm:text-base"
                required
              />
            </div>

            <Button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-2 text-sm sm:text-base w-full sm:w-auto"
            >
              SUBMIT
            </Button>
          </form>
        </div>

        <footer className="mt-16 sm:mt-20 lg:mt-24 py-6 sm:py-8 border-t border-zinc-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <Terminal className="text-purple-600 w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-gray-400 text-xs sm:text-sm">hello@gmail.com</span>
              <span className="text-gray-400 text-xs sm:text-sm">+63 123 1234 123</span>
            </div>
            <div className="text-gray-400 text-xs sm:text-sm">Stay Connected</div>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="text-gray-400 hover:text-purple-400">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}