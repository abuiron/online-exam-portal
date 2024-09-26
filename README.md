# Online Exam Portal

The **Online Exam Portal** is a web-based application that allows users to create, manage, and view online exams with varying difficulty levels. The portal provides functionalities to define the exam structure, manage questions, and view exam details in an organized manner. Built using **React.js** and **Material UI**, the application supports modern UI components and user-friendly features.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Add Exam Details**: Define exam topics, question types, difficulty levels (Easy, Medium, Hard), and set question-picking strategies.
- **Question Management**: Add and manage questions for each topic with various difficulty levels.
- **View Exam Details**: View created exams in a table format that includes exam topics and total number of questions.
- **Edit/Remove Exam**: Easily edit or remove any exam from the portal.
- **Responsive Design**: Fully responsive design using **Material UI** for smooth operation across devices.

## Technologies Used

- **Frontend**: React.js, Material UI, React Router
- **State Management**: React Hooks
- **Styling**: Material UI components
- **Routing**: React Router for page navigation

## Installation

Follow these steps to get the project running locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/abuiron/online-exam-portal.git

2. **Navigate to the project directory** :

   ```bash
   cd online-exam-portal

3. **Install dependencies** :

   ```bash
   npm install

4. **Start the development server** :

    ```bash
    npm start

The app will be accessible at http://localhost:3000.


## Usage
 **Add Exam** :

 - Navigate to the "Enter Exam" page from the sidebar.
- Enter the exam details (name, duration, question picking strategy).
- Define questions under each topic with difficulty levels.

**View Exams**:

- Go to the "View Exams" page from the sidebar.
- See the list of exams, including their topics, number of easy/medium/hard questions, and total questions.
- Edit or remove exams from this table.


## Folder Structure

/src
  /components
    - Navbar.js             # Sidebar/Navbar component
    - EnterExam.js          # Main component to enter exam details
    - BasicDetails.js       # Component to input exam name, duration, etc.
    - AdvancedSettings.js   # Component to configure advanced settings
    - QuestionTable.js      # Component to add/edit exam questions
    - ExamDetails.js        # Displays exam details with an editable table
  /utils
    - mockData.js           # Mock data for topics
    - mockExamData.js       # Mock data for exams
  - App.js                  # Main App component
  - index.js                # Entry point


## Contributing
- Feel free to open issues or submit pull requests if you'd like to contribute to this project. All contributions are welcome.