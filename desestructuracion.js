/*const empresa = {
    nombre: 'Pepsi',
    direccion: 'Calle x',
    rl: 'Venta de refrescos'
}

//const nombre = empresa.nombre;
//const direccion = empresa.direccion;
//const rol  = empresa.rol;

/**
 * ¿Que hacer para hacerlo más fácil
 */
/*console.log(empresa.nombre);
const { nombre, direccion, rol } = empresa; 
console.log(empresa);

const imprimeEmpresa = ({ nombre, ol }) => {
    console.log({ nombre, rol });
}

imprimeEmpresa(empresa);

const carros = ['mazda', 'bmw', 'porche'];

const c1 = carros[0];
console.log(c1);

const [e1,e2,e3] = carros;
console.log(e1);
*/

const perfil = {
  nombre: "Oswaldo",
  apellido: "Heredia",
  correo: "oswalhv@hotmail.com",
  salario: 7,
};

const imprimePerfil = ({ nombre, salario }) => {
  console.log({ nombre, salario });
};

imprimePerfil(perfil);
