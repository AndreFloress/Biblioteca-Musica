import express from 'express'
class App{
 
    public express : express.Application

    constructor(){
        this.express = express();
    }

    listen(port : number){
        this.express.listen(port, () => console.log(`Server running in port ${port}`))
    }
}

export default new App()