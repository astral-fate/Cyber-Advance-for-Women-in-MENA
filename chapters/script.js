Of course, my apologies for stopping short. Here is the continuation of the list from question 151 to the final question, 569.

```javascript
const quizQuestions = [
  // ... (questions 1-150 from the previous responses go here) ...
  {
    "questionNumber": 151,
    "category": "General Security Concepts",
    "question": "A security analyst wants to automate a task that shares data between systems. Which of the following is the best option for the analyst to use?",
    "options": {
      "A": "SOAR",
      "B": "API",
      "C": "SFTP",
      "D": "RDP"
    },
    "answer": "B"
  },
  {
    "questionNumber": 152,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "Which of the following vulnerabilities is exploited when an attacker overwrites a register with a malicious address?",
    "options": {
      "A": "VM escape",
      "B": "SQL injection",
      "C": "Buffer overflow",
      "D": "Race condition"
    },
    "answer": "C"
  },
  {
    "questionNumber": 153,
    "category": "General Security Concepts",
    "question": "Which of the following organizational documents is most often used to establish and communicate expectations associated with integrity and ethical behavior within an organization?",
    "options": {
      "A": "AUP",
      "B": "SLA",
      "C": "EULA",
      "D": "MOA"
    },
    "answer": "A"
  },
  {
    "questionNumber": 154,
    "category": "Security Operations",
    "question": "A site reliability engineer is designing a recovery strategy that requires quick failover to an identical site if the primary facility goes down. Which of the following types of sites should the engineer consider?",
    "options": {
      "A": "Recovery site",
      "B": "Hot site",
      "C": "Cold site",
      "D": "Warm site"
    },
    "answer": "B"
  },
  {
    "questionNumber": 155,
    "category": "General Security Concepts",
    "question": "A systems administrator is looking for a low-cost application-hosting solution that is cloud-based. Which of the following meets these requirements?",
    "options": {
      "A": "Serverless framework",
      "B": "Type 1 hvpervisor",
      "C": "SD-WAN",
      "D": "SDN"
    },
    "answer": "A"
  },
  {
    "questionNumber": 156,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "While a user reviews their email, a host gets infected by malware from an external hard drive plugged into the host. The malware steals all the user's credentials stored in the browser. Which of the following training topics should the user review to prevent this situation from reoccurring?",
    "options": {
      "A": "Operational security",
      "B": "Removable media and cables",
      "C": "Password management",
      "D": "Social engineering"
    },
    "answer": "B"
  },
  {
    "questionNumber": 157,
    "category": "Security Program Management and Oversight",
    "question": "A security audit of an organization revealed that most of the IT staff members have domain administrator credentials and do not change the passwords regularly. Which of the following solutions should the security learn propose to resolve the findings in the most complete way?",
    "options": {
      "A": "Creating group policies to enforce password rotation on domain administrator credentials",
      "B": "Reviewing the domain administrator group, removing all unnecessary administrators, and rotating all passwords",
      "C": "Integrating the domain administrator's group with an IdP and requiring SSO with MFA for all access",
      "D": "Securing domain administrator credentials in a PAM vault and controlling access with role-based access control"
    },
    "answer": "D"
  },
  {
    "questionNumber": 158,
    "category": "Security Operations",
    "question": "An administrator has identified and fingerprinted specific files that will generate an alert if an attempt is made to email these files outside of the organization. Which of the following best describes the tool the administrator is using?",
    "options": {
      "A": "DLP",
      "B": "SNMP traps",
      "C": "SCAP",
      "D": "IPS"
    },
    "answer": "A"
  },
  {
    "questionNumber": 159,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "The Chief Information Security Officer of an organization needs to ensure recovery from ransomware would likely occur within the organization's agreed-upon RPOs end RTOs. Which of the following backup scenarios would best ensure recovery?",
    "options": {
      "A": "Hourly differential backups stored on a local SAN array",
      "B": "Dally full backups stored on premises in magnetic offline media",
      "C": "Daly differential backups maintained by a third-party cloud provider",
      "D": "Weekly full backups with daily incremental stored on a NAS drive"
    },
    "answer": "D"
  },
  {
    "questionNumber": 160,
    "category": "General Security Concepts",
    "question": "A security team is setting up a new environment for hosting the organization's on-premises software application as a cloud-based service. Which of the following should the team ensure is in place in order for the organization to follow security best practices?",
    "options": {
      "A": "Visualization and isolation of resources",
      "B": "Network segmentation",
      "C": "Data encryption",
      "D": "Strong authentication policies"
    },
    "answer": "A"
  },
  {
    "questionNumber": 161,
    "category": "General Security Concepts",
    "question": "Which of the following threat actors would most likely deface the website of a high-profile music group?",
    "options": {
      "A": "Unskilled attacker",
      "B": "Organized crime",
      "C": "Nation-state",
      "D": "Insider threat"
    },
    "answer": "A"
  },
  {
    "questionNumber": 162,
    "category": "General Security Concepts",
    "question": "Which of the following can be used to compromise a system that is running an RTOS?",
    "options": {
      "A": "Cross-site scripting",
      "B": "Memory injection",
      "C": "Replay attack",
      "D": "Ransomware"
    },
    "answer": "B"
  },
  {
    "questionNumber": 163,
    "category": "General Security Concepts",
    "question": "Which of the following describes the procedures a penetration tester must follow while conducting a test?",
    "options": {
      "A": "Rules of engagement",
      "B": "Rules of acceptance",
      "C": "Rules of understanding",
      "D": "Rules of execution"
    },
    "answer": "A"
  },
  {
    "questionNumber": 164,
    "category": "General Security Concepts",
    "question": "Employees located off-site must have access to company resources in order to complete their assigned tasks These employees utilize a solution that allows remote access without interception concerns. Which of the following best describes this solution?",
    "options": {
      "A": "Proxy server",
      "B": "NGFW",
      "C": "VPN",
      "D": "Security zone"
    },
    "answer": "C"
  },
  {
    "questionNumber": 165,
    "category": "General Security Concepts",
    "question": "A company prevented direct access from the database administrators’ workstations to the network segment that contains database servers. Which of the following should a database administrator use to access the database servers?",
    "options": {
      "A": "Jump server",
      "B": "RADIUS",
      "C": "HSM",
      "D": "Load balancer"
    },
    "answer": "A"
  },
  {
    "questionNumber": 166,
    "category": "General Security Concepts",
    "question": "A business received a small grant to migrate its infrastructure to an off-premises solution. Which of the following should be considered first?",
    "options": {
      "A": "Security of cloud providers",
      "B": "Cost of implementation",
      "C": "Ability of engineers",
      "D": "Security of architecture"
    },
    "answer": "D"
  },
  {
    "questionNumber": 167,
    "category": "General Security Concepts",
    "question": "A security analyst scans a company's public network and discovers a host is running a remote desktop that can be used to access the production network. Which of the following changes should the security analyst recommend?",
    "options": {
      "A": "Changing the remote desktop port to a non-standard number",
      "B": "Setting up a VPN and placing the jump server inside the firewall",
      "C": "Using a proxy for web connections from the remote desktop server",
      "D": "Connecting the remote server to the domain and increasing the password length"
    },
    "answer": "B"
  },
  {
    "questionNumber": 168,
    "category": "General Security Concepts",
    "question": "A security analyst discovers that a large number of employee credentials had been stolen and were being sold on the dark web. The analyst investigates and discovers that some hourly employee credentials were compromised, but salaried employee credentials were not affected. Hourly employees are required to use a website called acmetimekeeping.com to clock in and out. This website is accessible from the internet. Which of the following Is the most likely reason for this compromise?",
    "options": {
      "A": "A brute-force attack was used against the time-keeping website to scan for common passwords.",
      "B": "A malicious actor compromised the time-keeping website with malicious code using an unpatched vulnerability on the site, stealing the credentials.",
      "C": "The internal DNS servers were poisoned and were redirecting acmetimkeeping.com to malicious domain that intercepted the credentials and then passed them through to the real site",
      "D": "ARP poisoning affected the machines in the building and caused the kiosks lo send a copy of all the submitted credentials to a machine.machine."
    },
    "answer": "B"
  },
  {
    "questionNumber": 169,
    "category": "General Security Concepts",
    "question": "Which of the following would help ensure a security analyst is able to accurately measure the overall risk to an organization when a new vulnerability is disclosed?",
    "options": {
      "A": "A full inventory of all hardware and software",
      "B": "Documentation of system classifications",
      "C": "A list of system owners and their departments",
      "D": "Third-party risk assessment documentation"
    },
    "answer": "A"
  },
  {
    "questionNumber": 170,
    "category": "Security Operations",
    "question": "A Chief Information Security Officer (CISO) has developed information security policies that relate to the software development methodology. Which of the following would the CISO most likely include in the organization's documentation?",
    "options": {
      "A": "Peer review requirements",
      "B": "Multifactor authentication",
      "C": "Branch protection tests",
      "D": "Secrets management configurations"
    },
    "answer": "A"
  },
  {
    "questionNumber": 171,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "Which of the following threat vectors is most commonly utilized by insider threat actors attempting data exfiltration?",
    "options": {
      "A": "Unidentified removable devices",
      "B": "Default network device credentials",
      "C": "Spear phishing emails",
      "D": "Impersonation of business units through typosquatting"
    },
    "answer": "A"
  },
  {
    "questionNumber": 172,
    "category": "General Security Concepts",
    "question": "A company has yearly engagements with a service provider. The general terms and conditions are the same for all engagements. The company wants to simplify the process and revisit the general terms every three years. Which of the following documents would provide the best way to set the general terms?",
    "options": {
      "A": "MSA",
      "B": "NDA",
      "C": "MOU",
      "D": "SLA"
    },
    "answer": "A"
  },
  {
    "questionNumber": 173,
    "category": "Security Operations",
    "question": "An organization wants to donate its aging network hardware. Which of the following should the organization perform to prevent any network details from leaking?",
    "options": {
      "A": "Destruction",
      "B": "Sanitization",
      "C": "Certification",
      "D": "Data retention"
    },
    "answer": "B"
  },
  {
    "questionNumber": 174,
    "category": "Security Operations",
    "question": "An administrator is reviewing a single server's security logs and discovers the following; Which of the following best describes the action captured in this log file?",
    "options": {
      "A": "Brute-force attack",
      "B": "Privilege escalation",
      "C": "Failed password audit",
      "D": "Forgotten password by the user"
    },
    "answer": "A"
  },
  {
    "questionNumber": 175,
    "category": "General Security Concepts",
    "question": "A company processes and stores sensitive data on its own systems. Which of the following steps should the company take first to ensure compliance with privacy regulations?",
    "options": {
      "A": "Implement access controls and encryption.",
      "B": "Develop and provide training on data protection policies.",
      "C": "Create incident response and disaster recovery plans.",
      "D": "Purchase and install security software."
    },
    "answer": "A"
  },
  {
    "questionNumber": 176,
    "category": "Security Architecture",
    "question": "In which of the following scenarios is tokenization the best privacy technique 10 use?",
    "options": {
      "A": "Providing pseudo-anonymization tor social media user accounts",
      "B": "Serving as a second factor for authentication requests",
      "C": "Enabling established customers to safely store credit card Information",
      "D": "Masking personal information inside databases by segmenting data"
    },
    "answer": "C"
  },
  {
    "questionNumber": 177,
    "category": "General Security Concepts",
    "question": "A security administrator recently reset local passwords and the following values were recorded in the system: Which of the following in the security administrator most likely protecting against?",
    "options": {
      "A": "Account sharing",
      "B": "Weak password complexity",
      "C": "Pass-the-hash attacks",
      "D": "Password compromise"
    },
    "answer": "C"
  },
  {
    "questionNumber": 178,
    "category": "General Security Concepts",
    "question": "An IT security team is concerned about the confidentiality of documents left unattended in MFPs. Which of the following should the security team do to mitigate the situation?",
    "options": {
      "A": "Educate users about the importance of paper shredder devices.",
      "B": "Deploy an authentication factor that requires In-person action before printing.",
      "C": "Install a software client m every computer authorized to use the MFPs.",
      "D": "Update the management software to utilize encryption."
    },
    "answer": "B"
  },
  {
    "questionNumber": 179,
    "category": "Security Architecture",
    "question": "A security report shows that during a two-week test period. 80% of employees unwittingly disclosed their SSO credentials when accessing an external website. The organization purposelycreated the website to simulate a cost-free password complexity test. Which of the following would best help reduce the number of visits to similar websites in the future?",
    "options": {
      "A": "Block all outbound traffic from the intranet.",
      "B": "Introduce a campaign to recognize phishing attempts.",
      "C": "Restrict internet access for the employees who disclosed credentials.",
      "D": "Implement a deny list of websites."
    },
    "answer": "B"
  },
  {
    "questionNumber": 180,
    "category": "General Security Concepts",
    "question": "Which of the following would be the best solution to deploy a low-cost standby site that includes hardware and internet access?",
    "options": {
      "A": "Recovery site",
      "B": "Cold site",
      "C": "Hot site",
      "D": "Warm site"
    },
    "answer": "B"
  },
  {
    "questionNumber": 181,
    "category": "Security Operations",
    "question": "An employee clicked a link in an email from a payment website that asked the employee to update contact information. The employee entered the log-in information but received a “page not found” error message. Which of the following types of social engineering attacks occurred?",
    "options": {
      "A": "Brand impersonation",
      "B": "Pretexting",
      "C": "Typosquatting",
      "D": "Phishing"
    },
    "answer": "D"
  },
  {
    "questionNumber": 182,
    "category": "Security Operations",
    "question": "A cyber operations team informs a security analyst about a new tactic malicious actors are using to compromise networks. SIEM alerts have not yet been configured. Which of the following best describes what the security analyst should do to identify this behavior?",
    "options": {
      "A": "[Digital forensics",
      "B": "E-discovery",
      "C": "Incident response",
      "D": "Threat hunting"
    },
    "answer": "D"
  },
  {
    "questionNumber": 183,
    "category": "General Security Concepts",
    "question": "A company plans to secure its systems by: Preventing users from sending sensitive data over corporate email, and Restricting access to potentially harmful websites. Which of the following features should the company set up? (Select two).",
    "options": {
      "A": "DLP software",
      "B": "DNS filtering",
      "C": "File integrity monitoring",
      "D": "Stateful firewall"
    },
    "answer": "B"
  },
  {
    "questionNumber": 184,
    "category": "General Security Concepts",
    "question": "A client demands at least 99.99% uptime from a service provider's hosted security services. Which of the following documents includes the information the service provider should return to the client?",
    "options": {
      "A": "MOA",
      "B": "SOW",
      "C": "MOU",
      "D": "SLA"
    },
    "answer": "D"
  },
  {
    "questionNumber": 185,
    "category": "General Security Concepts",
    "question": "Which of the following allows for the attribution of messages to individuals?",
    "options": {
      "A": "Adaptive identity",
      "B": "Non-repudiation",
      "C": "Authentication",
      "D": "Access logs"
    },
    "answer": "B"
  },
  {
    "questionNumber": 186,
    "category": "General Security Concepts",
    "question": "A company must ensure sensitive data at rest is rendered unreadable. Which of the following will the company most likely use?",
    "options": {
      "A": "Hashing",
      "B": "Tokenization",
      "C": "Encryption",
      "D": "Segmentation"
    },
    "answer": "C"
  },
  {
    "questionNumber": 187,
    "category": "General Security Concepts",
    "question": "Which of the following actions could a security engineer take to ensure workstations and servers are properly monitored for unauthorized changes and software?",
    "options": {
      "A": "Configure all systems to log scheduled tasks.",
      "B": "Collect and monitor all traffic exiting the network.",
      "C": "Block traffic based on known malicious signatures.",
      "D": "Install endpoint management software on all systems."
    },
    "answer": "D"
  },
  {
    "questionNumber": 188,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "While reviewing logs, a security administrator identifies the following code: <script>function(send_info)</script> Which of the following best describes the vulnerability being exploited?",
    "options": {
      "A": "XSS",
      "B": "SQLi",
      "C": "DDoS",
      "D": "CSRF"
    },
    "answer": "A"
  },
  {
    "questionNumber": 189,
    "category": "Security Architecture",
    "question": "A security team installs an IPS on an organization's network and needs to configure the system to detect and prevent specific network attacks. Which of the following settings should the team configure first within the IPS?",
    "options": {
      "A": "Allow list policies",
      "B": "Packet Inspection",
      "C": "Logging and reporting",
      "D": "Firewall rules"
    },
    "answer": "B"
  },
  {
    "questionNumber": 190,
    "category": "Security Architecture",
    "question": "In which of the following will unencrypted PLC management traffic most likely be found?",
    "options": {
      "A": "SDN",
      "B": "IoT",
      "C": "VPN",
      "D": "SCADA"
    },
    "answer": "D"
  },
  {
    "questionNumber": 191,
    "category": "General Security Concepts",
    "question": "A security administrator recently reset local passwords and the following values were recorded in the system: Which of the following in the security administrator most likely protecting against?",
    "options": {
      "A": "Account sharing",
      "B": "Weak password complexity",
      "C": "Pass-the-hash attacks",
      "D": "Password compromise"
    },
    "answer": "C"
  },
  {
    "questionNumber": 192,
    "category": "General Security Concepts",
    "question": "Which of the following is an algorithm performed to verify that data has not been modified?",
    "options": {
      "A": "Hash",
      "B": "Code check",
      "C": "Encryption",
      "D": "Checksum"
    },
    "answer": "A"
  },
  {
    "questionNumber": 193,
    "category": "General Security Concepts",
    "question": "A company plans to secure its systems by: Preventing users from sending sensitive data over corporate email Restricting access to potentially harmful websites Which of the following features should the company set up? (Select two).",
    "options": {
      "A": "DLP software",
      "B": "DNS filtering",
      "C": "File integrity monitoring",
      "D": "Stateful firewall",
      "E": "Guardralls",
      "F": "Antivirus signatures"
    },
    "answer": "A B"
  },
  {
    "questionNumber": 194,
    "category": "Security Operations",
    "question": "Which of the following can best contribute to prioritizing patch applications?",
    "options": {
      "A": "CVSS",
      "B": "SCAP",
      "C": "OSINT",
      "D": "CVE"
    },
    "answer": "A"
  },
  {
    "questionNumber": 195,
    "category": "Security Architecture",
    "question": "Which of the following has been implemented when a host-based firewall on a legacy Linux system allows connections from only specific internal IP addresses?",
    "options": {
      "A": "Compensating control",
      "B": "Network segmentation",
      "C": "Transfer of risk",
      "D": "SNMP traps"
    },
    "answer": "A"
  },
  {
    "questionNumber": 196,
    "category": "Security Operations",
    "question": "A website user is locked out of an account after clicking an email link and visiting a different website Web server logs show the user's password was changed, even though the user did not change the password. Which of the following is the most likely cause?",
    "options": {
      "A": "Cross-sue request forgery",
      "B": "Directory traversal",
      "C": "ARP poisoning",
      "D": "SQL injection"
    },
    "answer": "A"
  },
  {
    "questionNumber": 197,
    "category": "Security Operations",
    "question": "An administrator was notified that a user logged in remotely after hours and copied large amounts of data to a personal device. Which of the following best describes the user’s activity?",
    "options": {
      "A": "Penetration testing",
      "B": "Phishing campaign",
      "C": "External audit",
      "D": "Insider threat"
    },
    "answer": "D"
  },
  {
    "questionNumber": 198,
    "category": "General Security Concepts",
    "question": "A penetration test has demonstrated that domain administrator accounts were vulnerable to pass-the-hash attacks. Which of the following would have been the best strategy to prevent the threat actor from using domain administrator accounts?",
    "options": {
      "A": "Audit each domain administrator account weekly for password compliance.",
      "B": "Implement a privileged access management solution.",
      "C": "Create IDS policies to monitor domain controller access.",
      "D": "Use Group Policy to enforce password expiration."
    },
    "answer": "B"
  },
  {
    "questionNumber": 199,
    "category": "General Security Concepts",
    "question": "An organization wants to improve the company's security authentication method for remote employees. Given the following requirements: Must work across SaaS and internal network applications, Must be device manufacturer agnostic, and Must have offline capabilities. Which of the following would be the most appropriate authentication method?",
    "options": {
      "A": "Username and password",
      "B": "Biometrics",
      "C": "SMS verification",
      "D": "Time-based tokens"
    },
    "answer": "D"
  },
  {
    "questionNumber": 200,
    "category": "General Security Concepts",
    "question": "Which of the following is a preventive physical security control?",
    "options": {
      "A": "Video surveillance system",
      "B": "Bollards",
      "C": "Alarm system",
      "D": "Motion sensors"
    },
    "answer": "B"
  },
  {
    "questionNumber": 201,
    "category": "General Security Concepts",
    "question": "Which of the following methods to secure data is most often used to protect data in transit?",
    "options": {
      "A": "Encryption",
      "B": "Obfuscation",
      "C": "Permission restrictions",
      "D": "Hashing"
    },
    "answer": "A"
  },
  {
    "questionNumber": 202,
    "category": "General Security Concepts",
    "question": "Which of the following best represents an application that does not have an on-premises requirement and is accessible from anywhere?",
    "options": {
      "A": "Pass",
      "B": "Hybrid cloud",
      "C": "Private cloud",
      "D": "IaaS",
      "E": "SaaS"
    },
    "answer": "E"
  },
  {
    "questionNumber": 203,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "While considering the organization's cloud-adoption strategy, the Chief Information Security Officer sets a goal to outsource patching of firmware, operating systems, and applications to the chosen cloud vendor. Which of the following best meets this goal?",
    "options": {
      "A": "Community cloud",
      "B": "PaaS",
      "C": "Containerization",
      "D": "Private cloud",
      "E": "SaaS",
      "F": "laaS"
    },
    "answer": "E"
  },
  {
    "questionNumber": 204,
    "category": "General Security Concepts",
    "question": "A security team created a document that details the order in which critical systems should be through back online after a major outage. Which of the following documents did the team create?",
    "options": {
      "A": "Communication plan",
      "B": "Incident response plan",
      "C": "Data retention policy",
      "D": "Disaster recovery plan"
    },
    "answer": "D"
  },
  {
    "questionNumber": 205,
    "category": "General Security Concepts",
    "question": "A security administrator protects passwords by using hashing. Which of the following best describes what the administrator is doing?",
    "options": {
      "A": "Adding extra characters at the end to increase password length",
      "B": "Generating a token to make the passwords temporal",
      "C": "Using mathematical algorithms to make passwords unique",
      "D": "Creating a rainbow table to protect passwords in a list"
    },
    "answer": "C"
  },
  {
    "questionNumber": 206,
    "category": "Security Program Management and Oversight",
    "question": "A company requires hard drives to be securely wiped before sending decommissioned systems to recycling. Which of the following best describes this policy?",
    "options": {
      "A": "Enumeration",
      "B": "Sanitization",
      "C": "Destruction",
      "D": "Inventory"
    },
    "answer": "B"
  },
  {
    "questionNumber": 207,
    "category": "Security Program Management and Oversight",
    "question": "During a penetration test, a vendor attempts to enter an unauthorized area using an access badge Which of the following types of tests does this represent?",
    "options": {
      "A": "Defensive",
      "B": "Passive",
      "C": "Offensive",
      "D": "Physical"
    },
    "answer": "D"
  },
  {
    "questionNumber": 208,
    "category": "General Security Concepts",
    "question": "A database administrator is updating the company's SQL database, which stores credit card information for pending purchases. Which of the following is the best method to secure the data against a potential breach?",
    "options": {
      "A": "Hashing",
      "B": "Obfuscation",
      "C": "Tokenization",
      "D": "Masking"
    },
    "answer": "C"
  },
  {
    "questionNumber": 209,
    "category": "General Security Concepts",
    "question": "After creating a contract for IT contractors, the human resources department changed several clauses. The contract has gone through three revisions. Which of the following processes should the human resources department follow to track revisions?",
    "options": {
      "A": "Version validation",
      "B": "Version changes",
      "C": "Version updates",
      "D": "Version control"
    },
    "answer": "D"
  },
  {
    "questionNumber": 210,
    "category": "Security Program Management and Oversight",
    "question": "A security analyst is reviewing the security of a SaaS application that the company intends to purchase. Which of the following documentations should the security analyst request from the SaaS application vendor?",
    "options": {
      "A": "Service-level agreement",
      "B": "Third-party audit",
      "C": "Statement of work",
      "D": "Data privacy agreement"
    },
    "answer": "B"
  },
  {
    "questionNumber": 211,
    "category": "General Security Concepts",
    "question": "Which of the following activities uses OSINT?",
    "options": {
      "A": "Social engineering testing",
      "B": "Data analysis of logs",
      "C": "Collecting evidence of malicious activity",
      "D": "Producing IOC for malicious artifacts"
    },
    "answer": "C"
  },
  {
    "questionNumber": 212,
    "category": "Security Program Management and Oversight",
    "question": "A company is implementing a policy to allow employees to use their personal equipment for work. However, the company wants to ensure that only company-approved applications can be installed. Which of the following addresses this concern?",
    "options": {
      "A": "MDM",
      "B": "Containerization",
      "C": "DLP",
      "D": "FIM"
    },
    "answer": "A"
  },
  {
    "questionNumber": 213,
    "category": "General Security Concepts",
    "question": "Which of the following activities should be performed first to compile a list of vulnerabilities in an environment?",
    "options": {
      "A": "Automated scanning",
      "B": "Penetration testing",
      "C": "Threat hunting",
      "D": "Log aggregation",
      "E": "Adversarial emulation"
    },
    "answer": "A"
  },
  {
    "questionNumber": 214,
    "category": "General Security Concepts",
    "question": "Which of the following should an internal auditor check for first when conducting an audit of the organization's risk management program?",
    "options": {
      "A": "Policies and procedures",
      "B": "Asset management",
      "C": "Vulnerability assessment",
      "D": "Business impact analysts"
    },
    "answer": "A"
  },
  {
    "questionNumber": 215,
    "category": "General Security Concepts",
    "question": "An engineer moved to another team and is unable to access the new team's shared folders while still being able to access the shared folders from the former team. After opening a ticket, the engineer discovers that the account was never moved to the new group. Which of the following access controls is most likely causing the lack of access? 1 ",
    "options": {
      "A": "Role-based",
      "B": "Discretionary",
      "C": "Time of day",
      "D": "Least privilege"
    },
    "answer": "A"
  },
  {
    "questionNumber": 216,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "An organization needs to monitor its users' activities to prevent insider threats. Which of the following solutions would help the organization achieve this goal?",
    "options": {
      "A": "Behavioral analytics",
      "B": "Access control lists",
      "C": "Identity and access management",
      "D": "Network intrusion detection system"
    },
    "answer": "A"
  },
  {
    "questionNumber": 217,
    "category": "Security Operations",
    "question": "A security manager created new documentation to use in response to various types of security incidents. Which of the following is the next step the manager should take?",
    "options": {
      "A": "Set the maximum data retention policy.",
      "B": "Securely store the documents on an air-gapped network.",
      "C": "Review the documents' data classification policy.",
      "D": "Conduct a tabletop exercise with the team."
    },
    "answer": "D"
  },
  {
    "questionNumber": 218,
    "category": "General Security Concepts",
    "question": "Which of the following describes the understanding between a company and a client about what will be provided and the accepted time needed to provide the company with the resources?",
    "options": {
      "A": "SLA",
      "B": "MOU",
      "C": "MOA",
      "D": "BPA"
    },
    "answer": "A"
  },
  {
    "questionNumber": 219,
    "category": "General Security Concepts",
    "question": "The Chief Information Officer (CIO) asked a vendor to provide documentation detailing the specific objectives within the compliance framework that the vendor's services meet. The vendor provided a report and a signed letter stating that the services meet 17 of the 21 objectives. Which of the following did the vendor provide to the CIO?",
    "options": {
      "A": "Penetration test results",
      "B": "Self-assessment findings",
      "C": "Attestation of compliance",
      "D": "Third-party audit report"
    },
    "answer": "C"
  },
  {
    "questionNumber": 220,
    "category": "General Security Concepts",
    "question": "Which of the following architecture models ensures that critical systems are physically isolated from the network to prevent access from users with remote access privileges?",
    "options": {
      "A": "Segmentation",
      "B": "Virtualized",
      "C": "Air-gapped",
      "D": "Serverless"
    },
    "answer": "C"
  },
  {
    "questionNumber": 221,
    "category": "General Security Concepts",
    "question": "Which of the following tools can assist with detecting an employee who has accidentally emailed a file containing a customer’s PII?",
    "options": {
      "A": "SCAP",
      "B": "Net Flow",
      "C": "Antivirus",
      "D": "DLP"
    },
    "answer": "D"
  },
  {
    "questionNumber": 222,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "A security analyst learns that an attack vector, used as part of a recent incident, was a well-known IoT device exploit. The analyst needs to review logs to identify the time of the initial exploit. Which of the following logs should the analyst review first?",
    "options": {
      "A": "Endpoint",
      "B": "Application",
      "C": "Firewall",
      "D": "NAC"
    },
    "answer": "A"
  },
  {
    "questionNumber": 223,
    "category": "Security Operations",
    "question": "Which of the following actions would reduce the number of false positives for an analyst to manually review?",
    "options": {
      "A": "Create playbooks as part of a SOAR platform",
      "B": "Redefine the patch management process",
      "C": "Replace an EDR tool with an XDR solution",
      "D": "Disable AV heuristics scanning"
    },
    "answer": "A"
  },
  {
    "questionNumber": 224,
    "category": "Security Program Management and Oversight",
    "question": "A vendor needs to remotely and securely transfer files from one server to another using the command line. Which of the following protocols should be Implemented to allow for this type of access? (Select two).",
    "options": {
      "A": "SSH",
      "B": "SNMP",
      "C": "RDP",
      "D": "S/MIME",
      "E": "SMTP",
      "F": "SFTP"
    },
    "answer": "A F"
  },
  {
    "questionNumber": 225,
    "category": "General Security Concepts",
    "question": "Which of the following is an example of memory injection?",
    "options": {
      "A": "Two processes access the same variable, allowing one to cause a privilege escalation.",
      "B": "A process receives an unexpected amount of data, which causes malicious code to be executed.",
      "C": "Malicious code is copied to the allocated space of an already running process.",
      "D": "An executable is overwritten on the disk, and malicious code runs the next time it is executed."
    },
    "answer": "C"
  },
  {
    "questionNumber": 226,
    "category": "General Security Concepts",
    "question": "Which of the following topics would most likely be included within an organization's SDLC?",
    "options": {
      "A": "Service-level agreements",
      "B": "Information security policy",
      "C": "Penetration testing methodology",
      "D": "Branch protection requirements"
    },
    "answer": "B"
  },
  {
    "questionNumber": 227,
    "category": "General Security Concepts",
    "question": "Which of the following scenarios describes a possible business email compromise attack?",
    "options": {
      "A": "An employee receives a gift card request in an email that has an executive's name in the display field of the email.",
      "B": "Employees who open an email attachment receive messages demanding payment in order to access files.",
      "C": "A service desk employee receives an email from the HR director asking for log-in credentials to a cloud administrator account.",
      "D": "An employee receives an email with a link to a phishing site that is designed to look like the company's email portal."
    },
    "answer": "A"
  },
  {
    "questionNumber": 228,
    "category": "General Security Concepts",
    "question": "Which of the following methods to secure credit card data is best to use when a requirement is to see only the last four numbers on a credit card?",
    "options": {
      "A": "Encryption",
      "B": "Hashing",
      "C": "Masking",
      "D": "Tokenization"
    },
    "answer": "C"
  },
  {
    "questionNumber": 229,
    "category": "General Security Concepts",
    "question": "An administrator needs to perform server hardening before deployment. Which of the following steps should the administrator take? (Select two).",
    "options": {
      "A": "Disable default accounts.",
      "B": "Add the server to the asset inventory.",
      "C": "Remove unnecessary services.",
      "D": "Document default passwords.",
      "E": "Send server logs to the SIEM.",
      "F": "Join the server to the corporate domain."
    },
    "answer": "A C"
  },
  {
    "questionNumber": 230,
    "category": "General Security Concepts",
    "question": "A security engineer is implementing FDE for all laptops in an organization. Which of the following are the most important for the engineer to consider as part of the planning process? (Select two).",
    "options": {
      "A": "Key escrow",
      "B": "TPM presence",
      "C": "Digital signatures",
      "D": "Data tokenization",
      "E": "Public key management",
      "F": "Certificate authority linking"
    },
    "answer": "A B"
  },
  {
    "questionNumber": 231,
    "category": "General Security Concepts",
    "question": "A security analyst needs to improve the company’s authentication policy following a password audit. Which of the following should be included in the policy? (Select two).",
    "options": {
      "A": "Length",
      "B": "Complexity",
      "C": "Least privilege",
      "D": "Something you have",
      "E": "Security keys",
      "F": "Biometrics"
    },
    "answer": "A B"
  },
  {
    "questionNumber": 232,
    "category": "General Security Concepts",
    "question": "A financial institution would like to store its customer data m the cloud but still allow the data to be accessed and manipulated while encrypted. Doing so would prevent the cloud service provider from being able to decipher the data due to its sensitivity. The financial institution Is not concerned about computational overheads and slow speeds. Which of the following cryptographic techniques would best meet the requirement?",
    "options": {
      "A": "Asymmetric",
      "B": "Symmetric",
      "C": "Homomorphic",
      "D": "Ephemeral"
    },
    "answer": "C"
  },
  {
    "questionNumber": 233,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "An enterprise has been experiencing attacks focused on exploiting vulnerabilities in older browser versions with well-known exploits. Which of the following security solutions should be configured to best provide the ability to monitor and block these known signature-based attacks?",
    "options": {
      "A": "ACL",
      "B": "DLP",
      "C": "IDS",
      "D": "IPS"
    },
    "answer": "D"
  },
  {
    "questionNumber": 234,
    "category": "Security Program Management and Oversight",
    "question": "A company is discarding a classified storage array and hires an outside vendor to complete the disposal. Which of the following should the company request from the vendor?",
    "options": {
      "A": "Certification",
      "B": "Inventory list",
      "C": "Classification",
      "D": "Proof of ownership"
    },
    "answer": "A"
  },
  {
    "questionNumber": 235,
    "category": "Security Program Management and Oversight",
    "question": "An organization maintains intellectual property that it wants to protect. Which of the following concepts would be most beneficial to add to the company's security awareness training program?",
    "options": {
      "A": "Insider threat detection",
      "B": "Simulated threats",
      "C": "Phishing awareness",
      "D": "Business continuity planning"
    },
    "answer": "A"
  },
  {
    "questionNumber": 236,
    "category": "General Security Concepts",
    "question": "Which of the following explains how to determine the global regulations that data is subject to regardless of the country where the data is stored?",
    "options": {
      "A": "Geographic dispersion",
      "B": "Data sovereignty",
      "C": "Geographic restrictions",
      "D": "Data segmentation"
    },
    "answer": "B"
  },
  {
    "questionNumber": 237,
    "category": "Security Operations",
    "question": "A company is planning a disaster recovery site and needs to ensure that a single natural disaster would not result in the complete loss of regulated backup data. Which of the following should the company consider?",
    "options": {
      "A": "Geographic dispersion",
      "B": "Platform diversity",
      "C": "Hot site",
      "D": "Load balancing"
    },
    "answer": "A"
  },
  {
    "questionNumber": 238,
    "category": "Security Operations",
    "question": "Which of the following describes an executive team that is meeting in a board room and testing the company's incident response plan?",
    "options": {
      "A": "Continuity of operations",
      "B": "Capacity planning",
      "C": "Tabletop exercise",
      "D": "Parallel processing"
    },
    "answer": "C"
  },
  {
    "questionNumber": 239,
    "category": "Security Operations",
    "question": "Which of the following should be used to aggregate log data in order to create alerts and detect anomalous activity?",
    "options": {
      "A": "SIEM",
      "B": "WAF",
      "C": "Network taps",
      "D": "IDS"
    },
    "answer": "A"
  },
  {
    "questionNumber": 240,
    "category": "Security Operations",
    "question": "Various stakeholders are meeting to discuss their hypothetical roles and responsibilities in a specific situation, such as a security incident or major disaster. Which of the following best describes this meeting?",
    "options": {
      "A": "Penetration test",
      "B": "Continuity of operations planning",
      "C": "Tabletop exercise",
      "D": "Simulation"
    },
    "answer": "C"
  },
  {
    "questionNumber": 241,
    "category": "Security Operations",
    "question": "An organization is adopting cloud services at a rapid pace and now has multiple SaaS applications in use. Each application has a separate log-in. so the security team wants to reduce the number of credentials each employee must maintain. Which of the following is the first step the security team should take?",
    "options": {
      "A": "Enable SAML",
      "B": "Create OAuth tokens.",
      "C": "Use password vaulting.",
      "D": "Select an IdP"
    },
    "answer": "D"
  },
  {
    "questionNumber": 242,
    "category": "General Security Concepts",
    "question": "An IT administrator needs to ensure data retention standards are implemented on an enterprise application. Which of the Mowing describes the administrator's role?",
    "options": {
      "A": "Processor",
      "B": "Custodian",
      "C": "Privacy officer",
      "D": "Owner"
    },
    "answer": "D"
  },
  {
    "questionNumber": 243,
    "category": "General Security Concepts",
    "question": "A security engineer is working to address the growing risks that shadow IT services are introducing to the organization. The organization has taken a cloud-first approach end does not have an on-premises IT infrastructure. Which of the following would best secure the organization?",
    "options": {
      "A": "Upgrading to a next-generation firewall",
      "B": "Deploying an appropriate in-line CASB solution",
      "C": "Conducting user training on software policies",
      "D": "Configuring double key encryption in SaaS platforms"
    },
    "answer": "B"
  },
  {
    "questionNumber": 244,
    "category": "Security Architecture",
    "question": "The private key for a website was stolen, and a new certificate has been issued. Which of the following needs to be updated next?",
    "options": {
      "A": "SCEP",
      "B": "CRL",
      "C": "OCSP",
      "D": "CSR"
    },
    "answer": "B"
  },
  {
    "questionNumber": 245,
    "category": "Security Operations",
    "question": "During a recent log review, an analyst found evidence of successful injection attacks. Which of the following will best address this issue?",
    "options": {
      "A": "Authentication",
      "B": "Secure cookies",
      "C": "Static code analysis",
      "D": "Input validation"
    },
    "answer": "D"
  },
  {
    "questionNumber": 246,
    "category": "General Security Concepts",
    "question": "A software development manager wants to ensure the authenticity of the code created by the company. Which of the following options is the most appropriate?",
    "options": {
      "A": "Testing input validation on the user input fields",
      "B": "Performing code signing on company-developed software",
      "C": "Performing static code analysis on the software",
      "D": "Ensuring secure cookies are use"
    },
    "answer": "B"
  },
  {
    "questionNumber": 247,
    "category": "Security Architecture",
    "question": "An analyst is evaluating the implementation of Zero Trust principles within the data plane. Which of the following would be most relevant for the analyst to evaluate?",
    "options": {
      "A": "Secured zones",
      "B": "Subject role",
      "C": "Adaptive identity",
      "D": "Threat scope reduction"
    },
    "answer": "D"
  },
  {
    "questionNumber": 248,
    "category": "Security Program Management and Oversight",
    "question": "For which of the following reasons would a systems administrator leverage a 3DES hash from an installer file that is posted on a vendor's website?",
    "options": {
      "A": "To test the integrity of the file",
      "B": "To validate the authenticity of the file",
      "C": "To activate the license for the file",
      "D": "To calculate the checksum of the file"
    },
    "answer": "A"
  },
  {
    "questionNumber": 249,
    "category": "General Security Concepts",
    "question": "A security manager is implementing MFA and patch management. Which of the following would best describe the control type and category? (Select two).",
    "options": {
      "A": "Physical",
      "B": "Managerial",
      "C": "Detective",
      "D": "Administrator",
      "E": "Preventative",
      "F": "Technical"
    },
    "answer": "E F"
  },
  {
    "questionNumber": 250,
    "category": "Security Architecture",
    "question": "A systems administrator needs to encrypt all data on employee laptops. Which of the following encryption levels should be implemented?",
    "options": {
      "A": "Volume",
      "B": "Partition",
      "C": "Full disk",
      "D": "File"
    },
    "answer": "C"
  },
  {
    "questionNumber": 251,
    "category": "General Security Concepts",
    "question": "Which of the following are the best for hardening end-user devices? (Selecttwo)",
    "options": {
      "A": "Full disk encryption",
      "B": "Group-level permissions",
      "C": "Account lockout",
      "D": "Endpoint protection",
      "E": "Proxy server",
      "F": "Segmentation"
    },
    "answer": "A D"
  },
  {
    "questionNumber": 252,
    "category": "Security Architecture",
    "question": "A spoofed identity was detected for a digital certificate. Which of the following are the type of unidentified key and the certificate mat could be in use on the company domain?",
    "options": {
      "A": "Private key and root certificate",
      "B": "Public key and expired certificate",
      "C": "Private key and self-signed certificate",
      "D": "Public key and wildcard certificate"
    },
    "answer": "C"
  },
  {
    "questionNumber": 253,
    "category": "General Security Concepts",
    "question": "Client files can only be accessed by employees who need to know the information and have specified roles in the company. Which of the following best describes this security concept?",
    "options": {
      "A": "Availability",
      "B": "Confidentiality",
      "C": "Integrity",
      "D": "Non-repudiation"
    },
    "answer": "B"
  },
  {
    "questionNumber": 254,
    "category": "General Security Concepts",
    "question": "A security analyst created a fake account and saved the password in a non-readily accessible directory in a spreadsheet. An alert was also configured to notify the security team if the spreadsheet is opened. Which of the following best describes the deception method being deployed?",
    "options": {
      "A": "Honeypot",
      "B": "Honey account",
      "C": "Honeytoken",
      "D": "Honeynet"
    },
    "answer": "C"
  },
  {
    "questionNumber": 255,
    "category": "Security Operations",
    "question": "Which of the following is the final step of the modem response process?",
    "options": {
      "A": "Lessons learned",
      "B": "Eradication",
      "C": "Containment",
      "D": "Recovery"
    },
    "answer": "A"
  },
  {
    "questionNumber": 256,
    "category": "Security Program Management and Oversight",
    "question": "Employees in the research and development business unit receive extensive training to ensure they understand how to best protect company data. Which of the following is the type of data these employees are most likely to use in day-to-day work activities?",
    "options": {
      "A": "Encrypted",
      "B": "Intellectual property",
      "C": "Critical",
      "D": "Data in transit"
    },
    "answer": "B"
  },
  {
    "questionNumber": 257,
    "category": "General Security Concepts",
    "question": "A company is expanding its threat surface program and allowing individuals to security test the company’s internet-facing application. The company will compensate researchers based on the vulnerabilities discovered. Which of the following best describes the program the company is setting up?",
    "options": {
      "A": "Open-source intelligence",
      "B": "Bug bounty",
      "C": "Red team",
      "D": "Penetration testing"
    },
    "answer": "B"
  },
  {
    "questionNumber": 258,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "An analyst is reviewing an incident in which a user clicked on a link in a phishing email. Which of the following log sources would the analyst utilize to determine whether the connection was successful?",
    "options": {
      "A": "Network",
      "B": "System",
      "C": "Application",
      "D": "Authentication"
    },
    "answer": "A"
  },
  {
    "questionNumber": 259,
    "category": "Security Architecture",
    "question": "An employee emailed a new systems administrator a malicious web link and convinced the administrator to change the email server's password. The employee used this access to remove the mailboxes of key personnel. Which of the following security awareness concepts would help prevent this threat in the future?",
    "options": {
      "A": "Recognizing phishing",
      "B": "Providing situational awareness training",
      "C": "Using password management",
      "D": "Reviewing email policies"
    },
    "answer": "A"
  },
  {
    "questionNumber": 260,
    "category": "General Security Concepts",
    "question": "An organization would like to calculate the time needed to resolve a hardware issue with a server. Which of the following risk management processes describes this example?",
    "options": {
      "A": "Recovery point objective",
      "B": "Mean time between failures",
      "C": "Recovery time objective",
      "D": "Mean time to repair "
    },
    "answer": "D"
  },
  {
    "questionNumber": 261,
    "category": "General Security Concepts",
    "question": "Which of the following would enable a data center to remain operational through a multiday power outage?",
    "options": {
      "A": "Generator",
      "B": "Uninterruptible power supply",
      "C": "Replication",
      "D": "Parallel processing"
    },
    "answer": "A"
  },
  {
    "questionNumber": 262,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "An administrator is Investigating an incident and discovers several users’ computers were Infected with malware after viewing files mat were shared with them. The administrator discovers no degraded performance in the infected machines and an examination of the log files does not show excessive failed logins. Which of the following attacks Is most likely the cause of the malware?",
    "options": {
      "A": "Malicious flash drive",
      "B": "Remote access Trojan",
      "C": "Brute-forced password",
      "D": "Cryptojacking"
    },
    "answer": "D"
  },
  {
    "questionNumber": 263,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "Which of the following can a security director use to prioritize vulnerability patching within a company's IT environment?",
    "options": {
      "A": "SOAR",
      "B": "CVSS",
      "C": "SIEM",
      "D": "CVE"
    },
    "answer": "B"
  },
  {
    "questionNumber": 264,
    "category": "General Security Concepts",
    "question": "After a recent ransomware attack on a company's system, an administrator reviewed the log files. Which of the following control types did the administrator use?",
    "options": {
      "A": "Compensating",
      "B": "Detective",
      "C": "Preventive",
      "D": "Corrective"
    },
    "answer": "B"
  },
  {
    "questionNumber": 265,
    "category": "General Security Concepts",
    "question": "A security administrator needs a method to secure data in an environment that includes some form of checks so that the administrator can track any changes. Which of the following should the administrator set up to achieve this goal?",
    "options": {
      "A": "SPF",
      "B": "GPO",
      "C": "NAC",
      "D": "FIM"
    },
    "answer": "D"
  },
  {
    "questionNumber": 266,
    "category": "Security Operations",
    "question": "An administrator notices that several users are logging in from suspicious IP addresses. After speaking with the users, the administrator determines that the employees were not logging in from those IP addresses and resets the affected users’ passwords. Which of the following should the administrator implement to prevent this type of attack from succeeding in the future?",
    "options": {
      "A": "Multifactor authentication",
      "B": "Permissions assignment",
      "C": "Access management",
      "D": "Password complexity"
    },
    "answer": "A"
  },
  {
    "questionNumber": 267,
    "category": "Security Architecture",
    "question": "During a security incident, the security operations team identified sustained network traffic from a malicious IP address: 10.1.4.9. A security analyst is creating an inbound firewall rule to block the IP address from accessing the organization’s network. Which of the following fulfills this request?",
    "options": {
      "A": "access-list inbound deny ig source 0.0.0.0/0 destination 10.1.4.9/32",
      "B": "access-list inbound deny ig source 10.1.4.9/32 destination 0.0.0.0/0",
      "C": "access-list inbound permit ig source 10.1.4.9/32 destination 0.0.0.0/0",
      "D": "access-list inbound permit ig source 0.0.0.0/0 destination 10.1.4.9/32"
    },
    "answer": "B"
  },
  {
    "questionNumber": 268,
    "category": "General Security Concepts",
    "question": "A security consultant needs secure, remote access to a client environment. Which of the following should the security consultant most likely use to gain access?",
    "options": {
      "A": "EAP",
      "B": "DHCP",
      "C": "IPSec",
      "D": "NAT"
    },
    "answer": "C"
  },
  {
    "questionNumber": 269,
    "category": "Security Operations",
    "question": "A security analyst learns that an attack vector, which was used as a part of a recent incident, was a well known IoT device exploit. The analyst needs to review logs to identify the time of initial exploit. Which of the following logs should the analyst review first?",
    "options": {
      "A": "Wireless access point",
      "B": "Switch",
      "C": "Firewall",
      "D": "NAC"
    },
    "answer": "A"
  },
  {
    "questionNumber": 270,
    "category": "Security Architecture",
    "question": "A group of developers has a shared backup account to access the source code repository. Which of the following is the best way to secure the backup account if there is an SSO failure?",
    "options": {
      "A": "RAS",
      "B": "EAP",
      "C": "SAML",
      "D": "PAM"
    },
    "answer": "D"
  },
  {
    "questionNumber": 271,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "An attacker used XSS to compromise a web server. Which of the following solutions could have been used to prevent this attack?",
    "options": {
      "A": "NGFW",
      "B": "UTM",
      "C": "WAF",
      "D": "NAC"
    },
    "answer": "C"
  },
  {
    "questionNumber": 272,
    "category": "Security Operations",
    "question": "After a company was compromised, customers initiated a lawsuit. The company's attorneys have requested that the security team initiate a legal hold in response to the lawsuit. Which of the following describes the action the security team will most likely be required to take?",
    "options": {
      "A": "Retain the emails between the security team and affected customers for 30 days.",
      "B": "Retain any communications related to the security breach until further notice.",
      "C": "Retain any communications between security members during the breach response.",
      "D": "Retain all emails from the company to affected customers for an indefinite period of time."
    },
    "answer": "B"
  },
  {
    "questionNumber": 273,
    "category": "Security Architecture",
    "question": "An organization disabled unneeded services and placed a firewall in front of a business-critical legacy system. Which of the following best describes the actions taken by the organization?",
    "options": {
      "A": "Exception",
      "B": "Segmentation",
      "C": "Risk transfer",
      "D": "Compensating controls"
    },
    "answer": "D"
  },
  {
    "questionNumber": 274,
    "category": "Security Program Management and Oversight",
    "question": "A security officer is implementing a security awareness program and is placing security-themed posters around the building and is assigning online user training. Which of the following would the security officer most likely implement?",
    "options": {
      "A": "Password policy",
      "B": "Access badges",
      "C": "Phishing campaign",
      "D": "Risk assessment"
    },
    "answer": "C"
  },
  {
    "questionNumber": 275,
    "category": "Security Program Management and Oversight",
    "question": "After failing an audit twice, an organization has been ordered by a government regulatory agency to pay fines. Which of the following caused this action?",
    "options": {
      "A": "Non-compliance",
      "B": "Contract violations",
      "C": "Government sanctions",
      "D": "Rules of engagement"
    },
    "answer": "A"
  },
  {
    "questionNumber": 276,
    "category": "Security Program Management and Oversight",
    "question": "The Cruel Information Security Officer (CISO) asks a security analyst to install an OS update to a production VM that has a 99% uptime SLA. The CISO tells me analyst the installation must be done as quickly as possible. Which of the following courses of action should the security analyst take first?",
    "options": {
      "A": "Log in to the server and perform a health check on the VM.",
      "B": "Install the patch Immediately.",
      "C": "Confirm that the backup service is running.",
      "D": "Take a snapshot of the VM."
    },
    "answer": "D"
  },
  {
    "questionNumber": 277,
    "category": "General Security Concepts",
    "question": "A healthcare organization wants to provide a web application that allows individuals to digitally report health emergencies. Which of the following is the most important consideration during development?",
    "options": {
      "A": "Scalability",
      "B": "Availability",
      "C": "Cost",
      "D": "Ease of deployment"
    },
    "answer": "B"
  },
  {
    "questionNumber": 278,
    "category": "Security Architecture",
    "question": "A security analyst is reviewing the following logs about a suspicious activity alert for a user's VPN log-ins. Which of the following malicious activity indicators triggered the alert? #Log Summary: User logs in fromChicago, ILmultiple times, then suddenly a successful login appears fromRome, Italy, followed again by Chicago logins — all within ashort time span.",
    "options": {
      "A": "Impossible travel",
      "B": "Account lockout",
      "C": "Blocked content",
      "D": "Concurrent session usage"
    },
    "answer": "A"
  },
  {
    "questionNumber": 279,
    "category": "Security Operations",
    "question": "An organization experiences a cybersecurity incident involving a command-and-control server. Which of the following logs should be analyzed to identify the impacted host? (Select two).",
    "options": {
      "A": "Application",
      "B": "Authentication",
      "C": "DHCP",
      "D": "Network",
      "E": "Firewall",
      "F": "Database"
    },
    "answer": "C E"
  },
  {
    "questionNumber": 280,
    "category": "Security Program Management and Oversight",
    "question": "After a security awareness training session, a user called the IT help desk and reported a suspicious call. The suspicious caller stated that the Chief Financial Officer wanted credit card information in order to close an invoice. Which of the following topics did the user recognize from the training?",
    "options": {
      "A": "Insider threat",
      "B": "Email phishing",
      "C": "Social engineering",
      "D": "Executive whaling"
    },
    "answer": "C"
  },
  {
    "questionNumber": 281,
    "category": "General Security Concepts",
    "question": "Which of the following must be considered when designing a high-availability network? (Choose two).",
    "options": {
      "A": "Ease of recovery",
      "B": "Ability to patch",
      "C": "Physical isolation",
      "D": "Responsiveness",
      "E": "Attack surface",
      "F": "Extensible authentication"
    },
    "answer": "A E"
  },
  {
    "questionNumber": 282,
    "category": "General Security Concepts",
    "question": "During a recent company safety stand-down, the cyber-awareness team gave a presentation on the importance of cyber hygiene. One topic the team covered was best practices for printing centers. Which of the following describes an attack method that relates to printing centers?",
    "options": {
      "A": "Whaling",
      "B": "Credential harvesting",
      "C": "Prepending",
      "D": "Dumpster diving"
    },
    "answer": "D"
  },
  {
    "questionNumber": 283,
    "category": "Security Program Management and Oversight",
    "question": "Which of the following is the best reason to complete an audit in a banking environment?",
    "options": {
      "A": "Regulatory requirement",
      "B": "Organizational change",
      "C": "Self-assessment requirement",
      "D": "Service-level requirement"
    },
    "answer": "A"
  },
  {
    "questionNumber": 284,
    "category": "General Security Concepts",
    "question": "Which of the following is a primary security concern for a company setting up a BYOD program?",
    "options": {
      "A": "End of life",
      "B": "Buffer overflow",
      "C": "VM escape",
      "D": "Jailbreaking"
    },
    "answer": "D"
  },
  {
    "questionNumber": 285,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "A company relies on open-source software libraries to build the software used by its customers. Which of the following vulnerability types would be the most difficult to remediate due to the company's reliance on open source libraries?",
    "options": {
      "A": "Buffer overflow",
      "B": "SQL injection",
      "C": "Cross-site scripting",
      "D": "Zero day"
    },
    "answer": "D"
  },
  {
    "questionNumber": 286,
    "category": "General Security Concepts",
    "question": "Which of the following types of identification methods can be performed on a deployed application during runtime?",
    "options": {
      "A": "Dynamic analysis",
      "B": "Code review",
      "C": "Package monitoring",
      "D": "Bug bounty"
    },
    "answer": "A"
  },
  {
    "questionNumber": 287,
    "category": "Security Program Management and Oversight",
    "question": "Which of the following is the most likely to be included as an element of communication in a security awareness program?",
    "options": {
      "A": "Reporting phishing attempts or other suspicious activities",
      "B": "Detecting insider threats using anomalous behavior recognition",
      "C": "Verifying information when modifying wire transfer data",
      "D": "Performing social engineering as part of third-party penetration testing"
    },
    "answer": "A"
  },
  {
    "questionNumber": 288,
    "category": "General Security Concepts",
    "question": "Which of the following should a security team do first before a new web server goes live?",
    "options": {
      "A": "Harden the virtual host.",
      "B": "Create WAF rules.",
      "C": "Enable network intrusion detection.",
      "D": "Apply patch management"
    },
    "answer": "D"
  },
  {
    "questionNumber": 289,
    "category": "General Security Concepts",
    "question": "Which of the following security measures is required when using a cloud-based platform for loT management?",
    "options": {
      "A": "Encrypted connection",
      "B": "Federated identity",
      "C": "Firewall",
      "D": "Single sign-on"
    },
    "answer": "A"
  },
  {
    "questionNumber": 290,
    "category": "Security Architecture",
    "question": "A company wants to reduce the time and expense associated with code deployment. Which of the following technologies should the company utilize?",
    "options": {
      "A": "Serverless architecture",
      "B": "Thin clients",
      "C": "Private cloud",
      "D": "Virtual machines"
    },
    "answer": "A"
  },
  {
    "questionNumber": 291,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "Which of the following would a security administrator use to comply with a secure baseline during a patch update?",
    "options": {
      "A": "Information security policy",
      "B": "Service-level expectations",
      "C": "Standard operating procedure",
      "D": "Test result report"
    },
    "answer": "C"
  },
  {
    "questionNumber": 292,
    "category": "General Security Concepts",
    "question": "A technician is opening ports on a firewall for a new system being deployed and supported by a SaaS provider. Which of the following is a risk in the new system?",
    "options": {
      "A": "Default credentials",
      "B": "Non-segmented network",
      "C": "Supply chain vendor",
      "D": "Vulnerable software"
    },
    "answer": "C"
  },
  {
    "questionNumber": 293,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "One of a company's vendors sent an analyst a security bulletin that recommends a BIOS update. Which of the following vulnerability types is being addressed by the patch?",
    "options": {
      "A": "Virtualization",
      "B": "Firmware",
      "C": "Application",
      "D": "Operating system"
    },
    "answer": "B"
  },
  {
    "questionNumber": 294,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "Which of the following is a social engineering attack in which a bad actor impersonates a web URL?",
    "options": {
      "A": "Pretexting",
      "B": "Misinformation",
      "C": "Typosquatting",
      "D": "Watering-hole"
    },
    "answer": "C"
  },
  {
    "questionNumber": 295,
    "category": "General Security Concepts",
    "question": "Which of the following is the best way to consistently determine on a daily basis whether security settings on servers have been modified?",
    "options": {
      "A": "Automation",
      "B": "Compliance checklist",
      "C": "Attestation",
      "D": "Manual audit"
    },
    "answer": "A"
  },
  {
    "questionNumber": 296,
    "category": "General Security Concepts",
    "question": "A Chief Information Security Officer would like to conduct frequent, detailed reviews of systems and procedures to track compliance objectives. Which of the following is the best method to achieve this objective?",
    "options": {
      "A": "Third-party attestation",
      "B": "Penetration testing",
      "C": "Internal auditing",
      "D": "Vulnerability scans"
    },
    "answer": "C"
  },
  {
    "questionNumber": 297,
    "category": "General Security Concepts",
    "question": "A new security regulation was announced that will take effect in the coming year. A company must comply with it to remain in business. Which of the following activities should the company perform next?",
    "options": {
      "A": "Gap analysis",
      "B": "Policy review",
      "C": "Security procedure evaluation",
      "D": "Threat scope reduction"
    },
    "answer": "A"
  },
  {
    "questionNumber": 298,
    "category": "Security Operations",
    "question": "Which of the following strategies should an organization use to efficiently manage and analyze multiple types of logs?",
    "options": {
      "A": "Deploy a SIEM solution",
      "B": "Create custom scripts to aggregate and analyze logs",
      "C": "Implement EDR technology",
      "D": "Install a unified threat management appliance"
    },
    "answer": "A"
  },
  {
    "questionNumber": 299,
    "category": "Security Architecture",
    "question": "Which of the following should a security administrator adhere to when setting up a new set of firewall rules?",
    "options": {
      "A": "Disaster recovery plan",
      "B": "Incident response procedure",
      "C": "Business continuity plan",
      "D": "Change management procedure"
    },
    "answer": "D"
  },
  {
    "questionNumber": 300,
    "category": "General Security Concepts",
    "question": "An employee receives a text message that appears to have been sent by the payroll department and is asking for credential verification. Which of the following social engineering techniques are being attempted? (Choose two.)",
    "options": {
      "A": "Typosquatting",
      "B": "Phishing",
      "C": "Impersonation",
      "D": "Vishing",
      "E": "Smishing",
      "F": "Misinformation"
    },
    "answer": "B E"
  },
  {
    "questionNumber": 301,
    "category": "General Security Concepts",
    "question": "A systems administrator receives the following alert from a file integrity monitoring tool: The hash of the cmd.exe file has changed. The systems administrator checks the OS logs and notices that no patches were applied in the last two months. Which of the following most likely occurred?",
    "options": {
      "A": "The end user changed the file permissions.",
      "B": "A cryptographic collision was detected.",
      "C": "A snapshot of the file system was taken.",
      "D": "A rootkit was deployed."
    },
    "answer": "D"
  },
  {
    "questionNumber": 302,
    "category": "General Security Concepts",
    "question": "A software developer would like to ensure. The source code cannot be reverse engineered or debugged. Which of the following should the developer consider?",
    "options": {
      "A": "Version control",
      "B": "Obfuscation toolkit",
      "C": "Code reuse",
      "D": "Continuous integration"
    },
    "answer": "B"
  },
  {
    "questionNumber": 303,
    "category": "General Security Concepts",
    "question": "Executives at a company are concerned about employees accessing systems and information about sensitive company projects unrelated to the employees' normal job duties. Which of the following enterprise security capabilities will the security team most likely deploy to detect that activity?",
    "options": {
      "A": "UBA",
      "B": "EDR",
      "C": "NAC",
      "D": "DLP"
    },
    "answer": "A"
  },
  {
    "questionNumber": 304,
    "category": "Security Operations",
    "question": "A security analyst reviews domain activity logs and notices the following: UserID jsmith, password authentication: succeeded, MFA: failed (invalid cod UserID jsmith, password authentication: succeeded, MFA: failed (invalid cod UserID jsmith, password authentication: succeeded, MFA: failed (invalid cod Which of the following is the best explanation for what the security analyst has discovered?",
    "options": {
      "A": "The user jsmith's account has been locked out.",
      "B": "A keylogger is installed on [smith's workstation",
      "C": "An attacker is attempting to brute force ismith's account.",
      "D": "Ransomware has been deployed in the domain."
    },
    "answer": "C"
  },
  {
    "questionNumber": 305,
    "category": "General Security Concepts",
    "question": "An engineer needs to find a solution that creates an added layer of security by preventing unauthorized access to internal company resources. Which of the following would be the best solution?",
    "options": {
      "A": "RDP server",
      "B": "Jump server",
      "C": "Proxy server",
      "D": "Hypervisor"
    },
    "answer": "B"
  },
  {
    "questionNumber": 306,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "A security analyst is investigating an application server and discovers that software on the server is behaving abnormally. The software normally runs batch jobs locally and does not generate traffic, but the process is now generating outbound traffic over random high ports. Which of the following vulnerabilities has likely been exploited in this software?",
    "options": {
      "A": "Memory injection",
      "B": "Race condition",
      "C": "Side loading",
      "D": "SQL injection"
    },
    "answer": "A"
  },
  {
    "questionNumber": 307,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "Which of the following can best protect against an employee inadvertently installing malware on a company system?",
    "options": {
      "A": "Host-based firewall",
      "B": "System isolation",
      "C": "Least privilege",
      "D": "Application allow list"
    },
    "answer": "D"
  },
  {
    "questionNumber": 308,
    "category": "General Security Concepts",
    "question": "An attacker posing as the Chief Executive Officer calls an employee and instructs the employee to buy gift cards. Which of the following techniques is the attacker using?",
    "options": {
      "A": "Smishing",
      "B": "Disinformation",
      "C": "Impersonating",
      "D": "Whaling"
    },
    "answer": "D"
  },
  {
    "questionNumber": 309,
    "category": "Security Operations",
    "question": "Which of the following describes the reason root cause analysis should be conducted as part of incident response?",
    "options": {
      "A": "To gather loCs for the investigation",
      "B": "To discover which systems have been affected",
      "C": "To eradicate any trace of malware on the network",
      "D": "To prevent future incidents of the same nature"
    },
    "answer": "D"
  },
  {
    "questionNumber": 310,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "A new vulnerability enables a type of malware that allows the unauthorized movement of data from a system. Which of the following would detect this behavior?",
    "options": {
      "A": "Implementing encryption",
      "B": "Monitoring outbound traffic",
      "C": "Using default settings",
      "D": "Closing all open ports"
    },
    "answer": "B"
  },
  {
    "questionNumber": 311,
    "category": "General Security Concepts",
    "question": "Which of the following security concepts is the best reason for permissions on a human resources fileshare to follow the principle of least privilege?",
    "options": {
      "A": "Integrity",
      "B": "Availability",
      "C": "Confidentiality",
      "D": "Non-repudiation"
    },
    "answer": "C"
  },
  {
    "questionNumber": 312,
    "category": "Security Operations",
    "question": "Which of the following activities is included in the post-incident review phase?",
    "options": {
      "A": "Determining the root cause of the incident",
      "B": "Developing steps to mitigate the risks of the incident",
      "C": "Validating the accuracy of the evidence collected during the investigation",
      "D": "Reestablishing the compromised system's configuration and settings"
    },
    "answer": "A"
  },
  {
    "questionNumber": 313,
    "category": "General Security Concepts",
    "question": "A recent penetration test identified that an attacker could flood the MAC address table of network switches. Which of the following would best mitigate this type of attack?",
    "options": {
      "A": "Load balancer",
      "B": "Port security",
      "C": "IPS",
      "D": "NGFW"
    },
    "answer": "B"
  },
  {
    "questionNumber": 314,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "Which of the following is a hardware-specific vulnerability?",
    "options": {
      "A": "Firmware version",
      "B": "Buffer overflow",
      "C": "SQL injection",
      "D": "Cross-site scripting"
    },
    "answer": "A"
  },
  {
    "questionNumber": 315,
    "category": "General Security Concepts",
    "question": "Which of the following is the best way to validate the integrity and availability of a disaster recovery site?",
    "options": {
      "A": "Lead a simulated failover.",
      "B": "Conduct a tabletop exercise.",
      "C": "Periodically test the generators.",
      "D": "Develop requirements for database encryption."
    },
    "answer": "A"
  },
  {
    "questionNumber": 316,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "A new employee logs in to the email system for the first time and notices a message from human resources about onboarding. The employee hovers over a few of the links within the email and discovers that the links do not correspond to links associated with the company. Which of the following attack vectors is most likely being used?",
    "options": {
      "A": "Business email",
      "B": "Social engineering",
      "C": "Unsecured network",
      "D": "Default credentials"
    },
    "answer": "B"
  },
  {
    "questionNumber": 317,
    "category": "General Security Concepts",
    "question": "Which of the following threat actors is the most likely to use large financial resources to attack critical systems located in other countries?",
    "options": {
      "A": "Insider",
      "B": "Unskilled attacker",
      "C": "Nation-state",
      "D": "Hacktivist"
    },
    "answer": "C"
  },
  {
    "questionNumber": 318,
    "category": "General Security Concepts",
    "question": "Which of the following should be used to ensure a device is inaccessible to a network-connected resource?",
    "options": {
      "A": "Disablement of unused services",
      "B": "Web application firewall",
      "C": "Host isolation",
      "D": "Network-based IDS"
    },
    "answer": "C"
  },
  {
    "questionNumber": 319,
    "category": "General Security Concepts",
    "question": "An attorney prints confidential documents to a copier in an office space near multiple workstations and a reception desk. When the attorney goes to the copier to retrieve the documents, the documents are missing. Which of the following would best prevent this from reoccurring?",
    "options": {
      "A": "Place the copier in the legal department.",
      "B": "Configure DLP on the attorney's workstation.",
      "C": "Set up LDAP authentication on the printer.",
      "D": "Conduct a physical penetration test."
    },
    "answer": "C"
  },
  {
    "questionNumber": 320,
    "category": "Security Architecture",
    "question": "A security engineer configured a remote access VPN. The remote access VPN allows end users to connect to the network by using an agent that is installed on the endpoint, which establishes an encrypted tunnel. Which of the following protocols did the engineer most likely implement?",
    "options": {
      "A": "GRE",
      "B": "IPSec",
      "C": "SD-WAN",
      "D": "EAP"
    },
    "answer": "B"
  },
  {
    "questionNumber": 321,
    "category": "Security Operations",
    "question": "Which of the following incident response activities ensures evidence is properly handied?",
    "options": {
      "A": "E-discovery",
      "B": "Chain of custody",
      "C": "Legal hold",
      "D": "Preservation"
    },
    "answer": "B"
  },
  {
    "questionNumber": 322,
    "category": "General Security Concepts",
    "question": "While investigating a recent security breach an analyst finds that an attacker gained access by SOL infection through a company website. Which of the following should the analyst recommend to the website developers to prevent this from reoccurring?",
    "options": {
      "A": "Secure cookies",
      "B": "Input sanitization",
      "C": "Code signing",
      "D": "Blocklist"
    },
    "answer": "B"
  },
  {
    "questionNumber": 323,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "A legacy device is being decommissioned and is no longer receiving updates or patches. Which of the following describes this scenario?",
    "options": {
      "A": "End of business",
      "B": "End of testing",
      "C": "End of support",
      "D": "End of life"
    },
    "answer": "D"
  },
  {
    "questionNumber": 324,
    "category": "General Security Concepts",
    "question": "Which of the following is a possible consequence of a VM escape?",
    "options": {
      "A": "Malicious instructions can be inserted into memory and give the attacker elevated permissions.",
      "B": "An attacker can access the hypervisor and compromise other VMs.",
      "C": "Unencrypted data can be read by a user in a separate environment.",
      "D": "Users can install software that is not on the manufacturer's approved list."
    },
    "answer": "B"
  },
  {
    "questionNumber": 325,
    "category": "General Security Concepts",
    "question": "Which of the following is the most effective way to protect an application server running software that is no longer supported from network threats?",
    "options": {
      "A": "Air gap",
      "B": "Barricade",
      "C": "Port security",
      "D": "Screen subnet"
    },
    "answer": "A"
  },
  {
    "questionNumber": 326,
    "category": "General Security Concepts",
    "question": "Which of the following is a common source of unintentional corporate credential leakage in cloud environments?",
    "options": {
      "A": "Code repositories",
      "B": "Dark web",
      "C": "Threat feeds",
      "D": "State actors",
      "E": "Vulnerability databases"
    },
    "answer": "A"
  },
  {
    "questionNumber": 327,
    "category": "Security Operations",
    "question": "A company's Chief Information Security Officer (CISO) wants to enhance the capabilities of the incident response team. The CISO directs the incident response team to deploy a tool that rapidlyanalyzes host and network data from potentially compromised systems and forwards the data for further review. Which of the following tools should the incident response team deploy?",
    "options": {
      "A": "NAC",
      "B": "IPS",
      "C": "SIEM",
      "D": "EDR"
    },
    "answer": "D"
  },
  {
    "questionNumber": 328,
    "category": "Security Program Management and Oversight",
    "question": "According to various privacy rules and regulations, users have the power to request that all data pertaining to them is deleted. This is known as:",
    "options": {
      "A": "Right to be forgotten",
      "B": "Attestation and acknowledgement",
      "C": "Data retention",
      "D": "Information deletion"
    },
    "answer": "A"
  },
  {
    "questionNumber": 329,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "A malicious update was distributed to a common software platform and disabled services at many organizations. Which of the following best describes this type of vulnerability?",
    "options": {
      "A": "DDoS attack",
      "B": "Rogue employee",
      "C": "Insider threat",
      "D": "Supply chain"
    },
    "answer": "D"
  },
  {
    "questionNumber": 330,
    "category": "General Security Concepts",
    "question": "Which of the following control types is AUP an example of?",
    "options": {
      "A": "Physical",
      "B": "Managerial",
      "C": "Technical",
      "D": "Operational"
    },
    "answer": "B"
  },
  {
    "questionNumber": 331,
    "category": "Security Architecture",
    "question": "A systems administrator just purchased multiple network devices. Which of the following should the systems administrator perform to prevent attackers from accessing the devices by using publicly available information?",
    "options": {
      "A": "Install endpoint protection",
      "B": "Disable ports/protocols",
      "C": "Change default passwords",
      "D": "Remove unnecessary software"
    },
    "answer": "C"
  },
  {
    "questionNumber": 332,
    "category": "General Security Concepts",
    "question": "A security analyst needs to propose a remediation plan 'or each item in a risk register. The item with the highest priority requires employees to have separate logins for SaaS solutions and different password complexity requirements for each solution. Which of the following implementation plans will most likely resolve this security issue?",
    "options": {
      "A": "Creating a unified password complexity standard",
      "B": "Integrating each SaaS solution with the Identity provider",
      "C": "Securing access to each SaaS by using a single wildcard certificate",
      "D": "Configuring geofencing on each SaaS solution"
    },
    "answer": "B"
  },
  {
    "questionNumber": 333,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "Which of the following would best explain why a security analyst is running daily vulnerability scans on all corporate endpoints?",
    "options": {
      "A": "To track the status of patching installations",
      "B": "To find shadow IT cloud deployments",
      "C": "To continuously the monitor hardware inventory",
      "D": "To hunt for active attackers in the network"
    },
    "answer": "A"
  },
  {
    "questionNumber": 334,
    "category": "General Security Concepts",
    "question": "Which of the following teams combines both offensive and defensive testing techniques to protect an organization's critical systems?",
    "options": {
      "A": "Red",
      "B": "Blue",
      "C": "Purple",
      "D": "Yellow"
    },
    "answer": "C"
  },
  {
    "questionNumber": 335,
    "category": "General Security Concepts",
    "question": "During the onboarding process, an employee needs to create a password for an intranet account. The password must include ten characters, numbers, and letters, and two special characters. Oncethe password is created, the company will grant the employee access to other company-owned websites based on the intranet profile. Which of the following access management concepts is the company most likely using to safeguard intranet accounts and grant access to multiple sites based on a user's intranet account? (Select two).",
    "options": {
      "A": "Federation",
      "B": "Identity proofing",
      "C": "Password complexity",
      "D": "Default password changes",
      "E": "Password manager",
      "F": "Open authentication"
    },
    "answer": "A C"
  },
  {
    "questionNumber": 336,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "A security practitioner completes a vulnerability assessment on a company’s network and finds several vulnerabilities, which the operations team remediates. Which of the following should be done next?",
    "options": {
      "A": "Conduct an audit.",
      "B": "Initiate a penetration test.",
      "C": "Rescan the network.",
      "D": "Submit a report."
    },
    "answer": "C"
  },
  {
    "questionNumber": 337,
    "category": "General Security Concepts",
    "question": "A small business uses kiosks on the sales floor to display product information for customers. A security team discovers the kiosks use end-of-life operating systems. Which of the following is the security team most likely to document as a security implication of the current architecture?",
    "options": {
      "A": "Patch availability",
      "B": "Product software compatibility",
      "C": "Ease of recovery",
      "D": "Cost of replacement"
    },
    "answer": "A"
  },
  {
    "questionNumber": 338,
    "category": "General Security Concepts",
    "question": "Which of the following best describe a penetration test that resembles an actual external attach?",
    "options": {
      "A": "Known environment",
      "B": "Partially known environment",
      "C": "Bug bounty",
      "D": "Unknown environment"
    },
    "answer": "D"
  },
  {
    "questionNumber": 339,
    "category": "Security Program Management and Oversight",
    "question": "Which of the following is the most important element when defining effective security governance?",
    "options": {
      "A": "Discovering and documenting external considerations",
      "B": "Developing procedures for employee onboarding and offboarding",
      "C": "Assigning roles and responsibilities for owners, controllers, and custodians",
      "D": "Defining and monitoring change management procedures"
    },
    "answer": "C"
  },
  {
    "questionNumber": 340,
    "category": "Security Operations",
    "question": "Which of the following digital forensics activities would a security team perform when responding to legal requests in a pending investigation?",
    "options": {
      "A": "E-discovery",
      "B": "User provisioning",
      "C": "Firewall log export",
      "D": "Root cause analysis"
    },
    "answer": "A"
  },
  {
    "questionNumber": 341,
    "category": "General Security Concepts",
    "question": "A company's online shopping website became unusable shortly after midnight on January 30, 2023. When a security analyst reviewed the database server, the analyst noticed the following code used for backing up data: Which of the following should the analyst do next?",
    "options": {
      "A": "Check for recently terminated DBAs.",
      "B": "Review WAF logs for evidence of command injection.",
      "C": "Scan the database server for malware.",
      "D": "Search the web server for ransomware notes."
    },
    "answer": "B"
  },
  {
    "questionNumber": 342,
    "category": "General Security Concepts",
    "question": "Which of the following best practices gives administrators a set period to perform changes to an operational system to ensure availability and minimize business impacts?",
    "options": {
      "A": "Impact analysis",
      "B": "Scheduled downtime",
      "C": "Backout plan",
      "D": "Change management boards"
    },
    "answer": "B"
  },
  {
    "questionNumber": 343,
    "category": "General Security Concepts",
    "question": "Which of the following cryptographic solutions protects data at rest?",
    "options": {
      "A": "Digital signatures",
      "B": "Full disk encryption",
      "C": "Private key",
      "D": "Steganography"
    },
    "answer": "B"
  },
  {
    "questionNumber": 344,
    "category": "General Security Concepts",
    "question": "A company is utilizing an offshore team to help support the finance department. The company wants to keep the data secure by keeping it on a company device but does not want to provide equipment to the offshore team. Which of the following should the company implement to meet this requirement?",
    "options": {
      "A": "VDI",
      "B": "MDM",
      "C": "VPN",
      "D": "VPC"
    },
    "answer": "A"
  },
  {
    "questionNumber": 345,
    "category": "Security Operations",
    "question": "In a rush to meet an end-of-year business goal, the IT department was told to implement a new business application. The security engineer reviews the attributes of the application and decides the time needed to perform due diligence is insufficient from a cybersecurity perspective. Which of the following best describes the security engineer's response?",
    "options": {
      "A": "Risk tolerance",
      "B": "Risk acceptance",
      "C": "Risk importance",
      "D": "Risk appetite"
    },
    "answer": "D"
  },
  {
    "questionNumber": 346,
    "category": "General Security Concepts",
    "question": "A company is considering an expansion of access controls for an application that contractors and internal employees use to reduce costs. Which of the following risk elements should the implementation team understand before granting access to the application?",
    "options": {
      "A": "Threshold",
      "B": "Appetite",
      "C": "Tolerance",
      "D": "Register"
    },
    "answer": "C"
  },
  {
    "questionNumber": 347,
    "category": "Security Operations",
    "question": "Which of the following alert types is the most likely to be ignored over time?",
    "options": {
      "A": "True positive",
      "B": "True negative",
      "C": "False positive",
      "D": "False negative"
    },
    "answer": "C"
  },
  {
    "questionNumber": 348,
    "category": "Security Operations",
    "question": "The Chief Information Security Officer wants to discuss options for a disaster recovery site that allows the business to resume operations as quickly as possible. Which of the following solutions meets this requirement?",
    "options": {
      "A": "Hot site",
      "B": "Cold site",
      "C": "Geographic dispersion",
      "D": "Warm site"
    },
    "answer": "A"
  },
  {
    "questionNumber": 349,
    "category": "Security Architecture",
    "question": "An enterprise security team is researching a new security architecture to better protect the company's networks and applications against the latest cyberthreats. The company has a fully remote workforce. The solution should be highly redundant and enable users to connect to a VPN with an integrated, software-based firewall. Which of the following solutions meets these requirements?",
    "options": {
      "A": "IPS",
      "B": "SIEM",
      "C": "SASE",
      "D": "CASB"
    },
    "answer": "B"
  },
  {
    "questionNumber": 350,
    "category": "Security Architecture",
    "question": "A security administrator would like to protect data on employees’ laptops. Which of the following encryption techniques should the security administrator use?",
    "options": {
      "A": "Partition",
      "B": "Asymmetric",
      "C": "Full disk",
      "D": "Database"
    },
    "answer": "C"
  },
  {
    "questionNumber": 351,
    "category": "General Security Concepts",
    "question": "Which of the following can be used to mitigate attacks from high-risk regions?",
    "options": {
      "A": "Obfuscation",
      "B": "Data sovereignty",
      "C": "IP geolocation",
      "D": "Encryption"
    },
    "answer": "C"
  },
  {
    "questionNumber": 352,
    "category": "Security Operations",
    "question": "Which of the following agreements defines response time, escalation, and performance metrics?",
    "options": {
      "A": "BPA",
      "B": "MOA",
      "C": "NDA",
      "D": "SLA"
    },
    "answer": "D"
  },
  {
    "questionNumber": 353,
    "category": "General Security Concepts",
    "question": "Which of the following actions must an organization take to comply with a person's request for the right to be forgotten?",
    "options": {
      "A": "Purge all personally identifiable attributes.",
      "B": "Encrypt all of the data.",
      "C": "Remove all of the person’s data.",
      "D": "Obfuscate all of the person’s data."
    },
    "answer": "C"
  },
  {
    "questionNumber": 354,
    "category": "Security Operations",
    "question": "A business needs a recovery site but does not require immediate failover. The business also wants to reduce the workload required to recover from an outage. Which of the following recovery sites is the best option?",
    "options": {
      "A": "Hot",
      "B": "Cold",
      "C": "Warm",
      "D": "Geographically dispersed"
    },
    "answer": "C"
  },
  {
    "questionNumber": 355,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "A company's accounts payable clerk receives a message from a vendor asking to change their bank account before paying an invoice. The clerk makes the change and sends the payment to the new account. Days later, the clerk receives another message from the same vendor with a request for a missing payment to the original bank account. Which of the following has most likely occurred?",
    "options": {
      "A": "Phishing campaign",
      "B": "Data exfiltration",
      "C": "Pretext calling",
      "D": "Business email compromise"
    },
    "answer": "D"
  },
  {
    "questionNumber": 356,
    "category": "General Security Concepts",
    "question": "Which of the following is the most likely outcome if a large bank fails an internal PCI DSS compliance assessment?",
    "options": {
      "A": "Fines",
      "B": "Audit findings",
      "C": "Sanctions",
      "D": "Reputation damage"
    },
    "answer": "A"
  },
  {
    "questionNumber": 357,
    "category": "General Security Concepts",
    "question": "The Chief Information Security Officer wants to put security measures in place to protect PlI. The organization needs to use its existing labeling and classification system to accomplish this goal. Which of the following would most likely be configured to meet the requirements?",
    "options": {
      "A": "Tokenization",
      "B": "S/MIME",
      "C": "DLP",
      "D": "MFA"
    },
    "answer": "C"
  },
  {
    "questionNumber": 358,
    "category": "General Security Concepts",
    "question": "Which of the following should an organization use to protect its environment from external attacks conducted by an unauthorized hacker?",
    "options": {
      "A": "ACL",
      "B": "IDS",
      "C": "HIDS",
      "D": "NIPS"
    },
    "answer": "B"
  },
  {
    "questionNumber": 359,
    "category": "General Security Concepts",
    "question": "An administrator has configured a quarantine subnet for all guest devices that connect to the network. Which of the following would be best for the security team to configure on the MDM before allowing access to corporate resources?",
    "options": {
      "A": "Device fingerprinting",
      "B": "Compliance attestation",
      "C": "NAC",
      "D": "802.1X"
    },
    "answer": "B"
  },
  {
    "questionNumber": 360,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "Which of the following is a type of vulnerability that involves inserting scripts into web-based applications in order to take control of the client's web browser?",
    "options": {
      "A": "SQL injection",
      "B": "Cross-site scripting",
      "C": "Zero-day exploit",
      "D": "On-path attack"
    },
    "answer": "B"
  },
  {
    "questionNumber": 361,
    "category": "General Security Concepts",
    "question": "Which of the following methods would most likely be used to identify legacy systems?",
    "options": {
      "A": "Bug bounty program",
      "B": "Vulnerability scan",
      "C": "Package monitoring",
      "D": "Dynamic analysis"
    },
    "answer": "B"
  },
  {
    "questionNumber": 362,
    "category": "General Security Concepts",
    "question": "A network manager wants to protect the company's VPN by implementing multifactor authentication that uses: Something you know, Something you have, and Something you are. Which of the following would accomplish the manager's goal?",
    "options": {
      "A": "Domain name, PKI, GeolP lookup",
      "B": "VPN IP address, company ID, facial structure",
      "C": "Password, authentication token, thumbprint",
      "D": "Company URL, TLS certificate, home address"
    },
    "answer": "C"
  },
  {
    "questionNumber": 363,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "Which of the following is a type of vulnerability that may result from outdated algorithms or keys?",
    "options": {
      "A": "Hash collision",
      "B": "Cryptographic",
      "C": "Buffer overflow",
      "D": "Input validation"
    },
    "answer": "B"
  },
  {
    "questionNumber": 364,
    "category": "Security Operations",
    "question": "During a recent log review, an analyst discovers evidence of successful injection attacks. Which of the following will best address this issue?",
    "options": {
      "A": "Authentication",
      "B": "Secure cookies",
      "C": "Static code analysis",
      "D": "Input validation"
    },
    "answer": "D"
  },
  {
    "questionNumber": 365,
    "category": "General Security Concepts",
    "question": "Which of the following would be the best ways to ensure only authorized personnel can access a secure facility? (Select two).",
    "options": {
      "A": "Fencing",
      "B": "Video surveillance",
      "C": "Badge access",
      "D": "Access control vestibule",
      "E": "Sign-in sheet",
      "F": "Sensor"
    },
    "answer": "C D"
  },
  {
    "questionNumber": 366,
    "category": "Security Architecture",
    "question": "You are security administrator investigating a potential infection on a network. Click on each host and firewall. Review all logs to determine which host originated the Infecton and then deny each remaining hosts clean or infected.",
    "options": {},
    "answer": "192.168.10.22: Origin, Infected; 192.168.10.37: Clean; 192.168.10.41: Clean; 10.10.9.12: Clean; 10.10.9.18: Infected"
  },
  {
    "questionNumber": 367,
    "category": "General Security Concepts",
    "question": "A bank set up a new server that contains customers' Pll. Which of the following should the bank use to make sure the sensitive data is not modified?",
    "options": {
      "A": "Full disk encryption",
      "B": "Network access control",
      "C": "File integrity monitoring",
      "D": "User behavior analytics"
    },
    "answer": "C"
  },
  {
    "questionNumber": 368,
    "category": "Security Architecture",
    "question": "An organization is struggling with scaling issues on its VPN concentrator and internet circuit due to remote work. The organization is looking for a software solution that will allow it to reduce traffic on the VPN and internet circuit, while still providing encrypted tunnel access to the data center and monitoring of remote employee internet traffic. Which of the following will help achieve these objectives?",
    "options": {
      "A": "Deploying a SASE solution to remote employees",
      "B": "Building a load-balanced VPN solution with redundant internet",
      "C": "Purchasing a low-cost SD-WAN solution for VPN traffic",
      "D": "Using a cloud provider to create additional VPN concentrators"
    },
    "answer": "A"
  },
  {
    "questionNumber": 369,
    "category": "Security Operations",
    "question": "A company wants to get alerts when others are researching and doing reconnaissance on the company One approach would be to host a part of the Infrastructure online with known vulnerabilities that would appear to be company assets. Which of the following describes this approach?",
    "options": {
      "A": "Watering hole",
      "B": "Bug bounty",
      "C": "DNS sinkhole",
      "D": "Honeypot"
    },
    "answer": "D"
  },
  {
    "questionNumber": 370,
    "category": "General Security Concepts",
    "question": "Several customers want an organization to verify its security controls are operating effectively and have requested an independent opinion. Which of the following is the most efficient way to address these requests?",
    "options": {
      "A": "Hire a vendor to perform a penetration test.",
      "B": "Perform an annual self-assessment.",
      "C": "Allow each client the right to audit.",
      "D": "Provide a third-party attestation report."
    },
    "answer": "D"
  },
  {
    "questionNumber": 371,
    "category": "General Security Concepts",
    "question": "A systems administrator is concerned about vulnerabilities within cloud computing instances Which of the following is most important for the administrator to consider when architecting a cloud computing environment?",
    "options": {
      "A": "SQL injection",
      "B": "TOC/TOU",
      "C": "VM escape",
      "D": "Tokenization",
      "E": "Password spraying"
    },
    "answer": "C"
  },
  {
    "questionNumber": 372,
    "category": "General Security Concepts",
    "question": "Which of the following security control types does an acceptable use policy best represent?",
    "options": {
      "A": "Detective",
      "B": "Compensating",
      "C": "Corrective",
      "D": "Preventive"
    },
    "answer": "D"
  },
  {
    "questionNumber": 373,
    "category": "General Security Concepts",
    "question": "Which of the following risk management strategies should an enterprise adopt first if a legacy application is critical to business operations and there are preventative controls that are not yet implemented?",
    "options": {
      "A": "Mitigate",
      "B": "Accept",
      "C": "Transfer",
      "D": "Avoid"
    },
    "answer": "A"
  },
  {
    "questionNumber": 374,
    "category": "General Security Concepts",
    "question": "A penetration tester begins an engagement by performing port and service scans against the client environment according to the rules of engagement. Which of the following reconnaissance types is the tester performing?",
    "options": {
      "A": "Active",
      "B": "Passive",
      "C": "Defensive",
      "D": "Offensive"
    },
    "answer": "A"
  },
  {
    "questionNumber": 375,
    "category": "Security Operations",
    "question": "A security analyst is investigating a workstation that is suspected of outbound communication to a command and-control server. During the investigation, the analyst discovered that logs on the endpoint were deleted. Which of the following logs would the analyst most likely look at next?",
    "options": {
      "A": "IPS",
      "B": "Firewall",
      "C": "ACL",
      "D": "Windows security"
    },
    "answer": "B"
  },
  {
    "questionNumber": 376,
    "category": "Security Architecture",
    "question": "Which of the following is used to validate a certificate when it is presented to a user?",
    "options": {
      "A": "OCSP",
      "B": "CSR",
      "C": "CA",
      "D": "CRC"
    },
    "answer": "A"
  },
  {
    "questionNumber": 377,
    "category": "Security Architecture",
    "question": "The local administrator account for a company's VPN appliance was unexpectedly used to log in to the remote management interface. Which of the following would have most likely prevented this from happening'?",
    "options": {
      "A": "Using least privilege",
      "B": "Changing the default password",
      "C": "Assigning individual user IDs",
      "D": "Reviewing logs more frequently"
    },
    "answer": "B"
  },
  {
    "questionNumber": 378,
    "category": "General Security Concepts",
    "question": "A company is redesigning its infrastructure and wants to reduce the number of physical servers in use. Which of the following architectures is best suited for this goal?",
    "options": {
      "A": "Isolation",
      "B": "Segmentation",
      "C": "Virtualization",
      "D": "Redundancy"
    },
    "answer": "C"
  },
  {
    "questionNumber": 379,
    "category": "Security Architecture",
    "question": "Which of the following types of vulnerabilities is primarily caused by improper use and management of cryptographic certificates?",
    "options": {
      "A": "Misconfiguration",
      "B": "Resource reuse",
      "C": "Insecure key storage",
      "D": "Weak cipher suites"
    },
    "answer": "C"
  },
  {
    "questionNumber": 380,
    "category": "General Security Concepts",
    "question": "Which of the following should be used to ensure an attacker is unable to read the contents of a mobile device's drive if the device is lost?",
    "options": {
      "A": "TPM",
      "B": "ECC",
      "C": "FDE",
      "D": "HSM"
    },
    "answer": "C"
  },
  {
    "questionNumber": 381,
    "category": "General Security Concepts",
    "question": "Which of the following examples would be best mitigated by input sanitization?",
    "options": {
      "A": "<script>alert (\"Warning!\") ,-</script>",
      "B": "nmap - 10.11.1.130",
      "C": "Email message: \"Click this link to get your free gift card.\"",
      "D": "Browser message: \"Your connection is not private.\""
    },
    "answer": "A"
  },
  {
    "questionNumber": 382,
    "category": "General Security Concepts",
    "question": "A security analyst finds a rogue device during a monthly audit of current endpoint assets that are connected to the network. The corporate network utilizes 002.1X for access control. To be allowed on the network, a device must have a Known hardware address, and a valid user name and password must be entered in a captive portal. The following is the audit report: Which of the following is the most likely way a rogue device was allowed to connect?",
    "options": {
      "A": "A user performed a MAC cloning attack with a personal device.",
      "B": "A DMCP failure caused an incorrect IP address to be distributed",
      "C": "An administrator bypassed the security controls for testing.",
      "D": "DNS hijacking let an attacker intercept the captive portal traffic."
    },
    "answer": "A"
  },
  {
    "questionNumber": 383,
    "category": "General Security Concepts",
    "question": "An organization has learned that its data is being exchanged on the dark web. The CIO has requested that you investigate and implement the most secure solution to protect employee accounts. INSTRUCTIONS: Review the data to identify weak security practices and provide the most appropriate security solution to meet the CIO's requirements.",
    "options": {},
    "answer": "Weak password practices: Age, Reuse, Length, Complexity. Containment step: FIDO security key."
  },
  {
    "questionNumber": 384,
    "category": "General Security Concepts",
    "question": "An organization has too many variations of a single operating system and needs to standardize the arrangement prior to pushing the system image to users. Which of the following should the organization implement first?",
    "options": {
      "A": "Standard naming convention",
      "B": "Mashing",
      "C": "Network diagrams",
      "D": "Baseline configuration"
    },
    "answer": "D"
  },
  {
    "questionNumber": 385,
    "category": "General Security Concepts",
    "question": "Which of the following enables the use of an input field to run commands that can view or manipulate data?",
    "options": {
      "A": "Cross-site scripting",
      "B": "Side loading",
      "C": "Buffer overflow",
      "D": "SQL injection"
    },
    "answer": "D"
  },
  {
    "questionNumber": 386,
    "category": "General Security Concepts",
    "question": "A security analyst developed a script to automate a trivial and repeatable task. Which of the following best describes the benefits of ensuring other team members understand how the script works?",
    "options": {
      "A": "To reduce implementation cost",
      "B": "To identify complexity",
      "C": "To remediate technical debt",
      "D": "To prevent a single point of failure"
    },
    "answer": "D"
  },
  {
    "questionNumber": 387,
    "category": "General Security Concepts",
    "question": "An organization has a new regulatory requirement to implement corrective controls on a financial system. Which of the following is the most likely reason for the new requirement?",
    "options": {
      "A": "To defend against insider threats altering banking details",
      "B": "To ensure that errors are not passed to other systems",
      "C": "To allow for business insurance to be purchased",
      "D": "To prevent unauthorized changes to financial data"
    },
    "answer": "D"
  },
  {
    "questionNumber": 388,
    "category": "Security Operations",
    "question": "A security analyst receives an alert from a corporate endpoint used by employees to issue visitor badges. The alert contains the following details: Which of the following best describes the indicator that triggered the alert?",
    "options": {
      "A": "Blocked content",
      "B": "Brute-force attack",
      "C": "Concurrent session usage",
      "D": "Account lockout"
    },
    "answer": "B"
  },
  {
    "questionNumber": 389,
    "category": "General Security Concepts",
    "question": "Which of the following must be considered when designing a high-availability network? (Select two).",
    "options": {
      "A": "Ease of recovery",
      "B": "Ability to patch",
      "C": "Physical isolation",
      "D": "Responsiveness",
      "E": "Attack surface",
      "F": "Extensible authentication"
    },
    "answer": "A E"
  },
  {
    "questionNumber": 390,
    "category": "General Security Concepts",
    "question": "While conducting a business continuity tabletop exercise, the security team becomes concerned by potential impacts if a generator fails during failover. Which of the following is the team most likely to consider in regard to risk management activities?",
    "options": {
      "A": "RPO",
      "B": "ARO",
      "C": "BIA",
      "D": "MTTR"
    },
    "answer": "D"
  },
  {
    "questionNumber": 391,
    "category": "Security Program Management and Oversight",
    "question": "After an audit, an administrator discovers all users have access to confidential data on a file server. Which of the following should the administrator use to restrict access to the data quickly?",
    "options": {
      "A": "Group Policy",
      "B": "Content filtering",
      "C": "Data loss prevention",
      "D": "Access control lists"
    },
    "answer": "D"
  },
  {
    "questionNumber": 392,
    "category": "General Security Concepts",
    "question": "A systems administrator is concerned users are accessing emails through a duplicate site that is not run by the company. Which of the following is used in this scenario?",
    "options": {
      "A": "Impersonation",
      "B": "Replication",
      "C": "Phishing",
      "D": "Smishing"
    },
    "answer": "A"
  },
  {
    "questionNumber": 393,
    "category": "General Security Concepts",
    "question": "Which of the following would be the best way to test resiliency in the event of a primary power failure?",
    "options": {
      "A": "Parallel processing",
      "B": "Tabletop exercise",
      "C": "Simulation testing",
      "D": "Production failover"
    },
    "answer": "D"
  },
  {
    "questionNumber": 394,
    "category": "General Security Concepts",
    "question": "Which of the following steps in the risk management process involves establishing the scope and potential risks involved with a project?",
    "options": {
      "A": "Risk mitigation",
      "B": "Risk identification",
      "C": "Risk treatment",
      "D": "Risk monitoring and review"
    },
    "answer": "B"
  },
  {
    "questionNumber": 395,
    "category": "Security Architecture",
    "question": "A company recently decided to allow employees to work remotely. The company wants to protect us data without using a VPN. Which of the following technologies should the company Implement?",
    "options": {
      "A": "Secure web gateway",
      "B": "Virtual private cloud end point",
      "C": "Deep packet Inspection",
      "D": "Next-gene ration firewall"
    },
    "answer": "A"
  },
  {
    "questionNumber": 396,
    "category": "Security Architecture",
    "question": "An organization is evaluating new regulatory requirements associated with the implementation of corrective controls on a group of interconnected financial systems. Which of the following is the most likely reason for the new requirement?",
    "options": {
      "A": "To defend against insider threats altering banking details",
      "B": "To ensure that errors are not passed to other systems",
      "C": "To allow for business insurance to be purchased",
      "D": "To prevent unauthorized changes to financial data"
    },
    "answer": "B"
  },
  {
    "questionNumber": 397,
    "category": "Security Operations",
    "question": "An incident response specialist must stop a malicious attack from expanding to other parts of an organization. Which of the following should the incident response specialist perform first?",
    "options": {
      "A": "Eradication",
      "B": "Recovery",
      "C": "Containment",
      "D": "Simulation"
    },
    "answer": "C"
  },
  {
    "questionNumber": 398,
    "category": "General Security Concepts",
    "question": "A company is concerned about weather events causing damage to the server room and downtime. Which of the following should the company consider?",
    "options": {
      "A": "Clustering servers",
      "B": "Geographic dispersion",
      "C": "Load balancers",
      "D": "Off-site backups"
    },
    "answer": "B"
  },
  {
    "questionNumber": 399,
    "category": "Security Program Management and Oversight",
    "question": "An organization recently updated its security policy to include the following statement: Regular expressions are included in source code to remove special characters such as $, |, ;. &, `, and ? from variables set by forms in a web application. Which of the following best explains the security technique the organization adopted by making this addition to the policy?",
    "options": {
      "A": "Identify embedded keys",
      "B": "Code debugging",
      "C": "Input validation",
      "D": "Static code analysis"
    },
    "answer": "C"
  },
  {
    "questionNumber": 400,
    "category": "General Security Concepts",
    "question": "Which of the following automation use cases would best enhance the security posture of an organization by rapidly updating permissions when employees leave a company?",
    "options": {
      "A": "Provisioning resources",
      "B": "Disabling access",
      "C": "Reviewing change approvals",
      "D": "Escalating permission requests"
    },
    "answer": "B"
  },
  {
    "questionNumber": 401,
    "category": "Security Operations",
    "question": "Which of the following activities is the first stage in the incident response process?",
    "options": {
      "A": "Detection",
      "B": "Declaration",
      "C": "Containment",
      "D": "Vacation"
    },
    "answer": "A"
  },
  {
    "questionNumber": 402,
    "category": "General Security Concepts",
    "question": "Visitors to a secured facility are required to check in with a photo ID and enter the facility through an access control vestibule Which of the following but describes this form of security control?",
    "options": {
      "A": "Physical",
      "B": "Managerial",
      "C": "Technical",
      "D": "Operational"
    },
    "answer": "A"
  },
  {
    "questionNumber": 403,
    "category": "Security Operations",
    "question": "An employee recently resigned from a company. The employee was responsible for managing and supporting weekly batch jobs over the past five years. A few weeks after the employee resigned. one of the batch jobs talked and caused a major disruption. Which of the following would work best to prevent this type of incident from reoccurring?",
    "options": {
      "A": "Job rotation",
      "B": "Retention",
      "C": "Outsourcing",
      "D": "Separation of duties"
    },
    "answer": "A"
  },
  {
    "questionNumber": 404,
    "category": "General Security Concepts",
    "question": "A security administrator needs to reduce the attack surface in the company's data centers. Which of the following should the security administrator do to complete this task?",
    "options": {
      "A": "Implement a honeynet.",
      "B": "Define Group Policy on the servers.",
      "C": "Configure the servers for high availability.",
      "D": "Upgrade end-of-support operating systems."
    },
    "answer": "D"
  },
  {
    "questionNumber": 405,
    "category": "General Security Concepts",
    "question": "Sine© a recent upgrade (o a WLAN infrastructure, several mobile users have been unable to access the internet from the lobby. The networking team performs a heat map survey of the building and finds several WAPs in the area. The WAPs are using similar frequencies with high power settings. Which of the following installation considerations should the security team evaluate next?",
    "options": {
      "A": "Channel overlap",
      "B": "Encryption type",
      "C": "New WLAN deployment",
      "D": "WAP placement"
    },
    "answer": "A"
  },
  {
    "questionNumber": 406,
    "category": "General Security Concepts",
    "question": "A systems administrator works for a local hospital and needs to ensure patient data is protected and secure. Which of the following data classifications should be used to secure patient data?",
    "options": {
      "A": "Private",
      "B": "Critical",
      "C": "Sensitive",
      "D": "Public"
    },
    "answer": "C"
  },
  {
    "questionNumber": 407,
    "category": "Security Architecture",
    "question": "Which of the following security controls are a company implementing by deploying HIPS? (Select two).",
    "options": {
      "A": "Directive",
      "B": "Preventive",
      "C": "Physical",
      "D": "Corrective",
      "E": "Compensating",
      "F": "Detective"
    },
    "answer": "B F"
  },
  {
    "questionNumber": 408,
    "category": "General Security Concepts",
    "question": "An accountant is transferring information to a bank over FTP. Which of the following mitigations should the accountant use to protect the confidentiality of the data?",
    "options": {
      "A": "Tokenization",
      "B": "Data masking",
      "C": "Encryption",
      "D": "Obfuscation"
    },
    "answer": "C"
  },
  {
    "questionNumber": 409,
    "category": "General Security Concepts",
    "question": "Which of the following techniques can be used to sanitize the data contained on a hard drive while allowing for the hard drive to be repurposed?",
    "options": {
      "A": "Degaussing",
      "B": "Drive shredder",
      "C": "Retention platform",
      "D": "Wipe tool"
    },
    "answer": "D"
  },
  {
    "questionNumber": 410,
    "category": "General Security Concepts",
    "question": "A company is changing its mobile device policy. The company has the following requirements: Company-owned devices, Ability to harden the devices, Reduced security risk, Compatibility with company resources. Which of the following would best meet these requirements?",
    "options": {
      "A": "BYOD",
      "B": "CYOD",
      "C": "COPE",
      "D": "COBO"
    },
    "answer": "C"
  },
  {
    "questionNumber": 411,
    "category": "General Security Concepts",
    "question": "Which of the following would be best suited for constantly changing environments?",
    "options": {
      "A": "RTOS",
      "B": "Containers",
      "C": "Embedded systems",
      "D": "SCADA"
    },
    "answer": "B"
  },
  {
    "questionNumber": 412,
    "category": "General Security Concepts",
    "question": "Which of the following activities should a systems administrator perform to quarantine a potentially infected system?",
    "options": {
      "A": "Move the device into an air-gapped environment.",
      "B": "Disable remote log-in through Group Policy.",
      "C": "Convert the device into a sandbox.",
      "D": "Remote wipe the device using the MDM platform."
    },
    "answer": "A"
  },
  {
    "questionNumber": 413,
    "category": "General Security Concepts",
    "question": "Which of the following would be the best way to handle a critical business application that is running on a legacy server?",
    "options": {
      "A": "Segmentation",
      "B": "Isolation",
      "C": "Hardening",
      "D": "Decommissioning"
    },
    "answer": "C"
  },
  {
    "questionNumber": 414,
    "category": "General Security Concepts",
    "question": "A company is developing a critical system for the government and storing project information on a fileshare. Which of the following describes how this data will most likely be classified? (Select two).",
    "options": {
      "A": "Private",
      "B": "Confidential",
      "C": "Public",
      "D": "Operational",
      "E": "Urgent",
      "F": "Restricted"
    },
    "answer": "B F"
  },
  {
    "questionNumber": 415,
    "category": "General Security Concepts",
    "question": "Which of the following architectures is most suitable to provide redundancy for critical business processes?",
    "options": {
      "A": "Network-enabled",
      "B": "Server-side",
      "C": "Cloud-native",
      "D": "Multitenant"
    },
    "answer": "C"
  },
  {
    "questionNumber": 416,
    "category": "General Security Concepts",
    "question": "A security analyst finds a rogue device during a monthly audit of current endpoint assets that are connected to the network. The corporate network utilizes 002.1X for access control. To be allowed on the network, a device must have a Known hardware address, and a valid user name and password must be entered in a captive portal. The following is the audit report: Which of the following is the most likely way a rogue device was allowed to connect?",
    "options": {
      "A": "A user performed a MAC cloning attack with a personal device.",
      "B": "A DMCP failure caused an incorrect IP address to be distributed",
      "C": "An administrator bypassed the security controls for testing.",
      "D": "DNS hijacking let an attacker intercept the captive portal traffic."
    },
    "answer": "A"
  },
  {
    "questionNumber": 417,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "An organization’s internet-facing website was compromised when an attacker exploited a buffer overflow. Which of the following should the organization deploy to best protect against similar attacks in the future?",
    "options": {
      "A": "NGFW",
      "B": "WAF",
      "C": "TLS",
      "D": "SD-WAN"
    },
    "answer": "B"
  },
  {
    "questionNumber": 418,
    "category": "Security Operations",
    "question": "Which of the following should a security operations center use to improve its incident response procedure?",
    "options": {
      "A": "Playbooks",
      "B": "Frameworks",
      "C": "Baselines",
      "D": "Benchmarks"
    },
    "answer": "A"
  },
  {
    "questionNumber": 419,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "An employee clicks a malicious link in an email that appears to be from the company's Chief Executive Officer. The employee's computer is infected with ransomware that encrypts the company's files. Which of the following is the most effective way for the company to prevent similar incidents in the future?",
    "options": {
      "A": "Security awareness training",
      "B": "Database encryption",
      "C": "Segmentation",
      "D": "Reporting suspicious emails"
    },
    "answer": "A"
  },
  {
    "questionNumber": 420,
    "category": "General Security Concepts",
    "question": "A systems administrator is creating a script that would save time and prevent human error when performing account creation for a large number of end users. Which of the following would be a good use case for this task?",
    "options": {
      "A": "Off-the-shelf software",
      "B": "Orchestration",
      "C": "Baseline",
      "D": "Policy enforcement"
    },
    "answer": "B"
  },
  {
    "questionNumber": 421,
    "category": "General Security Concepts",
    "question": "A company's marketing department collects, modifies, and stores sensitive customer data. The infrastructure team is responsible for securing the data while in transit and at rest. Which of the following data roles describes the customer?",
    "options": {
      "A": "Processor",
      "B": "Custodian",
      "C": "Subject",
      "D": "Owner"
    },
    "answer": "C"
  },
  {
    "questionNumber": 422,
    "category": "Security Architecture",

    "question": "An enterprise i
