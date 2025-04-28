import Student from '../entities/Student';
import ExamSession from '../entities/ExamSession';
import Question from '../entities/Question';

// Generate random exam code
const generateExamCode = (subjectCode) => {
  const randomNum = Math.floor(100000 + Math.random() * 900000); // 6-digit number
  return `${subjectCode}_FE_${randomNum}`;
};

// Create 30+ students for each exam
const generateStudents = (count, startId) => {
  const students = [];
  const firstNames = ['John', 'Jane', 'Michael', 'Emily', 'David', 'Sarah', 'Alex', 'Olivia', 'James', 'Emma'];
  const lastNames = ['Smith', 'Johnson', 'Brown', 'Davis', 'Wilson', 'Taylor', 'Clark', 'Lewis', 'Walker', 'Hall'];
  
  for (let i = 0; i < count; i++) {
    const id = `S${(startId + i).toString().padStart(3, '0')}`;
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const name = `${firstName} ${lastName}`;
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${startId + i}@student.edu`;
    students.push(new Student(id, name, email, 'password123'));
  }
  
  return students;
};

// Create proctors
const proctors = [
  { name: 'Jane Smith', email: 'proctor1@gmail.com', password: 'test123' },
  { name: 'John Davis', email: 'proctor2@gmail.com', password: 'test123' },
  { name: 'Emily Wilson', email: 'proctor3@gmail.com', password: 'test123' },
  { name: 'Michael Brown', email: 'proctor4@gmail.com', password: 'test123' },
  { name: 'Sarah Johnson', email: 'proctor5@gmail.com', password: 'test123' },
  { name: 'David Taylor', email: 'proctor6@gmail.com', password: 'test123' },
];

// Create detailed questions for different subjects
const mathQuestions = [
  new Question(1, 'What is the value of x in the equation 2x + 3 = 7?\nA. 1\nB. 2\nC. 3\nD. 4', 'B'),
  new Question(2, 'If f(x) = x² + 2x, what is f(3)?\nA. 9\nB. 11\nC. 13\nD. 15', 'D'),
  new Question(3, 'What is the derivative of y = 3x² + 2x - 5?\nA. y\' = 6x + 2\nB. y\' = 3x + 2\nC. y\' = 6x - 2\nD. y\' = 3x - 2', 'A'),
  new Question(4, 'Solve for x: log₂(x) = 3\nA. x = 2\nB. x = 4\nC. x = 6\nD. x = 8', 'D'),
  new Question(5, 'What is the area of a circle with radius 5 cm?\nA. 25π cm²\nB. 10π cm²\nC. 15π cm²\nD. 20π cm²', 'A'),
  new Question(6, 'If sin(θ) = 0.6, what is cos(θ)?\nA. 0.6\nB. 0.8\nC. 0.4\nD. 0.3', 'B'),
  new Question(7, 'What is the sum of first 10 natural numbers?\nA. 45\nB. 50\nC. 55\nD. 60', 'C'),
  new Question(8, 'Simplify: (3x² - 2x) - (x² + 3x - 5)\nA. 2x² - 5x + 5\nB. 4x² - 5x - 5\nC. 2x² - 5x - 5\nD. 4x² - 5x + 5', 'A'),
  new Question(9, 'Find the value of x: 2ˣ = 32\nA. 4\nB. 5\nC. 6\nD. 8', 'B'),
  new Question(10, 'What is the slope of the line passing through (2,3) and (4,7)?\nA. 1\nB. 2\nC. 3\nD. 4', 'B'),
];

const programmingQuestions = [
  new Question(1, 'Which of the following is NOT a primitive data type in Java?\nA. int\nB. boolean\nC. String\nD. char', 'C'),
  new Question(2, 'What will be the output of the following code?\n\nconsole.log(2 + "2");\n\nA. 4\nB. "22"\nC. 22\nD. Error', 'C'),
  new Question(3, 'Which data structure follows the LIFO principle?\nA. Queue\nB. Stack\nC. Linked List\nD. Array', 'B'),
  new Question(4, 'What is the time complexity of binary search?\nA. O(1)\nB. O(n)\nC. O(log n)\nD. O(n²)', 'C'),
  new Question(5, 'Which keyword is used to create a class in Java?\nA. struct\nB. class\nC. object\nD. interface', 'B'),
  new Question(6, 'What does SQL stand for?\nA. Structured Query Language\nB. Simple Query Language\nC. Standard Query Logic\nD. System Query Language', 'A'),
  new Question(7, 'Which method is automatically called when an object is created in Java?\nA. main()\nB. create()\nC. constructor()\nD. init()', 'C'),
  new Question(8, 'What is the result of 5 & 3 in Java?\nA. 1\nB. 7\nC. 2\nD. 8', 'A'),
  new Question(9, 'Which of these is not a JavaScript framework/library?\nA. React\nB. Angular\nC. Vue\nD. Jakarta', 'D'),
  new Question(10, 'What symbol is used to access members of a class in PHP?\nA. .\nB. ->\nC. ::\nD. #', 'B'),
];

const networkingQuestions = [
  new Question(1, 'Which layer of the OSI model deals with routing?\nA. Transport Layer\nB. Network Layer\nC. Data Link Layer\nD. Physical Layer', 'B'),
  new Question(2, 'What is the default subnet mask for a Class C network?\nA. 255.0.0.0\nB. 255.255.0.0\nC. 255.255.255.0\nD. 255.255.255.255', 'C'),
  new Question(3, 'Which protocol operates at the Transport Layer?\nA. IP\nB. Ethernet\nC. HTTP\nD. TCP', 'D'),
  new Question(4, 'What is the maximum size of an IPv4 address?\nA. 32 bits\nB. 64 bits\nC. 128 bits\nD. 256 bits', 'A'),
  new Question(5, 'Which device connects different networks together?\nA. Hub\nB. Switch\nC. Router\nD. Repeater', 'C'),
  new Question(6, 'What type of address is FF:FF:FF:FF:FF:FF?\nA. Unicast\nB. Multicast\nC. Broadcast\nD. Anycast', 'C'),
  new Question(7, 'Which protocol is used to find the MAC address of a device?\nA. DHCP\nB. DNS\nC. ARP\nD. RARP', 'C'),
  new Question(8, 'What is the port number for HTTP?\nA. 21\nB. 25\nC. 80\nD. 110', 'C'),
  new Question(9, 'Which of the following is a private IP address?\nA. 192.168.1.1\nB. 8.8.8.8\nC. 173.194.222.100\nD. 209.85.231.104', 'A'),
  new Question(10, 'What does VPN stand for?\nA. Very Personal Network\nB. Virtual Private Network\nC. Visual Processing Network\nD. Verified Protocol Network', 'B'),
];

// Create additional questions for other subjects
const softwareDevelopmentQuestions = [
  new Question(1, 'Which methodology emphasizes iterative development?\nA. Waterfall\nB. Agile\nC. V-Model\nD. Big Bang', 'B'),
  new Question(2, 'What is a primary goal of refactoring?\nA. Adding new features\nB. Improving code readability and quality\nC. Finding bugs\nD. Meeting deadlines', 'B'),
  new Question(3, 'Which of the following is NOT a principle of SOLID?\nA. Single Responsibility\nB. Open-Closed\nC. Dependency Injection\nD. Liskov Substitution', 'C'),
  new Question(4, 'What does TDD stand for?\nA. Test-Driven Development\nB. Time-Driven Design\nC. Test-Documented Development\nD. Type-Driven Design', 'A'),
  new Question(5, 'Which tool is commonly used for continuous integration?\nA. Notepad++\nB. Jenkins\nC. Photoshop\nD. Microsoft Word', 'B'),
  new Question(6, 'What is the purpose of version control systems?\nA. To track and manage changes to code\nB. To test software automatically\nC. To design user interfaces\nD. To document requirements', 'A'),
  new Question(7, 'Which design pattern is used to create objects without specifying their concrete classes?\nA. Singleton\nB. Observer\nC. Factory\nD. Decorator', 'C'),
  new Question(8, 'What does API stand for?\nA. Application Programming Interface\nB. Automated Program Instance\nC. Application Process Integration\nD. Advanced Programming Implementation', 'A'),
  new Question(9, 'Which of these is NOT a common test type?\nA. Unit Test\nB. Integration Test\nC. Code Test\nD. Acceptance Test', 'C'),
  new Question(10, 'What is a key benefit of pair programming?\nA. Reduced development time\nB. Knowledge sharing and fewer defects\nC. Less code documentation needed\nD. Reduced project costs', 'B'),
];

const uiUxDesignQuestions = [
  new Question(1, 'What does UX stand for?\nA. User Experience\nB. User Examination\nC. User Extension\nD. User Exploration', 'A'),
  new Question(2, 'Which of these is a key principle of user-centered design?\nA. Design for developers first\nB. Design for aesthetics only\nC. Early focus on users and tasks\nD. Minimize user feedback', 'C'),
  new Question(3, 'What is the purpose of a wireframe?\nA. To add color to a design\nB. To create a basic layout of a page\nC. To write programming code\nD. To test functionality', 'B'),
  new Question(4, 'Which color scheme uses colors that are opposite on the color wheel?\nA. Analogous\nB. Monochromatic\nC. Complementary\nD. Triadic', 'C'),
  new Question(5, 'What is the principle that states related items should be grouped together?\nA. Proximity\nB. Alignment\nC. Repetition\nD. Contrast', 'A'),
  new Question(6, 'What does "responsive design" refer to?\nA. Design that responds to user emotions\nB. Design that adapts to different screen sizes\nC. Design that loads quickly\nD. Design that responds to voice commands', 'B'),
  new Question(7, 'What is a persona in UX design?\nA. A fictional character representing a user type\nB. A designer\'s personal style\nC. A UI component\nD. A coding framework', 'A'),
  new Question(8, 'Which of these is NOT a common usability testing method?\nA. A/B testing\nB. Code review\nC. Eye tracking\nD. Think-aloud protocol', 'B'),
  new Question(9, 'What is the goal of information architecture?\nA. Building websites with many pages\nB. Organizing content for easy navigation\nC. Creating colorful interfaces\nD. Designing beautiful typography', 'B'),
  new Question(10, 'Which principle states that users should be able to recognize rather than recall information?\nA. Flexibility and efficiency\nB. Aesthetic and minimalist design\nC. Recognition rather than recall\nD. Error prevention', 'C'),
];

const itEthicsQuestions = [
  new Question(1, 'What does GDPR stand for?\nA. General Data Protection Regulation\nB. Global Data Privacy Rules\nC. General Digital Privacy Rights\nD. Government Data Protection Rules', 'A'),
  new Question(2, 'Which of these is NOT one of the core principles of ethical hacking?\nA. Obtain permission\nB. Respect privacy\nC. Share vulnerable data publicly\nD. Document everything', 'C'),
  new Question(3, 'What is digital divide referring to?\nA. Division between hardware and software\nB. Inequality in access to technology\nC. Separation of data into segments\nD. Division of digital assets', 'B'),
  new Question(4, 'What term describes the act of sending emails purporting to be from reputable sources to induce people to reveal personal information?\nA. Phishing\nB. Vishing\nC. Spoofing\nD. Pharming', 'A'),
  new Question(5, 'Which one is an ethical concern with AI?\nA. AI becoming too colorful\nB. Bias in algorithms\nC. AI learning too quickly\nD. AI requiring electricity', 'B'),
  new Question(6, 'What is intellectual property?\nA. Physical property owned by intellectuals\nB. Ideas, inventions, and creative works protected by law\nC. Property on university campuses\nD. International properties', 'B'),
  new Question(7, 'Which of these is NOT a principle of the ACM Code of Ethics?\nA. Contribute to society and human well-being\nB. Maximize profit at all costs\nC. Respect privacy\nD. Honor confidentiality', 'B'),
  new Question(8, 'What is "net neutrality"?\nA. The principle that internet service providers should treat all data equally\nB. The concept that internet should have neutral content\nC. A networking protocol\nD. The neutralization of internet threats', 'A'),
  new Question(9, 'What is a key ethical issue related to social media?\nA. Too many color options\nB. Privacy and data collection\nC. Excessive device battery usage\nD. Having too many friends', 'B'),
  new Question(10, 'What does "informed consent" mean in data ethics?\nA. Agreeing to share data without reading terms\nB. Understanding and willingly agreeing to data usage terms\nC. Being informed after data is collected\nD. Giving consent to be informed', 'B'),
];

// Create a simple hardcoded exam for easy modification
const simpleQuestions = [
  new Question(1, 'What is the capital of France?\nA. London\nB. Berlin\nC. Paris\nD. Madrid', 'C'),
  new Question(2, 'Which planet is known as the Red Planet?\nA. Venus\nB. Mars\nC. Jupiter\nD. Saturn', 'B'),
  new Question(3, 'Who wrote "Romeo and Juliet"?\nA. Charles Dickens\nB. William Shakespeare\nC. Jane Austen\nD. Mark Twain', 'B'),
  new Question(4, 'What is the chemical symbol for gold?\nA. Go\nB. Au\nC. Ag\nD. Gd', 'B'),
  new Question(5, 'How many continents are there on Earth?\nA. 5\nB. 6\nC. 7\nD. 8', 'C'),
];

// Create simple hardcoded proctors
const simpleProctors = [
  { name: 'Nguyễn Thị Hoàng Vân', email: 'vannth@fpt.edu.vn', password: 'test' },
  { name: 'Simple Proctor 2', email: 'simple2@example.com', password: 'simple123' },
];

// Create simple hardcoded students
const createSimpleStudents = () => {
  const students = [];
  for (let i = 0; i < 30; i++) {
    const id = `S${(900 + i).toString().padStart(3, '0')}`;
    const name = `Phan Trung Dũng ${i + 1}`;
    const email = `dungpt${i + 1}@fpt.edu.vn`;
    students.push(new Student(id, name, email, 'test'));
  }
  return students;
};

// Simple exam session code (hardcoded for easy reference)
const SIMPLE_EXAM_CODE = 'SWD392_FE_123456';

const MAT101ExamCode = generateExamCode('MAT');
const PRF101ExamCode = generateExamCode('PRF');
const NET101ExamCode = generateExamCode('NET');
const SWD101ExamCode = generateExamCode('SWD');
const PRU101ExamCode = generateExamCode('PRU');
const ITE101ExamCode = generateExamCode('ITE');

const NeosServer = {
  examSessions: [
    new ExamSession(
      MAT101ExamCode,
      mathQuestions,
      90, // 90 minutes
      [proctors[0], proctors[1]],
      generateStudents(35, 100) // 35 students starting from ID 100
    ),
    new ExamSession(
      PRF101ExamCode,
      programmingQuestions,
      120, // 120 minutes
      [proctors[2], proctors[3]],
      generateStudents(32, 200) // 32 students starting from ID 200
    ),
    new ExamSession(
      NET101ExamCode,
      networkingQuestions,
      60, // 60 minutes
      [proctors[4], proctors[5]],
      generateStudents(30, 300) // 30 students starting from ID 300
    ),
    new ExamSession(
      SWD101ExamCode,
      softwareDevelopmentQuestions,
      90, // 90 minutes
      [proctors[0], proctors[2]],
      generateStudents(34, 400) // 34 students starting from ID 400
    ),
    new ExamSession(
      PRU101ExamCode,
      uiUxDesignQuestions,
      75, // 75 minutes
      [proctors[1], proctors[3]],
      generateStudents(31, 500) // 31 students starting from ID 500
    ),
    new ExamSession(
      ITE101ExamCode,
      itEthicsQuestions,
      60, // 60 minutes
      [proctors[4], proctors[5]],
      generateStudents(33, 600) // 33 students starting from ID 600
    ),
    new ExamSession(
      SIMPLE_EXAM_CODE,
      simpleQuestions,
      5, // 5 minutes
      simpleProctors,
      createSimpleStudents()
    ),
  ],

  // Generate cheating alerts for different exam sessions
  cheatingAlerts: [
    { alertId: 1, examSessionCode: MAT101ExamCode, studentRollNumber: 'S100', content: 'Suspicious eye movement detected' },
    { alertId: 2, examSessionCode: MAT101ExamCode, studentRollNumber: 'S105', content: 'Unauthorized device detected in view' },
    { alertId: 3, examSessionCode: MAT101ExamCode, studentRollNumber: 'S110', content: 'Multiple people detected in frame' },
    { alertId: 4, examSessionCode: PRF101ExamCode, studentRollNumber: 'S200', content: 'Student disappeared from camera' },
    { alertId: 5, examSessionCode: PRF101ExamCode, studentRollNumber: 'S210', content: 'Suspicious background noise detected' },
    { alertId: 6, examSessionCode: NET101ExamCode, studentRollNumber: 'S300', content: 'Attempted to access unauthorized website' },
    { alertId: 7, examSessionCode: NET101ExamCode, studentRollNumber: 'S305', content: 'Suspicious activity detected' },
    { alertId: 8, examSessionCode: SWD101ExamCode, studentRollNumber: 'S400', content: 'Suspicious browser tab switching detected' },
    { alertId: 9, examSessionCode: SWD101ExamCode, studentRollNumber: 'S410', content: 'Student looking away from screen frequently' },
    { alertId: 10, examSessionCode: PRU101ExamCode, studentRollNumber: 'S500', content: 'Unauthorized materials detected in background' },
    { alertId: 11, examSessionCode: PRU101ExamCode, studentRollNumber: 'S505', content: 'Student talking to someone off-camera' },
    { alertId: 12, examSessionCode: ITE101ExamCode, studentRollNumber: 'S600', content: 'Attempted to access notes on second monitor' },
    { alertId: 13, examSessionCode: ITE101ExamCode, studentRollNumber: 'S610', content: 'Multiple faces detected in camera frame' },
    { alertId: 100, examSessionCode: SIMPLE_EXAM_CODE, studentRollNumber: 'S900', content: 'Looking at notes' },
    { alertId: 101, examSessionCode: SIMPLE_EXAM_CODE, studentRollNumber: 'S905', content: 'Using phone' },
  ],
};

export default NeosServer;