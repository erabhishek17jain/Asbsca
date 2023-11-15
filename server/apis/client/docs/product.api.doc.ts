/**
 * @openapi
 * tags:
 *   name: Products
 *   description: Product related routes
 */

/**
 * @openapi
 * /api/v1/clients/product/list:
 *  get:
 *   tags: [Products]
 *   description: Fetch all products
 *   responses:
 *    200:
 *      description: List of products
 *      content:
 *        application/json:
 *          schema:
 *            type: array
 *            items:
 *              $ref: '#/components/schemas/Product'
 *    500:
 *     description: Internal server error
 */

/**
   * @openapi
   * /api/v1/clients/product/create:
   *   post:
   *     tags: [Products]
   *     description: Create a new product
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Product'
   *     responses:
   *       200:
   *         description: Product successfully created
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Product'
   *       500:
   *         description: Internal server error
   */

/**
   * @openapi
   * /api/v1/clients/product/update:
   *   put:
   *     tags: [Products]
   *     description: Update a product
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Product'
   *     responses:
   *       200:
   *         description: Product successfully updated
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Product'
   *       500:
   *         description: Internal server error
   */

/**
   * @openapi
   * /api/v1/clients/product/delete/{id}:
   *   delete:
   *     tags: [Products]
   *     description: Delete a product
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Product'
   *     responses:
   *       200:
   *         description: Product successfully deleted
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Product'
   *       500:
   *         description: Internal server error
   */