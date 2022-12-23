var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>examen</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
          <style dangerouslySetInnerHTML={{__html: "\n     body{\n         background-image: url(https://brandemia.org/contenido/subidas/2019/04/logo-bbva-960x640.jpg);\n         background-size: cover;\n     }\n     \n     .row-image {\n          width: 30px;\n          max-width: 50%;\n     }\n    " }} />
          <div className="container w-75 bg-white mt-5 rounded bg-opacity-50">
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col bg" />
                </div>
              </div>
              <div className="col">
                <h2 className="fw-blod text-center py-5">BBVA</h2>
                <form action="#">
                  <div className="mb-4">
                    <label htmlFor="usuario" className="form-label">Usuario</label>
                    <input type="usuario" className="form-control" name="usuario" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="contraseña" className="form-label">Contraseña</label>
                    <input type="contraseña" className="form-control" name="contraseña" required />
                  </div>
                  <div className="mb-4 form-check">
                    <input type="checkbox" name="conectar" className="form-check-input" />
                    <label htmlFor="conectar" className="form-check-label">Mantener Conectado</label>
                  </div>
                  <div className="d-grid">
                    <button type="button" className="btn btn-primary" onclick="Login()">Iniciar Sesión</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });