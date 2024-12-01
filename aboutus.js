async function populateAboutPage() {
    try {
       const response = await fetch('data.json');
      const aboutPageData = await response.json();
  
      // Set logo image
      document.getElementById('logo').src = aboutPageData.header.logo;
  
      // Populate navigation links
      const navContainer = document.getElementById('nav-links');
      aboutPageData.header.navLinks.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.url;
        anchor.textContent = link.text;
        navContainer.appendChild(anchor);
      });
  
      // About Section
      const aboutSection = aboutPageData.mainContent.aboutSection;
      document.getElementById('about-section').style.backgroundImage = url(${aboutSection.backgroundImage});
      document.getElementById('about-heading').textContent = aboutSection.heading;
      document.getElementById('about-intro').textContent = aboutSection.intro;
      document.getElementById('about-description').textContent = aboutSection.description;
  
      // Mission Section
      const missionSection = aboutPageData.mainContent.missionSection;
      document.getElementById('mission-heading').textContent = missionSection.heading;
      document.getElementById('mission-description').textContent = missionSection.description;
    } catch (error) {
      console.error('Error loading JSON data:', error);
    }
  }
  
  // Run the function to populate the page
  populateAboutPage();