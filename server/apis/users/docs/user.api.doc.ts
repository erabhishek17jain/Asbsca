/**
 * @openapi
 * tags:
 *   name: Users
 *   description: User management
 */

/**
   * @openapi
   * /api/v1/users/list:
   *   get:
   *     tags: [Users]
   *     description: Get all users
   *     responses:
   *       200:
   *         description: List of users
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/User'
   *       500:
   *         description: Server error
   */

/**
   * @openapi
   * /api/v1/users/create:
   *   post:
   *     tags: [Users]
   *     description: Add a new user
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/User'
   *     responses:
   *       200:
   *         description: User data
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/User'
   *       500:
   *         description: Server error
   */

/**
   * @openapi
   * /api/v1/users/update:
   *   put:
   *     tags: [Users]
   *     description: Update a user
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/User'
   *     responses:
   *       200:
   *         description: Updated user data
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/User'
   *       500:
   *         description: Server error
   */

/**
   * @openapi
   * /api/v1/users/delete/{id}:
   *   delete:
   *     tags: [Users]
   *     description: Delete a user by ID
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: User ID
   *     responses:
   *       200:
   *         description: Deleted user data
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/User'
   *       500:
   *         description: Server error
   */


/**
 * @openapi
 * /api/v1/users/self-detail:
 *  get:
 *   tags: [Users]
 *   description: Get self details
 *   security:
 *     - bearerAuth: []
 *   responses:
 *    200:
 *     description: User data
 *     content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    500:
 *     description: Server error
 */
