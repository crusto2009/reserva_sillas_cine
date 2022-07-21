export default class Sonidos {

    audio;
    audioOvers;
    audioOversMenu;
    path_sound = '/src/assets/sounds/'
    sonido;
    isFinalizado = false
    isPlaying = false
    isPlayingFondo = false


    constructor(sonido) {
        this.sonido = sonido
        this.cargarAudio(sonido)
    }

    cargarAudio(ruta) {

        if (ruta.includes('/')) {
            this.audio = new Audio(`${this.path_sound}${ruta}${this.sonido}.mp3`);
        } else {
            this.audio = new Audio(`${this.path_sound}${this.sonido}.mp3`);
        }

        /* audio.muted = true */
    }


/**
 * !Importante tener encuenta el parametro del loop
 * @param {function} callback Funcion a la que se llama cuando el audio termina
 * @param {boolean} loop  Indica si el audio se repite infinitamente (true) o no (false)
 */
    playAudio(callback,loop) {

        this.audio.loop = loop
        this.audio.autoplay=false
        this.audio.muted = true
        this.audio.volume = 0.2;

        this.isPlaying = true
        this.audio.addEventListener('canplaythrough', () =>{
            this.audio.muted = false
            this.audio.play();
        });

        this.audio.addEventListener('ended', () => {
           
            this.isFinalizado = true
            if (callback != null) {
                callback()
                this.isPlaying = false
            }

        });
    }

    playAudioFondo() {
        this.audio.loop = true
        this.audio.muted = false
        this.audio.play();
        this.isPlayingFondo = true
    }



    silenciarAudioParlante() {
        this.audio.muted = !this.audio.muted;
        if (this.audio.muted) {
            document.querySelector('#imagen-audio').setAttribute('src', './assets/animaciones/parlanteOff.gif')
        } else {
            document.querySelector('#imagen-audio').setAttribute('src', './assets/animaciones/parlanteOn.gif')
        }
    }


    stopAudio() {
        this.audio.muted = !this.audio.muted;
        this.audio.currentTime = 0;
        /* this.audio.currentTime = 0
        this.audio.muted = true;
        alert(this.audio.muted) */
    }

    pauseAudio() {
        if (this.audio != null) {
            this.audio.pause()
        }
    }

    getIntance() {
        return this.audio
    }

    getFinalizado() {
        return this.isFinalizado
    }

    getPlayingFondo() {
        return this.isPlayingFondo
    }

    getPlaying() {
        return this.isPlaying
    }

    getCurrentTimeAudio() {
        if (this.audio != null) {
            return Math.floor(this.audio.currentTime)
        }

    }

    changeSound(new_sond) {
        this.audio.src = `${this.path_sound}${new_sond}.mp3`;
        this.audio.pause();
        this.audio.load();
        this.audio.play();

    }

    destroy() {
        this.audio = null
    }


}