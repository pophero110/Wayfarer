# Wayfarer

Wayfarer is a travel community for users to share city-specific tips ("posts" or "logs") about their favorite locations around the world. The primary objective of this project is twofold: to cultivate valuable experience collaborating on a development project as a cohesive team and to effectively meet the client's expectations. Also, another key focus of this project is to enhance our proficiency with the Angular framework, specifically in building single-page client applications.

# Technologies used

- ![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
- ![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
- ![BootStrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
- ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

# User Stories

Spring 1: Landing Page
User Story:

- As a user, I want to be able to navigate to the "/" route and see a basic splash page with the name of the website.
- As a user, I want to see the site-wide header on every page with a link to the home page that lists the cities.

Spring 2: Home Page
User Story:

- As a user, I want to be able to view the "San Francisco" page (at "/cities/1") with the following details:
  - The site-wide header.
  - The name of the city.
  - An iconic photo of the city.
- As a user, I want to see a list of posts on the San Francisco page:
  - Sorted by newest first.
  - With the post titles linked to the individual post "show" pages.
- As a user, I want to use the search bar to search through the posts' titles and/or content.
- As a user, I want to view post "show" pages with the title, author, and content displayed.

Spring 3: Validations
User Story:

- As a user, I want to be able to view city pages for "London" and "Gibraltar".
- As a user, I want the title of a post to be between 1 and 200 characters.
- As a user, I want the content of a post to not be empty.

Spring 4: Weather API
User Story:

- As a user, I want to see the current weather of the city on each city's page.

# Wireframes

![image](https://github.com/pophero110/Wayfarer---Group-Project/assets/124539081/712dd0bd-7934-4ecb-9666-a089650b4281)

# The Planning Process

Throughout the duration of this project, our team effectively leveraged the Kanban Board within Git Projects to outline and manage our project tasks. This approach proved highly beneficial as we documented each Sprint as an issue on the Kanban board, accompanied by the respective user stories we aimed to address. Notably, the initial and imperative step in our workflow was the brainstorming process. This critical phase enabled us to collaboratively gather and synthesize our ideas, ensuring a well-informed and strategic approach to each sprint.

Additionally, during our brainstorming session, we discussed several key questions that helped shape our project direction:

1. What are the specific client requirements and expectations for the final deliverable?
2. What will the UI flow be (colors, layout, etc.)?
3. How can we effectively prioritize and sequence the user stories to ensure a smooth development process?
4. Are there any technical constraints or limitations that we need to consider while working with the Angular framework?
5. How can we leverage Angular's features and functionalities to enhance the user experience?
6. How can we ensure seamless collaboration and communication within the team throughout the project duration?
7. What milestones and bonus features (if we get to that point) should we work on?

Furthermore, rather than approaching each user story as a single entity, we discovered the value of breaking down each user story into smaller, more manageable steps. This approach not only enhanced clarity but also facilitated our understanding of how to effectively develop the corresponding code. By deconstructing the user stories, we were able to analyze and determine the optimal approach for implementation.

Link to Kanan Board: https://github.com/users/pophero110/projects/10/views/1

# Application Screenshots

![landing-page](./src/assets/resource/landing-page.png)
![city-page](./src/assets/resource/city-page.png)
![post-page](./src/assets/resource/post-page.png)

# Group Collaboration

1. How did your group approach the requirements? (mention anything unique or creative your group chose to do)
   - My group stayed with the pair programming or all three of us were working together. Jeff showed us a lot of different ways how to code and customize or travel app. We used Figma which was excellent. We will defintely use this in the future.
2. What was easier than you thought? What was more challenging?
   - All of our answers are different. For Jeff it was the logical part, search bar, and the navigation. Velvet, creating the paths to the pages. For example the routerlinks. For me nothing was easy but I learned a lot. The more challeging area was customizing the app. Getting the app exactly how we wanted it. Also, sprint 4. The weather api was harder than expected.
3. What is a lesson you will carry forward to working on your next project?
   - The lesson we will carry on to the next project is Pseudocode. Write down word for word what needs to be done. The Kanban board always is a great tool to keep the group on the same page. Communcation is key with working in a group project.

# Credits

Thank you to the team for completing an amazing project. Thank you to our classmates for always sharing your knowledge and making us laugh when we all are online during the late nights getting our work done.

# Resources Used

- RouterLink: https://angular.io/api/router/RouterLink

- Bootstrap: https://getbootstrap.com/docs/5.3/customize/sass/

- Unsplash: www.unsplash.com

- [CSS ::first-letter Selector](https://www.w3schools.com/cssref/sel_firstletter.php#:~:text=The%20%3A%3Afirst%2Dletter%20selector,color%20properties)

- [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

- Medium: The 60–30–10 Rule: A Foolproof Way to Choose Colors for Your UI Design

## How to run the application

<details>
    <summary>Click to expand</summary>

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
