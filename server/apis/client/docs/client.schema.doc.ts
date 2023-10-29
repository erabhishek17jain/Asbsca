/**
 * @openapi
 * components:
 *   schemas:
 *     Client:
 *       type: object
 *       required:
 *         - name
 *         - branch
 *         - status
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the client.
 *         branch:
 *           type: string
 *           description: The ObjectId of the branch the client belongs to.
 *         logo:
 *           type: string
 *           description: The logo of the client.
 *         signature:
 *           type: string
 *           description: The signature of the client.
 *         status:
 *           $ref: '#/components/schemas/Status'
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date when the client was created.
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date when the client was last updated.
 *     Status:
 *       type: string
 *       enum: [ACTIVE, INACTIVE]
 *       description: Status of the client.
 */