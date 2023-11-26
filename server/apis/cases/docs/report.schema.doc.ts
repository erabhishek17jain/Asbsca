/**
 * @openapi
 * components:
 *   schemas:
 *     Report:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           format: uuid
 *           readOnly: true
 *         caseId:
 *           type: string
 *           format: uuid
 *           description: ID of the case
 *         data:
 *           type: object
 *           description: Data of the report
 *         createdAt:
 *           type: string
 *           format: date-time
 *           readOnly: true
 *           description: Date of creation
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           readOnly: true
 *           description: Date of last update
 *       required:
 *         - caseId
 *         - data
 */