const jobs = [
    {
      title: "Frontend Developer",
      company: "TechSpark",
      location: "Remote",
      salary: "₹6 LPA",
      description: "Build modern UIs using HTML, CSS, JavaScript, and React."
    },
    {
      title: "Java Backend Developer",
      company: "CodeNest",
      location: "Pune",
      salary: "₹7.5 LPA",
      description: "Design RESTful APIs with Spring Boot and Hibernate."
    },
    {
      title: "Full Stack Intern",
      company: "InnovateX",
      location: "Mumbai",
      salary: "₹15,000/month",
      description: "Assist in frontend and backend development. Training provided."
    }
  ];
  
  let users = [];
  
  function showPage(pageId) {
    const pages = ['jobsPage', 'signupPage', 'signinPage', 'aboutPage'];
    pages.forEach(p => document.getElementById(p).style.display = 'none');
    document.getElementById(pageId + 'Page').style.display = 'block';
  }
  
  function populateJobs() {
    const jobContainer = document.getElementById('jobContainer');
    jobContainer.innerHTML = '';
    jobs.forEach((job) => {
      const card = document.createElement('div');
      card.className = 'job-card';
      card.innerHTML = `
        <div class="job-title">${job.title}</div>
        <div class="company">${job.company}</div>
        <div class="location">📍 ${job.location}</div>
        <div class="salary">💰 ${job.salary}</div>
      `;
      card.addEventListener('click', () => showJobDetail(job));
      jobContainer.appendChild(card);
    });
  }
  
  function showJobDetail(job) {
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
      <h2>${job.title}</h2>
      <p><strong>Company:</strong> ${job.company}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <p><strong>Salary:</strong> ${job.salary}</p>
      <p style="margin-top:1rem;">${job.description}</p>
      <button onclick="closeModal()">Close</button>
    `;
    document.getElementById('jobModal').style.display = 'flex';
  }
  
  function closeModal() {
    document.getElementById('jobModal').style.display = 'none';
  }
  
  function handleSignUp(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const userType = document.getElementById('userType').value;
    users.push({ name, email, password, userType });
    alert(`Registered Successfully as ${userType}!`);
    event.target.reset();
    showPage('signin');
  }
  
  function handleSignIn(event) {
    event.preventDefault();
    const email = document.getElementById('signinEmail').value;
    const password = document.getElementById('signinPassword').value;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      alert(`Welcome, ${user.name} (${user.userType})!`);
      showPage('jobs');
    } else {
      alert('Invalid credentials. Try again.');
    }
    event.target.reset();
  }
  
  // Init
  showPage('jobs');
  populateJobs();
  
  window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('jobModal')) {
      closeModal();
    }
  });
  