var bio = {
	"name": "Kerry Bates",
	"role": "Web Developer",
	"contacts": {
		"mobile": "214-708-4340",
		"email": "kerry.bates@att.com",
		"github": "kdbates1",
		"twitter": "@kdbates1",
		"location": "Dallas"
	},
	"welcomeMessage": "Whats up people?",
	"skills": ["Being Cool", "Acting Cool", "Looking Cool", "All Things Cool"],
	"biopic": "images/biopic.jpg",
	"display": function displayBio(){
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);	
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLtwitter.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLgithub.replace("%data%", bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedTwitter);
		$("#topContacts").append(formattedLocation);
		$("#header").append(formattedBiopic);
		$("#header").append(formattedWelcome);
		
		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedLocation);
		
		if (bio["skills"].length > 0)
		{
			$("#header").append(HTMLskillsStart);
			
			for (count in bio.skills)
			{
				var formattedSkills = HTMLskills.replace("%data%", bio.skills[count]);
				$("#header").append(formattedSkills);
			}
		}
	}
}

var education = {
	"schools": 
	[
		{
			"name": "Acme University",
			"location": "Baton Rouge, LA",
			"degree": "BS",
			"major": "Computer Science",
			"dates": "2001",
			"url": "http://www.sudr.edu"
		},
		{
			"name": "Bugs Bunny School of Computers",
			"location": "Lake Charles, LA",
			"degree": "BS",
			"major": "Build a Better Project",
			"dates": "1994",
			"url": "http://www.mcneese.edu"
		}
	],
	"onlineCourses":
	[
		{
			"title": "JavaScript",
			"school": "Udacity",
			"date": "2015",
			"url": "https://www.udacity.com/course/viewer#!/c-ud804-nd" 
		},
		{
			"title": "HTML Basics",
			"school": "Udacity",
			"date": "2015",
			"url": "https://www.udacity.com/course/viewer#!/c-ud304-nd" 
		},
		{
			"title": "Version Control",
			"school": "Udacity",
			"date": "2015",
			"url": "https://www.udacity.com/course/viewer/#!c-nd001/l-2958618869" 
		}
	],
	"display": function displayEducation() {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			
			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);	
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);	
			var formattedDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);	
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);	
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			
			var formattedNameDegree = formattedName + formattedDegree;
			
			$(".education-entry:last").append(formattedNameDegree);
			$(".education-entry:last").append(formattedDate);
			$(".education-entry:last").append(formattedLocation);
			$(".education-entry:last").append(formattedMajor);
		}
			
		$(".education-entry:last").append(HTMLonlineClasses);			
			
		for (onlinecourse in education.onlineCourses) {
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlinecourse].title);	
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlinecourse].school);	
			var formattedDate = HTMLschoolDates.replace("%data%", education.onlineCourses[onlinecourse].date);	
			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlinecourse].url);	
			var formattedTitleSchool = formattedTitle + formattedSchool; 	
			
			$(".education-entry:last").append(formattedTitleSchool);
			$(".education-entry:last").append(formattedDate);
			$(".education-entry:last").append(formattedURL);
		}
	}
}

var work = {
	"jobs":
	[
		{
			"employer": "ATT",
			"title": "Programmer",
			"location": "Richardson, TX",
			"dates": "2000 - 2015",
			"description": "A little of this and a little of that. Mostly some of this and some of that.  Too much of this and too much of that."
		},
		{
			"employer": "Army",
			"title": "Cool Officer",
			"location": 
			[
				"Fort Knox",
				"Baton Rouge",
				"Fort Lee",
				"Fort Gordon", 
				"Fort Sill",
				"Fort Hood",
				"Fort Bragg"
			],
			"dates": "1996 - 2015",
			"description": "Take tours around the world looking for cool stuff to do."
		}
	],
	"display": function displayWork(){
		for (job in work.jobs)
		{
			$("#workExperience").append(HTMLworkStart);
			
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);	
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			
			var formattedEmployerTitle = formattedEmployer + formattedTitle
			$(".work-entry:last").append(formattedEmployerTitle);
			
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedLocation);
			
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
}

var projects = {
	"projects":
	[
		{
			"title": "SmallCell",
			"dates": "2014-1015",
			"description": "Convert project specifications and statements of problems and procedures to detailed logical flow charts for coding into computer language. Develop and write computer programs to store, locate, and retrieve specific documents, data, and information. May program web sites.",
			"images":
			[
				"images/project1.jpg", 
				"images/project2.jpg"
			]
		},
		{
			"title": "IRG",
			"dates": "2014",
			"description": "A programmer-analyst writes, reviews, and modifies computer software. By encoding, testing, debugging and documenting programs, he is responsible for translating the work of software engineers so that the program may be read and run by a computer.",
			"images":
			[
				"images/project3.jpg", 
				"images/project4.jpg"
			]
		}
	],
	"display": function displayProjects() {
		for (project in projects.projects)
		{
			$("#projects").append(HTMLprojectStart);
			
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);	
			$(".project-entry:last").append(formattedTitle);
			
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);	
			$(".project-entry:last").append(formattedDates);
			
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);	
			$(".project-entry:last").append(formattedDescription);
			
			if(projects.projects[project].images.length > 0)
			{
				for (image in projects.projects[project].images)
				{
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);	
					$(".project-entry:last").append(formattedImage);
				}
			}
		}
	}
}

bio.display();
work.display();
projects.display();
education.display();

$(document).click(function(loc) 
{  
	var x = loc.pageX;
	var y = loc.pageY;
	
	logClicks(x,y);
});

function locationizer(work_obj){
	var locationArray = [];
	
	for (jobs in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray .push(newLocation);
	}
	
	return locationArray;
}

function inName(name){
	var name = name.trim().split(" ");
	
	name[0] = name[0].toLowerCase();
	name[0] = name[0].substr(0,1).toUpperCase();
	name[1] = name[1].toUpperCase;
	
	return name[0] + " " + name[1];
}

$("#mapDiv").append(googleMap);