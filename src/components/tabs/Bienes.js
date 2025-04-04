import React, { useState } from 'react';
import { FiPlus, FiTrash2, FiHome, FiPackage, FiBriefcase } from 'react-icons/fi';

const Bienes = () => {
  // Estado para inmuebles
  const [inmuebles, setInmuebles] = useState([
    {
      id: 1,
      direccion: 'Av. Las Condes 12345',
      region: 'Metropolitana',
      comuna: 'Las Condes',
      tipoAdquisicion: 'Compraventa',
      hipoteca: 'Sí',
      acreedorHipoteca: 'Banco Santander',
      conSubsidio: 'No'
    }
  ]);

  // Estado para formularios visibles
  const [mostrarFormInmueble, setMostrarFormInmueble] = useState(false);

  // Opciones para los selects
  const regiones = ['Metropolitana', 'Valparaíso', 'Biobío', 'Otra'];
  const opcionesSiNo = ['Sí', 'No'];

  // Eliminar inmueble
  const eliminarInmueble = (id) => {
    setInmuebles(inmuebles.filter(inmueble => inmueble.id !== id));
  };

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <div className="mr-2 text-primary">
          <FiHome size={32} />
        </div>
        <h3 className="text-2xl font-medium">Inmuebles</h3>
      </div>

      <div className="table-container mb-6 shadow-sm">
        <table className="data-table">
          <thead>
            <tr>
              <th>Dirección</th>
              <th>Región</th>
              <th>Comuna</th>
              <th>Tipo de Adquisición</th>
              <th>Hipoteca</th>
              <th>Acreedor Hipoteca</th>
              <th>¿Con Subsidio?</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {inmuebles.map((inmueble) => (
              <tr key={inmueble.id}>
                <td>{inmueble.direccion}</td>
                <td>{inmueble.region}</td>
                <td>{inmueble.comuna}</td>
                <td>{inmueble.tipoAdquisicion}</td>
                <td>{inmueble.hipoteca}</td>
                <td>{inmueble.acreedorHipoteca}</td>
                <td>{inmueble.conSubsidio}</td>
                <td>
                  <button
                    onClick={() => eliminarInmueble(inmueble.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        className="add-button mb-6"
        onClick={() => setMostrarFormInmueble(true)}
      >
        <FiPlus /> Agregar Inmueble
      </button>

      <div className="flex items-center mb-4 mt-8">
        <div className="mr-2 text-primary">
          <FiPackage size={32} />
        </div>
        <h3 className="text-2xl font-medium">Vehículos</h3>
      </div>

      <div className="table-container mb-6 shadow-sm">
        <table className="data-table">
          <thead>
            <tr>
              <th>Patente</th>
              <th>¿Tiene los papeles al día?</th>
              <th>Prenda Automotora</th>
              <th>Institución</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ABCD-12</td>
              <td>Sí</td>
              <td>No</td>
              <td>-</td>
              <td>
                <button className="text-red-500 hover:text-red-700">
                  <FiTrash2 />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <button
        className="add-button mb-6"
      >
        <FiPlus /> Agregar Vehículo
      </button>

      <div className="flex items-center mb-4 mt-8">
        <div className="mr-2 text-primary">
          <FiBriefcase size={32} />
        </div>
        <h3 className="text-2xl font-medium">Sociedades</h3>
      </div>

      <div className="p-4 border border-gray-200 rounded-md mb-4 relative">
        <button className="absolute top-2 right-2 text-red-500 hover:text-red-700">
          <FiTrash2 />
        </button>
        
        <h4 className="text-md font-medium mb-2">Sociedad N° 1</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Nombre de la Sociedad</p>
            <p className="font-medium">Inversiones XYZ Ltda.</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-600">RUT de la Sociedad</p>
            <p className="font-medium">76.123.456-7</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-600">Tipo de Sociedad</p>
            <p className="font-medium">Sociedad de Responsabilidad Limitada</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-600">Participación (%)</p>
            <p className="font-medium">50%</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-600">¿Cómo se constituyó?</p>
            <p className="font-medium">Escritura Pública</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-600">¿Qué hace la sociedad?</p>
            <p className="font-medium">Inversiones inmobiliarias</p>
          </div>
        </div>
      </div>

      <button
        className="add-button"
      >
        <FiPlus /> Agregar Sociedad
      </button>
    </div>
  );
};

export default Bienes;
