import Header from "../components/Header";
import './Calculo.css';

const Calculo = () => {

    return (
      <section>
        <Header />
        <header class="cabecera">
    <div class="logo">
        {/* <img src="../public/img/logoConTrigre.png" alt=""/> */}
    </div>
    <nav className="menu">
        <ul>
            <li><a href="../pages/Calculo"><b>Home</b></a></li>
            <li><a href="../pages/Calculo"><b>Liquidacion</b></a></li>
            <li><a href="../pages/Registro"><b>Registro</b></a></li>
            <li><a href="../pages/Historail"><b>Historial</b></a></li>
            <li><a href="../pages/Estadisticas"><b>Estadisticas</b></a></li>
            
        </ul>
    </nav>
  </header>

    <div className="tabla-centro">

        <form action="#" method="post">
    
        <label for="trabajadores">Selecciona un trabajador:</label>
        <select id="trabajadores" name="trabajadores">
            <option value="carlos-ramirez">Carlos Ramírez</option>
            <option value="maria-gomez">María Gómez</option>
            <option value="luis-martinez">Luis Martínez</option>
            <option value="ana-lopez">Ana López</option>
            <option value="javier-fernandez">Javier Fernández</option>
            <option value="sofia-torres">Sofía Torres</option>
            <option value="fernando-rivera">Fernando Rivera</option>
            <option value="laura-castillo">Laura Castillo</option>
            <option value="daniel-suarez">Daniel Suárez</option>
            <option value="patricia-vega">Patricia Vega</option>
        </select>
    
        <br/>
        
            <label htmlFor="salario">Salario:</label>
            <input type="number" id="salario" name="salario"  placeholder="Ingrese el salario" required/>
            <br/>
    
            <label htmlFor="dias-trabajados">Días trabajados:</label>
            <input type="number" id="diasTrabajados" name="diasTrabajados" placeholder="Ingrese los días trabajados" required/>
            <br/>
    
            <label htmlFor="vacaciones-pendientes">Vacaciones pendientes:</label>
            <input type="number" id="vacacionesPendientes" name="vacacionesPendientes" placeholder="Ingrese días de vacaciones pendientes" required/>
            <br/>
    
            <label htmlFor="prima">Prima:</label>
            <input type="number" id="prima" name="prima" step="0.01" placeholder="Ingrese la prima" required/>
            <br/>
    
            <label htmlFor="indemnizacion">Indemnización:</label>
            <input type="number" id="indemnizacion" name="indemnizacion" step="0.01" placeholder="Ingrese la indemnización" required/>
            <br/>
    
            <button type="button" id="btnCalcular" onClick ="calcularLiquidacion()">Calcular</button>
    
        </form>
    </div>
    </section>
    );
  };
  
  export default Calculo;