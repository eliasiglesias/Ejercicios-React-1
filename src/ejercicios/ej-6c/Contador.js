import React from 'react';

const Contador = () => {
    
    const sumaClick = () => {
        // Ingresa aquí tu código para aumentar el contador
    }

    return (
        <div className="alert alert-primary">
            <p><b>Has dado {/* Ingresa aquí el número de clicks */} clicks</b></p>
            <button className="btn btn-info" onClick={sumaClick}>suma 1</button>
        </div>
    );
};

export default Contador;