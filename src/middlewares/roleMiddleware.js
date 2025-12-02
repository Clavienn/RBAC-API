

export const requireRole = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ message: "Vous n’avez pas la permission d’accéder à cette ressource" });
    }
    next();
  };
};
