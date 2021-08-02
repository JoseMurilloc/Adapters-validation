import { AppError } from "@errors/AppError";
import { AppValidateError } from "@errors/AppValidateError";

export function catchError(target: any,propertyName: any,descriptor: any) {
  const method = descriptor.value;

  descriptor.value = async function(...args: any) {
    try {
      return await method.apply(target, args);
    } catch(err) {
      console.log('🎉🎉🎉')
      console.error(err.message)
    }
  }
}

