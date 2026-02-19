import ApiError from "./api-error";

export default class CustomerNotFound extends ApiError {
  constructor() {
    super(404, "Customer not found");
  }
}
