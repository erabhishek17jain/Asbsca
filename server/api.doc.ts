import swaggerJSDoc from "swagger-jsdoc";
import packageJSON from 'package.json'


const swaggerSpec = swaggerJSDoc({
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Documentation",
            version: packageJSON.version,
            description: ``,
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        }
    },
    apis: ["./apis/**/*.{ts,js}"],
});
console.log(__dirname)
export default swaggerSpec;


