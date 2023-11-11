import { celebrator, Segments, Joi } from "celebrate";

class RoleValidation {
  constructor() {
    this.celebrate = celebrator({ reqContext: true }, { convert: true });
  }

  getById() {
    return this.celebrate({
      [Segments.PARAMS]: Joi.object()
        .keys({
          code: Joi.string().required(),
        })
        .required(),
    });
  }
}

export default new RoleValidation();
