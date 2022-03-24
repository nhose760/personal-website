import Card from "../components/Card";
import './index.css';

function Projects() {
    return (
    <div className="App">
      <h1>Coding samples</h1>
      <Card title='Java' projName='Image Resizer'/>
      <Card title='C/C++' projName='Test proj'/>
    </div>
    );
}

export default Projects;