class CountTime {

    minutos = '0'
    segundos = '0'
    horas = '0'
    temporizador = null
    contenedortime = null
    configuracion = {}
    finContador=false

    /**
     * @param {int} horas  
     * @param {int} minutos 
     * @param {int} segundos
     * @param {int} contenedortime 
     * @param {Object} configuracion 
     */

    constructor(horas, minutos, segundos, contenedortime, configuracion = {}) {
        this.horas = horas
        this.minutos = minutos
        this.segundos = segundos
        this.contenedortime = contenedortime
        this.configuracion = configuracion
    }



    run() {
        if (this.horas > 24 || this.horas < -1) {
            this.logErrors('La hora no puede ser superior a 24 e inferior a 0')
        } else if (this.minutos > 60 || this.minutos < -1) {
            this.logErrors('Los munitos no puede ser superior a 60 e inferior a 0')
        } else if (this.segundos > 60 || this.segundos < -1) {
            this.logErrors('Los segundos no puede ser superior a 60 e inferior a 0')
        } else {
            this.temporizador = setInterval(() => {
                
                if (this.horas == 0 && this.minutos == 0 && this.segundos == 0) {
                    this.stop()
                    this.segundos = 0
                    

                } else {
                    if (this.minutos != 0) {
                        this.segundos = Number(this.segundos) - Number(1)
                    }else{
                        this.segundos = Number(this.segundos) - Number(1)
                    }

                    if (this.segundos < 0) {
                        this.minutos = Number(this.minutos) - 1
                        this.segundos = 59
                    }

                    if (this.minutos == 0) {
                        if (this.horas > 0) {
                            this.horas = Number(this.horas) - 1
                        }
                    }

                    let horasdisplay = this.configuracion.horas == true ? `${this.horas < 10 ? '0' + this.horas : this.horas}:` : ''
                    let minutosdisplay = this.configuracion.minutos == true ? `${this.minutos < 10 ? '0' + this.minutos : this.minutos}:` : ''
                    let segundos = this.configuracion.minutos == true ? `${this.segundos < 10 ? '0' + this.segundos : this.segundos}` : ''


                    let tiempo = `${horasdisplay}${minutosdisplay}${segundos}`;

                    document.querySelector(this.contenedortime).innerHTML = `<h6 style="color:#5d482c;">${tiempo}</h6>`
                   
                }

            }, 100)
        }

    }


    pausa() {
        clearInterval(this.temporizador)
    }


    stop() {
        clearInterval(this.temporizador)
        this.finContador=true
    }

    logErrors(mensaje) {
        console.error("Atencion!:", mensaje)
        this.stop()
        this.reset()
    }

    reset() {
        this.minutos = '0'
        this.segundos = '0'
        this.horas = '0'
    }

    detectarFinConteo() {
        return this.finContador       
    }

    setFinConteo(){
        this.finContador = !this.finContador
    }

    setHoras(horas){
        this.horas=horas
    }

    setMinutos(minutos){
        this.minutos=minutos
    }

    setSegundos(segundos){
        this.segundos=segundos
    }

    getHoras(horas){
        return this.horas
    }

    getMinutos(minutos){
        return this.minutos
    }

    getSegundos(segundos){
        return this.segundos
    }


}