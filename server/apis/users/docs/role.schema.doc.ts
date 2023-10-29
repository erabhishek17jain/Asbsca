/**
 * @openapi
 * components:
 *   schemas:
 *     Role:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the role.
 *         name:
 *           type: string
 *           description: The name of the role.
 *         permissions:
 *           type: array
 *           items:
 *             type: string
 *           description: List of permissions associated with the role.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date when the role was created.
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date when the role was last updated.
 */