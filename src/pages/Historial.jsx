import { Link } from "react-router-dom";
import Header from "../components/Header";

const Historial = () => {
  return (
    <section>
      <Header />
      <header class="cabecera">
        <div class="logo">
            {/* <img src="../public/img/logoConTrigre.png" alt=""/> */}
        </div>
        <nav class="menu">
            <ul>
                <li><Link to="/Home"><b>Home</b></Link></li>
                <li><Link to="/Calculo"><b>Liquidacion</b></Link></li>
                <li><Link to="/Registro"><b>Registro</b></Link></li>
                <li><Link to="/Historial"><b>Historial</b></Link></li>
                <li><Link href="/Estadisticas"><b>Estadisticas</b></Link></li>
            </ul>
        </nav>
    </header>

    <h1>Historial de Transacciones</h1>
    
    <table>
        <thead>
            <tr>
                <th>Fecha</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Número de cuenta</th>
                <th>Monto</th>
                <th>Estado</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="estadoC"></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="estadoP"></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="estadoC"></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="estadoC"></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="estadoP"></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="estadoC"></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="estadoP"></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="estadoC"></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="estadoP" class="estadoP"></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="estadoC"></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="estadoP" class="estadoP"></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="estadoC"></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="estadoP"></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="estadoC"></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="estadoP"></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="estadoC"></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="estadoP"></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="estadoC"></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="estadoP"></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="estadoC"></td>
            </tr>
        </tbody>
    </table>
    </section>
  );
};

export default Historial;