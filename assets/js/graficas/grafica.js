
        
        //document.getElementById('generar_grafica').addEventListener("click", generar_grafica); 
        
        $('#generar_grafica').on('click', generar_grafica);

        function generar_grafica()
        {    
            $("#grafica").show();   
            var ctx = document.getElementById("canvas");           
            Chart.defaults.global.defaultFontColor = 'black';
            //Chart.defaults.global.defaultFontSize = '12px';
            var myLineChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["25", "26", "27", "28", "29", "30", "31"],
                    datasets: 
                    [
                        {
                        label: "PROTECCION",
                        backgroundColor: '#00ADB5',
                        borderColor: '#00ADB5',
                        borderWidth: 3,
                        data: [150000, 200000, 250000, 300000, 350000, 400000],
                        fill: false,
                    }, 
                    {
                        label: "AHORRO ACUMULADO",                   
                        backgroundColor: '#CB0101',
                        borderColor: '#CB0101',
                        borderWidth: 3,
                        data: [123000, 158600, 346000, 350000, 350000, 400000],                          
                        fill: false,               
                           
                    },
                    {
                        label: "CAPITALIZACION DE AHORRO",                   
                        backgroundColor: '#19215E',
                        borderColor: '#19215E',
                        borderWidth: 3,
                        data: [123000, 153600, 246000, 260000, 400000, 320000],                                  
                        fill: false,
                        
                    }]
                },
                options: {
                    legend: {
                        position: 'bottom',
                        display: true,
                        labels: {
                            fontColor: '#222831'
                        }
                    },
                    responsive: true,
                    title:{
                        display:true,
                        text:'COTIZACION'
                    },              
                    // tooltips: {
                    //     mode: 'index',
                    //     intersect: false,
                    // },
                    // hover: {
                    //     animationDuration: 0
                    // },
                    scales: {
                        xAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'EDAD'
                            }
                        }],
                        yAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'AHORRO'
                            }
                        }]
                    },
                    animation: {
                        duration: 1,
                        onComplete: function () {
                            var chartInstance = this.chart,
                            ctx = chartInstance.ctx;
                            ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontColor, Chart.defaults.global.defaultFontFamily);
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'bottom';
                
                            this.data.datasets.forEach(function (dataset, i) {
                                var meta = chartInstance.controller.getDatasetMeta(i);
                                meta.data.forEach(function (bar, index) {
                                    var data = dataset.data[index];                            
                                    ctx.fillText(data, bar._model.x, bar._model.y - 5);
                                });
                            });
                        }
                    }
                    
                    
                    
                }
                
            });
    
        }
       
        
        $(document).ready(function()
        {
            //document.getElementById('generar_grafica').disabled=true;
            $('#nombre_prospecto').keyup(checkusername);
            $('#edad_prospecto').keyup(checkedad);
            // $('#correo_usuario').keyup(checkcorreo);
            // $('#clave_usuario').keyup(check_clave_usuario);
        })

        function checkusername()
        {
            $('#check_username').show(80);
            var nombre_usuario=$('#nombre_prospecto').val();
          if( nombre_usuario == null || nombre_usuario.length ==0  )
             {
                $('#check_username').html('<div class="alert alert-danger mt-1" role="alert">No se aceptan campos vacios</div>');
                
                document.getElementById('generar_grafica').disabled=true;
             }
          else if(!/^[a-zA-Z ]*$/.test(nombre_usuario))
            {
                $('#check_username').html('<div class="alert alert-danger mt-1" role="alert">No se aceptan numeros, acentos ni caracteres especiales</div>');
               
                document.getElementById('generar_grafica').disabled=true;
            }
            else
            {
                 $('#check_username').html('<div class="alert alert-success mt-1" role="alert">Campo correcto</div>');
               
                 document.getElementById('generar_grafica').disabled=false;
        
            }
              
        }
        
        function checkedad()
        {
            $('#check_edad').show(80);
            var edad_prospecto=$('#edad_prospecto').val();
          if( edad_prospecto == null || edad_prospecto.length ==0  )
             {
                $('#check_edad').html('<div class="alert alert-danger mt-1" role="alert">No se aceptan campos vacios</div>');
                
                document.getElementById('generar_grafica').disabled=true;
             }
          else if(!/[0-9]{2}/.test(edad_prospecto))
            {
                $('#check_edad').html('<div class="alert alert-danger mt-1" role="alert">Solo se aceptan numeros</div>');
               
                document.getElementById('generar_grafica').disabled=true;
            }
            else
            {
                 $('#check_edad').html('<div class="alert alert-success mt-1" role="alert">Campo correcto</div>');
               
                 //document.getElementById('generar_grafica').disabled=false;
        
            }
        
        
        }