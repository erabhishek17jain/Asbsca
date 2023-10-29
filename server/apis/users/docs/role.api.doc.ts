/**
 * @openapi
 * tags:
 *   name: Roles
 *   description: Role related routes
 */

/**
   * @openapi
   * /api/v1/users/roles/list:
   *   get:
   *     tags: [Roles]
   *     description: Fetch all roles
   *     responses:
   *       200:
   *         description: List of roles
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Role'
   *       500:
   *         description: Internal server error
   */

/**
   * @openapi
   * /api/v1/users/roles/create:
   *   post:
   *     tags: [Roles]
   *     description: Create a new role
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Role'
   *     responses:
   *       200:
   *         description: Role successfully created
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Role'
   *       500:
   *         description: Internal server error
   */

/**
   * @openapi
   * /api/v1/users/roles/update:
   *   post:
   *     tags: [Roles]
   *     description: Update a role
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Role'
   *     responses:
   *       200:
   *         description: Role successfully updated
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Role'
   *       500:
   *         description: Internal server error
   */

/**
   * @openapi
   * /api/v1/users/roles/delete/{id}:
   *   post:
   *     tags: [Roles]
   *     description: Delete a role by ID
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: The role ID
   *     responses:
   *       200:
   *         description: Role successfully deleted
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Role'
   *       500:
   *         description: Internal server error
   */