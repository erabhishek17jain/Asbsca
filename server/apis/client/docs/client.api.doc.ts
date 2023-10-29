/**
 * @openapi
 * tags:
 *   name: Clients
 *   description: Client related routes
 */

/**
   * @openapi
   * /api/v1/clients/list:
   *   get:
   *     tags: [Clients]
   *     description: Fetch all clients
   *     responses:
   *       200:
   *         description: List of clients
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Client'
   *       500:
   *         description: Internal server error
   */

/**
   * @openapi
   * /api/v1/clients/create:
   *   post:
   *     tags: [Clients]
   *     description: Create a new client
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Client'
   *     responses:
   *       201:
   *         description: Client successfully created
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Client'
   *       500:
   *         description: Internal server error
   */

/**
   * @openapi
   * /api/v1/clients/update:
   *   put:
   *     tags: [Clients]
   *     description: Update a client
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Client'
   *     responses:
   *       200:
   *         description: Client successfully updated
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Client'
   *       500:
   *         description: Internal server error
   */

/**
   * @openapi
   * /api/v1/clients/delete/{id}:
   *   delete:
   *     tags: [Clients]
   *     description: Delete a client
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: The id of the client to delete.
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Client successfully deleted
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Client'
   *       500:
   *         description: Internal server error
   */

