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
 *    security:
 *      - bearerAuth: []
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
 *    security:
 *      - bearerAuth: []
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

/**
 * @openapi
 * paths:
 *  /api/v1/cases/assign:
 *   post:
 *    summary: Assign case
 *    description: Assign a case to a user.
 *    tags: [Cases]
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *     required: true
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         caseId:
 *          type: string
 *         userId:
 *          type: string
 *         userType:
 *          type: string
 *          enum: [reviewer, user]
 *    responses:
 *     200:
 *      description: The updated case.
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/Cases'
 *     500:
 *      description: An error occurred.
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *         properties:
 *          error:
 *           type: string
 */

/**
 * @openapi
 * paths:
 *  /api/v1/cases/analytics:
 *   get:
 *    summary: Get analytics
 *    description: Retrieve analytics data.
 *    tags: [Cases]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *     - in: query
 *       name: startDate
 *       schema:
 *        type: string
 *        format: date
 *       description: The start date for the analytics data.
 *     - in: query
 *       name: endDate
 *       schema:
 *        type: string
 *        format: date
 *       description: The end date for the analytics data.
 *    responses:
 *     200:
 *      description: The analytics data.
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *         properties:
 *          cases:
 *           type: integer
 *          assignedCases:
 *           type: integer
 *          reviewedCases:
 *           type: integer
 *          sentToBank:
 *           type: integer
 *          topFiveCases:
 *           type: array
 *           items:
 *            $ref: '#/components/schemas/Cases'
 *          productiveUsers:
 *           type: array
 *           items:
 *            type: string
 *     500:
 *      description: An error occurred.
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *         properties:
 *          message:
 *           type: string
 */