import ApiError from "./api-error";

export default class InsufficientPointsError extends ApiError {
  constructor() {
    super(400, "Insufficient points");
  }
}
