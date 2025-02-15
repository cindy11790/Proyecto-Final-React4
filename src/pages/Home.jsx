
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
 
  return (
    <div>
      <div className="contenedorTiger">
        {/* <img  className="tiger" src="../public/img/tiger_tall-removebg-preview.png" alt=""/> */}
      </div>
    <div className="links">
    <ul className="links__list" style={{ "--item-total": 5 }}>
         <li className="links__item" style={{ "--item-count": 1 }}>
            <Link className="links__link" to="/Calculo">
                {/* <img className="links__icon" src="../public/img/insolvencia.png" alt=""/> */}
                <span className="links__text">Liquidar</span>
            </Link>
          </li>
          <li className="links__item" style={{ "--item-count": 2 }}>
            <Link className="links__link" to="/Registro">
                {/* <img className="links__icon" src="../public/img/gente.png" alt=""/> */}
                <span className="links__text">Registro</span>
                </Link>
          </li>
          <li className="links__item" style={{ "--item-count": 3 }}>
            <Link className="links__link" to="/Empleados">
                {/* <img className="links__icon" src="../public/img/empleados.png" alt=""/> */}
                <span className="links__text">Empleados</span>
                </Link>
          </li>
          <li className="links__item" style={{ "--item-count": 4 }}>
            <Link className="links__link" to="/Historial">
                {/* <img className="links__icon" src="../public/img/historial-de-transacciones.png" alt=""/> */}
                <span className="links__text">Historial de Transacciones</span>
                </Link>
          </li>
          <li className="links__item" style={{ "--item-count": 5 }}>
            <Link className="links__link" to="/Estadisticas">
                {/* <img className="links__icon" src="../public/img/estadisticas.png" alt=""/> */}
                <span className="links__text">Estadisticas</span>
                </Link>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Home;//un componente siempre debe tener una exportacion por defecto//