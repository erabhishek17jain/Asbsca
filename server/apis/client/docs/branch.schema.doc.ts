/**
 * @openapi
 * components:
 *   schemas:
 *     Branch:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the branch.
 *         name:
 *           type: string
 *           description: The name of the branch.
 *         address:
 *           type: string
 *           description: The address of the branch.
 *         status:
 *          type: string
 *          enum: [active, inactive]
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date when the branch was created.
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date when the branch was last updated.
 */