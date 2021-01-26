class Logger {


    /** 
     * @param {String} option error | warn | sucess 
     * @param {String} message Used for the logger message
     */
    constructor(option, message) {

        this.option = option;
        this.message = message;




        switch (option) {
            case 'error':
                console.error(`🔥 ${message} 🔥`)
                this.error()
                break;
            case 'warn':
                console.warn(`⚠️ ${message} ⚠️`)
                this.warn()
                break;
            case 'sucess':
                console.log(`✅ ${message} ✅`)
                this.sucess()
                break;
            default:
                break;
        }
    }


    error() {
        console.error('a error has occured');
    }

    warn() {
        console.warn('A warning has occured');
    }

    sucess() {
        console.info('Sucessfully started')
    }
}

module.exports = Logger;