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
   *     security:
   *      - bearerAuth: []
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
   *     security:
   *      - bearerAuth: []
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
   *     security:
   *      - bearerAuth: []
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
   *     security:
   *      - bearerAuth: []
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

/**
 * @openapi
 * paths:
 *  /api/v1/users/self-update:
 *   put:
 *    summary: Update self
 *    description: Update the current user's details.
 *    tags: [Users]
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *     required: true
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         about:
 *          type: string
 *         profile:
 *          type: string
 *    responses:
 *     200:
 *      description: The updated user.
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/User'
 *     500:
 *      description: An error occurred.
 */

/**
 * @openapi
 * /api/v1/users/notifications:
 *  get:
 *    summary: Get notifications for a user
 *    tags: [Notifications]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: query
 *        name: page
 *        schema:
 *          type: integer
 *        description: Page number
 *      - in: query
 *        name: limit
 *        schema:
 *          type: integer
 *        description: Number of notifications per page
 *    responses:
 *      '200':
 *        description: Notifications retrieved
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                notifications: []
 *                meta:
 *                  type: object
 *                  properties:
 *                    page:
 *                      type: integer
 *                    limit:
 *                      type: integer
 *                    total:
 *                      type: integer
 *      '500':
 *        description: Internal server error
 */