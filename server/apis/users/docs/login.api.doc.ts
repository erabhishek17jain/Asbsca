/**
 * @openapi
 * tags:
 *   name: Authentication
 *   description: User authentication related routes
 */

/**
   * @openapi
   * /api/v1/users/login:
   *   post:
   *     tags: [Authentication]
   *     description: Authenticate a user with email and password
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - email
   *               - password
   *             properties:
   *               email:
   *                 type: string
   *                 format: email
   *                 description: Email of the user
   *               password:
   *                 type: string
   *                 description: Password of the user
   *     responses:
   *       200:
   *         description: Successful login
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 userId:
   *                   type: string
   *                   description: User details
   *                 token:
   *                   type: string
   *                   description: JWT token
   *       401:
   *         description: Unauthorized
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                   description: Error message
   *       500:
   *         description: Internal server error
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                   description: Error message
   */

/**
   * @openapi
   * /api/v1/users/self-register:
   *   post:
   *     tags: [Authentication]
   *     description: Verify a user with token and password
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - token
   *               - password
   *             properties:
   *               token:
   *                 type: string
   *                 format: token
   *                 description: Token which is sent to the user's email
   *               password:
   *                 type: string
   *                 description: Password of the user
   *     responses:
   *       200:
   *         description: Successful login
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 userId:
   *                   type: string
   *                   description: User details
   *                 token:
   *                   type: string
   *                   description: JWT token
   *       401:
   *         description: Unauthorized
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                   description: Error message
   *       500:
   *         description: Internal server error
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                   description: Error message
   */