import * as yup from 'yup';
import { ICreateSessionDTO } from "@useCases/User/CreateSession/ICreateSessionDTO";
import { ICreateUserDTO } from "@useCases/User/CreateUser/ICreateUserDTO";
import { IValidateUserProtocol } from "../protocol/IValidateUserProtocol";
import { AppValidateError } from "@errors/AppValidateError";


export class YupAdapter implements IValidateUserProtocol {

  async createUserValidate(data: ICreateUserDTO): Promise<void> {
    const schema = yup.object().shape({
      name: yup.string().required().min(6),
      email: yup.string().required().email(),
      password: yup.string().required().min(6),
    });

  try {
    await schema.validate(data, {abortEarly: false})
  } catch(err) {
    const errors = err.inner.map(er => er.path)
    const pathErrors = {}

    errors.forEach(function(v) {
      pathErrors[v] = []
    })

    err.inner.map((er, index) => {
      pathErrors[er.path].push(err.errors[index])
    })

    throw new AppValidateError(pathErrors)
  }
}

  async createSessionValidate(data: ICreateSessionDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }

}
