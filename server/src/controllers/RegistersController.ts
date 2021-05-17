import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from 'yup';
import moment from 'moment';

import registersView from '../views/registers_view';
import Register from "../models/Register";

export default {
  
  async index(request: Request, response: Response) {
    const registersRepository = getRepository(Register);
  
    const registers = await registersRepository.find();
  
    return response.json(registersView.renderMany(registers));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const registersRepository = getRepository(Register);

    const register = await registersRepository.findOneOrFail(id);
  
    return response.json(registersView.render(register));
  },

  async create(request: Request, response: Response) {
    const {
      name,
      university,
      course,
      department,
      score,
      date,
    } = request.body;

    const registersRepository = getRepository(Register);

    const data = {
      name,
      university,
      course,
      department,
      score,
      date,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      university: Yup.string().required(),
      course: Yup.string().required(),
      department: Yup.string().required(),
      score: Yup.number().required(),
      date: Yup.string().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const register = registersRepository.create(data);
  
    await registersRepository.save(register);
  
    return response.status(201)
      .json(registersView.render(register));
  },

  async update(request: Request, response: Response){

    const { id } = request.params; 
    const {
      name,
      university,
      course,
      department,
      score,
      date,
    } = request.body;

    const registersRepository = getRepository(Register);

      await registersRepository.update({id: parseInt(id)}, { name, university, course, department, score, date })
      
      return response.status(200).send({ name, university, course, department, score, date })
  },

  async delete(request: Request, response: Response){
 
    const { id } = request.params; 

    const registersRepository = getRepository(Register);

    await registersRepository.delete(id)
  
    return response.status(200).json();
  },

  async dados(request: Request, response: Response){
    return response.json([
      {Hora: moment().format('LT')}
    ])
  }
}