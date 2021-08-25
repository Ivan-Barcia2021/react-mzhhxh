import React from 'react';
import './style.css';

export default function App() {
  return (
    <div className="container">
      <h1>Administrador de Pacientes</h1>
      <div className="row">
        <div className="one-half column">
          <h2>Sacar turno</h2>
          <form>
          <label>Nombre Mascota</label>
          <input type="text" name="mascota" className="u-full-width"
              placeholder="Nombre Mascota" value=""/>
              <br></br>
             <label>Nombre Dueño</label>
             <input type="text" name="mascota" className="u-full-width"
              placeholder="Nombre Dueño" value=""/>
              <br></br>
              <label>Fecha</label>
              <br></br>
              <input type="date" name="Fecha" className="u-full-width" />
              <input type="time" name="hora"
              className="u-full-width" value=""/>
              <br/> <br/>
              <label>hora</label>
              <br></br>
              <br></br>
              <label>Sintomas</label>
              <br></br>
              <textarea name="sintomas"
              class="u-full-width"></textarea>
               <br></br>
               <button type="submit" class="u-full-width button-primary">Agregar
              Turno</button>
            </form>

        </div>
        <div class="one-half column">
        <h2>Administra tus turnos</h2>
        <div className="cita">
        <p>Mascota: <span>Nina</span></p>
            <p>Dueño: <span>Pablo</span></p>
            <p>Fecha: <span>2021-08-05</span></p>
            <p>Hora: <span>08:20</span></p>
            <p>Sintomas: <span>Le duele la pierna</span></p><button class="button elimnar u-full-width">Eliminar
              ×</button>

        </div>
        </div>
      </div>
    </div>
  );
}
