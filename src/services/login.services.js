// Importação do model para acessar os usuarios
import Usuario from '../models/usuarios.model';
// Importação das bibliotecas de segurança
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

class LoginServices {
  // Função de login, assincrona por chama metodo da model do mongoose
  // Recebe email e senha para tentar fazer o login
  async realizarLogin({ email, senha }) {
    // Buscar o usuário por email
    const usuario = await Usuario.findOne({ email: email });

    // Verificação do email e retorno de resposta caso ele não seja encontrado
    if (!usuario) {
      return { status: 400, mensagem: 'Email incorreto' };
    }

    // Comparação da senha criptografada com a senha normal
    const senhaValida = await bcryptjs.compare(senha, usuario.senha);

    // Verificação da senha e retorno da resposta caso ela não seja válida
    if (senhaValida === false) {
      return { status: 400, mensagem: 'Senha incorreta' };
    }

    // Caso tudo dê certo, gerar um token para retornar para o usuário
    // O JWT sign recebe 3 parâmetros:
    // - O primeiro são os dados do usuário que está gerando o token
    // - O segundo é a chave de identificação do token (deve ser uma chave secreta)
    // - O Terceiro são as configurações do token, (aqui estamos configurando apenas o tempo de expiração)
    const token = jwt.sign({ email: email }, 'chave_secreta', {
      expiresIn: '24h',
    });

    // Retornamos uma resposta positiva e o token para o controller
    return { status: 200, token: token };
  }
}

export default LoginServices;
