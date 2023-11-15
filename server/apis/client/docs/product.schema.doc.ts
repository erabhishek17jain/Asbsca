/**
 * @openapi
 * components:
 *  schemas:
 *   Product:
 *    type: object
 *    required:
 *     - name
 *     - client
 *     - status
 *    properties:
 *     name:
 *       type: string
 *       description: The name of the product.
 *     client:
 *       type: string
 *       description: The ObjectId of the client the product belongs to.
 *     status:
 *       $ref: '#/components/schemas/Status'
 *       description: Status of the product.
 *     createdAt:
 *       type: string
 *       format: date-time
 *       description: The date when the product was created.
 *     updatedAt:
 *       type: string
 *       format: date-time
 *       description: The date when the product was last updated.
 *   Status:
 *    type: string
 *    enum: [ACTIVE, INACTIVE]
 *    description: Status of the product.
 */