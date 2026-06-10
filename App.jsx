import './App.css'
import Card from './components/Card'

const App = () => {
  return (
    <div className="App">
      <h1>🚀 Dev Resources Board</h1>
      <h2>Essential tools and resources for aspiring developers</h2>
      <div className="card-grid">
        <Card title="GitHub" category="Version Control" description="Host and manage your code repositories." link="https://github.com" image="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
        <Card title="freeCodeCamp" category="Learning" description="Learn web development for free." link="https://freecodecamp.org" image="https://cdn.brandfetch.io/idXgCW-Dlx/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" />
        <Card title="MDN Web Docs" category="Documentation" description="Documentation for HTML, CSS, JavaScript." link="https://developer.mozilla.org" image="https://cdn.brandfetch.io/idlEMFhyQ3/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" />
        <Card title="CodePath" category="Courses" description="Free tech courses for college students." link="https://codepath.org" image="https://cdn.brandfetch.io/idrSWzG0Cm/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" />
        <Card title="CS50" category="Courses" description="Harvard's intro to computer science." link="https://cs50.harvard.edu" image="https://pll.harvard.edu/sites/default/files/styles/header/public/course/CS50x_pll.png" />
        <Card title="Leetcode" category="Practice" description="Practice coding interview problems." link="https://leetcode.com" image="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" />
        <Card title="Vercel" category="Deployment" description="Deploy your web projects instantly." link="https://vercel.com" image="https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" />
        <Card title="Figma" category="Design" description="Design UIs and prototypes for free." link="https://figma.com" image="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" />
        <Card title="Stack Overflow" category="Community" description="Get answers to your coding questions." link="https://stackoverflow.com" image="https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg" />
        <Card title="The Odin Project" category="Learning" description="Full stack web dev curriculum, free." link="https://theodinproject.com" image="https://cdn.brandfetch.io/idqq2v1naO/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" />
      </div>
    </div>
  )
}

export default App