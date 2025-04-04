import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

const DetalleTerceria = ({ terceria, onClose, onSave }) => {
  const [datosTerceria, setDatosTerceria] = useState({
    // Identificación
    rol: terceria.rol || '',
    corte: terceria.corte || '',
    tribunal: terceria.tribunal || '',
    caratulado: terceria.caratulado || '',
    
    // Tercería
    tipoTercerista: terceria.tipoTercerista || '',
    bienAfectado: terceria.bienAfectado || '',
    
    // Notas
    notas: terceria.notas || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatosTerceria({
      ...datosTerceria,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(datosTerceria);
  };

  // Opciones para selects
  const tiposTercerista = ['Dominio', 'Posesión', 'Prelación', 'Pago'];

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="text-xl font-semibold">Detalle de Tercería</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FiX size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          {/* Identificación */}
          <div className="card-container mb-4">
            <h3 className="text-lg font-medium mb-3">Identificación</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label className="form-label">ROL</label>
                <input
                  type="text"
                  name="rol"
                  value={datosTerceria.rol}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Corte</label>
                <input
                  type="text"
                  name="corte"
                  value={datosTerceria.corte}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Tribunal</label>
                <input
                  type="text"
                  name="tribunal"
                  value={datosTerceria.tribunal}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Caratulado</label>
                <input
                  type="text"
                  name="caratulado"
                  value={datosTerceria.caratulado}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
            </div>
          </div>
          
          {/* Tercería */}
          <div className="card-container mb-4">
            <h3 className="text-lg font-medium mb-3">Tercería</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label className="form-label">Tipo Tercerista</label>
                <select
                  name="tipoTercerista"
                  value={datosTerceria.tipoTercerista}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Seleccione</option>
                  {tiposTercerista.map((tipo, index) => (
                    <option key={index} value={tipo}>
                      {tipo}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Bien Afectado</label>
                <input
                  type="text"
                  name="bienAfectado"
                  value={datosTerceria.bienAfectado}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Ej: Inmueble, Vehículo, etc."
                />
              </div>
            </div>
          </div>
          
          {/* Notas */}
          <div className="card-container mb-4">
            <h3 className="text-lg font-medium mb-3">Notas</h3>
            <div className="form-group">
              <textarea
                name="notas"
                value={datosTerceria.notas}
                onChange={handleChange}
                className="form-textarea w-full"
                rows="4"
                placeholder="Detalles importantes sobre esta tercería..."
              />
            </div>
          </div>
          
          <div className="modal-footer">
            <button type="button" onClick={onClose} className="btn-secondary mr-2">
              Cancelar
            </button>
            <button type="submit" className="btn-primary">
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetalleTerceria;
