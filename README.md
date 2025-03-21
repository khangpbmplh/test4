# 🚀 CI/CD Demo with GitHub Actions

<div align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions" />
  <img src="https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages" />
</div>

<p align="center">
  <img src="https://github.githubassets.com/images/modules/site/actions/pr-checks-final.png" alt="CI/CD Demo" width="600" />
</p>

A beautiful React Todo application that demonstrates CI/CD using GitHub Actions for building, testing, and deploying to GitHub Pages. This project showcases modern frontend development practices and automated workflows.

## ✨ Features

- 📝 Create, complete, and delete tasks
- 💾 Local storage persistence
- 🎨 Modern and responsive UI
- 🔄 Automated CI/CD pipeline with GitHub Actions
- 📱 Mobile-friendly design
- 🧪 Automated testing

## 🔄 CI/CD Pipeline

This project includes a comprehensive CI/CD pipeline that automatically:

1. 🔨 Builds the React application
2. 🧪 Runs tests and generates coverage reports
3. 🔍 Performs linting checks
4. 🚀 Deploys to GitHub Pages on successful builds
5. 🔔 Reports deployment status

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Setup Instructions

1. Fork or clone this repository
   ```bash
   git clone https://github.com/your-username/cicd-demo.git
   cd cicd-demo
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Update the `homepage` URL in package.json to match your GitHub username
   ```json
   "homepage": "https://your-username.github.io/cicd-demo"
   ```

4. Start the development server
   ```bash
   npm start
   # or
   yarn start
   ```

5. Push to GitHub to trigger the CI/CD pipeline
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

## 🔧 Available Scripts

In the project directory, you can run:

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. |
| `npm test` | Launches the test runner in the interactive watch mode. |
| `npm run build` | Builds the app for production to the `build` folder. |
| `npm run lint` | Runs ESLint to check for code quality issues. |

## 🛠️ Technologies Used

- **Frontend**: React, TypeScript, CSS3
- **State Management**: React Hooks
- **CI/CD**: GitHub Actions
- **Hosting**: GitHub Pages
- **Testing**: Jest, React Testing Library

## 📋 GitHub Actions Workflow

The GitHub Actions workflow includes the following jobs:

1. **Build and Test**:
   - Checkout repository
   - Set up Node.js environment
   - Install dependencies
   - Run linting checks
   - Execute tests and generate coverage reports
   - Build the application
   - Upload build artifacts

2. **Deploy**:
   - Download build artifacts
   - Deploy to GitHub Pages
   - Report deployment status

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Made with ❤️ for learning CI/CD with GitHub Actions</p>
</div> 