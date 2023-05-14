export const authMiddleware = (req: any, res: any, next: any) => {
  const { type } = req.query;
  if (!type) return res.status(500).send("The activity type has not been provided.");
  next();
}