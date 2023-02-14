
    // Get all file section headers
    const fileSectionHeaders = document.querySelectorAll(".file-section-header");
    
    // Add click event listener to each file section header to toggle its content
    fileSectionHeaders.forEach(header => {
      header.addEventListener("click", function() {
        this.parentElement.querySelector(".file-section-content").classList.toggle("show");
      });
    });
  