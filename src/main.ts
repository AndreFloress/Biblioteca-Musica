import App from './app'
import 'dotenv/config'

const Port = process.env.PORT
App.listen(Number(process.env.PORT) ?? 3000)