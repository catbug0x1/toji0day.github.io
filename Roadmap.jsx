import { useState } from 'react';

const Roadmap = () => {
  const [activeTab, setActiveTab] = useState('blue');

  const roadmapData = [
    {
      path: "Blue Team (Defensive Security)",
      topics: [
        {
          name: "Network Security Fundamentals",
          resources: [
            { name: "CompTIA Security+ Course", url: "https://www.comptia.org/certifications/security" },
            { name: "Cybrary Network Security Course", url: "https://www.cybrary.it/course/network-security/" },
            { name: "SANS SEC401: Security Essentials Bootcamp Style", url: "https://www.sans.org/cyber-security-courses/security-essentials-bootcamp-style/" },
          ],
        },
        {
          name: "Security Information and Event Management (SIEM)",
          resources: [
            { name: "Splunk Fundamentals 1", url: "https://www.splunk.com/en_us/training/free-courses/splunk-fundamentals-1.html" },
            { name: "ELK Stack Tutorial", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/elasticsearch-intro.html" },
            { name: "IBM QRadar Fundamentals", url: "https://www.ibm.com/security/security-intelligence/qradar" },
          ],
        },
        {
          name: "Incident Response",
          resources: [
            { name: "SANS FOR508: Advanced Incident Response, Threat Hunting, and Digital Forensics", url: "https://www.sans.org/cyber-security-courses/advanced-incident-response-threat-hunting-training/" },
            { name: "Incident Response Lifecycle", url: "https://www.cynet.com/incident-response/incident-response-lifecycle-and-framework/" },
            { name: "NIST Computer Security Incident Handling Guide", url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf" },
          ],
        },
        {
          name: "Threat Intelligence",
          resources: [
            { name: "MITRE ATT&CK Framework", url: "https://attack.mitre.org/" },
            { name: "Mandiant Threat Intelligence Certification", url: "https://www.mandiant.com/academy/course/mandiant-threat-intelligence-certification" },
            { name: "SANS FOR578: Cyber Threat Intelligence", url: "https://www.sans.org/cyber-security-courses/cyber-threat-intelligence/" },
          ],
        },
      ],
    },
    {
      path: "Red Team (Offensive Security)",
      topics: [
        {
          name: "Ethical Hacking Basics",
          resources: [
            { name: "TryHackMe", url: "https://tryhackme.com/" },
            { name: "HackTheBox", url: "https://www.hackthebox.eu/" },
            { name: "OSCP (Offensive Security Certified Professional)", url: "https://www.offensive-security.com/pwk-oscp/" },
          ],
        },
        {
          name: "Web Application Security",
          resources: [
            { name: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" },
            { name: "PortSwigger Web Security Academy", url: "https://portswigger.net/web-security" },
            { name: "SANS SEC542: Web App Penetration Testing and Ethical Hacking", url: "https://www.sans.org/cyber-security-courses/web-app-penetration-testing-ethical-hacking/" },
          ],
        },
        {
          name: "Exploit Development",
          resources: [
            { name: "Offensive Security's Exploit Development Course", url: "https://www.offensive-security.com/exploitdb-bin-sploits/" },
            { name: "Corelan's Exploit Writing Tutorials", url: "https://www.corelan.be/index.php/articles/" },
            { name: "SANS SEC760: Advanced Exploit Development for Penetration Testers", url: "https://www.sans.org/cyber-security-courses/advanced-exploit-development-penetration-testers/" },
          ],
        },
        {
          name: "Mobile Application Security",
          resources: [
            { name: "OWASP Mobile Security Testing Guide", url: "https://owasp.org/www-project-mobile-security-testing-guide/" },
            { name: "Mobile Application Penetration Testing", url: "https://www.packtpub.com/product/mobile-application-penetration-testing/9781785883378" },
            { name: "NowSecure Mobile App Security Training", url: "https://www.nowsecure.com/resource/mobile-appsec-training/" },
          ],
        },
        {
          name: "Web Application Penetration Testing (WAPT)",
          resources: [
            { name: "PortSwigger Web Security Academy Blog", url: "https://portswigger.net/blog" },
            { name: "Acunetix Blog", url: "https://acunetix.com/blog/" },
            { name: "Intigriti Blog", url: "https://blog.intigriti.com" },
            { name: "OWASP Web Security Academy", url: "https://owasp.org" },
            { name: "Web Security Academy", url: "https://portswigger.net/web-security" },
            { name: "SANS Institute", url: "https://sans.org" },
            { name: "Web Application Penetration Testing: A Practical Guide", url: "#" },
            { name: "The Web Application Hacker's Handbook", url: "#" },
            { name: "Violent Python: A Cookbook for Hackers", url: "#" },
            { name: "PortSwigger Web Security Academy", url: "https://portswigger.net/web-security" },
            { name: "eLearnSecurity", url: "https://security.ine.com" },
            { name: "Udemy Cyber Security Courses", url: "https://udemy.com/topic/cyber-security/" },
            { name: "Web Security Academy YouTube Channel", url: "https://youtube.com/playlist?list=PLoX0sUafNGbFcyjCwB0N7x_Zxw7T1-I9Y" },
            { name: "Null Byte YouTube Channel", url: "https://m.youtube.com/@NullByteWHT" },
            { name: "John Hammond YouTube Channel", url: "https://m.youtube.com/@_JohnHammond" },
            { name: "Security Now Podcast", url: "https://twit.tv/shows/security-now" },
            { name: "Hak5 Podcast", url: "https://shop.hak5.org/collections/all" },
            { name: "Risky Business Podcast", url: "https://risky.biz" },
            { name: "PortSwigger Web Security Academy Labs", url: "https://portswigger.net/web-security/all-labs" },
            { name: "OWASP Broken Web Applications Project", url: "https://owasp.org/www-project-vulnerable-web-applications-directory/" },
            { name: "HackTheBox", url: "https://hackthebox.com" },
            { name: "VulnHub", url: "https://vulnhub.com" },
            { name: "CTFtime", url: "https://ctftime.org" },
            { name: "HackTheBox CTFs", url: "https://ctf.hackthebox.com" },
            { name: "SANS CTFs", url: "https://sans.org/blog/and-now-for-something-awesome-sans-launches-new-series-of-worldwide-capture-the-flag-cyber-events/" },
            { name: "DEF CON CTF", url: "https://defcon.org/html/links/dc-ctf.html" },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Cybersecurity Learning Roadmap</h1>
      <div className="mb-6">
        <button
          onClick={() => setActiveTab('blue')}
          className={`mr-4 px-4 py-2 rounded ${activeTab === 'blue' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-green-400'}`}
        >
          Blue Team
        </button>
        <button
          onClick={() => setActiveTab('red')}
          className={`px-4 py-2 rounded ${activeTab === 'red' ? 'bg-red-600 text-white' : 'bg-gray-700 text-green-400'}`}
        >
          Red Team
        </button>
      </div>
      {roadmapData.map((path, pathIndex) => (
        <div key={pathIndex} className={`mb-12 ${activeTab === 'blue' && pathIndex === 1 ? 'hidden' : ''} ${activeTab === 'red' && pathIndex === 0 ? 'hidden' : ''}`}>
          <h2 className="text-2xl font-semibold mb-4">{path.path}</h2>
          {path.topics.map((topic, topicIndex) => (
            <div key={topicIndex} className="mb-6 bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{topic.name}</h3>
              <ul className="list-disc list-inside space-y-2">
                {topic.resources.map((resource, resourceIndex) => (
                  <li key={resourceIndex}>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Roadmap;