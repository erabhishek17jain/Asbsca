/**
 * @openapi
 * tags:
 *   - name: Reports
 *     description: Report related routes
 */

/**
 * @openapi
 * paths:
 *   /api/v1/cases/reports:
 *     post:
 *       summary: Create a new report
 *       tags: [Reports]
 *       security:
 *         - bearerAuth: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Report'
 *       responses:
 *         '200':
 *           description: Report created
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Report'
 *         '400':
 *           description: Report already exists
 *         '500':
 *           description: Internal server error
 * 
 *   /api/v1/cases/reports/{caseId}:
 *     get:
 *       summary: Get a report by caseId
 *       tags: [Reports]
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - in: path
 *           name: caseId
 *           schema:
 *             type: string
 *           required: true
 *           description: ID of the case
 *       responses:
 *         '200':
 *           description: Report retrieved
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Report'
 *         '404':
 *           description: Report not found
 *         '500':
 *           description: Internal server error
 *     put:
 *       summary: Update a report by caseId
 *       tags: [Reports]
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - in: path
 *           name: caseId
 *           schema:
 *             type: string
 *           required: true
 *           description: ID of the case
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Report'
 *       responses:
 *         '200':
 *           description: Report updated
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Report'
 *         '404':
 *           description: Report not found
 *         '500':
 *           description: Internal server error
 */