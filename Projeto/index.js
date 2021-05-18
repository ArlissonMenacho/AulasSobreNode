
const customExpess = require('./config/customExpress')

const app = customExpess();

app.listen(3000,()=>console.log('servidor rodando porta 3000'))



