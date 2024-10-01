
# Quiz Maker

**Quiz Maker** is a web-based application that allows users to create and take quizzes. It provides customizable options for quiz creators. 

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contribution](#contribution)

## Features

- **Create Quizzes**: Users can create quizzes with multiple questions and answer options.
- **Randomized Answers**: The app shuffles answer options for each question to enhance fairness.
- **Feedback**: Displays whether selected answers are correct or incorrect at the end of the quiz.
- **Score Tracking**: Tracks user scores for each quiz.

## Installation

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Steps to Install

1. **Clone the repository**:
  
   git clone https://github.com/Missyandrea/trivia-quiz-maker
   cd quiz-maker
  

2. **Install dependencies**:
  
   npm install
   # or
   yarn install
  

3. **Start the development server**:
   npm run dev
  

4. Open your browser and navigate to `http://localhost:5173`.


## Usage

### Creating a Quiz
1. Select a category and difficulty from the dropdowns
2. Click on the **Create** button on the home page.

### Taking a Quiz
1. Answer the questions, and at the end, you’ll get feedback on your answers and a score.

### Randomizing Answer Options
- Answer options are shuffled for each user session to ensure fairness during quiz attempts.

### Feedback
- Once you submit the quiz, feedback (Correct/Incorrect) is shown immediately. The score is displayed as well.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **TypeScript**: Type-safe JavaScript for scalable development.
- **Redux**: State management for handling complex data flows.
- **Axios**: HTTP client for handling API requests.
- **React Router**: For routing and navigation within the application.
- **tailwindcss**: For styling.


## Contribution

Contributions are welcome! Please follow these steps to contribute:

1. **Fork the repository**.
2. **Create a new branch** for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** and commit them:
   ```bash
   git commit -m "Add new feature"
   ```
4. **Push to your fork** and create a pull request:
   ```bash
   git push origin feature/your-feature-name
   ```

### Code Style Guidelines

- Use **TypeScript** for all new components and features.
- Ensure code is properly formatted (use Prettier or a similar tool).
