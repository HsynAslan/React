
import './App.css'
import Courses from './Courses';
import angularİmg from './images/angular.jpg'
import boostrapİmg from './images/bootstrap5.png'
import cCharp from './images/ccsharp.png'
import kompleWeb from './images/kompleweb.jpg'

function App() {
  return (
    <div>
      <Courses
      img={angularİmg}
      title="Angular"
      description="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem at non deserunt dolore animi veniam? Officiis aut enim earum, itaque qui fuga debitis porro quis assumenda non hic quo dolorum!"
      />
      
    </div>
  );


}

export default App
