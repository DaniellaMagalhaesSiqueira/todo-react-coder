const Todo = require('./todo')
Todo.methods(['get', 'post', 'put', 'delete'])

//quando mando uma atualização ao invés de receber o registro antigo (por padrão vem o antigo), vou receber o atualizado
//o node restful não valida atualizações por padrão, mas aqui peço para validar
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo
