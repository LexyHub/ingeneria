import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

const DetalleJuicio = ({ juicio, onClose, onSave }) => {
  const [datosJuicio, setDatosJuicio] = useState({
    // Identificación
    rol: juicio.rol || '',
    corte: juicio.corte || '',
    tribunal: juicio.tribunal || '',
    caratulado: juicio.caratulado || '',
    
    // Demandante
    acreedor: juicio.acreedor || '',
    rutAcreedor: juicio.rutAcreedor || '',
    representanteAcreedor: juicio.representanteAcreedor || '',
    rutRepresentanteAcreedor: juicio.rutRepresentanteAcreedor || '',
    domicilioAcreedor: juicio.domicilioAcreedor || '',
    domicilioRepAcreedor: juicio.domicilioRepAcreedor || '',
    
    // Expediente
    fechaDemanda: juicio.fechaDemanda || '',
    montoMandamiento: juicio.montoMandamiento || '',
    estadoNotificacion: juicio.estadoNotificacion || '',
    
    // Notificación
    tipoNotificacion: juicio.tipoNotificacion || '',
    fechaNotificacion: juicio.fechaNotificacion || '',
    validezNotificacion: juicio.validezNotificacion || '',
    cuadernoEjecutivo: juicio.cuadernoEjecutivo || '',
    
    // Defensa
    defensaEjecutiva: juicio.defensaEjecutiva || '',
    defensaApremio: juicio.defensaApremio || '',
    
    // Siguiente paso
    siguientePaso: juicio.siguientePaso || '',
    
    // Notas
    notas: juicio.notas || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatosJuicio({
      ...datosJuicio,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(datosJuicio);
  };

  // Opciones para selects
  const estadosNotificacion = ['Pendiente', 'Realizada', 'Fallida'];
  const tiposNotificacion = ['Personal', 'Art. 44', 'Por Cédula', 'Otro'];
  const validezNotificaciones = ['Válida', 'Inválida', 'Por Determinar'];
  const estadosCuaderno = ['No iniciado', 'En trámite', 'Terminado'];
  const defensasEjecutivas = ['Prescripción', 'Excepciones', 'No hay defensa'];
  const defensasApremio = ['Tercería', 'Beneficio de Excusión', 'No hay defensa'];
  const siguientesPasos = ['Presentar Excepciones', 'Solicitar Prescripción', 'Solicitar Tercería', 'Audiencia', 'Esperar Resolución'];

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="text-xl font-semibold">Detalle del Juicio</h2>
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
                  value={datosJuicio.rol}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Corte</label>
                <input
                  type="text"
                  name="corte"
                  value={datosJuicio.corte}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Tribunal</label>
                <input
                  type="text"
                  name="tribunal"
                  value={datosJuicio.tribunal}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Caratulado</label>
                <input
                  type="text"
                  name="caratulado"
                  value={datosJuicio.caratulado}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
            </div>
          </div>
          
          {/* Demandante */}
          <div className="card-container mb-4">
            <h3 className="text-lg font-medium mb-3">Demandante</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label className="form-label">Acreedor</label>
                <input
                  type="text"
                  name="acreedor"
                  value={datosJuicio.acreedor}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">RUT Acreedor</label>
                <input
                  type="text"
                  name="rutAcreedor"
                  value={datosJuicio.rutAcreedor}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Nombre Representante Acreedor</label>
                <input
                  type="text"
                  name="representanteAcreedor"
                  value={datosJuicio.representanteAcreedor}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">RUT Representante Acreedor</label>
                <input
                  type="text"
                  name="rutRepresentanteAcreedor"
                  value={datosJuicio.rutRepresentanteAcreedor}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Domicilio Acreedor</label>
                <input
                  type="text"
                  name="domicilioAcreedor"
                  value={datosJuicio.domicilioAcreedor}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Domicilio Rep.</label>
                <input
                  type="text"
                  name="domicilioRepAcreedor"
                  value={datosJuicio.domicilioRepAcreedor}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
            </div>
          </div>
          
          {/* Expediente */}
          <div className="card-container mb-4">
            <h3 className="text-lg font-medium mb-3">Expediente</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label className="form-label">Fecha Demanda</label>
                <input
                  type="date"
                  name="fechaDemanda"
                  value={datosJuicio.fechaDemanda}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Monto Mandamiento</label>
                <input
                  type="text"
                  name="montoMandamiento"
                  value={datosJuicio.montoMandamiento}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Estado Notificación</label>
                <select
                  name="estadoNotificacion"
                  value={datosJuicio.estadoNotificacion}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Seleccione</option>
                  {estadosNotificacion.map((estado, index) => (
                    <option key={index} value={estado}>
                      {estado}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Notificación */}
          <div className="card-container mb-4">
            <h3 className="text-lg font-medium mb-3">Notificación</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label className="form-label">Tipo de Notificación</label>
                <select
                  name="tipoNotificacion"
                  value={datosJuicio.tipoNotificacion}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Seleccione</option>
                  {tiposNotificacion.map((tipo, index) => (
                    <option key={index} value={tipo}>
                      {tipo}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Fecha de Notificación</label>
                <input
                  type="date"
                  name="fechaNotificacion"
                  value={datosJuicio.fechaNotificacion}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Validez de la Notif.</label>
                <select
                  name="validezNotificacion"
                  value={datosJuicio.validezNotificacion}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Seleccione</option>
                  {validezNotificaciones.map((validez, index) => (
                    <option key={index} value={validez}>
                      {validez}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Cuaderno Ejecutivo</label>
                <select
                  name="cuadernoEjecutivo"
                  value={datosJuicio.cuadernoEjecutivo}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Seleccione</option>
                  {estadosCuaderno.map((estado, index) => (
                    <option key={index} value={estado}>
                      {estado}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Defensa */}
          <div className="card-container mb-4">
            <h3 className="text-lg font-medium mb-3">Defensa</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label className="form-label">Defensa Ejecutiva</label>
                <select
                  name="defensaEjecutiva"
                  value={datosJuicio.defensaEjecutiva}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Seleccione</option>
                  {defensasEjecutivas.map((defensa, index) => (
                    <option key={index} value={defensa}>
                      {defensa}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Defensa Apremio</label>
                <select
                  name="defensaApremio"
                  value={datosJuicio.defensaApremio}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Seleccione</option>
                  {defensasApremio.map((defensa, index) => (
                    <option key={index} value={defensa}>
                      {defensa}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Siguiente Paso */}
          <div className="card-container mb-4">
            <h3 className="text-lg font-medium mb-3">Siguiente Paso</h3>
            <div className="form-group">
              <label className="form-label">Siguiente Paso</label>
              <select
                name="siguientePaso"
                value={datosJuicio.siguientePaso}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Seleccione</option>
                {siguientesPasos.map((paso, index) => (
                  <option key={index} value={paso}>
                    {paso}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Notas */}
          <div className="card-container mb-4">
            <h3 className="text-lg font-medium mb-3">Notas</h3>
            <div className="form-group">
              <textarea
                name="notas"
                value={datosJuicio.notas}
                onChange={handleChange}
                className="form-textarea w-full"
                rows="4"
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

export default DetalleJuicio;
