// const Antl = use('Antl');

class Forgot {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      email: 'email|required',
    };
  }

  // repositório para pegar os locales ainda está como privado
  /* get messages() {
    return Antl.list('validation');
  } */
}

module.exports = Forgot;
