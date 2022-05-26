import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <Testimonio 
        nombre='Emma Bunster'
        pais='Suecia'
        imagen='emma'
        cargo='Ingeniera de Software'
        empresa='Spotify'
        testimonio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis officiis, praesentium, in excepturi assumenda dolorem blanditiis porro fugit inventore commodi deleniti doloribus tempore natus hic voluptatem et animi error nihil soluta neque debitis nesciunt voluptatibus sapiente temporibus. Non doloribus provident corporis in modi, doloremque at totam blanditiis, veritatis voluptatum perspiciatis.'
        />

      <Testimonio 
        nombre='Sarah Chima'
        pais='Nigeria'
        imagen='sarah'
        cargo='Ingeniera de Software'
        empresa='ChatDesk'
        testimonio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis officiis, praesentium, in excepturi assumenda dolorem blanditiis porro fugit inventore commodi deleniti doloribus tempore natus hic voluptatem et animi error nihil soluta neque debitis nesciunt voluptatibus sapiente temporibus. Non doloribus provident corporis in modi, doloremque at totam blanditiis, veritatis voluptatum perspiciatis.'
        />

      <Testimonio 
        nombre='Shawn Wang'
        pais='Singapur'
        imagen='shawn'
        cargo='Ingeniero de Software'
        empresa='Amazon'
        testimonio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis officiis, praesentium, in excepturi assumenda dolorem blanditiis porro fugit inventore commodi deleniti doloribus tempore natus hic voluptatem et animi error nihil soluta neque debitis nesciunt voluptatibus sapiente temporibus. Non doloribus provident corporis in modi, doloremque at totam blanditiis, veritatis voluptatum perspiciatis.'
        />

      </div>
    </div>
  );
}

export default App;
