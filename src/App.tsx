import './index.css';

function App() {
  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-6">
          <h1 className="text-4xl font-bold text-gray-900">Matěj Groman</h1>
          <p className="text-lg text-gray-600">Application Security Specialist</p>
          <div className="mt-2">
            <a
              href="https://www.linkedin.com/in/matej-groman/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:underline font-medium"
            >
              Connect via LinkedIn
            </a>
          </div>
        </header>

        <section className="mb-6 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h2>
          <p className="text-base/7">
            I help teams build secure software without slowing them down. As an Application Security Specialist, I focus on practical, people-first security—from secure SDLC and cloud infrastructure to AI security and compliance. I believe communication and education are key: security should be something people understand and believe in, not something forced on them.
          </p>
          <p className="text-base/7">
            I like good coffee, learning by doing, and trying new things—whether that’s crafting new things in a local shared workshop or with my 3D printer, coding personal projects or spending time in nature. I aim to bring that same curiosity and hands-on mindset into my work every day.
          </p>
        </section>

        <section className="shadow-lg rounded-lg p-6 mb-6 pt-2 experience-section">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Experience</h2>
          <div className="relative">
            <div className="absolute top-0 left-0 w-1 rounded-full bg-[#4361EE] h-full ms-[6px] mt-2"></div>
            <div className="relative pl-10 mb-6">
              <div className="absolute top-2 left-0 w-4 h-4 bg-[#4361EE] border-2 border-white rounded-full"></div>
              <h3 className="text-lg font-medium text-[#4361EE]">Security Specialist at Kentico</h3>
              <p className="text-sm text-gray-500">Brno, Czech Republic</p>
              <p className="text-sm text-gray-500 font-semibold">2024 - Present</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Responsible for complete product security across on-prem and SaaS offerings.</li>
                <li>Collaborate with VPs of Engineering, EMs, and developers to embed security into the development lifecycle.</li>
                <li>Define and implement SDL including threat modeling, secure coding baselines, SAST, and component analysis.</li>
                <li>Lead Azure cloud infrastructure security efforts.</li>
                <li>Define and improve processes for handling security bugs and incident response.</li>
                <li>Contribute to ISMS documentation and SOC 2 readiness.</li>
                <li>Stay current with AI security trends and explore secure implementation of AI tools.</li>
              </ul>
            </div>
            <div className="relative pl-10 mb-6">
              <div className="absolute top-2 left-0 w-4 h-4 bg-[#4361EE] border-2 border-white rounded-full"></div>
              <h3 className="text-lg font-medium text-[#4361EE]">Security Engineer at Kentico</h3>
              <p className="text-sm text-gray-500">Brno, Czech Republic</p>
              <p className="text-sm text-gray-500 font-semibold">2021 - 2024</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Maintained high product security standards on Xperience by Kentico.</li>
                <li>Consulting security best practices with developers.</li>
                <li>Performing security reviews for new features.</li>
                <li>Improved product security and introduced modern security best practices.</li>
                <li>Focused on penetration testing, cloud security, and secure development practices.</li>
              </ul>
            </div>
            <div className="relative pl-10 mb-6">
              <div className="absolute top-2 left-0 w-4 h-4 bg-[#4361EE] border-2 border-white rounded-full"></div>
              <h3 className="text-lg font-medium text-[#4361EE]">IT Developer at CSIRT-MU</h3>
              <p className="text-sm text-gray-500">Brno, Czech Republic</p>
              <p className="text-sm text-gray-500 font-semibold">2020</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Assisted in containerizing industrial components for testing purposes using Docker, with a focus on deployment and logging.</li>
                <li>Supported the implementation of centralized logging solutions as part of a large-scale security project.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white shadow-lg rounded-lg p-6 mb-6 pt-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Software Systems and Services Management (Cybersecurity)</h3>
              <p className="text-sm text-gray-500">at Masaryk University, Brno</p>
              <p className="text-sm text-gray-500">2020 - 2022</p>
              <p className="text-sm text-gray-700 italic">Thesis: <a href="https://is.muni.cz/th/c0tfi/?lang=en" className="text-blue-500 underline">Visualization of Vulnerabilities in Open Source Software Dependencies</a></p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Information Technology Security</h3>
              <p className="text-sm text-gray-500">at Masaryk University, Brno</p>
              <p className="text-sm text-gray-500">2017 - 2020</p>
              <p className="text-sm text-gray-700 italic">Thesis: <a href="https://is.muni.cz/th/mc1bj/" className="text-blue-500 underline">Cybersecurity game at KYPO4INDUSTRY testbed</a></p>
            </div>
          </div>
        </section>

        <section className="bg-white shadow-lg rounded-lg p-6 pt-2 skills-section">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h2>
          <div className="flex flex-wrap justify-start gap-2">
            <span className="bg-[#4361EE] text-white text-sm font-medium px-3 py-1 rounded-full">Secure Development Lifecycle (SDL)</span>
            <span className="bg-[#4361EE] text-white text-sm font-medium px-3 py-1 rounded-full">Threat Modeling</span>
            <span className="bg-[#4361EE] text-white text-sm font-medium px-3 py-1 rounded-full">SCA and SAST</span>
            <span className="bg-[#4361EE] text-white text-sm font-medium px-3 py-1 rounded-full">Application Security Best Practices</span>
            <span className="bg-[#4361EE] text-white text-sm font-medium px-3 py-1 rounded-full">OWASP Top 10</span>
            <span className="bg-[#4361EE] text-white text-sm font-medium px-3 py-1 rounded-full">Penetration Testing</span>
            <span className="bg-[#4361EE] text-white text-sm font-medium px-3 py-1 rounded-full">AI Security</span>
            <span className="bg-[#4361EE] text-white text-sm font-medium px-3 py-1 rounded-full">Azure Hardening</span>
            <span className="bg-[#4361EE] text-white text-sm font-medium px-3 py-1 rounded-full">Infrastructure as Code (IaC) Security</span>
            <span className="bg-[#4361EE] text-white text-sm font-medium px-3 py-1 rounded-full">SOC 2 & ISMS Policies</span>
            <span className="bg-[#4361EE] text-white text-sm font-medium px-3 py-1 rounded-full">Security Awareness & Education</span>
            <span className="bg-[#4361EE] text-white text-sm font-medium px-3 py-1 rounded-full">Cross-functional Communication</span>
            <span className="bg-[#4361EE] text-white text-sm font-medium px-3 py-1 rounded-full">Process Design & Implementation</span>
            <span className="bg-[#4361EE] text-white text-sm font-medium px-3 py-1 rounded-full">Continuous Learning</span>
            <span className="bg-[#4361EE] text-white text-sm font-medium px-3 py-1 rounded-full">Hands-on Problem Solving</span>
          </div>
        </section>
        <footer className="mt-10 text-center text-gray-500 text-sm">
          This page created using GitHub Copilot, Vite and Tailwind, because I was not happy with how my CV looked using Word.
        </footer>
      </div>
    </div>
  );
}

export default App;
