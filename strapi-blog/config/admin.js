module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'efc4e3b60d8978f422d624b62d8b4d17'),
  },
});
