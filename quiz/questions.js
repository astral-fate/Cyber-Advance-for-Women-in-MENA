const quizQuestions = [
  {
    "questionNumber": 1,
    "category": "Security Operations",
    "question": "Which of the following is the stage in an investigation when forensic images are obtained?",
    "options": {
      "A": "Acquisition",
      "B": "Preservation",
      "C": "Reporting",
      "D": "E-discovery"
    },
    "answer": "A"
  },
  {
    "questionNumber": 2,
    "category": "General Security Concepts",
    "question": "A security analyst and the management team are reviewing the organizational performance of a recent phishing campaign. The user click-through rate exceeded the acceptable risk threshold, and the management team wants to reduce the impact when a user clicks on a link in a phishing message. Which of the following should the analyst do?",
    "options": {
      "A": "Place posters around the office to raise awareness of common phishing activities.",
      "B": "Implement email security filters to prevent phishing emails from being delivered",
      "C": "Update the EDR policies to block automatic execution of downloaded programs.",
      "D": "Create additional training for users to recognize the signs of phishing attempts."
    },
    "answer": "C"
  },
  {
    "questionNumber": 3,
    "category": "Security Operations",
    "question": "Which of the following security concepts is accomplished when granting access after an individual has logged into a computer network?",
    "options": {
      "A": "Authorization",
      "B": "Identification",
      "C": "Non-repudiation",
      "D": "Authentication"
    },
    "answer": "A"
  },
  {
    "questionNumber": 4,
    "category": "General Security Concepts",
    "question": "Which of the following best describes the concept of information being stored outside of its country of origin while still being subject to the laws and requirements of the country of origin?",
    "options": {
      "A": "Data sovereignty",
      "B": "Geolocation",
      "C": "Intellectual property",
      "D": "Geographic restrictions"
    },
    "answer": "A"
  },
  {
    "questionNumber": 5,
    "category": "Security Operations",
    "question": "To which of the following security categories does an EDR solution belong?",
    "options": {
      "A": "Physical",
      "B": "Operational",
      "C": "Managerial",
      "D": "Technical"
    },
    "answer": "D"
  },
  {
    "questionNumber": 6,
    "category": "General Security Concepts",
    "question": "A company is considering an expansion of access controls for an application that contractors and internal employees use to reduce costs. Which of the following risk elements should the implementation team understand before granting access to the application?",
    "options": {
      "A": "Threshold",
      "B": "Appetite",
      "C": "Avoidance",
      "D": "Register"
    },
    "answer": "B"
  },
  {
    "questionNumber": 7,
    "category": "General Security Concepts",
    "question": "Which of the following is the first step to secure a newly deployed server?",
    "options": {
      "A": "Close unnecessary service ports.",
      "B": "Update the current version of the software.",
      "C": "Add the device to the ACL.",
      "D": "Upgrade the OS version."
    },
    "answer": "A"
  },
  {
    "questionNumber": 8,
    "category": "Security Operations",
    "question": "After a security incident, a systems administrator asks the company to buy a NAC platform. Which of the following attack surfaces is the systems administrator trying to protect?",
    "options": {
      "A": "Bluetooth",
      "B": "Wired",
      "C": "NFC",
      "D": "SCADA"
    },
    "answer": "B"
  },
  {
    "questionNumber": 9,
    "category": "Security Program Management and Oversight",
    "question": "Employees sign an agreement that restricts specific activities when leaving the company. Violating the agreement can result in legal consequences. Which of the following agreements does this best describe?",
    "options": {
      "A": "SLA (Service Level Agreement)",
      "B": "BPA (Business Partnership Agreement)",
      "C": "NDA (Non-Disclosure Agreement)",
      "D": "MOA (Memorandum of Agreement)"
    },
    "answer": "C"
  },
  {
    "questionNumber": 10,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "Which of the following is the most likely motivation for a hacktivist?",
    "options": {
      "A": "Financial gain",
      "B": "Service disruption",
      "C": "Philosophical beliefs",
      "D": "Corporate espionage"
    },
    "answer": "C"
  },
  {
    "questionNumber": 11,
    "category": "Security Operations",
    "question": "A university employee logged on to the academic server and attempted to guess the system administrators' log-in credentials. Which of the following security measures should the university have implemented to detect the employee's attempts to gain access to the administrators' accounts?",
    "options": {
      "A": "Two-factor authentication",
      "B": "Firewall",
      "C": "Intrusion prevention system",
      "D": "User activity logs"
    },
    "answer": "D"
  },
  {
    "questionNumber": 12,
    "category": "Security Architecture",
    "question": "A company has begun labeling all laptops with asset inventory stickers and associating them with employee IDs. Which of the following security benefits do these actions provide? (Choose two.)",
    "options": {
      "A": "If a security incident occurs on the device, the correct employee can be notified.",
      "B": "The security team will be able to send user awareness training to the appropriate device.",
      "C": "Users can be mapped to their devices when configuring software MFA tokens.",
      "D": "User-based firewall policies can be correctly targeted to the appropriate laptops.",
      "E": "When conducting penetration testing, the security team will be able to target the desired laptops.",
      "F": "Company data can be accounted for when the employee leaves the organization."
    },
    "answer": "A F"
  },
  {
    "questionNumber": 13,
    "category": "General Security Concepts",
    "question": "A company’s web filter is configured to scan the URL for strings and deny access when matches are found. Which of the following search strings should an analyst employ to prohibit access to non-encrypted websites?",
    "options": {
      "A": "encryption=off\\",
      "B": "http://",
      "C": "www.*.com",
      "D": ":443"
    },
    "answer": "B"
  },
  {
    "questionNumber": 14,
    "category": "General Security Concepts",
    "question": "A security analyst is creating base for the server team to follow when hardening new devices for deployment. Which of the following beet describes what the analyst is creating?",
    "options": {
      "A": "Change management procedure",
      "B": "Information security policy",
      "C": "Cybersecurity framework",
      "D": "Secure configuration guide"
    },
    "answer": "D"
  },
  {
    "questionNumber": 15,
    "category": "Security Architecture",
    "question": "A systems administrator wants to use a technical solution to explicitly define file permissions for the entire team. Which of the following should the administrator implement?",
    "options": {
      "A": "ACL (Access Control List)",
      "B": "Monitoring",
      "C": "Isolation",
      "D": "HIPS"
    },
    "answer": "A"
  },
  {
    "questionNumber": 16,
    "category": "General Security Concepts",
    "question": "Which of the following would most likely be deployed to obtain and analyze attacker activity and techniques?",
    "options": {
      "A": "Firewall",
      "B": "IDS",
      "C": "Honeypot",
      "D": "Layer 3 switch"
    },
    "answer": "C"
  },
  {
    "questionNumber": 17,
    "category": "General Security Concepts",
    "question": "A business uses Wi-Fi with content filleting enabled. An employee noticed a coworker accessed a blocked sue from a work computer and repotted the issue. While Investigating the issue, a security administrator found another device providing internet access to certain employees. Which of the following best describes the security risk?",
    "options": {
      "A": "The host-based security agent Is not running on all computers.",
      "B": "A rogue access point Is allowing users to bypass controls.",
      "C": "Employees who have certain credentials are using a hidden SSID.",
      "D": "A valid access point is being jammed to limit availability."
    },
    "answer": "B"
  },
  {
    "questionNumber": 18,
    "category": "Security Operations",
    "question": "The security team at a large global company needs to reduce the cost of storing data used for performing investigations. Which of the following types of data should have its retention length reduced?",
    "options": {
      "A": "Packet capture",
      "B": "Endpoint logs",
      "C": "OS security logs",
      "D": "Vulnerability scan"
    },
    "answer": "A"
  },
  {
    "questionNumber": 19,
    "category": "General Security Concepts",
    "question": "An IT manager informs the entire help desk staff that only the IT manager and the help desk lead will have access to the administrator console of the help desk software. Which of the following security techniques is the IT manager setting up?",
    "options": {
      "A": "Hardening",
      "B": "Employee monitoring",
      "C": "Configuration enforcement",
      "D": "Least privilege"
    },
    "answer": "D"
  },
  {
    "questionNumber": 20,
    "category": "Security Operations",
    "question": "Which of the following is a feature of a next-generation SIEM system?",
    "options": {
      "A": "Virus signatures",
      "B": "Automated response actions",
      "C": "Security agent deployment",
      "D": "Vulnerability scanning"
    },
    "answer": "B"
  },
  {
    "questionNumber": 21,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "An employee fell for a phishing scam, which allowed an attacker to gain access to a company PC. The attacker scraped the PC’s memory to find other credentials. Without cracking these credentials, the attacker used them to move laterally through the corporate network. Which of the following describes this type of attack?",
    "options": {
      "A": "Privilege escalation",
      "B": "Buffer overflow",
      "C": "SQL injection",
      "D": "Pass-the-hash"
    },
    "answer": "D"
  },
  {
    "questionNumber": 22,
    "category": "General Security Concepts",
    "question": "An administrator wants to perform a risk assessment without using proprietary company information. Which of the following methods should the administrator use to gather information?",
    "options": {
      "A": "Network scanning",
      "B": "Penetration testing",
      "C": "Open-source intelligence",
      "D": "Configuration auditing"
    },
    "answer": "C"
  },
  {
    "questionNumber": 23,
    "category": "General Security Concepts",
    "question": "A security architect wants to prevent employees from receiving malicious attachments by email. Which of the following functions should the chosen solution do?",
    "options": {
      "A": "Apply IP address reputation data.",
      "B": "Tap and monitor the email feed.",
      "C": "Scan email traffic inline.",
      "D": "Check SPF records."
    },
    "answer": "C"
  },
  {
    "questionNumber": 24,
    "category": "Security Architecture",
    "question": "An organization is developing a security program that conveys the responsibilities associated with the general operation of systems and software within the organization. Which of the following documents would most likely communicate these expectations?",
    "options": {
      "A": "Business continuity plan",
      "B": "Change management procedure",
      "C": "Acceptable use policy",
      "D": "Software development life cycle policy"
    },
    "answer": "C"
  },
  {
    "questionNumber": 25,
    "category": "General Security Concepts",
    "question": "Various company stakeholders meet to discuss roles and responsibilities in the event of a security breach affecting offshore offices. Which of the following is this an example of?",
    "options": {
      "A": "Tabletop exercise",
      "B": "Penetration test",
      "C": "Geographic dispersion",
      "D": "Incident response"
    },
    "answer": "A"
  },
  {
    "questionNumber": 26,
    "category": "Security Operations",
    "question": "Cadets speaking a foreign language are using company phone numbers to make unsolicited phone calls lo a partner organization. A security analyst validates through phone system logs that the calls are occurring and the numbers are not being spoofed. Which of the following is the most likely explanation?",
    "options": {
      "A": "The executive team is traveling internationally and trying to avoid roaming charges",
      "B": "The company's SIP server security settings are weak.",
      "C": "Disgruntled employees are making calls to the partner organization.",
      "D": "The service provider has assigned multiple companies the same numbers"
    },
    "answer": "B"
  },
  {
    "questionNumber": 27,
    "category": "General Security Concepts",
    "question": "A company is adding a clause to its AUP that states employees are not allowed to modify the operating system on mobile devices. Which of the following vulnerabilities is the organization addressing?",
    "options": {
      "A": "Cross-site scripting",
      "B": "Buffer overflow",
      "C": "Jailbreaking",
      "D": "Side loading"
    },
    "answer": "C"
  },
  {
    "questionNumber": 28,
    "category": "General Security Concepts",
    "question": "A systems administrator notices that one of the systems critical for processing customer transactions is running an end-of-life operating system. Which of the following techniques would increase enterprise security?",
    "options": {
      "A": "Installing HIDS on the system",
      "B": "Placing the system in an isolated VLAN",
      "C": "Decommissioning the system",
      "D": "Encrypting the system's hard drive"
    },
    "answer": "B"
  },
  {
    "questionNumber": 29,
    "category": "General Security Concepts",
    "question": "A company with a high-availability website is looking to harden its controls at any cost. The company wants to ensure that the site is secure by finding any possible issues. Which of the following would most likely achieve this goal?",
    "options": {
      "A": "Permission restrictions",
      "B": "Bug bounty program",
      "C": "Vulnerability scan",
      "D": "Reconnaissance"
    },
    "answer": "B"
  },
  {
    "questionNumber": 30,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "Which of the following allows an exploit to go undetected by the operating system?",
    "options": {
      "A": "Firmware vulnerabilities",
      "B": "Side loading",
      "C": "Memory injection",
      "D": "Encrypted payloads"
    },
    "answer": "A"
  },
  {
    "questionNumber": 31,
    "category": "General Security Concepts",
    "question": "Which of the following is the most likely to be used to document risks, responsible parties, and thresholds?",
    "options": {
      "A": "Risk tolerance",
      "B": "Risk transfer",
      "C": "Risk register",
      "D": "Risk analysis"
    },
    "answer": "C"
  },
  {
    "questionNumber": 32,
    "category": "General Security Concepts",
    "question": "Which of the following should be deployed on an externally facing web server in order to establish an encrypted connection?",
    "options": {
      "A": "Public key",
      "B": "Private Key",
      "C": "Asymmetric key",
      "D": "Symmetric key"
    },
    "answer": "A"
  },
  {
    "questionNumber": 33,
    "category": "Security Program Management and Oversight",
    "question": "Which of the following is the best way to remove personal data from a social media account that is no longer being used?",
    "options": {
      "A": "Exercise the right to be forgotten",
      "B": "Uninstall the social media application",
      "C": "Perform a factory reset",
      "D": "Terminate the social media account"
    },
    "answer": "D"
  },
  {
    "questionNumber": 34,
    "category": "General Security Concepts",
    "question": "Which of the following environments utilizes a subset of customer data and is most likely to be used to assess the impacts of major system upgrades and demonstrate system features?",
    "options": {
      "A": "Development",
      "B": "Test",
      "C": "Production",
      "D": "Staging"
    },
    "answer": "D"
  },
  {
    "questionNumber": 35,
    "category": "General Security Concepts",
    "question": "Which of the following documents details how to accomplish a technical security task?",
    "options": {
      "A": "Standard",
      "B": "Policy",
      "C": "Guideline",
      "D": "Procedure"
    },
    "answer": "D"
  },
  {
    "questionNumber": 36,
    "category": "General Security Concepts",
    "question": "A systems administrator discovers a system that is no longer receiving support from the vendor. However, this system and its environment are critical to running the business, cannot be modified, and must stay online. Which of the following risk treatments is the most appropriate in this situation?",
    "options": {
      "A": "Refect",
      "B": "Accept",
      "C": "Transfer",
      "D": "Avoid"
    },
    "answer": "C"
  },
  {
    "questionNumber": 37,
    "category": "Security Operations",
    "question": "A company installed cameras and added signs to alert visitors that they are being recorded. Which of the following controls did the company implement? (Select two).",
    "options": {
      "A": "Directive",
      "B": "Deterrent",
      "C": "Preventive",
      "D": "Detective",
      "E": "Corrective",
      "F": "Technical"
    },
    "answer": "B D"
  },
  {
    "questionNumber": 38,
    "category": "Security Program Management and Oversight",
    "question": "An organization is implementing a COPE (Corporate-Owned, Personally Enabled) mobile device management policy. Which of the following should the organization include in the COPE policy? (Select two).",
    "options": {
      "A": "Remote wiping of the device",
      "B": "Data encryption",
      "C": "Requiring passwords with eight characters",
      "D": "Data usage caps",
      "E": "Employee data ownership",
      "F": "Personal application store access"
    },
    "answer": "A B"
  },
  {
    "questionNumber": 39,
    "category": "General Security Concepts",
    "question": "Which of the following is a reason why a forensic specialist would create a plan to preserve data after an modem and prioritize the sequence for performing forensic analysis?",
    "options": {
      "A": "Order of volatility",
      "B": "Preservation of event logs",
      "C": "Chain of custody",
      "D": "Compliance with legal hold"
    },
    "answer": "A"
  },
  {
    "questionNumber": 40,
    "category": "Security Architecture",
    "question": "Which of the following is an example of a data protection strategy that uses tokenization?",
    "options": {
      "A": "Encrypting databases containing sensitive data",
      "B": "Replacing sensitive data with surrogate values",
      "C": "Removing sensitive data from production systems",
      "D": "Hashing sensitive data in critical systems"
    },
    "answer": "B"
  },
  {
    "questionNumber": 41,
    "category": "General Security Concepts",
    "question": "A company purchased cyber insurance to address items listed on the risk register. Which of the following strategies does this represent?",
    "options": {
      "A": "Accept",
      "B": "Transfer",
      "C": "Mitigate",
      "D": "Avoid"
    },
    "answer": "B"
  },
  {
    "questionNumber": 42,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "Which of the following actions best addresses a vulnerability found on a company's web server?",
    "options": {
      "A": "Patching",
      "B": "Segmentation",
      "C": "Decommissioning",
      "D": "Monitoring"
    },
    "answer": "A"
  },
  {
    "questionNumber": 43,
    "category": "Security Operations",
    "question": "A company's end users are reporting that they are unable to reach external websites. After reviewing the performance data for the DNS severs, the analyst discovers that the CPU, disk, and memory usage are minimal, but the network interface is flooded with inbound traffic. Network logs show only a small number of DNS queries sent to this server. Which of the following best describes what the security analyst is seeing?",
    "options": {
      "A": "Concurrent session usage",
      "B": "Secure DNS cryptographic downgrade",
      "C": "On-path resource consumption",
      "D": "Reflected denial of service"
    },
    "answer": "D"
  },
  {
    "questionNumber": 44,
    "category": "General Security Concepts",
    "question": "Which of the following techniques would identify whether data has been modified in transit?",
    "options": {
      "A": "Hashing",
      "B": "Tokenization",
      "C": "Masking",
      "D": "Encryption"
    },
    "answer": "A"
  },
  {
    "questionNumber": 45,
    "category": "Security Operations",
    "question": "A human resources (HR) employee working from home leaves their company laptop open on the kitchen table. A family member walking through the kitchen reads an email from the Chief Financial Officer addressed to the HR department. The email contains information referencing company layoffs. The family member posts the content of the email to social media. Which of the following policies will the HR employee most likely need to review after this incident?",
    "options": {
      "A": "Hybrid work environment",
      "B": "Operations security",
      "C": "Data loss prevention",
      "D": "Social engineering"
    },
    "answer": "B"
  },
  {
    "questionNumber": 46,
    "category": "General Security Concepts",
    "question": "A security engineer at a large company needs to enhance IAM to ensure that employees can only access corporate systems during their shifts. Which of the following access controls should the security engineer implement?",
    "options": {
      "A": "Role-based",
      "B": "Time-of-day restrictions",
      "C": "Least privilege",
      "D": "Biometric authentication"
    },
    "answer": "B"
  },
  {
    "questionNumber": 47,
    "category": "General Security Concepts",
    "question": "Which of the following is used to add extra complexity before using a one-way data transformation algorithm?",
    "options": {
      "A": "Key stretching",
      "B": "Data masking",
      "C": "Steganography",
      "D": "Salting"
    },
    "answer": "D"
  },
  {
    "questionNumber": 48,
    "category": "General Security Concepts",
    "question": "Which of the following practices would be best to prevent an insider from introducing malicious code into a company's development process?",
    "options": {
      "A": "Code scanning for vulnerabilities",
      "B": "Open-source component usage",
      "C": "Quality assurance testing",
      "D": "Peer review and approval"
    },
    "answer": "D"
  },
  {
    "questionNumber": 49,
    "category": "General Security Concepts",
    "question": "Which of the following are cases in which an engineer should recommend the decommissioning of a network device? (Select two).",
    "options": {
      "A": "The device has been moved from a production environment to a test environment.",
      "B": "The device is configured to use cleartext passwords.",
      "C": "The device is moved to an isolated segment on the enterprise network.",
      "D": "The device is moved to a different location in the enterprise.",
      "E": "The device's encryption level cannot meet organizational standards.",
      "F": "The device is unable to receive authorized updates."
    },
    "answer": "E"
  },
  {
    "questionNumber": 50,
    "category": "Security Program Management and Oversight",
    "question": "An employee in the accounting department receives an email containing a demand for payment tot services performed by a vendor However, the vendor is not in the vendor management database. Which of the following in this scenario an example of?",
    "options": {
      "A": "Pretexting",
      "B": "Impersonation",
      "C": "Ransomware",
      "D": "Invoice scam"
    },
    "answer": "D"
  },
  {
    "questionNumber": 51,
    "category": "General Security Concepts",
    "question": "Which of the following best describes why me SMS DIP authentication method is more risky to implement than the TOTP method?",
    "options": {
      "A": "The SMS OTP method requires an end user to have an active mobile telephone service and SIM card.",
      "B": "Generally. SMS OTP codes are valid for up to 15 minutes while the TOTP time frame is 30 to 60 seconds",
      "C": "The SMS OTP is more likely to be intercepted and lead to unauthorized disclosure of the code than the TOTP method.",
      "D": "The algorithm used to generate on SMS OTP code is weaker than the one used to generate a TOTP code"
    },
    "answer": "C"
  },
  {
    "questionNumber": 52,
    "category": "General Security Concepts",
    "question": "Select the appropriate attack and remediation from each drop-down list to label the corresponding attack with its remediation.",
    "options": {},
    "answer": "Web server: Botnet, Enable DDoS protection; The attack establishes a connection: RAT, Implement a host-based IPS; The attack is self propagating: Worm, Change the default application password; The attacker uses hardware to remotely monitor a user's input: Keylogger, Disable vulnerable services; The attacker embeds hidden access in an internally developed application: Backdoor, Implement 2FA using push notification"
  },
  {
    "questionNumber": 53,
    "category": "General Security Concepts",
    "question": "A security analyst is creating the first draft of a network diagram for the company's new customer-facing payment application that will be hosted by a third-party cloud service provider.",
    "options": {},
    "answer": "Public Subnet Top Row (Left to Right): Load Balancer, WAF, Autoscaling Instance. Public Subnet Second Row (Left to Right): Instance, Instance, Instance. Private Subnet Top Row (Left to Right): Autoscaling Instance, Load Balancer, WAF. Private Subnet Bottom Row (Left to Right): Instance, Instance, Instance"
  },
  {
    "questionNumber": 54,
    "category": "Security Operations",
    "question": "A security analyst is reviewing logs to identify the destination of command-and-control traffic originating from a compromised device within the on-premises network. Which of the following is the best log to review?",
    "options": {
      "A": "IDS",
      "B": "Antivirus",
      "C": "Firewall",
      "D": "Application"
    },
    "answer": "D"
  },
  {
    "questionNumber": 55,
    "category": "Security Program Management and Oversight",
    "question": "A company is implementing a vendor's security tool in the cloud. The security director does not want to manage users and passwords specific to this tool but would rather utilize the company's standard user directory. Which of the following should the company implement?",
    "options": {
      "A": "802.1X",
      "B": "SAML",
      "C": "RADIUS",
      "D": "CHAP"
    },
    "answer": "B"
  },
  {
    "questionNumber": 56,
    "category": "General Security Concepts",
    "question": "A technician wants to improve the situational and environmental awareness of existing users as they transition from remote to in-office work. Which of the following is the best option?",
    "options": {
      "A": "Send out periodic security reminders.",
      "B": "Update the content of new hire documentation.",
      "C": "Modify the content of recurring training.D Implement a phishing campaign"
    },
    "answer": "C"
  },
  {
    "questionNumber": 57,
    "category": "Security Program Management and Oversight",
    "question": "A company is developing a business continuity strategy and needs to determine how many staff members would be required to sustain the business in the case of a disruption. Which of the following best describes this step?",
    "options": {
      "A": "Capacity planning",
      "B": "Redundancy",
      "C": "Geographic dispersion",
      "D": "Tablet exercise"
    },
    "answer": "A"
  },
  {
    "questionNumber": 58,
    "category": "General Security Concepts",
    "question": "Which of the following best protects sensitive data in transit across a geographically dispersed Infrastructure?",
    "options": {
      "A": "Encryption",
      "B": "Masking",
      "C": "Tokenization",
      "D": "Obfuscation"
    },
    "answer": "A"
  },
  {
    "questionNumber": 59,
    "category": "General Security Concepts",
    "question": "Which of the following consequences would a retail chain most likely face from customers in the event the retailer is non-compliant with PCI DSS?",
    "options": {
      "A": "Contractual impacts",
      "B": "Sanctions",
      "C": "Fines",
      "D": "Reputational damage"
    },
    "answer": "A"
  },
  {
    "questionNumber": 60,
    "category": "Security Operations",
    "question": "A security analyst receives alerts about an internal system sending a large amount of unusual DNS queries to systems on the internet over short periods of time during non-business hours. Which of the following is most likely occurring?",
    "options": {
      "A": "A worm is propagating across the network.",
      "B": "Data is being exfiltrated.",
      "C": "A logic bomb is deleting data.",
      "D": "Ransomware is encrypting files."
    },
    "answer": "B"
  },
  {
    "questionNumber": 61,
    "category": "General Security Concepts",
    "question": "A company has a website in a server cluster. One server is experiencing very high usage, while others are nearly unused. Which of the following should the company configure to help distribute traffic quickly?",
    "options": {
      "A": "Server multiprocessing",
      "B": "Warm site",
      "C": "Load balancer",
      "D": "Proxy server"
    },
    "answer": "C"
  },
  {
    "questionNumber": 62,
    "category": "General Security Concepts",
    "question": "A company identified the potential for malicious insiders to harm the organization. Which of the following measures should the organization implement to reduce this risk?",
    "options": {
      "A": "Unified threat management",
      "B": "Web application firewall",
      "C": "User behavior analytics",
      "D": "Intrusion detection system"
    },
    "answer": "C"
  },
  {
    "questionNumber": 63,
    "category": "General Security Concepts",
    "question": "While a school district is performing state testing, a security analyst notices all internet services are unavailable. The analyst discovers that ARP poisoning is occurring on the network and then terminates access for the host. Which of the following is most likely responsible for this malicious activity?",
    "options": {
      "A": "Unskilled attacker",
      "B": "Shadow IT",
      "C": "Credential stuffing",
      "D": "DMARC failure"
    },
    "answer": "A"
  },
  {
    "questionNumber": 64,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "A company decided to reduce the cost of its annual cyber insurance policy by removing the coverage for ransomware attacks. Which of the following analysis elements did the company most likely use in making this decision?",
    "options": {
      "A": "IMTTR",
      "B": "RTO",
      "C": "ARO",
      "D": "MTBF"
    },
    "answer": "C"
  },
  {
    "questionNumber": 65,
    "category": "General Security Concepts",
    "question": "Which of the following makes Infrastructure as Code (IaC) a preferred security architecture over traditional infrastructure models?",
    "options": {
      "A": "Common attacks are less likely to be effective.",
      "B": "Configuration can be better managed and replicated.",
      "C": "Outsourcing to a third party with more expertise in network defense is possible.",
      "D": "Optimization can occur across a number of computing instances."
    },
    "answer": "B"
  },
  {
    "questionNumber": 66,
    "category": "General Security Concepts",
    "question": "A security administrator is deploying a DLP solution to prevent the exfiltration of sensitive customer data. Which of the following should the administrator do first?",
    "options": {
      "A": "Block access to cloud storage websites.",
      "B": "Create a rule to block outgoing email attachments.",
      "C": "Apply classifications to the data.",
      "D": "Remove all user permissions from shares on the file server."
    },
    "answer": "C"
  },
  {
    "questionNumber": 67,
    "category": "Security Architecture",
    "question": "Which of the following would best allow a company to prevent access to systems from the Internet?",
    "options": {
      "A": "Containerization",
      "B": "Virtualization",
      "C": "SD-WAN",
      "D": "Air-gapped"
    },
    "answer": "D"
  },
  {
    "questionNumber": 68,
    "category": "General Security Concepts",
    "question": "Which of the following would a systems administrator follow when upgrading the firmware of an organization's router?",
    "options": {
      "A": "Software development life cycle",
      "B": "Risk tolerance",
      "C": "Certificate signing request",
      "D": "Maintenance window"
    },
    "answer": "D"
  },
  {
    "questionNumber": 69,
    "category": "General Security Concepts",
    "question": "A network administrator wants to ensure that network traffic is highly secure while in transit. Which of the following actions best describes the actions the network administrator should take?",
    "options": {
      "A": "Ensure that NAC is enforced on all network segments, and confirm that firewalls have updated policies to block unauthorized traffic.",
      "B": "Ensure only TLS and other encrypted protocols are selected for use on the network, and only permit authorized traffic via secure protocols.",
      "C": "Configure the perimeter IPS to block inbound HTTPS directory traversal traffic, and verify that signatures are updated on a daily basis.",
      "D": "Ensure the EDR software monitors for unauthorized applications that could be used by threat actors, and configure alerts for the security team."
    },
    "answer": "B"
  },
  {
    "questionNumber": 70,
    "category": "General Security Concepts",
    "question": "The marketing department set up its own project management software without telling the appropriate departments. Which of the following describes this scenario?",
    "options": {
      "A": "Shadow IT",
      "B": "Insider threat",
      "C": "Data exfiltration",
      "D": "Service disruption"
    },
    "answer": "A"
  },
  {
    "questionNumber": 71,
    "category": "General Security Concepts",
    "question": "Which of the following is the best way to prevent an unauthorized user from plugging a laptop into an employee's phone network port and then using tools to scan for database servers?",
    "options": {
      "A": "MAC filtering",
      "B": "Segmentation",
      "C": "Certification",
      "D": "Isolation"
    },
    "answer": "A"
  },
  {
    "questionNumber": 72,
    "category": "General Security Concepts",
    "question": "A company’s legal department drafted sensitive documents in a SaaS application and wants to ensure the documents cannot be accessed by individuals in high-risk countries. Which of the following is the most effective way to limit this access?",
    "options": {
      "A": "Data masking",
      "B": "Encryption",
      "C": "Geolocation policy",
      "D": "Data sovereignty regulation"
    },
    "answer": "C"
  },
  {
    "questionNumber": 73,
    "category": "Security Program Management and Oversight",
    "question": "The internal audit team determines a software application is no longer in scope for external reporting requirements. Which of the following will confirm management’s perspective that the application is no longer applicable?",
    "options": {
      "A": "Data inventory and retention",
      "B": "Right to be forgotten",
      "C": "Due care and due diligence",
      "D": "Acknowledgement and attestation"
    },
    "answer": "D"
  },
  {
    "questionNumber": 74,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "A Chief Information Security Officer (CISO) wants to explicitly raise awareness about the increase of ransomware-as-a-service in a report to the management team. Which of the following best describes the threat actor in the CISO's report?",
    "options": {
      "A": "Insider threat",
      "B": "Hacktivist",
      "C": "Nation-state",
      "D": "Organized crime"
    },
    "answer": "D"
  },
  {
    "questionNumber": 75,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "An unexpected and out-of-character email message from a Chief Executive Officer’s corporate account asked an employee to provide financial information and to change the recipient's contact number. Which of the following attack vectors is most likely being used?",
    "options": {
      "A": "Business email compromise",
      "B": "Phishing",
      "C": "Brand impersonation",
      "D": "Pretexting"
    },
    "answer": "A"
  },
  {
    "questionNumber": 76,
    "category": "Security Architecture",
    "question": "Which of the following is the best way to securely store an encryption key for a data set in a manner that allows multiple entities to access the key when needed?",
    "options": {
      "A": "Public key infrastructure",
      "B": "Open public ledger",
      "C": "Public key encryption",
      "D": "Key escrow"
    },
    "answer": "D"
  },
  {
    "questionNumber": 77,
    "category": "General Security Concepts",
    "question": "An organization recently started hosting a new service that customers access through a web portal. A security engineer needs to add to the existing security devices a new solution to protect this new service. Which of the following is the engineer most likely to deploy?",
    "options": {
      "A": "Layer 4 firewall",
      "B": "NGFW (Next Generation Firewall)",
      "C": "WAF (Web Application Firewall)",
      "D": "UTM (Unified Threat Management)"
    },
    "answer": "C"
  },
  {
    "questionNumber": 78,
    "category": "General Security Concepts",
    "question": "Two companies are in the process of merging. The companies need to decide how to standardize their information security programs. Which of the following would best align the security programs?",
    "options": {
      "A": "Shared deployment of CIS baselines",
      "B": "Joint cybersecurity best practices",
      "C": "Both companies following the same CSF",
      "D": "Assessment of controls in a vulnerability report"
    },
    "answer": "C"
  },
  {
    "questionNumber": 79,
    "category": "General Security Concepts",
    "question": "A client asked a security company to provide a document outlining the project, the cost, and the completion time frame. Which of the following documents should the company provide to the client?",
    "options": {
      "A": "MSA",
      "B": "SLA (Service Level Agreement)",
      "C": "BPA (Business Partnership Agreement)",
      "D": "SOW"
    },
    "answer": "D"
  },
  {
    "questionNumber": 80,
    "category": "General Security Concepts",
    "question": "A program manager wants to ensure contract employees can only use the company’s computers Monday through Friday from 9 a.m. to 5 p.m. Which of the following would best enforce this access control?",
    "options": {
      "A": "Creating a GPO for all contract employees and setting time-of-day log-in restrictions",
      "B": "Creating a discretionary access policy and setting rule-based access for contract employees",
      "C": "Implementing an OAuth server and then setting least privilege for contract employees",
      "D": "Implementing SAML with federation to the contract employees' authentication server"
    },
    "answer": "A"
  },
  {
    "questionNumber": 81,
    "category": "Security Program Management and Oversight",
    "question": "Various company stakeholders meet to discuss roles and responsibilities in the event of a security breach that would affect offshore offices. Which of the following is this an example of?",
    "options": {
      "A": "Tabletop exercise",
      "B": "Penetration test",
      "C": "Geographic dispersion",
      "D": "Incident response"
    },
    "answer": "A"
  },
  {
    "questionNumber": 82,
    "category": "Security Architecture",
    "question": "When trying to access an internal website, an employee reports that a prompt displays, stating that the site is insecure. Which of the following certificate types is the site most likely using?",
    "options": {
      "A": "Wildcard",
      "B": "Root of trust",
      "C": "Third-party",
      "D": "Self-signed"
    },
    "answer": "D"
  },
  {
    "questionNumber": 83,
    "category": "General Security Concepts",
    "question": "A systems administrator is redesigning now devices will perform network authentication. The following requirements need to be met: An existing Internal certificate must be used. Wired and wireless networks must be supported. Any unapproved device should be Isolated in a quarantine subnet. Approved devices should be updated before accessing resources. Which of the following would best meet the requirements?",
    "options": {
      "A": "802.IX",
      "B": "EAP",
      "C": "RADIUS",
      "D": "WPA2"
    },
    "answer": "A"
  },
  {
    "questionNumber": 84,
    "category": "General Security Concepts",
    "question": "An organization would like to store customer data on a separate part of the network that is not accessible to users on the main corporate network. Which of the following should the administrator use to accomplish this goal?",
    "options": {
      "A": "Segmentation",
      "B": "Isolation",
      "C": "Patching",
      "D": "Encryption"
    },
    "answer": "A"
  },
  {
    "questionNumber": 85,
    "category": "General Security Concepts",
    "question": "Which of the following is the most common data loss path for an air-gapped network?",
    "options": {
      "A": "Bastion host",
      "B": "Unsecured Bluetooth",
      "C": "Unpatched OS",
      "D": "Removable devices"
    },
    "answer": "D"
  },
  {
    "questionNumber": 86,
    "category": "General Security Concepts",
    "question": "A company's website is www. Company. com Attackers purchased the domain wwww. company.com Which of the following types of attacks describes this example?",
    "options": {
      "A": "Typosquatting (AKA Url hijacking)",
      "B": "Brand Impersonation",
      "C": "On-path",
      "D": "Watering-hole"
    },
    "answer": "A"
  },
  {
    "questionNumber": 87,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "An important patch for a critical application has just been released, and a systems administrator is identifying all of the systems requiring the patch. Which of the following must be maintained in order to ensure that all systems requiring the patch are updated?",
    "options": {
      "A": "Asset inventory",
      "B": "Network enumeration",
      "C": "Data certification",
      "D": "Procurement process"
    },
    "answer": "A"
  },
  {
    "questionNumber": 88,
    "category": "General Security Concepts",
    "question": "Which of the following is the best method to reduce the attack surface of an enterprise network?",
    "options": {
      "A": "Disable unused network services on servers.",
      "B": "Use port security for wired connections.",
      "C": "Change default passwords for network printers.",
      "D": "Create a guest wireless network for visitors."
    },
    "answer": "C"
  },
  {
    "questionNumber": 89,
    "category": "Security Program Management and Oversight",
    "question": "After a series of account compromises and credential misuse, a company hires a security manager to develop a security program. Which of the following steps should the security manager take first to increase security awareness?",
    "options": {
      "A": "Evaluate tools that identify risky behavior and distribute reports on the findings.",
      "B": "Send quarterly newsletters that explain the importance of password management.",
      "C": "Develop phishing campaigns and notify the management team of any successes.",
      "D": "Update policies and handbooks to ensure all employees are informed of the new procedures."
    },
    "answer": "D"
  },
  {
    "questionNumber": 90,
    "category": "General Security Concepts",
    "question": "An organization is required to provide assurance that its controls are properly designed and operating effectively. Which of the following reports will best achieve the objective?",
    "options": {
      "A": "Red teaming",
      "B": "Penetration testing",
      "C": "Independent audit",
      "D": "Vulnerability assessment"
    },
    "answer": "D"
  },
  {
    "questionNumber": 91,
    "category": "General Security Concepts",
    "question": "Which of the following describes the category of data that is most impacted when it is lost?",
    "options": {
      "A": "Confidential",
      "B": "Public",
      "C": "Private",
      "D": "Critical"
    },
    "answer": "D"
  },
  {
    "questionNumber": 92,
    "category": "Security Program Management and Oversight",
    "question": "Which of the following data types relates to data sovereignty?",
    "options": {
      "A": "Data classified as public in other countries",
      "B": "Personally Identifiable data while traveling",
      "C": "Health data shared between doctors in other nations",
      "D": "Data at rest outside of a country's borders"
    },
    "answer": "D"
  },
  {
    "questionNumber": 93,
    "category": "General Security Concepts",
    "question": "Which of the following is the most relevant reason a DPO would develop a data inventory?",
    "options": {
      "A": "To manage data storage requirements better",
      "B": "To determine the impact in the event of a breach",
      "C": "To extend the length of time data can be retained",
      "D": "To automate the reduction of duplicated data"
    },
    "answer": "B"
  },
  {
    "questionNumber": 94,
    "category": "Security Operations",
    "question": "A systems administrator receives an alert that a company's internal file server is very slow and is only working intermittently. The systems administrator reviews the server management software and finds the following information about the server: Which of the following indicators most likely triggered this alert?",
    "options": {
      "A": "Concurrent session usage",
      "B": "Network saturation",
      "C": "Account lockout",
      "D": "Resource consumption"
    },
    "answer": "D"
  },
  {
    "questionNumber": 95,
    "category": "Security Program Management and Oversight",
    "question": "A systems administrator is changing the password policy within an enterprise environment and wants this update implemented on all systems as quickly as possible. Which of the following operating system security measures will the administrator most likely use?",
    "options": {
      "A": "Deploying PowerShell scripts",
      "B": "Pushing GPO update",
      "C": "Enabling PAP",
      "D": "Updating EDR profiles"
    },
    "answer": "B"
  },
  {
    "questionNumber": 96,
    "category": "General Security Concepts",
    "question": "Which of the following can be used to identify potential attacker activities without affecting production servers?",
    "options": {
      "A": "Honey pot",
      "B": "Video surveillance",
      "C": "Zero Trust",
      "D": "Geofencing"
    },
    "answer": "A"
  },
  {
    "questionNumber": 97,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "During a SQL update of a database, a temporary field that was created was replaced by an attacker in order to allow access to the system. Which of the following best describes this type of vulnerability?",
    "options": {
      "A": "Race condition",
      "B": "Memory injection",
      "C": "Malicious update",
      "D": "Side loading"
    },
    "answer": "A"
  },
  {
    "questionNumber": 98,
    "category": "Security Operations",
    "question": "Which of the following phases of the incident response process attempts to minimize disruption?",
    "options": {
      "A": "Recovery",
      "B": "Containment",
      "C": "Preparation",
      "D": "Analysis"
    },
    "answer": "B"
  },
  {
    "questionNumber": 99,
    "category": "General Security Concepts",
    "question": "Which of the following considerations is the most important for an organization to evaluate as it establishes and maintains a data privacy program?",
    "options": {
      "A": "Reporting structure for the data privacy officer",
      "B": "Request process for data subject access",
      "C": "Role as controller or processor",
      "D": "Physical location of the company"
    },
    "answer": "C"
  },
  {
    "questionNumber": 100,
    "category": "Security Program Management and Oversight",
    "question": "A company wants to verify that the software the company is deploying came from the vendor the company purchased the software from. Which of the following is the best way for the company to confirm this information?",
    "options": {
      "A": "Validate the code signature.",
      "B": "Execute the code in a sandbox.",
      "C": "Search the executable for ASCII strings.",
      "D": "Generate a hash of the files."
    },
    "answer": "A"
  },
  {
    "questionNumber": 101,
    "category": "General Security Concepts",
    "question": "A user is attempting to patch a critical system, but the patch fails to transfer. Which of the following access controls is most likely inhibiting the transfer?",
    "options": {
      "A": "Attribute-based",
      "B": "Time of day",
      "C": "Role-based",
      "D": "Least privilege"
    },
    "answer": "D"
  },
  {
    "questionNumber": 102,
    "category": "General Security Concepts",
    "question": "Which of the following tasks is typically included in the BIA process?",
    "options": {
      "A": "Estimating the recovery time of systems",
      "B": "Identifying the communication strategy",
      "C": "Evaluating the risk management plan",
      "D": "Establishing the backup and recovery procedures"
    },
    "answer": "A"
  },
  {
    "questionNumber": 103,
    "category": "Security Operations",
    "question": "A security administrator observed the following in a web server log while investigating an incident: GET ../../../../etc/passwd Which of the following attacks did the security administrator most likely see?",
    "options": {
      "A": "Privilege escalation",
      "B": "Credential replay",
      "C": "Brute force",
      "D": "Directory traversal"
    },
    "answer": "D"
  },
  {
    "questionNumber": 104,
    "category": "Security Operations",
    "question": "A security engineer would like to enhance the use of automation and orchestration within the SIEM. Which of the following would be the primary benefit of this enhancement?",
    "options": {
      "A": "It increases complexity.",
      "B": "It removes technical debt.",
      "C": "It adds additional guard rails.",
      "D": "It acts as a workforce multiplier."
    },
    "answer": "D"
  },
  {
    "questionNumber": 105,
    "category": "General Security Concepts",
    "question": "An accounting clerk sent money to an attacker's bank account after receiving fraudulent instructions over the phone to use a new account. Which of the following would most likely prevent this activity in the future?",
    "options": {
      "A": "Standardizing security incident reporting",
      "B": "Executing regular phishing campaigns",
      "C": "Implementing insider threat detection measures",
      "D": "Updating processes for sending wire transfers"
    },
    "answer": "D"
  },
  {
    "questionNumber": 106,
    "category": "General Security Concepts",
    "question": "A network engineer is increasing the overall security of network devices and needs to harden the devices. Which of the following will best accomplish this task?",
    "options": {
      "A": "Configuring centralized logging",
      "B": "Generating local administrator accounts",
      "C": "Replacing Telnet with SSH",
      "D": "Enabling HTTP administration"
    },
    "answer": "C"
  },
  {
    "questionNumber": 107,
    "category": "General Security Concepts",
    "question": "A growing company would like to enhance the ability of its security operations center to detect threats but reduce the amount of manual work required tor the security analysts. Which of the following would best enable the reduction in manual work?",
    "options": {
      "A": "SOAR (Security Orchestration, Automation, and Response)",
      "B": "SIEM (Security Information and Event Management system)",
      "C": "MDM (Mobile Device Management)",
      "D": "DLP (Data Loss Prevention)"
    },
    "answer": "A"
  },
  {
    "questionNumber": 108,
    "category": "Security Architecture",
    "question": "An administrator is installing an SSL certificate on a new system. During testing, errors indicate that the certificate is not trusted. The administrator has verified with the issuing CA and has validated the private key. Which of the following should the administrator check for next?",
    "options": {
      "A": "If the wildcard certificate is configured",
      "B": "If the certificate signing request is valid",
      "C": "If the root certificate is installed",
      "D": "If the public key is configured"
    },
    "answer": "C"
  },
  {
    "questionNumber": 109,
    "category": "General Security Concepts",
    "question": "Which of the following security concepts is accomplished with the installation of a RADIUS server?",
    "options": {
      "A": "CIA",
      "B": "AA",
      "C": "ACL (Access Control List)",
      "D": "PEM"
    },
    "answer": "B"
  },
  {
    "questionNumber": 110,
    "category": "General Security Concepts",
    "question": "An employee who was working remotely lost a mobile device containing company data. Which of the following provides the best solution to prevent future data loss?",
    "options": {
      "A": "MDM (Mobile Device Management)",
      "B": "DLP (Data Loss Prevention)",
      "C": "FDE",
      "D": "EDR"
    },
    "answer": "A"
  },
  {
    "questionNumber": 111,
    "category": "Security Architecture",
    "question": "Which of the following describes the reason for using an MDM solution to prevent jailbreaking?",
    "options": {
      "A": "To secure end-of-life devices from incompatible firmware updates",
      "B": "To avoid hypervisor attacks through VM escape",
      "C": "To eliminate buffer overflows at the application layer",
      "D": "To prevent users from changing the OS of mobile devices"
    },
    "answer": "D"
  },
  {
    "questionNumber": 112,
    "category": "Security Architecture",
    "question": "Which of the following vulnerabilities is associated with installing software outside of a manufacturer’s approved software repository?",
    "options": {
      "A": "Jailbreaking",
      "B": "Memory injection",
      "C": "Resource reuse",
      "D": "Side loading"
    },
    "answer": "D"
  },
  {
    "questionNumber": 113,
    "category": "Security Program Management and Oversight",
    "question": "A company is using a legacy FTP server to transfer financial data to a third party. The legacy system does not support SFTP, so a compensating control is needed to protect the sensitive, financial data in transit. Which of the following would be the most appropriate for the company to use?",
    "options": {
      "A": "Telnet connection",
      "B": "SSH tunneling",
      "C": "Patch installation",
      "D": "Full disk encryption"
    },
    "answer": "B"
  },
  {
    "questionNumber": 114,
    "category": "General Security Concepts",
    "question": "An analyst identifies that multiple users have the same passwords, but the hashes appear to be completely different. Which of the following most likely explains this issue?",
    "options": {
      "A": "Data masking",
      "B": "Salting",
      "C": "Key escrow",
      "D": "Tokenization"
    },
    "answer": "B"
  },
  {
    "questionNumber": 115,
    "category": "Security Operations",
    "question": "A security analyst is reviewing alerts in the SIEM related to potential malicious network traffic coming from an employee’s corporate laptop. The security analyst has determined that additional data about the executable running on the machine is necessary to continue the investigation. Which of the following logs should the analyst use as a data source?",
    "options": {
      "A": "Application",
      "B": "IPS/IDS, (Intrusion Prevention/Detention System)",
      "C": "Network",
      "D": "Endpoint"
    },
    "answer": "D"
  },
  {
    "questionNumber": 116,
    "category": "Security Operations",
    "question": "Which of the following is the phase in the incident response process when a security analyst reviews roles and responsibilities?",
    "options": {
      "A": "Preparation",
      "B": "Recovery",
      "C": "Lessons learned",
      "D": "Analysis"
    },
    "answer": "A"
  },
  {
    "questionNumber": 117,
    "category": "Security Program Management and Oversight",
    "question": "An external vendor recently visited a company's headquarters tor a presentation. Following the visit a member of the hosting team found a file that the external vendor left behind on a server. The file contained detailed architecture information and code snippets. Which of the following data types best describes this file?",
    "options": {
      "A": "Government",
      "B": "Public",
      "C": "Proprietary",
      "D": "Critical"
    },
    "answer": "C"
  },
  {
    "questionNumber": 118,
    "category": "General Security Concepts",
    "question": "Which of the following cryptographic methods is preferred for securing communications with limited computing resources?",
    "options": {
      "A": "Hashing algorithm",
      "B": "Public key infrastructure",
      "C": "Symmetric encryption",
      "D": "Elliptic curve cryptography"
    },
    "answer": "B"
  },
  {
    "questionNumber": 119,
    "category": "General Security Concepts",
    "question": "Which of the following should a systems administrator use to ensure an easy deployment of resources within the cloud provider?",
    "options": {
      "A": "Software as a service",
      "B": "Infrastructure as code",
      "C": "Internet of Things",
      "D": "Software-defined networking"
    },
    "answer": "B"
  },
  {
    "questionNumber": 120,
    "category": "General Security Concepts",
    "question": "Which of the following data protection strategies can be used to confirm file integrity?",
    "options": {
      "A": "Masking",
      "B": "Encryption",
      "C": "Hashing",
      "D": "Obfuscation"
    },
    "answer": "C"
  },
  {
    "questionNumber": 121,
    "category": "General Security Concepts",
    "question": "A company is in the process of migrating to cloud-based services. The company's IT department has limited resources for migration and ongoing support. Which of the following best meets the company's needs?",
    "options": {
      "A": "IPS (Intrusion Prevention System)",
      "B": "WAF",
      "C": "SASE",
      "D": "IAM"
    },
    "answer": "C"
  },
  {
    "questionNumber": 122,
    "category": "Security Operations",
    "question": "The executive management team is mandating the company develop a disaster recovery plan. The cost must be kept to a minimum, and the money to fund additional internet connections is not available. Which of the following would be the best option?",
    "options": {
      "A": "Hot site",
      "B": "Cold site",
      "C": "Failover site",
      "D": "Warm site"
    },
    "answer": "B"
  },
  {
    "questionNumber": 123,
    "category": "General Security Concepts",
    "question": "A customer of a large company receives a phone call from someone claiming to work for the company and asking for the customer's credit card information. The customer sees the caller ID is the same as the company's main phone number. Which of the following attacks is the customer most likely a target of?",
    "options": {
      "A": "Phishing",
      "B": "Whaling",
      "C": "Smishing",
      "D": "Vishing"
    },
    "answer": "D"
  },
  {
    "questionNumber": 124,
    "category": "General Security Concepts",
    "question": "Which of the following is a benefit of an RTO when conducting a business impact analysis?",
    "options": {
      "A": "It determines the likelihood of an incident and its cost.",
      "B": "It determines the roles and responsibilities for incident responders.",
      "C": "It determines the state that systems should be restored to following an incident.",
      "D": "It determines how long an organization can tolerate downtime after an incident."
    },
    "answer": "D"
  },
  {
    "questionNumber": 125,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "A technician needs to apply a high-priority patch to a production system. Which of the following steps should be taken first?",
    "options": {
      "A": "Air gap the system.",
      "B": "Move the system to a different network segment.",
      "C": "Create a change control request.",
      "D": "Apply the patch to the system."
    },
    "answer": "C"
  },
  {
    "questionNumber": 126,
    "category": "General Security Concepts",
    "question": "Which of the following allows a systems administrator to tune permissions for a file?",
    "options": {
      "A": "Patching",
      "B": "Access control list",
      "C": "Configuration enforcement",
      "D": "Least privilege"
    },
    "answer": "B"
  },
  {
    "questionNumber": 127,
    "category": "General Security Concepts",
    "question": "A systems administrator receives a text message from an unknown number claiming to be the Chief Executive Officer of the company. The message states an emergency situation requires a password reset. Which of the following threat vectors is being used?",
    "options": {
      "A": "Typosquatting (AKA URL hijacking",
      "B": "Smishing",
      "C": "Pretexting",
      "D": "Impersonation"
    },
    "answer": "B"
  },
  {
    "questionNumber": 128,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "Which of the following is used to protect a computer from viruses, malware, and Trojans being installed and moving laterally across the network?",
    "options": {
      "A": "IDS",
      "B": "ACL (Access Control List)",
      "C": "EDR",
      "D": "NAC (Network Access Control)"
    },
    "answer": "C"
  },
  {
    "questionNumber": 129,
    "category": "Security Architecture",
    "question": "An administrator finds that all user workstations and servers are displaying a message that is associated with files containing an extension of .ryk. Which of the following types of infections is present on the systems?",
    "options": {
      "A": "Virus",
      "B": "Trojan",
      "C": "Spyware",
      "D": "Ransomware"
    },
    "answer": "D"
  },
  {
    "questionNumber": 130,
    "category": "General Security Concepts",
    "question": "A systems administrator needs to ensure the secure communication of sensitive data within the organization's private cloud. Which of the following is the best choice for the administrator to implement?",
    "options": {
      "A": "IPSec",
      "B": "SHA-1",
      "C": "RSA",
      "D": "TGT"
    },
    "answer": "A"
  },
  {
    "questionNumber": 131,
    "category": "General Security Concepts",
    "question": "Which of the following is prevented by proper data sanitization?",
    "options": {
      "A": "Hackers' ability to obtain data from used hard drives",
      "B": "Devices reaching end-of-life and losing support",
      "C": "Disclosure of sensitive data through incorrect classification",
      "D": "Incorrect inventory data leading to a laptop shortage"
    },
    "answer": "A"
  },
  {
    "questionNumber": 132,
    "category": "General Security Concepts",
    "question": "Which of the following is a risk of conducting a vulnerability assessment?",
    "options": {
      "A": "A disruption of business operations",
      "B": "Unauthorized access to the system",
      "C": "Reports of false positives",
      "D": "Finding security gaps in the system"
    },
    "answer": "A"
  },
  {
    "questionNumber": 133,
    "category": "General Security Concepts",
    "question": "An administrator wants to automate an account permissions update for a large number of accounts. Which of the following would best accomplish this task?",
    "options": {
      "A": "Security groups",
      "B": "Federation",
      "C": "User provisioning",
      "D": "Vertical scaling"
    },
    "answer": "B"
  },
  {
    "questionNumber": 134,
    "category": "Security Operations",
    "question": "Which of the following exercises should an organization use to improve its incident response process?",
    "options": {
      "A": "Tabletop",
      "B": "Replication",
      "C": "Failover",
      "D": "Recovery"
    },
    "answer": "A"
  },
  {
    "questionNumber": 135,
    "category": "General Security Concepts",
    "question": "Company A jointly develops a product with Company B, which is located in a different country. Company A finds out that their intellectual property is being shared with unauthorized companies. Which of the following has been breached?",
    "options": {
      "A": "SLA (Service Level Agreement)",
      "B": "AUP",
      "C": "SOW",
      "D": "MOA (Memorandum of Agreement)"
    },
    "answer": "D"
  },
  {
    "questionNumber": 136,
    "category": "General Security Concepts",
    "question": "An administrator assists the legal and compliance team with ensuring information about customer transactions is archived for the proper time period. Which of the following data policies is the administrator carrying out?",
    "options": {
      "A": "Compromise",
      "B": "Retention",
      "C": "Analysis",
      "D": "Transfer"
    },
    "answer": "B"
  },
  {
    "questionNumber": 137,
    "category": "Security Architecture",
    "question": "Which of the following security controls would best guard a payroll system against insider manipulation threats?",
    "options": {
      "A": "Compensating",
      "B": "Deterrent",
      "C": "Detective",
      "D": "Corrective"
    },
    "answer": "C"
  },
  {
    "questionNumber": 138,
    "category": "Security Operations",
    "question": "Which of the following definitions best describes the concept of log co-relation?",
    "options": {
      "A": "Combining relevant logs from multiple sources into ono location",
      "B": "Searching end processing, data to identify patterns of malicious activity",
      "C": "Making a record of the events that occur in the system",
      "D": "Analyzing the log files of the system components"
    },
    "answer": "D"
  },
  {
    "questionNumber": 139,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "Which of the following would best explain why a security analyst is running daily vulnerability scans on all corporate endpoints?",
    "options": {
      "A": "To track the status of patch installations",
      "B": "To find shadow IT cloud deployments",
      "C": "To continuously monitor hardware inventory",
      "D": "To hunt for active attackers in the network"
    },
    "answer": "A"
  },
  {
    "questionNumber": 140,
    "category": "Security Operations",
    "question": "An administrator discovers that some files on a database server were recently encrypted. The administrator sees from the security logs that the data was last accessed by a domain user. Which of the following best describes the type of attack that occurred?",
    "options": {
      "A": "Insider threat",
      "B": "Social engineering",
      "C": "Watering-hole",
      "D": "Unauthorized attacker"
    },
    "answer": "A"
  },
  {
    "questionNumber": 141,
    "category": "Security Operations",
    "question": "Several employees received a fraudulent text message from someone claiming to be the Chief Executive Officer (CEO). The message stated: “I’m in an airport right now with no access to email. I need you to buy gift cards for employee recognition awards. Please send the gift cards to following email address.” Which of the following are the best responses to this situation? (Choose two).",
    "options": {
      "A": "Cancel current employee recognition gift cards.",
      "B": "Add a smishing exercise to the annual company training.",
      "C": "Issue a general email warning to the company.",
      "D": "Have the CEO change phone numbers.",
      "E": "Conduct a forensic investigation on the CEO's phone.",
      "F": "Implement mobile device management."
    },
    "answer": "B C"
  },
  {
    "questionNumber": 142,
    "category": "General Security Concepts",
    "question": "A company evaluates several options that would allow employees to have remote access to the network. The security team wants to ensure the solution includes AAA to comply with internal security policies. Which of the following should the security team recommend?",
    "options": {
      "A": "IPSec with RADIUS",
      "B": "RDP connection with LDAPS",
      "C": "Web proxy for all remote traffic",
      "D": "Jump server with 802.1X"
    },
    "answer": "A"
  },
  {
    "questionNumber": 143,
    "category": "General Security Concepts",
    "question": "Which of the following control types involves restricting IP connectivity to a router's web management interface to protect it from being exploited by a vulnerability?",
    "options": {
      "A": "Corrective",
      "B": "Physical",
      "C": "Preventive",
      "D": "Managerial"
    },
    "answer": "C"
  },
  {
    "questionNumber": 144,
    "category": "Security Program Management and Oversight",
    "question": "An organization wants a third-party vendor to do a penetration test that targets a specific device. The organization has provided basic information about the device. Which of the following best describes this kind of penetration test?",
    "options": {
      "A": "Partially known environment",
      "B": "Unknown environment",
      "C": "Integrated",
      "D": "Known environment"
    },
    "answer": "A"
  },
  {
    "questionNumber": 145,
    "category": "Security Architecture",
    "question": "A security engineer is installing an IPS to block signature-based attacks in the environment. Which of the following modes will best accomplish this task?",
    "options": {
      "A": "Monitor",
      "B": "Sensor",
      "C": "Audit",
      "D": "Active"
    },
    "answer": "D"
  },
  {
    "questionNumber": 146,
    "category": "General Security Concepts",
    "question": "An IT manager is increasing the security capabilities of an organization after a data classification initiative determined that sensitive data could be exfiltrated from the environment. Which of the following solutions would mitigate the risk?",
    "options": {
      "A": "XDR",
      "B": "SPF",
      "C": "DLP (Data Loss Prevention)",
      "D": "DMARC"
    },
    "answer": "C"
  },
  {
    "questionNumber": 147,
    "category": "Security Operations",
    "question": "Which of the following phases of an incident response involves generating reports?",
    "options": {
      "A": "Recovery",
      "B": "Preparation",
      "C": "Lessons learned",
      "D": "Containment"
    },
    "answer": "C"
  },
  {
    "questionNumber": 148,
    "category": "Security Architecture",
    "question": "An organization is leveraging a VPN between its headquarters and a branch location. Which of the following is the VPN protecting?",
    "options": {
      "A": "Data in use",
      "B": "Data in transit",
      "C": "Geographic restrictions",
      "D": "Data sovereignty"
    },
    "answer": "B"
  },
  {
    "questionNumber": 149,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "The help desk receives multiple calls that machines with an outdated OS version are running slowly. Several users are seeing virus detection alerts. Which of the following mitigation techniques should be reviewed first?",
    "options": {
      "A": "Patching",
      "B": "Segmentation",
      "C": "Monitoring",
      "D": "Isolation"
    },
    "answer": "A"
  },
  {
    "questionNumber": 150,
    "category": "General Security Concepts",
    "question": "Which of the following is a compensating control for providing user access to a high-risk website?",
    "options": {
      "A": "Enabling threat prevention features on the firewall",
      "B": "Configuring a SIEM tool to capture all web traffic",
      "C": "Setting firewall rules to allow traffic from any port to that destination",
      "D": "Blocking that website on the endpoint protection software"
    },
    "answer": "A"
  },
  {
    "questionNumber": 151,
    "category": "General Security Concepts",
    "question": "A security analyst wants to automate a task that shares data between systems. Which of the following is the best option for the analyst to use?",
    "options": {
      "A": "SOAR (Security Orchestration, Automation, and Response)",
      "B": "API",
      "C": "SFTP (Secure File Transfer Protocol)",
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
      "B": "SLA (Service Level Agreement)",
      "C": "EULA",
      "D": "MOA (Memorandum of Agreement)"
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
      "A": "DLP (Data Loss Prevention)",
      "B": "SNMP traps",
      "C": "SCAP",
      "D": "IPS (Intrusion Prevention System)"
    },
    "answer": "A"
  },
  {
    "questionNumber": 159,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "The Chief Information Security Officer of an organization needs to ensure recovery from ransomware would likely occur within the organization's agreed-upon RPOs end RTOs. Which of the following backup scenarios would best ensure recovery?",
    "options": {
      "A": "Hourly differential backups stored on a local SAN array",
      "B": "Daily full backups stored on premises in magnetic offline media",
      "C": "Daily differential backups maintained by a third-party cloud provider",
      "D": "Weekly full backups with daily incremental stored on a NAS drive"
    },
    "answer": "A"
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
      "B": "NDA (Non-Disclosure Agreement)",
      "C": "MOU (Memorandum of Understanding)",
      "D": "SLA (Service Level Agreement)"
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
      "C": "Typosquatting (AKA URL hijacking)",
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
      "A": "DLP (Data Loss Prevention) software",
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
      "A": "MOA (Memorandum of Agreement)",
      "B": "SOW",
      "C": "MOU (Memorandum of Understanding)",
      "D": "SLA (Service Level Agreement)"
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
      "A": "DLP (Data Loss Prevention) software",
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
      "A": "CVSS (Common Vulnerability Scoring System)",
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
      "A": "MDM (Mobile Device Management)",
      "B": "Containerization",
      "C": "DLP (Data Loss Prevention)",
      "D": "FIM (File Integrity Monitoring)"
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
      "A": "SLA (Service Level Agreement)",
      "B": "MOU (Memorandum of Understanding)",
      "C": "MOA (Memorandum of Agreement)",
      "D": "BPA (Business Partnership Agreement)"
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
      "D": "DLP (Data Loss Prevention)"
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
      "D": "NAC (Network Access Control)"
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
      "F": "SFTP (Secure File Transfer Protocol)"
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
      "E": "Send server logs to the SIEM (Security Information and Event Management system).",
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
      "A": "ACL (Access Control List)",
      "B": "DLP (Data Loss Prevention)",
      "C": "IDS",
      "D": "IPS (Intrusion Prevention System)"
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
      "A": "SIEM (Security Information and Event Management system)",
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
    "answer": "B"
  },
  {
    "questionNumber": 263,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "Which of the following can a security director use to prioritize vulnerability patching within a company's IT environment?",
    "options": {
      "A": "SOAR (Security Orchestration, Automation, and Response)",
      "B": "CVSS (Common Vulnerability Scoring System)",
      "C": "SIEM (Security Information and Event Management system)",
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
      "B": "GPO (Group Policy Object)",
      "C": "NAC (Network Access Control)",
      "D": "FIM (File Integrity Monitoring)"
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
      "D": "NAC (Network Access Control)"
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
      "D": "NAC (Network Access Control)"
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
      "C": "Standard operating procedure (SOP)",
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
      "C": "Typosquatting (AKA URL hijacking)",
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
      "A": "Typosquatting (AKA URL hijacking)",
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
      "C": "NAC (Network Access Control)",
      "D": "DLP (Data Loss Prevention)"
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
      "B": "System isolation (AKA Air Gap)",
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
    "question": "A new vulnerability enables a type of malware that allows the unauthorized movement of data from a system (aka data exfiltration). Which of the following would detect this behavior?",
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
      "C": "IPS (Intrusion Prevention System)",
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
      "A": "NAC (Network Access Control)",
      "B": "IPS (Intrusion Prevention System)",
      "C": "SIEM (Security Information and Event Management system)",
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
      "B": "MDM (Mobile Device Management)",
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
      "A": "IPS (Intrusion Prevention System)",
      "B": "SIEM (Security Information and Event Management syste)",
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
      "A": "BPA (Business Partnership Agreement)",
      "B": "MOA (Memorandum of Agreement)",
      "C": "NDA (Non-Disclosure Agreement)",
      "D": "SLA (Service Level Agreement)"
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
      "C": "DLP (Data Loss Prevention)",
      "D": "MFA"
    },
    "answer": "C"
  },
  {
    "questionNumber": 358,
    "category": "General Security Concepts",
    "question": "Which of the following should an organization use to protect its environment from external attacks conducted by an unauthorized hacker?",
    "options": {
      "A": "ACL (Access Control List)",
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
      "C": "NAC (Network Access Control)",
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
      "A": "IPS (Intrusion Prevention System)",
      "B": "Firewall",
      "C": "ACL (Access Control List)",
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
      "A": "RTOS (Recovery Time Objectives)",
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
    "question": "An enterprise is trying to limit outbound DNS traffic originating from its internal network. Outbound DNS requests will only be allowed from one device with the IP address 10.50.10.25. Which of the following firewall ACLs will accomplish this goal?",
    "options": {
      "A": "Access list outbound permit 0.0.0.0/0 0.0.0.0/0 port 53Access list outbound deny 10.50.10.25/32 0.0.0.0 /0 port 53",
      "B": "Access list outbound permit 0.0.0.0/0 10.50.10.25/32 port 53Access list outbound deny 0.0.0.0/0 0.0.0.0 /0 port 53",
      "C": "Access list outbound permit 0.0.0.0/0 0.0.0.0/0 port 53Access list outbound deny 0.0.0.0/0 10.50.10.25 /32 port 53",
      "D": "Access list outbound permit 10.50.10.25/32 0.0.0.0/0 port 53Access list outbound deny 0.0.0.0/0 0.0.0.0 /0 port 53"
    },
    "answer": "D"
  },
  {
    "questionNumber": 423,
    "category": "Security Architecture",
    "question": "A security analyst is assessing several company firewalls. Which of the following cools would The analyst most likely use to generate custom packets to use during the assessment?",
    "options": {
      "A": "hping",
      "B": "Wireshark",
      "C": "PowerShell",
      "D": "netstat"
    },
    "answer": "A"
  },
  {
    "questionNumber": 424,
    "category": "General Security Concepts",
    "question": "An organization is building a new backup data center with cost-benefit as the primary requirement and RTO and RPO values around two days. Which of the following types of sites is the best for this scenario?",
    "options": {
      "A": "Real-time recovery",
      "B": "Hot",
      "C": "Cold",
      "D": "Warm"
    },
    "answer": "C"
  },
  {
    "questionNumber": 425,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "A security team receives reports about high latency and complete network unavailability throughout most of the office building. Flow logs from the campus switches show high traffic on TCP 445. Which of the following is most likely the root cause of this incident?",
    "options": {
      "A": "Buffer overflow",
      "B": "NTP amplification attack",
      "C": "Worm",
      "D": "Kerberoasting attack"
    },
    "answer": "C"
  },
  {
    "questionNumber": 426,
    "category": "Security Operations",
    "question": "A Chief Information Security Officer wants to monitor the company's servers for SQLi attacks and allow for comprehensive investigations if an attack occurs. The company uses SSL decryption to allow traffic monitoring. Which of the following strategies would best accomplish this goal?",
    "options": {
      "A": "Logging all NetFlow traffic into a SIEM",
      "B": "Deploying network traffic sensors on the same subnet as the servers",
      "C": "Logging endpoint and OS-specific security logs",
      "D": "Enabling full packet capture for traffic entering and exiting the servers"
    },
    "answer": "D"
  },
  {
    "questionNumber": 427,
    "category": "General Security Concepts",
    "question": "Which of the following describes the process of concealing code or text inside a graphical image?",
    "options": {
      "A": "Symmetric encryption",
      "B": "Hashing",
      "C": "Data masking",
      "D": "Steganography"
    },
    "answer": "D"
  },
  {
    "questionNumber": 428,
    "category": "General Security Concepts",
    "question": "A security administrator is reissuing a former employee's laptop. Which of the following is the best combination of data handling activities for the administrator to perform? (Select two).",
    "options": {
      "A": "Data retention",
      "B": "Certification",
      "C": "Tokenization",
      "D": "Classification",
      "E": "Sanitization",
      "F": "Enumeration"
    },
    "answer": "C E"
  },
  {
    "questionNumber": 429,
    "category": "General Security Concepts",
    "question": "An administrator is creating a secure method for a contractor to access a test environment. Which of the following would provide the contractor with the best access to the test environment?",
    "options": {
      "A": "Application server",
      "B": "Jump server",
      "C": "RDP server",
      "D": "Proxy server"
    },
    "answer": "B"
  },
  {
    "questionNumber": 430,
    "category": "General Security Concepts",
    "question": "A software developer wishes to implement an application security technique that will provide assurance of the application's integrity. Which of the following techniques will achieve this?",
    "options": {
      "A": "Secure cookies",
      "B": "Input validation",
      "C": "Static analysis",
      "D": "Code signing"
    },
    "answer": "D"
  },
  {
    "questionNumber": 431,
    "category": "Security Program Management and Oversight",
    "question": "The number of tickets the help desk has been receiving has increased recently due to numerous false-positive phishing reports. Which of the following would be best to help to reduce the false positives?",
    "options": {
      "A": "Performing more phishing simulation campaigns",
      "B": "Improving security awareness training",
      "C": "Hiring more help desk staff",
      "D": "Implementing an incident reporting web page"
    },
    "answer": "B"
  },
  {
    "questionNumber": 432,
    "category": "General Security Concepts",
    "question": "A visitor plugs a laptop into a network jack in the lobby and is able to connect to the company's network. Which of the following should be configured on the existing network infrastructure to best prevent this activity?",
    "options": {
      "A": "Port security",
      "B": "Web application firewall",
      "C": "Transport layer security",
      "D": "Virtual private network"
    },
    "answer": "A"
  },
  {
    "questionNumber": 433,
    "category": "General Security Concepts",
    "question": "A company wants to ensure employees are allowed to copy files from a virtual desktop during the workday but are restricted during non-working hours. Which of the following security measures should the company set up?",
    "options": {
      "A": "Digital rights management",
      "B": "Role-based access control",
      "C": "Time-based access control",
      "D": "Network access control"
    },
    "answer": "C"
  },
  {
    "questionNumber": 434,
    "category": "General Security Concepts",
    "question": "Which of the following would be the best way to block unknown programs from executing?",
    "options": {
      "A": "Access control list",
      "B": "Application allow list.",
      "C": "Host-based firewall",
      "D": "DLP (Data Loss Prevention) solution"
    },
    "answer": "B"
  },
  {
    "questionNumber": 435,
    "category": "Security Program Management and Oversight",
    "question": "Which of the following is a benefit of vendor diversity?",
    "options": {
      "A": "Patch availability",
      "B": "Zero-day resiliency",
      "C": "Secure configuration guide applicability",
      "D": "Load balancing"
    },
    "answer": "B"
  },
  {
    "questionNumber": 436,
    "category": "Security Operations",
    "question": "A newly appointed board member with cybersecurity knowledge wants the board of directors to receive a quarterly report detailing the number of incidents that impacted the organization. The systems administrator is creating a way to present the data to the board of directors. Which of the following should the systems administrator use?",
    "options": {
      "A": "Packet captures",
      "B": "Vulnerability scans",
      "C": "Metadata",
      "D": "Dashboard"
    },
    "answer": "D"
  },
  {
    "questionNumber": 437,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "An organization is looking to optimize its environment and reduce the number of patches necessary for operating systems. Which of the following will best help to achieve this objective?",
    "options": {
      "A": "Microservices",
      "B": "Virtualization",
      "C": "Real-time operating system",
      "D": "Containers"
    },
    "answer": "D"
  },
  {
    "questionNumber": 438,
    "category": "General Security Concepts",
    "question": "Which of the following Is a common, passive reconnaissance technique employed by penetration testers in the early phases of an engagement?",
    "options": {
      "A": "Open-source intelligence",
      "B": "Port scanning",
      "C": "Pivoting",
      "D": "Exploit validation"
    },
    "answer": "A"
  },
  {
    "questionNumber": 439,
    "category": "Security Program Management and Oversight",
    "question": "A security analyst is evaluating a SaaS application that the human resources department would like to implement. The analyst requests a SOC 2 report from the SaaS vendor. Which of the following processes is the analyst most likely conducting?",
    "options": {
      "A": "Internal audit",
      "B": "Penetration testing",
      "C": "Attestation",
      "D": "Due diligence"
    },
    "answer": "D"
  },
  {
    "questionNumber": 440,
    "category": "General Security Concepts",
    "question": "A company needs to provide administrative access to internal resources while minimizing the traffic allowed through the security boundary. Which of the following methods is most secure?",
    "options": {
      "A": "Implementing a bastion host",
      "B": "Deploying a perimeter network",
      "C": "Installing a WAF",
      "D": "Utilizing single sign-on"
    },
    "answer": "A"
  },
  {
    "questionNumber": 441,
    "category": "General Security Concepts",
    "question": "An employee used a company's billing system to issue fraudulent checks. The administrator is looking for evidence of other occurrences of this activity. Which of the following should the administrator examine?",
    "options": {
      "A": "Application logs",
      "B": "Vulnerability scanner logs",
      "C": "IDS/IPS logs",
      "D": "Firewall logs"
    },
    "answer": "A"
  },
  {
    "questionNumber": 442,
    "category": "General Security Concepts",
    "question": "Which of the following is the best way to secure an on-site data center against intrusion from an insider?",
    "options": {
      "A": "Bollards",
      "B": "Access badge",
      "C": "Motion sensor",
      "D": "Video surveillance"
    },
    "answer": "B"
  },
  {
    "questionNumber": 443,
    "category": "General Security Concepts",
    "question": "Which of the following should a systems administrator use to decrease the company's hardware attack surface?",
    "options": {
      "A": "Replication",
      "B": "Isolation",
      "C": "Centralization",
      "D": "Virtualization"
    },
    "answer": "D"
  },
  {
    "questionNumber": 444,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "Which of the following activities are associated with vulnerability management? (Select two).",
    "options": {
      "A": "Reporting",
      "B": "Prioritization",
      "C": "Exploiting",
      "D": "Correlation",
      "E": "Containment",
      "F": "Tabletop exercise"
    },
    "answer": "A B"
  },
  {
    "questionNumber": 445,
    "category": "General Security Concepts",
    "question": "A company is concerned about the theft of client data from decommissioned laptops. Which of the following is the most cost-effective method to decrease this risk?",
    "options": {
      "A": "Wiping",
      "B": "Recycling",
      "C": "Shredding",
      "D": "Deletion"
    },
    "answer": "A"
  },
  {
    "questionNumber": 446,
    "category": "General Security Concepts",
    "question": "In order to strengthen a password and prevent a hacker from cracking it, a random string of 36 characters was added to the password. Which of the following best describes this technique?",
    "options": {
      "A": "Key stretching",
      "B": "Tokenization",
      "C": "Data masking",
      "D": "Salting"
    },
    "answer": "D"
  },
  {
    "questionNumber": 447,
    "category": "Security Architecture",
    "question": "A certificate authority needs to post information about expired certificates. Which of the following would accomplish this task?",
    "options": {
      "A": "TPM",
      "B": "CRL",
      "C": "PKI",
      "D": "CSR"
    },
    "answer": "B"
  },
  {
    "questionNumber": 448,
    "category": "Security Architecture",
    "question": "Which of the following is most likely associated with introducing vulnerabilities on a corporate network by the deployment of unapproved software?",
    "options": {
      "A": "Hacktivists",
      "B": "Script kiddies",
      "C": "Competitors",
      "D": "Shadow IT"
    },
    "answer": "D"
  },
  {
    "questionNumber": 449,
    "category": "General Security Concepts",
    "question": "A company hired a consultant to perform an offensive security assessment covering penetration testing and social engineering. Which of the following teams will conduct this assessment activity?",
    "options": {
      "A": "White",
      "B": "Purple",
      "C": "Blue",
      "D": "Red"
    },
    "answer": "D"
  },
  {
    "questionNumber": 450,
    "category": "General Security Concepts",
    "question": "The Chief Information Security Officer (CISO) at a large company would like to gain an understanding of how the company's security policies compare to the requirements imposed by external regulators. Which of the following should the CISO use?",
    "options": {
      "A": "Penetration test",
      "B": "Internal audit",
      "C": "Attestation",
      "D": "External examination"
    },
    "answer": "D"
  },
  {
    "questionNumber": 451,
    "category": "General Security Concepts",
    "question": "A company is required to use certified hardware when building networks. Which of the following best addresses the risks associated with procuring counterfeit hardware?",
    "options": {
      "A": "A thorough analysis of the supply chain",
      "B": "A legally enforceable corporate acquisition policy",
      "C": "A right to audit clause in vendor contracts and SOWs",
      "D": "An in-depth penetration test of all suppliers and vendors"
    },
    "answer": "A"
  },
  {
    "questionNumber": 452,
    "category": "General Security Concepts",
    "question": "Which of the following best describes the practice of researching laws and regulations related to information security operations within a specific industry?",
    "options": {
      "A": "Compliance reporting",
      "B": "GDPR",
      "C": "Due diligence",
      "D": "Attestation"
    },
    "answer": "C"
  },
  {
    "questionNumber": 453,
    "category": "General Security Concepts",
    "question": "A systems administrator is working on a solution with the following requirements: Provide a secure zone. Enforce a company-wide access control policy. Reduce the scope of threats. Which of the following is the systems administrator setting up?",
    "options": {
      "A": "Zero Trust",
      "B": "AAA",
      "C": "Non-repudiation",
      "D": "CIA"
    },
    "answer": "A"
  },
  {
    "questionNumber": 454,
    "category": "General Security Concepts",
    "question": "A security analyst has determined that a security breach would have a financial impact of $15,000 and is expected to occur twice within a three-year period. Which of the following is the ALE for this risk?",
    "options": {
      "A": "$7,500",
      "B": "$10,000",
      "C": "$15,000",
      "D": "$30,000"
    },
    "answer": "B"
  },
  {
    "questionNumber": 455,
    "category": "General Security Concepts",
    "question": "A company wants to track modifications to the code used to build new virtual servers. Which of the following will the company most likely deploy?",
    "options": {
      "A": "Change management ticketing system",
      "B": "Behavioral analyzer",
      "C": "Collaboration platform",
      "D": "Version control tool"
    },
    "answer": "D"
  },
  {
    "questionNumber": 456,
    "category": "General Security Concepts",
    "question": "A data administrator is configuring authentication for a SaaS application and would like to reduce the number of credentials employees need to maintain. The company prefers to use domain credentials to access new SaaS applications. Which of the following methods would allow this functionality?",
    "options": {
      "A": "SSO",
      "B": "LEAP",
      "C": "MFA",
      "D": "PEAP"
    },
    "answer": "A"
  },
  {
    "questionNumber": 457,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "Which of the following should an organization focus on the most when making decisions about vulnerability prioritization?",
    "options": {
      "A": "Exposure factor",
      "B": "CVSS (Common Vulnerability Scoring System)",
      "C": "CVE",
      "D": "Industry impact"
    },
    "answer": "B"
  },
  {
    "questionNumber": 458,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "Malware spread across a company's network after an employee visited a compromised industry blog. Which of the following best describes this type of attack?",
    "options": {
      "A": "Impersonation",
      "B": "Disinformation",
      "C": "Watering-hole",
      "D": "Smishing"
    },
    "answer": "C"
  },
  {
    "questionNumber": 459,
    "category": "General Security Concepts",
    "question": "An administrator at a small business notices an increase in support calls from employees who receive a blocked page message after trying to navigate to a spoofed website. Which of the following should the administrator do?",
    "options": {
      "A": "Deploy multifactor authentication.",
      "B": "Decrease the level of the web filter settings",
      "C": "Implement security awareness training.",
      "D": "Update the acceptable use policy"
    },
    "answer": "C"
  },
  {
    "questionNumber": 460,
    "category": "Security Program Management and Oversight",
    "question": "A company is concerned with supply chain compromise of new servers and wants to limit this risk. Which of the following should the company review first?",
    "options": {
      "A": "Sanitization procedure",
      "B": "Acquisition process",
      "C": "Change management",
      "D": "Asset tracking"
    },
    "answer": "B"
  },
  {
    "questionNumber": 461,
    "category": "General Security Concepts",
    "question": "Which of the following is the main consideration when a legacy system that is a critical part of a company's infrastructure cannot be replaced?",
    "options": {
      "A": "Resource provisioning",
      "B": "Cost",
      "C": "Single point of failure",
      "D": "Complexity"
    },
    "answer": "C"
  },
  {
    "questionNumber": 462,
    "category": "General Security Concepts",
    "question": "Which of the following is best used to detect fraud by assigning employees to different roles?",
    "options": {
      "A": "Least privilege",
      "B": "Mandatory vacation",
      "C": "Separation of duties",
      "D": "Job rotation"
    },
    "answer": "D"
  },
  {
    "questionNumber": 463,
    "category": "Security Operations",
    "question": "While investigating a possible incident, a security analyst discovers the following log entries: 67.118.34.157 - [28/Jul/2022:10:26:59 -0300] 'GET /query.php?q-wireless%20headphones / HTTP/1.0' 200 12737 132.18.222.103 - [28/Jul/2022:10:27:10 -0300] 'GET /query.php?q=123 INSERT INTO users VALUES ('temp', 'pass123')# / HTTP/1.0' 200 935 12.45.101.121 - [28/Jul/2022:10:27:22 -0300] 'GET /query.php?q=mp3%20players I HTTP/1.0' 200 14650 Which of the following should the analyst do first?",
    "options": {
      "A": "Implement a WAF",
      "B": "Disable the query .php script",
      "C": "Block brute-force attempts on temporary users",
      "D": "Check the users table for new accounts"
    },
    "answer": "D"
  },
  {
    "questionNumber": 464,
    "category": "General Security Concepts",
    "question": "Which of the following is a common data removal option for companies that want to wipe sensitive data from hard drives in a repeatable manner but allow the hard drives to be reused?",
    "options": {
      "A": "Sanitization",
      "B": "Formatting",
      "C": "Degaussing",
      "D": "Defragmentation"
    },
    "answer": "A"
  },
  {
    "questionNumber": 465,
    "category": "General Security Concepts",
    "question": "An attacker submits a request containing unexpected characters in an attempt to gain unauthorized access to information within the underlying systems. Which of the following best describes this attack?",
    "options": {
      "A": "Side loading",
      "B": "Target of evaluation",
      "C": "Resource reuse",
      "D": "SQL injection"
    },
    "answer": "D"
  },
  {
    "questionNumber": 466,
    "category": "Security Program Management and Oversight",
    "question": "A bank insists all of its vendors must prevent data loss on stolen laptops. Which of the following strategies is the bank requiring?",
    "options": {
      "A": "Encryption at rest",
      "B": "Masking",
      "C": "Data classification",
      "D": "Permission restrictions"
    },
    "answer": "A"
  },
  {
    "questionNumber": 467,
    "category": "Security Architecture",
    "question": "While troubleshooting a firewall configuration, a technician determines that a “deny any” policy should be added to the bottom of the ACL. The technician updates the policy, but the new policy causes several company servers to become unreachable. Which of the following actions would prevent this issue?",
    "options": {
      "A": "Documenting the new policy in a change request and submitting the request to change management",
      "B": "Testing the policy in a non-production environment before enabling the policy in the production network",
      "C": "Disabling any intrusion prevention signatures on the 'deny any* policy prior to enabling the new policy",
      "D": "Including an 'allow any1 policy above the 'deny any* policy"
    },
    "answer": "B"
  },
  {
    "questionNumber": 468,
    "category": "General Security Concepts",
    "question": "Which of the following threat actors is the most likely to be hired by a foreign government to attack critical systems located in other countries?",
    "options": {
      "A": "Hacktivist",
      "B": "Whistleblower",
      "C": "Organized crime",
      "D": "Unskilled attacker"
    },
    "answer": "C"
  },
  {
    "questionNumber": 469,
    "category": "General Security Concepts",
    "question": "Which of the following is required for an organization to properly manage its restore process in the event of system failure?",
    "options": {
      "A": "IRP",
      "B": "DRP",
      "C": "RPO",
      "D": "SDLC"
    },
    "answer": "B"
  },
  {
    "questionNumber": 470,
    "category": "Security Operations",
    "question": "A security analyst is reviewing the following logs: [10:00:00 AM] Login rejected - username administrator - password Spring2023 [10:00:01 AM] Login rejected - username jsmith - password Spring2023 [10:00:01 AM] Login rejected - username guest - password Spring2023 [10:00:02 AM] Login rejected - username cpolk - password Spring2023 [10:00:03 AM] Login rejected - username fmartin - password Spring2023 Which of the following attacks is most likely occurring?",
    "options": {
      "A": "Password spraying",
      "B": "Account forgery",
      "C": "Pass-t he-hash",
      "D": "Brute-force"
    },
    "answer": "A"
  },
  {
    "questionNumber": 471,
    "category": "Security Program Management and Oversight",
    "question": "A new employee accessed an unauthorized website. An investigation found that the employee violated the company's rules. Which of the following did the employee violate?",
    "options": {
      "A": "MOU (Memorandum of Understanding)",
      "B": "AUP",
      "C": "NDA (Non-Disclosure Agreement)",
      "D": "MOA (Memorandum of Agreement)"
    },
    "answer": "B"
  },
  {
    "questionNumber": 472,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "During a SQL update of a database, a temporary field used as part of the update sequence was modified by an attacker before the update completed in order to allow access to the system. Which of the following best describes this type of vulnerability?",
    "options": {
      "A": "Race condition",
      "B": "Memory injection",
      "C": "Malicious update",
      "D": "Side loading"
    },
    "answer": "A"
  },
  {
    "questionNumber": 473,
    "category": "Security Operations",
    "question": "A systems administrator wants to prevent users from being able to access data based on their responsibilities. The administrator also wants to apply the required access structure via a simplified format. Which of the following should the administrator apply to the site recovery resource group?",
    "options": {
      "A": "RBAC",
      "B": "ACL (Access Control List)",
      "C": "SAML",
      "D": "GPO (Group Policy Object)"
    },
    "answer": "A"
  },
  {
    "questionNumber": 474,
    "category": "Security Operations",
    "question": "An organization wants to limit potential impact to its log-in database in the event of a breach. Which of the following options is the security team most likely to recommend?",
    "options": {
      "A": "Tokenization",
      "B": "Hashing",
      "C": "Obfuscation",
      "D": "Segmentation"
    },
    "answer": "B"
  },
  {
    "questionNumber": 475,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "Which of the following is a type of vulnerability that refers to the unauthorized installation of applications on a device through means other than the official application store?",
    "options": {
      "A": "Cross-site scripting",
      "B": "Buffer overflow",
      "C": "Jailbreaking",
      "D": "Side loading"
    },
    "answer": "D"
  },
  {
    "questionNumber": 476,
    "category": "General Security Concepts",
    "question": "Users at a company are reporting they are unable to access the URL for a new retail website because it is flagged as gambling and is being blocked. Which of the following changes would allow users to access the site?",
    "options": {
      "A": "Creating a firewall rule to allow HTTPS traffic",
      "B": "Configuring the IPS to allow shopping",
      "C": "Tuning the DLP rule that detects credit card data",
      "D": "Updating the categorization in the content filter"
    },
    "answer": "D"
  },
  {
    "questionNumber": 477,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "Which of the following security concepts is being followed when implementing a product that offers protection against DDoS attacks?",
    "options": {
      "A": "Availability",
      "B": "Non-repudiation",
      "C": "Integrity",
      "D": "Confidentiality"
    },
    "answer": "C"
  },
  {
    "questionNumber": 478,
    "category": "General Security Concepts",
    "question": "Which of the following best describe the benefits of a microservices architecture when compared to a monolithic architecture? (Select two).",
    "options": {
      "A": "Easter debugging of the system",
      "B": "Reduced cost of ownership of the system",
      "C": "Improved scalability of the system",
      "D": "Increased compartmentalization of the system",
      "E": "Stronger authentication of the system",
      "F": "Reduced complexity of the system"
    },
    "answer": "C D"
  },
  {
    "questionNumber": 479,
    "category": "General Security Concepts",
    "question": "A security operations center determines that the malicious activity detected on a server is normal. Which of the following activities describes the act of ignoring detected activity in the future?",
    "options": {
      "A": "Tuning",
      "B": "Aggregating",
      "C": "Quarantining",
      "D": "Archiving"
    },
    "answer": "A"
  },
  {
    "questionNumber": 480,
    "category": "General Security Concepts",
    "question": "The management team notices that new accounts that are set up manually do not always have correct access or permissions. Which of the following automation techniques should a systems administrator use to streamline account creation?",
    "options": {
      "A": "Guard rail script",
      "B": "Ticketing workflow",
      "C": "Escalation script",
      "D": "User provisioning script"
    },
    "answer": "D"
  },
  {
    "questionNumber": 481,
    "category": "Security Operations",
    "question": "Which of the following is the first step to take when creating an anomaly detection process?",
    "options": {
      "A": "Selecting events",
      "B": "Building a baseline",
      "C": "Selecting logging options",
      "D": "Creating an event log"
    },
    "answer": "B"
  },
  {
    "questionNumber": 482,
    "category": "General Security Concepts",
    "question": "A company wants to improve the availability of its application with a solution that requires minimal effort in the event a server needs to be replaced or added. Which of the following would be the best solution to meet these objectives?",
    "options": {
      "A": "Load balancing",
      "B": "Fault tolerance",
      "C": "Proxy servers",
      "D": "Replication"
    },
    "answer": "A"
  },
  {
    "questionNumber": 483,
    "category": "General Security Concepts",
    "question": "Which of the following best describe why a process would require a two-person integrity security control?",
    "options": {
      "A": "To Increase the chance that the activity will be completed in half of the time the process would take only one user to complete",
      "B": "To permit two users from another department to observe the activity that is being performed by an authorized user",
      "C": "To reduce the risk that the procedures are performed incorrectly or by an unauthorized user",
      "D": "To allow one person to perform the activity while being recorded on the CCTV camera"
    },
    "answer": "C"
  },
  {
    "questionNumber": 484,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "A security analyst receives an alert that there was an attempt to download known malware. Which of the following actions would allow the best chance to analyze the malware?",
    "options": {
      "A": "Review the IPS logs and determine which command-and-control IPs were blocked.",
      "B": "Analyze application logs to see how the malware attempted to maintain persistence.",
      "C": "Run vulnerability scans to check for systems and applications that are vulnerable to the malware.",
      "D": "Obtain and execute the malware in a sandbox environment and perform packet captures."
    },
    "answer": "D"
  },
  {
    "questionNumber": 485,
    "category": "Security Operations",
    "question": "The security operations center is researching an event concerning a suspicious IP address A security analyst looks at the following event logs and discovers that a significant portion of the user accounts have experienced faded log-In attempts when authenticating from the same IP address: Which of the following most likely describes attack that took place?",
    "options": {
      "A": "Spraying",
      "B": "Brute-force",
      "C": "Dictionary",
      "D": "Rainbow table"
    },
    "answer": "A"
  },
  {
    "questionNumber": 486,
    "category": "General Security Concepts",
    "question": "A U.S.-based cloud-hosting provider wants to expand its data centers to new international locations. Which of the following should the hosting provider consider first?",
    "options": {
      "A": "Local data protection regulations",
      "B": "Risks from hackers residing in other countries",
      "C": "Impacts to existing contractual obligations",
      "D": "Time zone differences in log correlation"
    },
    "answer": "A"
  },
  {
    "questionNumber": 487,
    "category": "General Security Concepts",
    "question": "Which of the following techniques would attract the attention of a malicious attacker in an insider threat scenario?",
    "options": {
      "A": "Creating a false text file in /docs/salaries",
      "B": "Setting weak passwords in /etc/shadow",
      "C": "Scheduling vulnerable jobs in /etc/crontab",
      "D": "Adding a fake account to /etc/passwd"
    },
    "answer": "A"
  },
  {
    "questionNumber": 488,
    "category": "General Security Concepts",
    "question": "An organization has recently decided to implement SSO. The requirements are to leverage access tokens and focus on application authorization rather than user authentication. Which of the following solutions would the engineering team most likely configure?",
    "options": {
      "A": "LDAP",
      "B": "Federation",
      "C": "SAML",
      "D": "OAuth"
    },
    "answer": "D"
  },
  {
    "questionNumber": 489,
    "category": "General Security Concepts",
    "question": "Which of the following should a company use to provide proof of external network security testing?",
    "options": {
      "A": "Business impact analysis",
      "B": "Supply chain analysis",
      "C": "Vulnerability assessment",
      "D": "Third-party attestation"
    },
    "answer": "D"
  },
  {
    "questionNumber": 490,
    "category": "General Security Concepts",
    "question": "A user would like to install software and features that are not available with a smartphone's default software. Which of the following would allow the user to install unauthorized software and enable new features?",
    "options": {
      "A": "SOU",
      "B": "Cross-site scripting",
      "C": "Jailbreaking",
      "D": "Side loading"
    },
    "answer": "C"
  },
  {
    "questionNumber": 491,
    "category": "Security Architecture",
    "question": "A security analyst is examining a penetration test report and notices that the tester pivoted to critical internal systems with the same local user ID and password. Which of the following would help prevent this in the future?",
    "options": {
      "A": "Implement centralized authentication with proper password policies",
      "B": "Add password complexity rules and increase password history limits",
      "C": "Connect the systems to an external authentication server",
      "D": "Limit the ability of user accounts to change passwords"
    },
    "answer": "A"
  },
  {
    "questionNumber": 492,
    "category": "General Security Concepts",
    "question": "Which of the following is the best way to provide secure remote access for employees while minimizing the exposure of a company's internal network?",
    "options": {
      "A": "VPN",
      "B": "LDAP",
      "C": "FTP",
      "D": "RADIUS"
    },
    "answer": "A"
  },
  {
    "questionNumber": 493,
    "category": "General Security Concepts",
    "question": "Which of the following involves an attempt to take advantage of database misconfigurations?",
    "options": {
      "A": "Buffer overflow",
      "B": "SQL injection",
      "C": "VM escape",
      "D": "Memory injection"
    },
    "answer": "B"
  },
  {
    "questionNumber": 494,
    "category": "Security Program Management and Oversight",
    "question": "A legal department must maintain a backup from all devices that have been shredded and recycled by a third party. Which of the following best describes this requirement?",
    "options": {
      "A": "Data retention",
      "B": "Certification",
      "C": "Sanitation",
      "D": "Destruction"
    },
    "answer": "A"
  },
  {
    "questionNumber": 495,
    "category": "Security Operations",
    "question": "A company discovered its data was advertised for sale on the dark web. During the initial investigation, the company determined the data was proprietary data. Which of the following is the next step the company should take?",
    "options": {
      "A": "Identity the attacker sentry methods.",
      "B": "Report the breach to the local authorities.",
      "C": "Notify the applicable parties of the breach.",
      "D": "Implement vulnerability scanning of the company's systems."
    },
    "answer": "C"
  },
  {
    "questionNumber": 496,
    "category": "Security Program Management and Oversight",
    "question": "A vendor salesperson is a personal friend of a company’s Chief Financial Officer (CFO). The company recently made a large purchase from the vendor, which was directly approved by the CFO. Which of the following best describes this situation?",
    "options": {
      "A": "Rules of engagement",
      "B": "Conflict of interest",
      "C": "Due diligence",
      "D": "Contractual impact",
      "E": "Reputational damage"
    },
    "answer": "B"
  },
  {
    "questionNumber": 497,
    "category": "General Security Concepts",
    "question": "Which of the following most accurately describes the order in which a security engineer should implement secure baselines?",
    "options": {
      "A": "Deploy, maintain, establish",
      "B": "Establish, maintain, deploy",
      "C": "Establish, deploy, maintain",
      "D": "Deploy, establish, maintain"
    },
    "answer": "C"
  },
  {
    "questionNumber": 498,
    "category": "General Security Concepts",
    "question": "Which of the following data states applies to data that is being actively processed by a database server?",
    "options": {
      "A": "In use",
      "B": "At rest",
      "C": "In transit",
      "D": "Being hashed"
    },
    "answer": "A"
  },
  {
    "questionNumber": 499,
    "category": "Security Operations",
    "question": "Which of the following is a use of CVSS?",
    "options": {
      "A": "To determine the cost associated with patching systems",
      "B": "To identify unused ports and services that should be closed",
      "C": "To analyze code for defects that could be exploited",
      "D": "To prioritize the remediation of vulnerabilities"
    },
    "answer": "D"
  },
  {
    "questionNumber": 500,
    "category": "General Security Concepts",
    "question": "Which of the following would be the greatest concern for a company that is aware of the consequences of non compliance with government regulations?",
    "options": {
      "A": "Right to be forgotten",
      "B": "Sanctions",
      "C": "External compliance reporting",
      "D": "Attestation"
    },
    "answer": "B"
  },
  {
    "questionNumber": 501,
    "category": "General Security Concepts",
    "question": "Which of the following would most likely be used by attackers to perform credential harvesting?",
    "options": {
      "A": "Social engineering",
      "B": "Supply chain compromise",
      "C": "Third-party software",
      "D": "Rainbow table"
    },
    "answer": "A"
  },
  {
    "questionNumber": 502,
    "category": "Security Program Management and Oversight",
    "question": "A systems administrator is auditing all company servers to ensure. They meet the minimum security baseline While auditing a Linux server, the systems administrator observes the /etc/shadow file has permissions beyond the baseline recommendation. Which of the following commands should the systems administrator use to resolve this issue?",
    "options": {
      "A": "chmod",
      "B": "grep",
      "C": "dd",
      "D": "passwd"
    },
    "answer": "A"
  },
  {
    "questionNumber": 503,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "An engineer has ensured that the switches are using the latest OS, the servers have the latest patches, and the endpoints' definitions are up to date. Which of the following will these actions most effectively prevent?",
    "options": {
      "A": "Zero-day attacks",
      "B": "Insider threats",
      "C": "End-of-life support",
      "D": "Known exploits"
    },
    "answer": "D"
  },
  {
    "questionNumber": 504,
    "category": "General Security Concepts",
    "question": "An organization issued new laptops to all employees and wants to provide web filtering both in and out of the office without configuring additional access to the network. Which of the following types of web filtering should a systems administrator configure?",
    "options": {
      "A": "Agent-based",
      "B": "Centralized proxy",
      "C": "URL scanning",
      "D": "Content categorization"
    },
    "answer": "A"
  },
  {
    "questionNumber": 505,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "Which of the following is used to quantitatively measure the criticality of a vulnerability?",
    "options": {
      "A": "CVE",
      "B": "CVSS (Common Vulnerability Scoring System)",
      "C": "CIA",
      "D": "CERT"
    },
    "answer": "B"
  },
  {
    "questionNumber": 506,
    "category": "General Security Concepts",
    "question": "Which of the following aspects of the data management life cycle is most directly impacted by local and international regulations?",
    "options": {
      "A": "Destruction",
      "B": "Certification",
      "C": "Retention",
      "D": "Sanitization"
    },
    "answer": "C"
  },
  {
    "questionNumber": 507,
    "category": "Security Operations",
    "question": "The security operations center is researching an event concerning a suspicious IP address A security analyst looks at the following event logs and discovers that a significant portion of the user accounts have experienced faded log-In attempts when authenticating from the same IP address: Which of the following most likely describes attack that took place?",
    "options": {
      "A": "Spraying",
      "B": "Brute-force",
      "C": "Dictionary",
      "D": "Rainbow table"
    },
    "answer": "A"
  },
  {
    "questionNumber": 508,
    "category": "Security Program Management and Oversight",
    "question": "A business provides long-term cold storage services to banks that are required to follow regulator-imposed data retention guidelines. Banks that use these services require that data is disposed of in a specific manner at the conclusion of the regulatory threshold for data retention. Which of the following aspects of data management is the most important to the bank in the destruction of this data?",
    "options": {
      "A": "Encryption",
      "B": "Classification",
      "C": "Certification",
      "D": "Procurement"
    },
    "answer": "B"
  },
  {
    "questionNumber": 509,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "A systems administrator creates a script that validates OS version, patch levels, and installed applications when users log in. Which of the following examples best describes the purpose of this script?",
    "options": {
      "A": "Resource scaling",
      "B": "Policy enumeration",
      "C": "Baseline enforcement",
      "D": "Guardrails implementation"
    },
    "answer": "C"
  },
  {
    "questionNumber": 510,
    "category": "General Security Concepts",
    "question": "Which of the following would be most useful in determining whether the long-term cost to transfer a risk is less than the impact of the risk?",
    "options": {
      "A": "ARO (Annualized Rate of Occurrence)",
      "B": "RTO ",
      "C": "RPO",
      "D": "ALE",
      "E": "SLE"
    },
    "answer": "D"
  },
  {
    "questionNumber": 511,
    "category": "General Security Concepts",
    "question": "Which of the following best explains a concern with OS-based vulnerabilities?",
    "options": {
      "A": "An exploit would give an attacker access to system functions that span multiple applications.",
      "B": "The OS vendor's patch cycle is not frequent enough to mitigate the large number of threats.",
      "C": "Most users trust the core operating system features and may not notice if the system has been compromised.",
      "D": "Exploitation of an operating system vulnerability is typically easier than any other vulnerability."
    },
    "answer": "A"
  },
  {
    "questionNumber": 512,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "A cybersecurity incident response team at a large company receives notification that malware is present on several corporate desktops No known Indicators of compromise have been found on the network. Which of the following should the team do first to secure the environment?",
    "options": {
      "A": "Contain the Impacted hosts",
      "B": "Add the malware to the application blocklist.",
      "C": "Segment the core database server.",
      "D": "Implement firewall rules to block outbound beaconing"
    },
    "answer": "A"
  },
  {
    "questionNumber": 513,
    "category": "Security Program Management and Oversight",
    "question": "A company is working with a vendor to perform a penetration test Which of the following includes an estimate about the number of hours required to complete the engagement?",
    "options": {
      "A": "SOW",
      "B": "BPA (Business Partnership Agreement)",
      "C": "SLA (Service Level Agreement)",
      "D": "NDA (Non-Disclosure Agreement)"
    },
    "answer": "A"
  },
  {
    "questionNumber": 514,
    "category": "General Security Concepts",
    "question": "Which of the following are the best security controls for controlling on-premises access? (Select two.)",
    "options": {
      "A": "Swipe card",
      "B": "Picture ID",
      "C": "Phone authentication application",
      "D": "Biometric scanner",
      "E": "Camera",
      "F": "Memorable"
    },
    "answer": "A D"
  },
  {
    "questionNumber": 515,
    "category": "Security Architecture",
    "question": "A systems administrator set up a perimeter firewall but continues to notice suspicious connections between internal endpoints. Which of the following should be set up in order to mitigate the threat posed by the suspicious activity?",
    "options": {
      "A": "Host-based firewall",
      "B": "Web application firewall",
      "C": "Access control list",
      "D": "Application allow list"
    },
    "answer": "A"
  },
  {
    "questionNumber": 516,
    "category": "General Security Concepts",
    "question": "An employee receives a text message from an unknown number claiming to be the company's Chief Executive Officer and asking the employee to purchase several gift cards. Which of the following types of attacks does this describe?",
    "options": {
      "A": "Vishing",
      "B": "Smishing",
      "C": "Pretexting",
      "D": "Phishing"
    },
    "answer": "B"
  },
  {
    "questionNumber": 517,
    "category": "General Security Concepts",
    "question": "Which of the following explains why an attacker cannot easily decrypt passwords using a rainbow table attack?",
    "options": {
      "A": "Digital signatures",
      "B": "Salting",
      "C": "Hashing",
      "D": "Perfect forward secrecy"
    },
    "answer": "B"
  },
  {
    "questionNumber": 518,
    "category": "General Security Concepts",
    "question": "Which of the following is the best way to improve the confidentiality of remote connections to an enterprise's infrastructure?",
    "options": {
      "A": "Firewalls",
      "B": "Virtual private networks",
      "C": "Extensive logging",
      "D": "Intrusion detection systems"
    },
    "answer": "B"
  },
  {
    "questionNumber": 519,
    "category": "General Security Concepts",
    "question": "Which of the following is die most important security concern when using legacy systems to provide production service?",
    "options": {
      "A": "Instability",
      "B": "Lack of vendor support",
      "C": "Loss of availability",
      "D": "Use of insecure protocols"
    },
    "answer": "B"
  },
  {
    "questionNumber": 520,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "Which of the following could potentially be introduced at the time of side loading?",
    "options": {
      "A": "User impersonation",
      "B": "Rootkit",
      "C": "On-path attack",
      "D": "Buffer overflow"
    },
    "answer": "B"
  },
  {
    "questionNumber": 521,
    "category": "General Security Concepts",
    "question": "An organization plans to expand its operations internationally and needs to keep data at the new location secure. The organization wants to use the most secure architecture model possible. Which of the following models offers the highest level of security?",
    "options": {
      "A": "Cloud-based",
      "B": "Peer-to-peer",
      "C": "On-premises",
      "D": "Hybrid"
    },
    "answer": "A"
  },
  {
    "questionNumber": 522,
    "category": "General Security Concepts",
    "question": "Which of the following elements of digital forensics should a company use If It needs to ensure the integrity of evidence?",
    "options": {
      "A": "Preservation",
      "B": "E-discovery",
      "C": "Acquisition",
      "D": "Containment"
    },
    "answer": "A"
  },
  {
    "questionNumber": 523,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "A hacker gained access to a system via a phishing attempt that was a direct result of a user clicking a suspicious link. The link laterally deployed ransomware, which laid dormant for multiple weeks, across the network. Which of the following would have mitigated the spread?",
    "options": {
      "A": "IPS (Intrusion Prevention System)",
      "B": "IDS",
      "C": "WAF",
      "D": "UAT"
    },
    "answer": "A"
  },
  {
    "questionNumber": 524,
    "category": "General Security Concepts",
    "question": "A company is aware of a given security risk related to a specific market segment. The business chooses not to accept responsibility and target their services to a different market segment. Which of the following describes this risk management strategy?",
    "options": {
      "A": "Exemption",
      "B": "Exception",
      "C": "Avoid",
      "D": "Transfer"
    },
    "answer": "C"
  },
  {
    "questionNumber": 525,
    "category": "Security Operations",
    "question": "Which of the following describes a security alerting and monitoring tool that collects system, application, and network logs from multiple sources in a centralized system?",
    "options": {
      "A": "SIEM (Security Information and Event Management syste)",
      "B": "DLP (Data Loss Prevention)",
      "C": "IDS",
      "D": "SNMP"
    },
    "answer": "A"
  },
  {
    "questionNumber": 526,
    "category": "Security Program Management and Oversight",
    "question": "A security administrator is addressing an issue with a legacy system that communicates data using an unencrypted protocol to transfer sensitive data to a third party. No software updates that use an encrypted protocol are available, so a compensating control is needed. Which of the following are the most appropriate for the administrator to suggest? (Select two.)",
    "options": {
      "A": "Tokenization",
      "B": "Cryptographic downgrade",
      "C": "SSH tunneling",
      "D": "Segmentation",
      "E": "Patch installation",
      "F": "Data masking"
    },
    "answer": "C D"
  },
  {
    "questionNumber": 527,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "A forensic engineer determines that the root cause of a compromise is a SQL injection attack. Which of the following should the engineer review to identify the command used by the threat actor?",
    "options": {
      "A": "Metadata",
      "B": "Application log",
      "C": "System log",
      "D": "Netflow log"
    },
    "answer": "B"
  },
  {
    "questionNumber": 528,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "A penetration test identifies that an SMBvl Is enabled on multiple servers across an organization. The organization wants to remediate this vulnerability in the most efficient way possible. Which of the following should the organization use for this purpose?",
    "options": {
      "A": "GPO (Group Policy Object)",
      "B": "ACL (Access Control List)",
      "C": "SFTP (Secure File Transfer Protocol)",
      "D": "DLP (Data Loss Prevention)"
    },
    "answer": "A"
  },
  {
    "questionNumber": 529,
    "category": "Security Operations",
    "question": "During an investigation, an incident response team attempts to understand the source of an incident. Which of the following incident response activities describes this process?",
    "options": {
      "A": "Analysis",
      "B": "Lessons learned",
      "C": "Detection",
      "D": "Containment"
    },
    "answer": "A"
  },
  {
    "questionNumber": 530,
    "category": "General Security Concepts",
    "question": "An organization implemented cloud-managed IP cameras to monitor building entry points and sensitive areas. The service provider enables direct TCP/IP connection to stream live video footage from each camera. The organization wants to ensure this stream is encrypted and authenticated. Which of the following protocols should be implemented to best meet this objective?",
    "options": {
      "A": "SSH",
      "B": "SRTP",
      "C": "S/MIME",
      "D": "PPTP"
    },
    "answer": "B"
  },
  {
    "questionNumber": 531,
    "category": "General Security Concepts",
    "question": "A customer has a contract with a CSP and wants to identify which controls should be implemented in the IaaS enclave. Which of the following is most likely to contain this information?",
    "options": {
      "A": "Statement of work",
      "B": "Responsibility matrix",
      "C": "Service-level agreement",
      "D": "Master service agreement"
    },
    "answer": "B"
  },
  {
    "questionNumber": 532,
    "category": "Security Program Management and Oversight",
    "question": "Which of the following factors are the most important to address when formulating a training curriculum plan for a security awareness program? (Select two).",
    "options": {
      "A": "Channels by which the organization communicates with customers",
      "B": "The reporting mechanisms for ethics violations",
      "C": "Threat vectors based on the industry in which the organization operates",
      "D": "Secure software development training for all personnel",
      "E": "Cadence and duration of training events",
      "F": "Retraining requirements for individuals who fail phishing simulations"
    },
    "answer": "C E"
  },
  {
    "questionNumber": 533,
    "category": "Security Program Management and Oversight",
    "question": "The physical security team at a company receives reports that employees are not displaying their badges. The team also observes employees tailgating at controlled entrances. Which of the following topics will the security team most likely emphasize in upcoming security training?",
    "options": {
      "A": "Social engineering",
      "B": "Situational awareness",
      "C": "Phishing",
      "D": "Acceptable use policy"
    },
    "answer": "B"
  },
  {
    "questionNumber": 534,
    "category": "General Security Concepts",
    "question": "A company implemented an MDM policy 10 mitigate risks after repealed instances of employees losing company-provided mobile phones. In several cases. The lost phones were used maliciously to perform social engineering attacks against other employees. Which of the following MDM features should be configured to best address this issue? (Select two).",
    "options": {
      "A": "Screen locks",
      "B": "Remote wipe",
      "C": "Full device encryption",
      "D": "Push notifications",
      "E": "Application management",
      "F": "Geolocation"
    },
    "answer": "A B"
  },
  {
    "questionNumber": 535,
    "category": "General Security Concepts",
    "question": "As part of new compliance audit requirements, multiple servers need to be segmented on different networks and should be reachable only from authorized internal systems. Which of the following would meet the requirements?",
    "options": {
      "A": "Configure firewall rules to block external access to Internal resources.",
      "B": "Set up a WAP to allow internal access from public networks.",
      "C": "Implement a new IPSec tunnel from internal resources.",
      "D": "Deploy an Internal Jump server to access resources."
    },
    "answer": "A"
  },
  {
    "questionNumber": 536,
    "category": "General Security Concepts",
    "question": "A security analyst locates a potentially malicious video file on a server and needs to identify both the creation date and the file's creator. Which of the following actions would most likely give the security analyst the information required?",
    "options": {
      "A": "Obtain the file's SHA-256 hash.",
      "B": "Use hexdump on the file's contents.",
      "C": "Check endpoint logs.",
      "D": "Query the file's metadata."
    },
    "answer": "D"
  },
  {
    "questionNumber": 537,
    "category": "General Security Concepts",
    "question": "Which of the following is a reason environmental variables are a concern when reviewing potential system vulnerabilities?",
    "options": {
      "A": "The contents of environmental variables could affect the scope and impact of an exploited vulnerability.",
      "B": "In-memory environmental variable values can be overwritten and used by attackers to insert malicious code.",
      "C": "Environmental variables define cryptographic standards for the system and could create vulnerabilities if deprecated algorithms are used.",
      "D": "Environmental variables will determine when updates are run and could mitigate the likelihood of vulnerability exploitation."
    },
    "answer": "A"
  },
  {
    "questionNumber": 538,
    "category": "Security Program Management and Oversight",
    "question": "A user needs to complete training at https://comptiatraining.com. After manually entering the URL, the user sees that the accessed website is noticeably different from the standard company website. Which of the following is the most likely explanation for the difference?",
    "options": {
      "A": "Cross-site scripting",
      "B": "Pretexting",
      "C": "Typosquatting (AKA URL hijacking)",
      "D": "Vishing"
    },
    "answer": "C"
  },
  {
    "questionNumber": 539,
    "category": "General Security Concepts",
    "question": "A company wants to ensure secure remote access to its internal network. The company has only one public IP and would like to avoid making any changes to the current network setup. Which of the following solutions would best accomplish this goal?",
    "options": {
      "A": "PAT",
      "B": "IPSec VPN",
      "C": "Perimeter network",
      "D": "Reverse proxy"
    },
    "answer": "B"
  },
  {
    "questionNumber": 540,
    "category": "Security Operations",
    "question": "A systems administrate wants to implement a backup solution. the solution needs to allow recovery of the entire system, including the operating system, in case of a disaster. Which of the following backup types should the administrator consider?",
    "options": {
      "A": "Incremental",
      "B": "Storage area network",
      "C": "Differential",
      "D": "Image"
    },
    "answer": "D"
  },
  {
    "questionNumber": 541,
    "category": "General Security Concepts",
    "question": "A malicious insider from the marketing team alters records and transfers company funds to a personal account. Which of the following methods would be the best way to secure company records in the future?",
    "options": {
      "A": "Permission restrictions",
      "B": "Hashing",
      "C": "Input validation",
      "D": "Access control list"
    },
    "answer": "D"
  },
  {
    "questionNumber": 542,
    "category": "General Security Concepts",
    "question": "A security analyst is prioritizing vulnerability scan results using a risk-based approach. Which of the following is the most efficient resource for the analyst to use?",
    "options": {
      "A": "Business impact analysis",
      "B": "Common Vulnerability Scoring System",
      "C": "Risk register",
      "D": "Exposure factor"
    },
    "answer": "B"
  },
  {
    "questionNumber": 543,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "An employee clicked a malicious link in an email and downloaded malware onto the company's computer network. The malicious program exfiltrated thousands of customer records. Which of the following should the company implement to prevent this in the future?",
    "options": {
      "A": "User awareness training",
      "B": "Network monitoring",
      "C": "Endpoint protection",
      "D": "Data loss prevention"
    },
    "answer": "A"
  },
  {
    "questionNumber": 544,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "A newly identified network access vulnerability has been found in the OS of legacy loT devices. Which of the following would best mitigate this vulnerability quickly?",
    "options": {
      "A": "Insurance",
      "B": "Patching",
      "C": "Segmentation",
      "D": "Replacement"
    },
    "answer": "C"
  },
  {
    "questionNumber": 545,
    "category": "Security Operations",
    "question": "An IT manager is putting together a documented plan describing how the organization will keep operating in the event of a global incident. Which of the following plans is the IT manager creating?",
    "options": {
      "A": "Business continuity",
      "B": "Physical security",
      "C": "Change management",
      "D": "Disaster recovery"
    },
    "answer": "A"
  },
  {
    "questionNumber": 546,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "A security analyst reviews web server logs and sees the following entries: 16.22.48.102 -- 26/April/2023 22:00:04.33 GET 'http://www.databaseInfo.com/index.html/*' 200 16.22.48.102 -- 26/April/2023 22:00:07.23 GET 'http://www.databaseInfo.com/index.html/../' 404 Which of the following attacks is most likely being attempted?",
    "options": {
      "A": "Denial of service",
      "B": "Password spraying",
      "C": "SQL injection",
      "D": "Directory traversal"
    },
    "answer": "D"
  },
  {
    "questionNumber": 547,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "Which of the following is the best mitigation for a zero-day vulnerability found in mission-critical production servers that must be highly available?",
    "options": {
      "A": "Virtualizing and migrating to a containerized instance",
      "B": "Removing and sandboxing to an isolated network",
      "C": "Monitoring and implementing compensating controls",
      "D": "Patching and redeploying to production as quickly as possible"
    },
    "answer": "C"
  },
  {
    "questionNumber": 548,
    "category": "Security Program Management and Oversight",
    "question": "Which of the following agreement types defines the time frame in which a vendor needs to respond?",
    "options": {
      "A": "SOW",
      "B": "SLA (Service Level Agreement)",
      "C": "MOA (Memorandum of Agreement)",
      "D": "MOU (Memorandum of Understanding)"
    },
    "answer": "B"
  },
  {
    "questionNumber": 549,
    "category": "Security Operations",
    "question": "Which of the following is the primary purpose of a service that tracks log-ins and time spent using the service?",
    "options": {
      "A": "Availability",
      "B": "Accounting",
      "C": "Authentication",
      "D": "Authorization"
    },
    "answer": "B"
  },
  {
    "questionNumber": 550,
    "category": "General Security Concepts",
    "question": "Which of the following describes the maximum allowance of accepted risk?",
    "options": {
      "A": "Risk indicator",
      "B": "Risk level",
      "C": "Risk score",
      "D": "Risk threshold"
    },
    "answer": "D"
  },
  {
    "questionNumber": 551,
    "category": "General Security Concepts",
    "question": "A company is currently utilizing usernames and passwords, and it wants to integrate an MFA method that is seamless, can Integrate easily into a user's workflow, and can utilize employee-owned devices. Which of the following will meet these requirements?",
    "options": {
      "A": "Push notifications",
      "B": "Phone call",
      "C": "Smart card",
      "D": "Offline backup codes"
    },
    "answer": "A"
  },
  {
    "questionNumber": 552,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "An organization's web servers host an online ordering system. The organization discovers that the servers are vulnerable to a malicious JavaScript injection, which could allow attackers to access customer payment information. Which of the following mitigation strategies would be most effective for preventing an attack on the organization's web servers? (Select two).",
    "options": {
      "A": "Regularly updating server software and patches",
      "B": "Implementing strong password policies",
      "C": "Encrypting sensitive data at rest and in transit",
      "D": "Utilizing a web-application firewall",
      "E": "Performing regular vulnerability scans",
      "F": "Removing payment information from the servers"
    },
    "answer": "A D"
  },
  {
    "questionNumber": 553,
    "category": "Security Architecture",
    "question": "An administrator must replace an expired SSL certificate. Which of the following does the administrator need to create the new SSL certificate?",
    "options": {
      "A": "CSR",
      "B": "OCSP",
      "C": "Key",
      "D": "CRL"
    },
    "answer": "A"
  },
  {
    "questionNumber": 554,
    "category": "General Security Concepts",
    "question": "A security professional discovers a folder containing an employee's personal information on the enterprise's shared drive. Which of the following best describes the data type the securityprofessional should use to identify organizational policies and standards concerning the storage of employees' personal information?",
    "options": {
      "A": "Legal",
      "B": "Financial",
      "C": "Privacy",
      "D": "Intellectual property"
    },
    "answer": "C"
  },
  {
    "questionNumber": 555,
    "category": "General Security Concepts",
    "question": "Which of the following roles, according to the shared responsibility model, is responsible for securing the company’s database in an IaaS model for a cloud environment?",
    "options": {
      "A": "Client",
      "B": "Third-party vendor",
      "C": "Cloud provider",
      "D": "DBA"
    },
    "answer": "A"
  },
  {
    "questionNumber": 556,
    "category": "Security Operations",
    "question": "Which of the following tools is best for logging and monitoring in a cloud environment?",
    "options": {
      "A": "IPS (Intrusion Prevention System)",
      "B": "FIM (File Integrity Monitoring)",
      "C": "NAC (Network Access Control)",
      "D": "SIEM (Security Information and Event Management syste)"
    },
    "answer": "D"
  },
  {
    "questionNumber": 557,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "After reviewing the following vulnerability scanning report: Server:192.168.14.6 Service: Telnet Port: 23 Protocol: TCP Status: Open Severity: High Vulnerability: Use of an insecure network protocol A security analyst performs the following test: nmap -p 23 192.168.14.6 —script telnet-encryption. Which of the following would the security analyst conclude for this reported vulnerability?",
    "options": {
      "A": "It is a false positive.",
      "B": "A rescan is required.",
      "C": "It is considered noise.",
      "D": "Compensating controls exist."
    },
    "answer": "D"
  },
  {
    "questionNumber": 558,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "A security team is reviewing the findings in a report that was delivered after a third party performed a penetration test. One of the findings indicated that a web application form field is vulnerable to cross-site scripting. Which of the following application security techniques should the security analyst recommend the developer implement to prevent this vulnerability?",
    "options": {
      "A": "Secure cookies",
      "B": "Version control",
      "C": "Input validation",
      "D": "Code signing"
    },
    "answer": "C"
  },
  {
    "questionNumber": 559,
    "category": "General Security Concepts",
    "question": "Security controls in a data center are being reviewed to ensure data is properly protected and that human life considerations are included. Which of the following best describes how the controls should be set up?",
    "options": {
      "A": "Remote access points should fail closed.",
      "B": "Logging controls should fail open.",
      "C": "Safety controls should fail open.",
      "D": "Logical security controls should fail closed."
    },
    "answer": "C"
  },
  {
    "questionNumber": 560,
    "category": "Security Operations",
    "question": "A security analyst is reviewing logs and discovers the following: Which of the following should be used lo best mitigate this type of attack?",
    "options": {
      "A": "Input sanitization",
      "B": "Secure cookies",
      "C": "Static code analysis",
      "D": "Sandboxing"
    },
    "answer": "A"
  },
  {
    "questionNumber": 561,
    "category": "General Security Concepts",
    "question": "Which of the following would be the most appropriate way to protect data in transit?",
    "options": {
      "A": "SHA-256",
      "B": "SSL 3.0",
      "C": "TLS 1.3",
      "D": "AES-256"
    },
    "answer": "C"
  },
  {
    "questionNumber": 562,
    "category": "Threats, Vulnerabilities, and Mitigations",
    "question": "After a recent vulnerability scan, a security engineer needs to harden the routers within the corporate network. Which of the following is the most appropriate to disable?",
    "options": {
      "A": "Console access",
      "B": "Routing protocols",
      "C": "VLANs",
      "D": "Web-based administration"
    },
    "answer": "D"
  },
  {
    "questionNumber": 563,
    "category": "General Security Concepts",
    "question": "A security consultant is working with a client that wants to physically isolate its secure systems. Which of the following best describes this architecture?",
    "options": {
      "A": "SDN",
      "B": "Air gapped",
      "C": "Containerized",
      "D": "Highly available"
    },
    "answer": "B"
  },
  {
    "questionNumber": 564,
    "category": "General Security Concepts",
    "question": "Which of the following provides the details about the terms of a test with a third-party penetration tester?",
    "options": {
      "A": "Rules of engagement",
      "B": "Supply chain analysis",
      "C": "Right to audit clause",
      "D": "Due diligence"
    },
    "answer": "A"
  },
  {
    "questionNumber": 565,
    "category": "General Security Concepts",
    "question": "Which of the following actors attacking an organization is the most likely to be motivated by personal beliefs?",
    "options": {
      "A": "Nation-state",
      "B": "Organized crime",
      "C": "Hacktvist",
      "D": "Insider threat"
    },
    "answer": "C"
  },
  {
    "questionNumber": 566,
    "category": "Security Operations",
    "question": "Which of the following would best prepare a security team for a specific incident response scenario?",
    "options": {
      "A": "Situational awareness",
      "B": "Risk assessment",
      "C": "Root cause analysis",
      "D": "Tabletop exercise"
    },
    "answer": "D"
  },
  {
    "questionNumber": 567,
    "category": "Security Architecture",
    "question": "A systems administrator notices that the research and development department is not using the company VPN when accessing various company-related services and systems. Which of the following scenarios describes this activity?",
    "options": {
      "A": "Espionage",
      "B": "Data exfiltration",
      "C": "Nation-state attack",
      "D": "Shadow IT"
    },
    "answer": "D"
  },
  {
    "questionNumber": 568,
    "category": "General Security Concepts",
    "question": "A growing organization, which hosts an externally accessible application, adds multiple virtual servers to improve application performance and decrease the resource usage on individual servers Which of the following solutions is the organization most likely to employ to further increase performance and availability?",
    "options": {
      "A": "Load balancer",
      "B": "Jump server",
      "C": "Proxy server",
      "D": "SD-WAN"
    },
    "answer": "A"
  },
  {
    "questionNumber": 569,
    "category": "General Security Concepts",
    "question": "A security analyst wants to better understand the behavior of users and devices in order to gain visibility into potential malicious activities. The analyst needs a control to detect when actions deviate from a common baseline Which of the following should the analyst use?",
    "options": {
      "A": "Intrusion prevention system",
      "B": "Sandbox",
      "C": "Endpoint detection and response",
      "D": "Antivirus"
    },
    "answer": "C"
  }
]
