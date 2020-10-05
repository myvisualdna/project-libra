// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//Esta es una API: exportamos una funcion que recibe como parametro la request y la respuesta
//La respuesta queremos que sea un code 200 (respueta exitosa) + la respuesta tambien devuelve un json
export default (req, res) => {
  res.statusCode = 200;
  res.json({ userName: "Andres" });
};
