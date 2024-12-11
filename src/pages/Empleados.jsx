import { Link } from "react-router-dom";
import Header from "../components/Header";
import './Empleados.css'

const Empleados = () => {

return(
        <section>
        <Header />
        <div className="container brown highlightTextOut">
        <header className="cabecera">
            <div className="logo">
                {/* <img src="../public/img/logoConTrigre.png" alt=""> */}
            </div>
            <nav className="menu">
                <ul>
                    <li><Link to="/Home"><b>Home</b></Link></li>
                    <li><Link to="/Calculo"><b>Liquidacion</b></Link></li>
                    <li><Link to="/Registro"><b>Registro</b></Link></li>
                    <li><Link to="/Historail"><b>Historial</b></Link></li>
                    <li><Link to="/Estadisticas"><b>Estadisticas</b></Link></li>
                </ul>
            </nav>
        </header>
    </div>

    
    <h1 className="smokemonster">Empleados de Suramericana</h1>

<table>
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Cargo</th>
            <th>Salario</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
</section>
);
    };


export default Empleados;
       

        
