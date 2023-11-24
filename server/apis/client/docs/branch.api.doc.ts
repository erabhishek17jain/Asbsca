/**
 * @openapi
 * tags:
 *   name: Branches
 *   description: Branch related routes
 */

/**
   * @openapi
   * /api/v1/clients/branch/list:
   *   get:
   *     tags: [Branches]
   *     description: Fetch all branches
   *     security:
   *      - bearerAuth: []
   *     responses:
   *       200:
   *         description: List of branches
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Branch'
   *       500:
   *         description: Internal server error
   */

/**
   * @openapi
   * /api/v1/clients/branch/create:
   *   post:
   *     tags: [Branches]
   *     description: Create a new branch
   *     security:
   *      - bearerAuth: []
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Branch'
   *     responses:
   *       200:
   *         description: Branch successfully created
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Branch'
   *       500:
   *         description: Internal server error
   */

/**
 * @openapi
 * paths:
 *  /api/v1/clients/branch/get/{id}:
 *    get:
 *      summary: Get a branch
 *      tags: [Branches]
 *      security:
 *        - bearerAuth: []
 *      description: Retrieve a single branch
 *      parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *              type: string
 *           description: The ID of the branch to retrieve.
 *      responses:
 *        200:
 *          description: Branch successfully fetched
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Branch'
 *        500:
 *          description: Internal server error
 */

/**
   * @openapi
   * /api/v1/clients/branch/update:
   *   put:
   *     tags: [Branches]
   *     description: Update a branch
   *     security:
   *      - bearerAuth: []
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Branch'
   *     responses:
   *       200:
   *         description: Branch successfully updated
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Branch'
   *       500:
   *         description: Internal server error
   */

/**
   * @openapi
   * /api/v1/clients/branch/delete/{id}:
   *   delete:
   *     tags: [Branches]
   *     description: Delete a branch
   *     security:
   *      - bearerAuth: []
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Branch'
   *     responses:
   *       200:
   *         description: Branch successfully deleted
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Branch'
   *       500:
   *         description: Internal server error
   */