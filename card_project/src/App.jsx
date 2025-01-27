
import 'bulma/css/bulma.css';
import './App.css'
import Courses from './Courses';
import angularİmg from './images/angular.jpg'
import boostrapİmg from './images/bootstrap5.png'
import cCharp from './images/ccsharp.png'
import kompleWeb from './images/kompleweb.jpg'

function App() {
  return (
    <div>
       <div>
<section className="hero is-link ">
  <div className="hero-body">
    <p className="title">Kurslarım</p>
   
  </div>
</section>
       </div>

<div className='container columns'>
      <Courses
      img={angularİmg}
      title="Angular"
      description="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem at non deserunt dolore animi veniam? Officiis aut enim earum, itaque qui fuga debitis porro quis assumenda non hic quo dolorum!"
      />
       <Courses
      img={boostrapİmg}
      title="Boostrap"
      description="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem at non deserunt dolore animi veniam? Officiis aut enim earum, itaque qui fuga debitis porro quis assumenda non hic quo dolorum!"
      />
       <Courses
      img={cCharp}
      title="C#"
      description="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem at non deserunt dolore animi veniam? Officiis aut enim earum, itaque qui fuga debitis porro quis assumenda non hic quo dolorum!"
      />
       <Courses
      img={kompleWeb}
      title="Komple Web Eğitimi"
      description="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem at non deserunt dolore animi veniam? Officiis aut enim earum, itaque qui fuga debitis porro quis assumenda non hic quo dolorum!"
      />
      </div>
    </div>
  );


}

export default App
