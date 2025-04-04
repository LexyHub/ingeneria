import React, { useState } from 'react';
import { FiFileText } from 'react-icons/fi';

const Contratos = () => {
  const [notasGenerales, setNotasGenerales] = useState('Cliente requiere escritura para refinanciamiento. Solicita asesoría en temas de copropiedad.');
  const [contrato, setContrato] = useState({
    tipoEscritura: '',
    bienAfectado: '',
    urgencia: '',
    notasEscritura: ''
  });

  const handleNotasGeneralesChange = (e) => {
    setNotasGenerales(e.target.value);
  };

  const handleContratoChange = (e) => {
    const { name, value } = e.target;
    setContrato({
      ...contrato,
      [name]: value
    });
  };

  const tiposEscritura = [
    'Compraventa',
    'Hipoteca',
    'Mutuo',
    'Alzamiento',
    'Usufructo',
    'Otro'
  ];

  const tiposUrgencia = [
    'Alta (Menos de 5 días)',
    'Media (5-10 días)',
    'Baja (Más de 10 días)'
  ];

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <div className="mr-2 text-primary">
          <FiFileText size={32} />
        </div>
        <h3 className="text-2xl font-medium">Notas Generales</h3>
      </div>

      <div className="card-container mb-8">
        <textarea
          value={notasGenerales}
          onChange={handleNotasGeneralesChange}
          className="form-textarea w-full"
          rows="4"
        />
      </div>

      <div className="flex items-center mb-4">
        <div className="mr-2 text-primary">
          <FiFileText size={32} />
        </div>
        <h3 className="text-2xl font-medium">Contrato</h3>
      </div>

      <div className="card-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-group">
            <label className="form-label">Tipo de Escritura</label>
            <select
              name="tipoEscritura"
              value={contrato.tipoEscritura}
              onChange={handleContratoChange}
              className="form-select"
            >
              <option value="">Seleccione</option>
              {tiposEscritura.map((tipo, index) => (
                <option key={index} value={tipo}>
                  {tipo}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Bien o bienes afectados</label>
            <input
              type="text"
              name="bienAfectado"
              value={contrato.bienAfectado}
              onChange={handleContratoChange}
              className="input-field"
              placeholder="Ej: Inmueble de Calle Principal 123"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Urgencia</label>
            <select
              name="urgencia"
              value={contrato.urgencia}
              onChange={handleContratoChange}
              className="form-select"
            >
              <option value="">Seleccione</option>
              {tiposUrgencia.map((tipo, index) => (
                <option key={index} value={tipo}>
                  {tipo}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group md:col-span-2">
            <label className="form-label">Notas de la Escritura</label>
            <textarea
              name="notasEscritura"
              value={contrato.notasEscritura}
              onChange={handleContratoChange}
              className="form-textarea"
              rows="4"
              placeholder="Detalles importantes sobre el contrato o la escritura"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="btn-primary">Guardar Contrato</button>
        </div>
      </div>
    </div>
  );
};

export default Contratos;
