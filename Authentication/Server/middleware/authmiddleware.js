const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    // If no authorization header is provided
    return res.status(401).json({
      success: false,
      message: "Access Denied. No authorization header provided.",
    });
  }

  console.log("Authorization Header:", authHeader);

  let token;
  if (authHeader.startsWith("Bearer ")) {
    token = authHeader.substring(7, authHeader.length);
  } else {
    // If the authorization header does not start with "Bearer "
    return res.status(401).json({
      success: false,
      message: "Access Denied. Invalid token format.",
    });
  }

  console.log("Token:", token);

  if (!token) {
    // If no token is found after extracting
    return res.status(401).json({
      success: false,
      message: "Access Denied. No token provided.",
    });
  }
  //decode the token
  try {
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decodeToken);
    req.userInfo = decodeToken;
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Access Denied",
    });
  }

  // jwt.verify(token, 'your-secret-key', (err, decoded) => {
  //   if (err) return res.status(403).json({ success: false, message: 'Invalid token' });
  //   req.user = decoded;
  //   next();
  // });

  next();
};

module.exports = authMiddleware;
