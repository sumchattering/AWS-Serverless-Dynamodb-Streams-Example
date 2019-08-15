import Joi from "joi";

function Task(opts) {
    const validationError = Joi.validate(opts, {
        id: Joi.string().required(),
        name: Joi.string().required(),
        slug: Joi.string().regex(/^\S+$/),
    }).error;

    if(validationError !== null) {
        throw validationError;
    }

    Object.assign(this, opts);
}

export default Task;
