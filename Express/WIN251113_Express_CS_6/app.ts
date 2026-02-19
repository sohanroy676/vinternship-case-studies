// import express, { Request, Response, NextFunction } from "express";
import express, { NextFunction, Request, Response } from "express";

declare global {
  namespace Express {
    interface Request {
      dischargeLog?: Array<{ step: string; time: string }>;
    }
  }
}

const app = express();

app.use(express.json());

// 1. Add a middleware that checks if the patients insurance approval is present (req.body.insuranceApproved).
function insuranceCheck(req: Request, res: Response, next: NextFunction) {
  req.dischargeLog = req.dischargeLog || [];
  // 2. If not, return a 403 Forbidden with a clear error message.
  if (!req.body.insuranceApproved) {
    return res.status(403).json({ error: "Insurance Approval required before discharge." });
  }
  req.dischargeLog.push({ step: "insuranceApporved", time: new Date().toISOString() });
  next();
}

// Middleware to log the discharge request
function logDischargeRequest(req: Request, res: Response, next: NextFunction) {
  req.dischargeLog = req.dischargeLog || [];
  req.dischargeLog.push({ step: "requestReceived", time: new Date().toISOString() });
  next();
}
app.use(logDischargeRequest);

// Middleware to ensure docter sign-off is present
function doctorSignoffCheck(req: Request, res: Response, next: NextFunction) {
  req.dischargeLog = req.dischargeLog || [];
  if (!req.body.doctorSigned) {
    return res.status(400).json({ error: "Doctor sign-off required before discharge." });
  }
  req.dischargeLog.push({ step: "doctorSignoff", time: new Date().toISOString() });
  next();
}

// Middleware to ensure pharmacy review is present
function pharmacyReview(req: Request, res: Response, next: NextFunction) {
  req.dischargeLog = req.dischargeLog || [];
  if (!req.body.pharmacyChecked) {
    return res.status(400).json({ error: "Pharmacy review required before discharge." });
  }
  req.dischargeLog.push({ step: "pharmacyReview", time: new Date().toISOString() });
  next();
}

// Middleware to ensure follow-up appointment is present
function followupCheck(req: Request, res: Response, next: NextFunction) {
  req.dischargeLog = req.dischargeLog || [];
  if (!req.body.followupScheduled) {
    return res.status(400).json({ error: "Follow-up appointment must be scheduled." });
  }
  req.dischargeLog.push({ step: "followupCheck", time: new Date().toISOString() });
  next();
}

// Middleware to handle errors
function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  console.error("Discharge log:", req.dischargeLog);
  res.status(500).json({ error: err.message || "Internal server error" });
}
app.use(errorHandler);

app.use(logDischargeRequest);

app.post(
  "/discharge",
  insuranceCheck,
  doctorSignoffCheck,
  pharmacyReview,
  followupCheck,
  (req, res) => {
    req.dischargeLog = req.dischargeLog || [];
    req.dischargeLog.push({ step: "dischargeComplete", time: new Date().toISOString() });
    res.json({
      status: "Discharge complete",
      patient: req.body.patientName,
      log: req.dischargeLog,
    });
  }
);

app.use(errorHandler);

app.listen(3000, () => console.log("Hospital system running on http://localhost:3000"));

// 3. Test by sending a discharge request without insurance approval.
// Request:
// POST http://localhost:3000/discharge
// body:
// {
//   "doctorSigned": true,
//   "pharmacyChecked": true,
//   "followupScheduled": true
// }
//
// OUTPUT:
// {
//   "error": "Insurance Approval required before discharge."
// }
