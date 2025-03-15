import React, { useEffect, useRef, useState } from 'react';
import { Github, Mail, Linkedin, Code2, Database, Globe } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.target.id) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setSectionRef = (id: string, element: HTMLElement | null) => {
    sectionRefs.current[id] = element;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden">
      {/* Header Section */}
      <header className="container mx-auto px-4 py-16 md:py-32" ref={(el) => setSectionRef('header', el)} id="header">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 relative p-8 animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-teal-500/5 blur-3xl animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/3 to-teal-500/3 blur-2xl"></div>

            <div className="relative z-10 py-8">
              <div className="mb-16">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight font-montserrat">
                  <span className="animate-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 text-transparent bg-clip-text bg-[size:400%] hover:scale-105 transition-transform duration-300 cursor-pointer text-glow">
                    Fernando Henrique Longhi
                  </span>
                </h1>
              </div>

              <div className="relative pt-4">
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 hover:text-white transition-colors duration-300">
                  Desenvolvedor Full Stack & Analista de Suporte
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 sm:gap-6 px-2">
            <a
              href="https://github.com/FernandoHenriqueLonghi17?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full bg-gray-700/30 hover:bg-gray-600/20 transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/10 group glass-effect"
              title="GitHub"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="mailto:fernandohenrique2025@gmail.com"
              className="p-2 sm:p-3 rounded-full bg-gray-700/30 hover:bg-gray-600/20 transition-all hover:scale-110 hover:shadow-lg hover:shadow-teal-500/10 group glass-effect"
              title="Email"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-teal-400 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/fernando-henrique-longhi-b49761239/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full bg-gray-700/30 hover:bg-gray-600/20 transition-all hover:scale-110 hover:shadow-lg hover:shadow-purple-500/10 group glass-effect"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-purple-400 transition-colors" />
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section 
        className={`py-12 sm:py-20 relative section-fade-in ${isVisible['about'] ? 'visible' : ''}`}
        ref={(el) => setSectionRef('about', el)}
        id="about"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
            <div className="bg-gray-700/15 backdrop-blur-sm rounded-xl p-4 sm:p-8 shadow-xl border border-gray-600/5 hover:shadow-blue-500/3 transition-all duration-500 gradient-border glass-effect float-on-hover">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 text-glow">
                Informações Pessoais
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                <div className="p-4 bg-gray-800/30 rounded-lg transform hover:scale-105 transition-all duration-300 card-hover glass-effect">
                  <h3 className="font-semibold text-blue-400 mb-2">Idade</h3>
                  <p className="text-gray-100">20 anos</p>
                </div>
                <div className="p-4 bg-gray-800/30 rounded-lg transform hover:scale-105 transition-all duration-300 card-hover glass-effect">
                  <h3 className="font-semibold text-teal-400 mb-2">Localização</h3>
                  <p className="text-gray-100">Londrina, Paraná, Brasil<br/>Condomínio Ilha Bela</p>
                </div>
                <div className="p-4 bg-gray-800/30 rounded-lg transform hover:scale-105 transition-all duration-300 card-hover glass-effect">
                  <h3 className="font-semibold text-purple-400 mb-2">Formação</h3>
                  <p className="text-gray-100">Análise e Desenvolvimento de Sistemas<br/>Unicesumar</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-700/15 backdrop-blur-sm rounded-xl p-4 sm:p-8 shadow-xl border border-gray-600/5 hover:shadow-teal-500/3 transition-all duration-500 gradient-border glass-effect float-on-hover">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 text-glow">
                Experiência Profissional
              </h2>
              <div className="space-y-6">
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-100 leading-relaxed hover:text-white transition-colors duration-300">
                    Profissional de TI com experiência sólida em suporte técnico e suporte ao usuário, atuando como Analista de Suporte na Atos Brasil. Especializado em atendimento direto a usuários, resolução de problemas relacionados a sistemas e infraestrutura tecnológica, e gerenciamento de incidentes.
                  </p>
                  
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mt-6 mb-4 hover:text-blue-300 transition-colors duration-300">
                    Atuação Atual - Atos (EMS) - Analista de Suporte de TI
                  </h3>
                  <ul className="space-y-3 text-gray-100 list-disc pl-6">
                    <li className="hover:text-white transition-colors duration-300">Triagem e priorização de chamados, identificando e direcionando demandas para o nível de suporte adequado (N1, N2 ou N3).</li>
                    <li className="hover:text-white transition-colors duration-300">Suporte técnico especializado em sistemas como SAP, KASTOR e ULTRAVIG, além de resolver incidentes e prestar suporte a usuários.</li>
                    <li className="hover:text-white transition-colors duration-300">Treinamento e capacitação de novos colaboradores.</li>
                    <li className="hover:text-white transition-colors duration-300">Colaboração com a equipe de infraestrutura da EMS.</li>
                    <li className="hover:text-white transition-colors duration-300">Proposta de melhorias contínuas para sistemas e processos.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        className={`py-12 sm:py-20 section-fade-in ${isVisible['skills'] ? 'visible' : ''}`}
        ref={(el) => setSectionRef('skills', el)}
        id="skills"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 text-glow">
            Habilidades Técnicas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-700/15 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-xl border border-gray-600/5 hover:shadow-blue-500/3 transition-all duration-500 card-hover gradient-border glass-effect float-on-hover">
              <div className="flex items-center mb-4">
                <Code2 className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-blue-400 skill-icon" />
                <h3 className="text-lg sm:text-xl font-semibold">Frontend</h3>
              </div>
              <ul className="space-y-3 text-gray-100">
                <li className="flex items-center hover:text-blue-400 transition-colors duration-300">• React</li>
                <li className="flex items-center hover:text-blue-400 transition-colors duration-300">• React Native</li>
                <li className="flex items-center hover:text-blue-400 transition-colors duration-300">• Vue.js</li>
                <li className="flex items-center hover:text-blue-400 transition-colors duration-300">• TypeScript</li>
                <li className="flex items-center hover:text-blue-400 transition-colors duration-300">• JavaScript</li>
                <li className="flex items-center hover:text-blue-400 transition-colors duration-300">• Tailwind CSS</li>
              </ul>
            </div>

            <div className="bg-gray-700/15 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-xl border border-gray-600/5 hover:shadow-teal-500/3 transition-all duration-500 card-hover gradient-border glass-effect float-on-hover">
              <div className="flex items-center mb-4">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-teal-400 skill-icon" />
                <h3 className="text-lg sm:text-xl font-semibold">Backend & DevOps</h3>
              </div>
              <ul className="space-y-3 text-gray-100">
                <li className="flex items-center hover:text-teal-400 transition-colors duration-300">• PHP</li>
                <li className="flex items-center hover:text-teal-400 transition-colors duration-300">• Laravel 11</li>
                <li className="flex items-center hover:text-teal-400 transition-colors duration-300">• APIs RESTful</li>
                <li className="flex items-center hover:text-teal-400 transition-colors duration-300">• Node.js</li>
                <li className="flex items-center hover:text-teal-400 transition-colors duration-300">• Docker</li>
              </ul>
            </div>

            <div className="bg-gray-700/15 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-xl border border-gray-600/5 hover:shadow-purple-500/3 transition-all duration-500 card-hover gradient-border glass-effect float-on-hover">
              <div className="flex items-center mb-4">
                <Database className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-purple-400 skill-icon" />
                <h3 className="text-lg sm:text-xl font-semibold">Bancos de Dados</h3>
              </div>
              <ul className="space-y-3 text-gray-100">
                <li className="flex items-center hover:text-purple-400 transition-colors duration-300">• SQL Server</li>
                <li className="flex items-center hover:text-purple-400 transition-colors duration-300">• MySQL</li>
                <li className="flex items-center hover:text-purple-400 transition-colors duration-300">• PostgreSQL</li>
                <li className="flex items-center hover:text-purple-400 transition-colors duration-300">• Modelagem de Dados</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        className={`py-12 sm:py-20 relative section-fade-in ${isVisible['projects'] ? 'visible' : ''}`}
        ref={(el) => setSectionRef('projects', el)}
        id="projects"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 text-glow">
            Projetos em Destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <a
              href="https://github.com/FernandoHenriqueLonghi17/saborearte"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-gray-700/15 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-gray-600/5 hover:shadow-blue-500/3 transition-all hover:scale-[1.02] card-hover gradient-border glass-effect"
            >
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  alt="Projeto 1"
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">Saborearte</h3>
                <p className="text-gray-100 group-hover:text-white transition-colors duration-300">
                  Confira meus repositórios no GitHub para ver mais projetos e exemplos de código.
                </p>
              </div>
            </a>

            <a
              href="https://github.com/FernandoHenriqueLonghi17/Controle-de-Valores"
              target="_blank"
              rel="noopener noreferrer" 
              className="group block bg-gray-700/15 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-gray-600/5 hover:shadow-teal-500/3 transition-all hover:scale-[1.02] card-hover gradient-border glass-effect"
            >
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  alt="Projeto 2"
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-teal-400 group-hover:text-teal-300 transition-colors duration-300">Controle de Valores</h3>
                <p className="text-gray-100 group-hover:text-white transition-colors duration-300">
                  Visite meu perfil no GitHub para explorar mais do meu trabalho.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/15 backdrop-blur-sm py-6 sm:py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-100 hover:text-white transition-colors duration-300">
            © 2024 Fernando Henrique Longhi. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;