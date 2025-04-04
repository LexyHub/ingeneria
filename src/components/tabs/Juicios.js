import React, { useState } from 'react';
import { FiPlus, FiTrash2, FiSearch, FiFile } from 'react-icons/fi';

const Juicios = () => {
  // Estado para juicios existentes
  const [juicios, setJuicios] = useState([
    {
      id: 1,
      rol: 'C-12345-2023',
      tribunal: 'Juzgado Civil de Santiago',
      caratulado: 'Banco del Estado con González',
      defensaEjecutiva: 'Prescripción'
    },
    {
      id: 2,
      rol: 'C-98765-2022',
      tribunal: 'Juzgado Civil de Las Condes',
      caratulado: 'Banco Santander con González',
      defensaEjecutiva: 'Excepciones'
    }
  ]);

  // Estado para formularios visibles
  const [mostrarFormJuicio, setMostrarFormJuicio] = useState(false);

  // Eliminar juicio
  const eliminarJuicio = (id) => {
    setJuicios(juicios.filter(juicio => juicio.id !== id));
  };

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <div className="mr-2 text-primary">
          <FiFile size={32} />
        </div>
        <h3 className="text-2xl font-medium">Juicios Existentes</h3>
      </div>

      <div className="table-container mb-6 shadow-sm">
        <table className="data-table">
          <thead>
            <tr>
              <th></th>
              <th>ROL</th>
              <th>Tribunal</th>
              <th>Caratulado</th>
              <th>Defensa Ejecutiva</th>
            </tr>
          </thead>
          <tbody>
            {juicios.map((juicio) => (
              <tr key={juicio.id}>
                <td className="text-center">
                  <button
                    className="text-primary hover:text-primary-dark mr-2"
                    title="Ver detalle"
                  >
                    <FiSearch />
                  </button>
                  <button
                    onClick={() => eliminarJuicio(juicio.id)}
                    className="text-red-500 hover:text-red-700"
                    title="Eliminar"
                  >
                    <FiTrash2 />
                  </button>
                </td>
                <td>{juicio.rol}</td>
                <td>{juicio.tribunal}</td>
                <td>{juicio.caratulado}</td>
                <td>{juicio.defensaEjecutiva || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        className="add-button mb-6"
        onClick={() => setMostrarFormJuicio(true)}
      >
        <FiPlus /> Agregar Juicio
      </button>

      <div className="flex items-center mb-4 mt-8">
        <div className="mr-2 text-primary">
          <FiFile size={32} />
        </div>
        <h3 className="text-2xl font-medium">Acciones de Prescripción</h3>
      </div>

      <div className="table-container mb-6 shadow-sm">
        <table className="data-table">
          <thead>
            <tr>
              <th></th>
              <th>Acreedor</th>
              <th>Monto Deuda</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">
                <button className="text-primary hover:text-primary-dark mr-2" title="Ver detalle">
                  <FiSearch />
                </button>
                <button className="text-red-500 hover:text-red-700" title="Eliminar">
                  <FiTrash2 />
                </button>
              </td>
              <td>Banco del Estado</td>
              <td>$ 5.000.000</td>
            </tr>
            <tr>
              <td className="text-center">
                <button className="text-primary hover:text-primary-dark mr-2" title="Ver detalle">
                  <FiSearch />
                </button>
                <button className="text-red-500 hover:text-red-700" title="Eliminar">
                  <FiTrash2 />
                </button>
              </td>
              <td>Banco Santander</td>
              <td>$ 7.500.000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button className="add-button mb-6">
        <FiPlus /> Agregar Acción
      </button>

      <div className="flex items-center mb-4 mt-8">
        <div className="mr-2 text-primary">
          <FiFile size={32} />
        </div>
        <h3 className="text-2xl font-medium">Tercerías</h3>
      </div>

      <div className="table-container mb-6 shadow-sm">
        <table className="data-table">
          <thead>
            <tr>
              <th></th>
              <th>ROL</th>
              <th>Tribunal</th>
              <th>Caratulado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">
                <button className="text-primary hover:text-primary-dark mr-2" title="Ver detalle">
                  <FiSearch />
                </button>
                <button className="text-red-500 hover:text-red-700" title="Eliminar">
                  <FiTrash2 />
                </button>
              </td>
              <td>C-54321-2023</td>
              <td>Juzgado Civil de Santiago</td>
              <td>González con Banco del Estado</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button className="add-button">
        <FiPlus /> Agregar Tercería
      </button>
    </div>
  );
};

export default Juicios;
