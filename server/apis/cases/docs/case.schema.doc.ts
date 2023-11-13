/**
 * @openapi
 * components:
 *  schemas:
 *   CaseStatus:
 *    type: string
 *    enum: [Pending, Assigned, Rejected, Approved, Completed]
 *    description: The status of the case.
 *   Cases:
 *    type: object
 *    required:
 *     - name
 *     - address
 *     - mobile
 *     - loanAmount
 *     - referenceId
 *     - localOrOGL
 *     - city
 *     - branch
 *     - type
 *     - bankName
 *     - status
 *     - receivedDate
 *     - reviewer
 *     - assignTo
 *    properties:
 *     name:
 *       type: string
 *       description: The name of the case.
 *     address:
 *       type: string
 *       description: The address related to the case.
 *     mobile:
 *       type: integer
 *       description: The mobile number related to the case.
 *     loanAmount:
 *       type: number
 *       description: The loan amount of the case.
 *     referenceId:
 *       type: string
 *       description: The reference ID of the case.
 *     localOrOGL:
 *       type: string
 *       enum: [Local, OGL]
 *       description: The type of the case, either Local or OGL.
 *     city:
 *       type: string
 *       description: The city related to the case.
 *     branch:
 *       type: string
 *       description: The branch related to the case.
 *     type:
 *       type: string
 *       enum: [PD, LIP]
 *       description: The type of the case, either PD or LIP.
 *     bankName:
 *       type: string
 *       description: The name of the bank related to the case.
 *     status:
 *       $ref: '#/components/schemas/CaseStatus'
 *       description: The status of the case.
 *     receivedDate:
 *       type: string
 *       format: date-time
 *       description: The date when the case was received.
 *     reviewer:
 *       type: string
 *       description: The ObjectId of the reviewer assigned to the case.
 *     assignTo:
 *       type: string
 *       description: The ObjectId of the user the case is assigned to.
 *     createdAt:
 *       type: string
 *       format: date-time
 *       description: The date when the case was created.
 *     updatedAt:
 *       type: string
 *       format: date-time
 *       description: The date when the case was last updated.
 */