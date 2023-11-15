/**
 * @openapi
 * tags:
 *   name: Cases
 *   description: Product related routes
 */

/**
 * @openapi
 * paths:
 *  /api/v1/cases/list:
 *   get:
 *    summary: List cases
 *    tags: [Cases]
 *    description: Retrieve a list of cases.
 *    parameters:
 *     - in: query
 *       name: limit
 *       schema:
 *        type: integer
 *       description: Limit the number of cases returned.
 *     - in: query
 *       name: skip
 *       schema:
 *        type: integer
 *       description: Skip a number of entries in the case list.
 *     - in: query
 *       name: sort
 *       schema:
 *        type: string
 *       description: The field to sort the cases by.
 *     - in: query
 *       name: order
 *       schema:
 *        type: string
 *        enum: [ascend, descend]
 *       description: The order to sort the cases.
 *     - in: query
 *       name: filterBy
 *       schema:
 *        type: string
 *        enum: [name, address, mobile, loanAmount, referenceId, localOrOGL, city, branch, type, bankName, status, receivedDate, reviewer, assignTo]
 *       description: The field to filter the cases by.
 *     - in: query
 *       name: filterValue
 *       schema:
 *        type: string
 *       description: The value to filter the cases by.
 *     - in: query
 *       name: q
 *       schema:
 *         type: string
 *       description: The value to search the cases by.
 *    responses:
 *     200:
 *      description: A list of cases.
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *         properties:
 *          cases:
 *            type: array
 *            items:
 *              $ref: '#/components/schemas/Cases'
 *          count:
 *            type: object
 *            description: The number of cases.
 *     500:
 *      description: An error occurred.
 */

/**
 * @openapi
 * paths:
 *  /api/v1/cases/create:
 *   post:
 *    summary: Create cases
 *    description: Create new cases.
 *    tags: [Cases]
 *    requestBody:
 *     required: true
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         type: object
 *         properties:
 *          name:
 *           type: string
 *          address:
 *           type: string
 *          mobile:
 *           type: integer
 *          loanAmount:
 *           type: number
 *          referenceId:
 *           type: string
 *          localOrOGL:
 *           type: string
 *           enum: [Local, OGL]
 *          city:
 *           type: string
 *          branch:
 *           type: string
 *          type:
 *           type: string
 *           enum: [PD, LIP]
 *          bankName:
 *           type: string
 *    responses:
 *     200:
 *      description: The created cases.
 *      content:
 *       application/json:
 *        schema:
 *         type: array
 *         items:
 *          $ref: '#/components/schemas/Cases'
 *     400:
 *      description: Invalid request.
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *         properties:
 *          message:
 *           type: string
 *     500:
 *      description: An error occurred.
 */