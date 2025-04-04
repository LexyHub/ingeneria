import React, { useState } from 'react';
import { FiPlus, FiTrash2, FiDollarSign } from 'react-icons/fi';

const Deudas = () => {
  const [deudas, setDeudas] = useState([
    {
      id: 1,
      tipoCredito: 'Consumo',
      institucion: 'Banco Estado',
      totalDeuda: 5000000,
      demandado: 'Sí',
      notas: 'Deuda contraída en 2019 para remodelación'
    },
    {
      id: 2,
      tipoCredito: 'Hipotecario',
      institucion: 'Banco Santander',
      totalDeuda: 45000000,
      demandado: 'No',
      notas: 'Crédito al día, cuota mensual de $280.000'
    }
  ]);

  const [nuevaDeuda, setNuevaDeuda] = useState({
    tipoCredito: '',
    institucion: '',
    totalDeuda: '',
    demandado: '',
    notas: ''
  });

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const tiposCredito = ['Consumo', 'Hipotecario', 'Automotriz', 'Tarjeta de Crédito', 'Educacional', 'Otro'];
  const opcionesDemandado = ['Sí', 'No'];

  const handleNuevaDeudaChange = (e) => {
    const { name, value } = e.target;
    setNuevaDeuda({
      ...nuevaDeuda,
      [name]: value
    });
  };

  const agregarDeuda = () => {
    if (!nuevaDeuda.tipoCredito || !nuevaDeuda.institucion || !nuevaDeuda.totalDeuda) {
      alert('Por favor complete los campos obligatorios');
      return;
    }

    setDeudas([
      ...deudas,
      {
        id: Date.now(),
        ...nuevaDeuda
      }
    ]);

    setNuevaDeuda({
      tipoCredito: '',
      institucion: '',
      totalDeuda: '',
      demandado: '',
      notas: ''
    });

    setMostrarFormulario(false);
  };

  const eliminarDeuda = (id) => {
    setDeudas(deudas.filter(deuda => deuda.id !== id));
  };

  const calcularTotalDeudas = () => {
    return deudas.reduce((total, deuda) => total + Number(deuda.totalDeuda), 0);
  };

  const formatearNumero = (numero) => {
    return new Intl.NumberFormat('es-CL').format(numero);
  };

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <div className="mr-2 text-primary">
          <FiDollarSign size={32} />
        </div>
        <h3 className="text-2xl font-medium">Deudas</h3>
      </div>

      <div className="table-container mb-6 shadow-sm">
        <table className="data-table">
          <thead>
            <tr>
              <th>Tipo de crédito</th>
              <th>Institución financiera</th>
              <th>Total de la deuda (Aprox.)</th>
              <th>¿Lo demandaron?</th>
              <th>Notas Deuda</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {deudas.map((deuda) => (
              <tr key={deuda.id}>
                <td>{deuda.tipoCredito}</td>
                <td>{deuda.institucion}</td>
                <td>$ {formatearNumero(deuda.totalDeuda)}</td>
                <td>{deuda.demandado}</td>
                <td>{deuda.notas}</td>
                <td>
                  <button 
                    onClick={() => eliminarDeuda(deuda.id)}
                    className="text-red-500 hover:text-red-700"
                    aria-label="Eliminar"
                  >
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {mostrarFormulario ? (
        <div className="bg-white p-6 rounded-md shadow-sm mb-6 border border-gray-200">
          <h4 className="text-lg font-medium mb-4">Agregar Nueva Deuda</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-group">
              <label className="form-label form-required">Tipo de Crédito</label>
              <select
                name="tipoCredito"
                value={nuevaDeuda.tipoCredito}
                onChange={handleNuevaDeudaChange}
                className="form-select"
                required
              >
                <option value="">Seleccione</option>
                {tiposCredito.map((tipo, index) => (
                  <option key={index} value={tipo}>
                    {tipo}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label form-required">Institución Financiera</label>
              <input
                type="text"
                name="institucion"
                value={nuevaDeuda.institucion}
                onChange={handleNuevaDeudaChange}
                className="input-field"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label form-required">Total de la Deuda (Aprox.)</label>
              <input
                type="number"
                name="totalDeuda"
                value={nuevaDeuda.totalDeuda}
                onChange={handleNuevaDeudaChange}
                className="input-field"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">¿Lo demandaron?</label>
              <select
                name="demandado"
                value={nuevaDeuda.demandado}
                onChange={handleNuevaDeudaChange}
                className="form-select"
              >
                <option value="">Seleccione</option>
                {opcionesDemandado.map((opcion, index) => (
                  <option key={index} value={opcion}>
                    {opcion}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group md:col-span-2">
              <label className="form-label">Notas Deuda</label>
              <textarea
                name="notas"
                value={nuevaDeuda.notas}
                onChange={handleNuevaDeudaChange}
                className="form-textarea"
              />
            </div>
          </div>

          <div className="flex justify-end mt-4 space-x-2">
            <button 
              className="btn-secondary"
              onClick={() => setMostrarFormulario(false)}
            >
              Cancelar
            </button>
            <button
              className="btn-primary"
              onClick={agregarDeuda}
            >
              Guardar
            </button>
          </div>
        </div>
      ) : (
        <button
          className="add-button mb-6"
          onClick={() => setMostrarFormulario(true)}
        >
          <FiPlus /> Agregar Deuda
        </button>
      )}

      <div className="card-container bg-white p-4 rounded-md shadow-sm border border-gray-200">
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-medium">Total Deudas</h4>
          <span className="text-xl font-semibold">$ {formatearNumero(calcularTotalDeudas())}</span>
        </div>
      </div>
    </div>
  );
};

export default Deudas;
