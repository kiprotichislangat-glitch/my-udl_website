
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { AIAssistant } from './components/AIAssistant';
import { 
  Gamepad2, 
  Layers, 
  Lightbulb, 
  TrendingUp, 
  Target, 
  ShieldCheck, 
  ClipboardList, 
  UserCheck,
  ArrowRight
} from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'design', 'udl', 'recommendations', 'implementation', 'reflection', 'references'];
      const scrollPos = window.scrollY + 200;

      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          if (scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="pt-32 px-6 max-w-6xl mx-auto space-y-32 pb-40">
        {/* Hero Section */}
        <header id="intro" className="relative group scroll-mt-32">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-indigo-100">
            <Gamepad2 className="w-4 h-4" />
            <span>Edu Design & Innovation</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-slate-950 tracking-tight leading-[1.1] mb-8">
            The Intersection of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 italic pr-4">UDL & Game Design</span>
          </h1>

          <div className="grid md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-7 prose prose-slate prose-lg text-slate-600">
              <p className="text-2xl font-medium text-slate-800 leading-relaxed mb-6">
                Redesigning Grade 6 learning through the lenses of inclusivity and iterative creation.
              </p>
              <p className="text-lg">
                The <strong>Game Creation Unit</strong> utilizes the IB Design Cycle to empower students as problem solvers. Over 4.5 months, learners transition from inquiry to technical mastery in Scratch, solving real-world challenges they personally identify.
              </p>
            </div>
            
            <div className="md:col-span-5">
              <div className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center space-x-4">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center shrink-0">
                  <UserCheck className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Kiprotich Lang’at</h4>
                  <p className="text-sm text-slate-500">Design Teacher & Tech Integrationist</p>
                  <p className="text-xs text-indigo-600 font-bold mt-1 uppercase tracking-tight">Chadwick International</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Course Design Cards */}
        <section id="design" className="scroll-mt-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-serif font-bold text-slate-950 mb-4">Course Architecture</h2>
              <p className="text-slate-500 max-w-lg">A curriculum structured around the IB MYP framework to foster systematic problem solving.</p>
            </div>
            <div className="flex space-x-4">
              <div className="text-center bg-white px-6 py-4 rounded-2xl border border-slate-100 shadow-sm">
                <span className="block text-2xl font-bold text-indigo-600">4.5</span>
                <span className="text-[10px] uppercase font-bold text-slate-400">Months</span>
              </div>
              <div className="text-center bg-white px-6 py-4 rounded-2xl border border-slate-100 shadow-sm">
                <span className="block text-2xl font-bold text-indigo-600">6</span>
                <span className="text-[10px] uppercase font-bold text-slate-400">Grade Level</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-slate-100 group-hover:text-indigo-50 transition-colors">
                <Layers className="w-24 h-24" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">The IB Design Cycle</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Iterative movement through Criteria A-D ensures students don't just "make a game," but systematically solve a problem.
                </p>
                <div className="flex gap-2">
                  {['Inquiry', 'Ideation', 'Creation', 'Evaluation'].map(step => (
                    <span key={step} className="text-[10px] font-bold uppercase tracking-wider bg-slate-50 text-slate-500 px-3 py-1 rounded-full">{step}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="group bg-slate-950 p-10 rounded-[2.5rem] shadow-xl hover:shadow-indigo-500/10 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-white/5">
                <Target className="w-24 h-24" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-indigo-500/10 text-indigo-400 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">Unit Objectives</h3>
                <p className="text-slate-400 leading-relaxed">
                  Identify real-world problems, conduct empathic research, and document the entire technical process through Scratch programming.
                </p>
                <button className="mt-8 flex items-center space-x-2 text-indigo-400 font-bold text-sm group/btn">
                  <span>View Assessment Rubric</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* UDL Evaluation - Modern Grid */}
        <section id="udl" className="scroll-mt-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif font-bold text-slate-950 mb-4">Universal Design Audit</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-violet-600 mx-auto rounded-full" />
          </div>

          <div className="space-y-12">
            {[
              { title: 'Engagement', subtitle: 'The Why', strengths: 'Ownership, real-world context, iterative feedback.', barriers: 'Long duration, varying self-regulation skills.' },
              { title: 'Representation', subtitle: 'The What', strengths: 'Visual guides, video demos, shared foundations.', barriers: 'Heavy reliance on complex written text instructions.' },
              { title: 'Action & Expression', subtitle: 'The How', strengths: 'Authentic product creation, process journals.', barriers: 'Strict adherence to traditional written reporting.' }
            ].map((pillar, i) => (
              <div key={pillar.title} className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-slate-50 p-10 flex flex-col justify-center border-r border-slate-100">
                  <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-2">Pillar 0{i+1}</span>
                  <h3 className="text-3xl font-serif font-bold text-slate-900">{pillar.title}</h3>
                  <p className="text-slate-400 italic text-sm mt-1">{pillar.subtitle}</p>
                </div>
                <div className="md:w-2/3 p-10 grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-emerald-600">
                      <ShieldCheck className="w-5 h-5" />
                      <h4 className="font-bold text-sm uppercase">Strength Highlights</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{pillar.strengths}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-rose-500">
                      <div className="w-5 h-5 flex items-center justify-center">⚠️</div>
                      <h4 className="font-bold text-sm uppercase">Identified Barriers</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{pillar.barriers}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommendations - Feature Section */}
        <section id="recommendations" className="scroll-mt-32">
          <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-white shadow-2xl shadow-indigo-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl animate-pulse" />
            <div className="relative z-10">
              <h2 className="text-4xl font-serif font-bold mb-12 flex items-center gap-4">
                <Lightbulb className="w-10 h-10 text-indigo-300" />
                Strategic Recommendations
              </h2>
              
              <div className="grid md:grid-cols-3 gap-12">
                {[
                  { title: 'Tiered Engagement', desc: 'Implementing Bronze, Silver, and Gold challenges with digital badging for specific logic mastery.' },
                  { title: 'Multimodal Prep', desc: 'Transitioning from text manuals to interactive video walkthroughs and visual logic maps.' },
                  { title: 'Creative Freedom', desc: 'Replacing rigid reports with video journals, podcasts, or screencast demonstrations.' }
                ].map((rec) => (
                  <div key={rec.title} className="group">
                    <h4 className="text-xl font-bold text-indigo-100 mb-4 group-hover:text-white transition-colors">{rec.title}</h4>
                    <p className="text-indigo-100/70 text-sm leading-relaxed">{rec.desc}</p>
                    <div className="mt-6 h-1 w-12 bg-indigo-400 group-hover:w-full transition-all duration-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Timeline */}
        <section id="implementation" className="scroll-mt-32">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-center text-slate-950 mb-16">Implementation Roadmap</h2>
            <div className="space-y-12">
              {[
                { title: 'Phase 1: Pre-Unit Preparation', body: 'Revision of materials to include auditory and visual guides. Curating peer exemplars.', icon: <Layers /> },
                { title: 'Phase 2: Unit Rollout', body: 'Enabling flexible submission formats and establishing multimodal checkpoints.', icon: <ClipboardList /> },
                { title: 'Phase 3: Reflexive Review', body: 'Gathering longitudinal data on student engagement with the new tiered system.', icon: <TrendingUp /> }
              ].map((step, i) => (
                <div key={step.title} className="flex gap-8 group">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center shadow-sm group-hover:border-indigo-600 group-hover:bg-indigo-50 transition-all duration-300">
                      <span className="text-indigo-600 group-hover:scale-110 transition-transform">{React.cloneElement(step.icon as React.ReactElement, { className: 'w-6 h-6' })}</span>
                    </div>
                    {i !== 2 && <div className="w-[2px] h-full bg-slate-200 mt-4" />}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                    <p className="text-slate-500 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reflection & References */}
        <section id="reflection" className="scroll-mt-32">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="bg-slate-50 p-12 rounded-[2.5rem] border border-slate-200/50">
              <h2 className="text-3xl font-serif font-bold text-slate-950 mb-6 flex items-center gap-3">
                <UserCheck className="text-indigo-600" />
                Reflective Summary
              </h2>
              <div className="prose prose-slate text-slate-600">
                <p>Designing for diversity upfront is a paradigm shift. This evaluation has revealed that being an integrationist isn't just about tools—it's about inclusive architecture.</p>
                <p className="mt-4 italic">"True innovation happens when every student has an equitable entry point into the creative process."</p>
              </div>
            </div>

            <div id="references" className="p-12 border border-dashed border-slate-300 rounded-[2.5rem] flex flex-col justify-center">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Works Cited</h2>
              <div className="space-y-4 text-sm text-slate-500 italic leading-relaxed">
                <p>CAST. (2018). Universal Design for Learning Guidelines (Version 2.2). Wakefield, MA.</p>
                <p>International Baccalaureate. (2023). MYP: Design Guide. Cardiff, UK.</p>
                <p>Lang’at, K. (2026). Digital Integration in MYP Contexts. EDU 714.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <AIAssistant />
      
      <footer className="bg-slate-950 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <h3 className="text-white font-serif font-bold text-lg">UDL Evaluation Explorer</h3>
                <p className="text-slate-500 text-sm">Empowering every learner through intentional design.</p>
            </div>
            <div className="text-slate-600 text-xs">
                © 2026 Kiprotich Lang’at | Game Creation Unit Evaluation
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
