import joi from '@hapi/joi';
import models from '../models';

/**
 * Controller function that returns the Denuncias.
 * @returns { Denuncia[] }: the Denuncia found
 */
export const getDenuncias = async (_, res) => {
  const denuncias = await models.Denuncia.findAll();
  return res.json(denuncias);
};

/**
 * Controller function that validate the fields, organize and save the new Denuncia.
 * @param { Object } req: the request
 * @param { Object } req.body: the payload passed on the request
 * @returns { Denuncia }: the Denuncia created
 */
export const postDenuncias = async ({ body }, res) => {
  const schema = joi.object({
    descricao: joi.string().required(),
    data: joi.date(),
    categoria: joi.object({
      text: joi.string().required(),
    }),
    local: joi.object({
      lat: joi.string().required(),
      lon: joi.string().required(),
      address: joi.object({
        road: joi.string().required(),
        suburb: joi.string().required(),
        city_district: joi.string().required(),
        city: joi.string().required(),
        state: joi.string().required(),
        postcode: joi.string().required(),
        country: joi.string().required(),
      }).unknown(),
    }).unknown(),
  }).unknown();

  const { error, value } = schema.validate(body);
  if (error) {
    return res.status(500).json(error.details);
  }

  const denuncia = await models.Denuncia.create({
    data: value.data,
    descricao: value.descricao,
    categoria: value.categoria.text,
    latitude: value.local.lat,
    longitude: value.local.lon,
    endereco: value.local.address.road,
    bairro: value.local.address.neighbourhood || value.local.address.suburb,
    periferia: value.local.address.suburb,
    distrito: value.local.address.city_district,
    cidade: value.local.address.city,
    estado: value.local.address.state,
    cep: value.local.address.postcode,
    pais: value.local.address.country,
  });

  return res.json(denuncia);
};
