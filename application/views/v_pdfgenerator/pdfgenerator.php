   <!-- Start your project here-->

    <div style="height: 100vh">
        <div class="flex-center flex-column text-center">
            <h1 class="animated fadeIn mb-4 ">seguro de vida</h1>

            <h5 class="animated fadeIn mb-4">Seccion de información acerca del producto.</h5>

            <p class="animated fadeIn text-muted">MDB Team</p>
        </div>
    </div>

    <div class="container my-4">
        <div class="divider-new">
            <h2 class="h2-responsive wow bounceIn">COTIZACIÓN</h2>
        </div>

        <div class=" px-5 py-5 z-depth-3">
        <!-- Form login -->
        <form id="form_cotizacion">
            <p class="h5 text-center mb-4">Completa los campos</p>
            <div class="row justify-content-center">
                <div class="col-md-4 col-sm-4">
                     <div class="md-form">
                        <i class="fa fa-user prefix blue-text"></i>
                        <input type="text" id="nombre_prospecto" name="nombre_prospecto" class="form-control" required>
                        <label for="form3">Nombre Prospecto</label>

                        <div id="check_username"  style="display: none;"></div> 

                    </div>
                </div>
                <div class="col-md-4 col-sm-4">
                     <div class="md-form">
                        <i class="fa fa-user prefix blue-text"></i>
                        <input type="text" id="edad_prospecto" name="edad_prospecto" class="form-control" maxlength="2" required>
                        <label for="form3">Edad prospecto</label>
                        <div id="check_edad"  style="display: none;"></div>                         
                    </div>
                </div>
                <div class="col-md-4 col-sm-4">
                    <div>
                        <div class="row justify-content-center color-text-1 mb-2">                          
                             Sexo:
                        </div>
                        <div class="row justify-content-center">
                        <div class="form-check mx-4">
                            <label class="form-check-label">
                                <input class="form-check-input" type="radio" name="sexo" id="sexo_hombre" value="HOMBRE" >
                                <i class="fa fa-male mr-2 style-icons-1" aria-hidden="true"></i>Hombre
                            </label>                      
                        </div>
                        <div class="form-check mx-4">
                            <label class="form-check-label">
                                <input class="form-check-input" type="radio" name="sexo" id="sexo_mujer" value="MUJER" >
                                <i class="fa fa-female mr-2  style-icons-1" aria-hidden="true"></i> Mujer
                            </label>                        
                        </div>
                        </div>
                        
                    </div>          
                </div>
              
            </div>


            <div class="row justify-content-center">
                <div class="form-group col-md-4">
                    <label for="inputState" class="col-form-label">Select1:</label>
                    <select class="custom-select d-block" id="select_cantidad" required>
                    <option value="">Seleccione rango plan de ahorro</option>
                    <option value="1">1-5</option>
                    <option value="2">6-10</option>
                    <option value="3">11-15</option>
                    <option value="3">11-20</option>
                    
                </select>
                </div>  
                <div class="form-group col-md-4">
                    <label for="inputState" class="col-form-label">Select1:</label>
                    <select class="custom-select d-block" id="select_cantidad" required>
                    <option value="">Selecciones una opcion</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                </div>  
                <div class="form-group col-md-4">
                    <label for="inputState" class="col-form-label">Select1:</label>
                    <select class="custom-select d-block" id="select_cantidad" required>
                    <option value="">Selecciones una opcion</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                </div>               
            </div>

           
      
            <div class="text-center">
                <button href="#grafica" class="btn btn-default" type="button"   id="generar_grafica">Generar grafica</button>
            </div>
        </form>
    
    
        </div>
           
    </div>

    

    <div class="container my-4" id="grafica" style="display:none">
        <div class="divider-new mt-5">
                <h2 class="h2-responsive wow bounceIn">GRAFICA</h2>
        </div class="mt-5">

        
        <div class="card bg-light mb-3">
            <div class="card-header" style="background: #a9eee6;">DATOS DEL PROSPECTO</div>
            <div class="card-body">
                 <div class="container">
                    <div class="row">
                    </div>
                    <div class="row">
                    </div>
                    <div class="row">
                    </div>       
                 </div>
            </div>
        </div>


         <canvas id="canvas" class="mt-5 mb-5" width="800" height="400">

         </canvas>



         <div class="container d-md-flex flex-md-row justify-content-md-around my-5">
            <div class="text-center">
                <button class="btn  btn-primary" id="generar_pdf">Descargar Formato</button>
            </div>
            <div class="text-center">
                <button class="btn  btn-primary" id="generar_pdf2">Descargar Formato2</button>
            </div>
            <div class="text-center">
                <button class="btn  btn-primary" id="descargar_pdf">Descargar Plantilla</button>
            </div>
        </div>

    </div>

    
     
