var SCORM = {
    LMSInitialize: function() {
      console.log("LMS initialized");
      return "true";
    },
    
    LMSFinish: function() {
      saveProgress();
      console.log("LMS finished");
      return "true";
    },
    
    LMSGetValue: function(param) {
      switch (param) {
        case "cmi.core.lesson_status":
          return "incomplete"; // Default status; change this based on the SCORM lesson state
        case "cmi.core.score.raw":
          return "75"; // Example score; change this based on actual score from SCORM
        case "cmi.core.total_time":
          return "00:30:00"; // Example time spent in the course; adjust as needed
        default:
          return "";
      }
    },
    
    LMSSetValue: function(param, value) {
      console.log("Set SCORM value:", param, value);
    },
  
    LMSCommit: function() {
      console.log("LMS commit called");
      return "true";
    },
  
    LMSGetLastError: function() {
      return "0"; // No error
    },
  
    LMSGetErrorString: function(errorCode) {
      return "No error"; 
    },
  
    LMSGetDiagnostic: function(errorCode) {
      return "No diagnostic available";
    }
  };
  
  // Function to save progress to the backend
  function saveProgress() {
    var completionStatus = SCORM.LMSGetValue("cmi.core.lesson_status");
    var score = SCORM.LMSGetValue("cmi.core.score.raw");
    var time = SCORM.LMSGetValue("cmi.core.total_time");
  
    var progressData = {
      userId: 1, // Replace with the actual user ID from your application
      courseId: 101, // Replace with the actual course ID
      status: completionStatus,
      score: score,
      time: time
    };
  
    // Make an API request to save progress
    fetch("http://localhost:8080/api/scorm/progress/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(progressData)
    })
    .then(response => response.json())
    .then(data => console.log("Progress saved:", data))
    .catch(error => console.error("Error saving progress:", error));
  }
  
  window.onbeforeunload = function() {
    SCORM.LMSFinish(); // Ensure progress is saved before closing
  };